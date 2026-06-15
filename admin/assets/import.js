/* ============================================================================
 * KAPP Admin — Excel(xlsx) 임포트 + 세트 자동구성 + 정합성 검증
 * ----------------------------------------------------------------------------
 * 파스 함수는 "rows = 시트의 2차원 배열(array of arrays)"을 입력으로 받는다.
 *  - 브라우저: XLSX.utils.sheet_to_json(ws, { header:1, raw:false }) 결과를 그대로 전달
 *  - Node 검증: python으로 덤프한 동일 구조의 JSON을 전달 (parse 로직 단위 검증용)
 * localStorage 스키마(kapp_*_v1)는 기존 admin 화면과 호환되도록 확장만 한다.
 * ========================================================================== */
(function (global) {
  "use strict";

  // ── 공통 유틸 ──────────────────────────────────────────────────────────────
  function norm(v) {
    if (v === null || v === undefined) return "";
    return String(v).replace(/ /g, " ").trim();
  }
  function cell(row, i) {
    return norm(row && row[i]);
  }
  function isBlankRow(row) {
    return !row || row.every((c) => norm(c) === "");
  }
  function toInt(v) {
    const n = parseInt(norm(v).replace(/[^\d-]/g, ""), 10);
    return Number.isFinite(n) ? n : null;
  }
  function toNum(v) {
    const n = parseFloat(norm(v).replace(/[^\d.\-]/g, ""));
    return Number.isFinite(n) ? n : null;
  }
  const OPT_MARKS = ["①", "②", "③", "④", "⑤"];
  function optMarkIndex(s) {
    const m = norm(s);
    const i = OPT_MARKS.findIndex((x) => m.startsWith(x));
    return i; // -1 if not an option line
  }
  const KNOWN_LEVELS = ["주니어", "주임", "대리", "과장", "차장", "팀장", "부장", "임원"];
  // 난이도 계수 코드 → 직급 (문항 행에서 결정적으로 직급 산출)
  const GRADE_CODE_LEVEL = {
    IC_JUNIOR: "주니어", IC_MID_A: "주임", IC_MID_B: "대리", IC_SENIOR: "과장",
    LEAD: "차장", MANAGER_A: "팀장", MANAGER_B: "부장", EXEC: "임원", EXECUTIVE: "임원",
  };

  // ── 결과 유형 마스터 기본값 ─────────────────────────────────────────────────
  // 엑셀의 A_결과/P_결과는 산문(설계안)이라 구조화 유형 데이터가 없으므로,
  // app 소스(mock_insight.ts)의 구조를 기본값으로 사용한다. (사용자 승인)
  const A_TYPE_NAMES = ["개척형", "완수형", "관계형", "제안형", "관리형", "전략형"];
  const P_AXIS_TYPE = { INS: "인사이트", ANL: "분석", REL: "관계", PIO: "개척" };
  const APP_A_STRATEGY = {
    typeName: "전략형",
    definition: "데이터로 판단하고, 관계로 실행하는 B2B 영업인",
    styleTags: ["즉응형", "분석형"],
    domainSub: "큰 그림이 보여야 움직이는 사람이에요 — 복잡한 딜일수록 진가가 드러나는 유형이에요",
    strengthCards: [
      { title: "장기 전략 딜 설계", desc: "6개월 이상 걸리는 엔터프라이즈 딜의 구조를 짜는 과정에서 강점이 드러나요" },
      { title: "데이터 기반 제안서", desc: "고객사 데이터를 분석해 맞춤 제안서를 작성하는 순간에 빛을 발해요" },
      { title: "영업 전략·성과 기획", desc: "팀의 분기 영업 전략을 세우고 실행 계획으로 연결하는 역할이 잘 맞아요" },
    ],
    jobTags: ["전략기획", "B2B 영업", "컨설팅", "사업개발", "PM"],
    similarJobs: ["전략 컨설턴트", "B2B 솔루션 영업", "사업개발 매니저"],
    unexpectedJobEmployee: { name: "UX 리서처", desc: "데이터 기반 의사결정과 사용자 인터뷰 구조화 능력이 유사해요" },
    unexpectedJobJobseeker: { name: "UX 리서처 / 프로덕트 매니저", desc: "전략형 적성은 구조적 사고와 데이터 해석에 강해요. 영업 외에도 리서처·PM 커리어 경로가 잘 맞아요" },
    growthDirectionEmployee: { title: "관계 구축력", body: "전략을 세우는 힘은 충분해요. 이제 실행 단계에서 이해관계자와 라포를 쌓는 속도를 높이면 더 큰 딜을 가져올 수 있어요.", weekAction: "이번 주 미팅 전에, 상대방이 가장 최근 해결한 문제 1가지를 먼저 찾아보세요." },
    growthDirectionJobseeker: { title: "실전 경험 축적", body: "분석력과 전략 수립 능력은 뛰어나요. 인턴·프로젝트에서 실제 고객 접점 경험을 쌓으면 서류와 면접 모두 강해져요.", weekAction: "이번 주 관심 직무의 JD 3개를 읽고, 자주 나오는 핵심 단어를 3개 정리해보세요." },
  };
  const APP_P_INSIGHT = {
    typeName: "인사이트", subTypeName: "분석",
    actionDesc: "데이터를 먼저 읽고, 구조화된 판단으로 움직이는 사람이에요",
    keywords: ["데이터 기반", "구조적 사고", "느린 결정·빠른 실행"],
    compositionDesc: "주유형 인사이트형(70%)에 분석형(30%)이 보조로 작동해요. 큰 그림을 먼저 그리고 숫자로 검증하는 조합이라, 전략적 판단과 정밀한 실행 사이를 오가는 힘이 있어요.",
    mainRatio: 0.7,
    dimensions: [{ label: "인사이트", value: 78 }, { label: "분석", value: 64 }, { label: "관계개선", value: 42 }],
    situations: [
      { category: "REV", name: "안정 상황", choice: "세일즈 사이클 지연 원인을 분석하고 제안-계약 단계의 병목을 해소한다.", meaning: "안정적 상황에서도 현 상태에 안주하지 않고 구조적 개선점을 찾는 패턴을 보였어요." },
      { category: "PRO", name: "조건 변화", choice: "감소 원인을 먼저 진단한 뒤 클로징과 발굴을 병행한다.", meaning: "변화에 즉각 반응하기보다 원인을 먼저 파악하고 균형 잡힌 전환을 선택했어요." },
      { category: "ACT", name: "동료 충돌", choice: "CS팀과 먼저 협의하여 티켓 이슈를 파악하고 A사에 해결 로드맵을 제시한다.", meaning: "단기 처방보다 근본 원인 해결을 택하며, 데이터 기반 설득으로 충돌 상황을 풀어요." },
      { category: "CUS", name: "시간 압박", choice: "CS팀과 긴급 미팅 후 티켓 해결 타임라인을 미팅 자료에 포함한다.", meaning: "압박 상황에서도 할인 같은 즉각 해소보다 문제 해결 접근법을 유지하는 편이에요." },
    ],
    similarPeople: [
      { name: "제프 베이조스", role: "아마존 창업자", category: "실존 인물", oneLiner: "고객 집착과 장기주의로 아마존을 세운 경영자예요.", resemblance: "고객 데이터를 근거로 장기 전략을 설계하는 방식이 닮아 있어요.\n단기 손익보다 구조적인 승리를 선택하는 판단이 비슷해요.\n숫자로 충분히 검증한 뒤 과감하게 실행하는 패턴이 겹쳐요." },
      { name: "오상식 과장", role: "드라마 「미생」 영업3팀", category: "드라마 캐릭터", oneLiner: "원칙과 분석으로 팀을 끌고 가는 베테랑 영업맨이에요.", resemblance: "불리한 상황에서도 감정보다 구조를 먼저 분석해요.\n데이터와 논리로 상대를 설득하는 방식이 유사해요.\n조용하지만 끝까지 본질을 파고드는 태도가 닮았어요." },
      { name: "셜록 홈즈", role: "소설·드라마 「셜록」 명탐정", category: "글로벌 캐릭터", oneLiner: "관찰과 추론으로 사건의 본질을 꿰뚫는 명탐정이에요.", resemblance: "흩어진 단서에서 패턴을 빠르게 읽어내는 감각이 닮아 있어요.\n직관을 그냥 믿지 않고 근거로 되짚어 검증하는 점이 비슷해요.\n남들이 놓치는 구조적 연결을 먼저 발견하는 방식이 겹쳐요." },
    ],
    discovery: "이번 진단에서 공통적으로 나타난 건 '조건이 바뀌어도 접근 방식을 쉽게 바꾸지 않는다'는 점이에요. 이는 일관성의 강점이기도 하지만, 빠른 전환이 필요할 때 유의할 포인트예요.",
  };
  function buildATypes() {
    return A_TYPE_NAMES.map((name) => {
      if (name === "전략형") return { ...APP_A_STRATEGY };
      return {
        typeName: name, definition: "", styleTags: [], domainSub: "",
        strengthCards: [], jobTags: [], similarJobs: [],
        unexpectedJobEmployee: { name: "", desc: "" }, unexpectedJobJobseeker: { name: "", desc: "" },
        growthDirectionEmployee: { title: "", body: "", weekAction: "" }, growthDirectionJobseeker: { title: "", body: "", weekAction: "" },
        _needsContent: true,
      };
    });
  }
  function buildPTypes() {
    return ["INS", "ANL", "REL", "PIO"].map((ax) => {
      const name = P_AXIS_TYPE[ax];
      if (ax === "INS") return { axis: ax, ...APP_P_INSIGHT };
      return { axis: ax, typeName: name, subTypeName: "", actionDesc: "", keywords: [], compositionDesc: "", mainRatio: 0, dimensions: [], situations: [], similarPeople: [], discovery: "", _needsContent: true };
    });
  }

  // ── 시트 이름 인식 ─────────────────────────────────────────────────────────
  // "K_문항", "K문항", "K 문항", "A_결과" 등 다양한 표기를 정규화
  function classifySheet(name) {
    const n = norm(name).replace(/[\s_]/g, "");
    const area = /^([KAP])/i.exec(n);
    const a = area ? area[1].toUpperCase() : null;
    let kind = null;
    if (/문항/.test(n)) kind = "question";
    else if (/결과/.test(n)) kind = "result";
    if (!a || !kind) return null;
    return { area: a, kind };
  }

  // ── K 결과(토픽 마스터) 파싱 ────────────────────────────────────────────────
  // 헤더: JF | 직무명 | set_id | topic_display_name | priority | 강점/보완기준
  //       | topic_summary | level_context | 0:4발견문구 | 4:0대상직급 | NCS근거
  //       [| 학습영역1 | 학습영역2 | 학습영역3]  (옵션)
  function parseKTopics(rows) {
    const topics = [];
    let headerIdx = -1;
    for (let r = 0; r < rows.length; r++) {
      if (cell(rows[r], 0) === "JF 코드" || cell(rows[r], 0) === "JF코드" || cell(rows[r], 0) === "JF") {
        headerIdx = r;
        break;
      }
    }
    if (headerIdx < 0) return topics;
    for (let r = headerIdx + 1; r < rows.length; r++) {
      const row = rows[r];
      const jf = cell(row, 0);
      // 케이스 설계 블록 시작/설명 행은 건너뜀
      if (/케이스/.test(jf) || /결과 페이지/.test(jf)) break;
      if (!/^JF[_A-Z0-9]+/i.test(jf)) continue; // 실제 데이터 행만 (JF_SAL_01 …)
      const setId = cell(row, 2);
      if (!setId) continue;
      topics.push({
        jobFamilyId: jf,
        jobName: cell(row, 1),
        setId: setId,
        topicDisplayName: cell(row, 3),
        priority: toInt(cell(row, 4)),
        strengthRule: cell(row, 5),
        topicSummary: cell(row, 6),
        levelContext: cell(row, 7),
        case04Title: cell(row, 8),
        case40Grade: cell(row, 9),
        ncsSource: cell(row, 10),
        learningAreas: [cell(row, 11), cell(row, 12), cell(row, 13)].filter(Boolean),
      });
    }
    return topics;
  }

  // ── K 결과(케이스 분기 설계) 파싱 ───────────────────────────────────────────
  // "케이스 | 정답수 | 헤드라인 | BLOCK1 | BLOCK2 | BLOCK2이하 액션" (병합 다중행)
  function parseKCases(rows) {
    const cases = [];
    let headerIdx = -1;
    for (let r = 0; r < rows.length; r++) {
      if (cell(rows[r], 0) === "케이스" && /정답/.test(cell(rows[r], 1))) {
        headerIdx = r;
        break;
      }
    }
    if (headerIdx < 0) return cases;
    let cur = null;
    for (let r = headerIdx + 1; r < rows.length; r++) {
      const row = rows[r];
      const c0 = cell(row, 0);
      // 새 케이스 행: "A · 3:1" 형태
      const m = /^([A-E])\s*·\s*([\d:]+)/.exec(c0);
      if (m) {
        cur = {
          code: m[1],
          ratio: m[2],
          correct: toInt(cell(row, 1)),
          headline: cell(row, 2),
          block1: [cell(row, 3)].filter(Boolean),
          block2: [cell(row, 4)].filter(Boolean),
          actions: [cell(row, 5)].filter(Boolean),
        };
        cases.push(cur);
      } else if (cur && !isBlankRow(row)) {
        // 병합 후속 행: 비어있지 않은 칸을 해당 블록에 누적
        if (cell(row, 2)) cur.headline = (cur.headline + " " + cell(row, 2)).trim();
        if (cell(row, 3)) cur.block1.push(cell(row, 3));
        if (cell(row, 4)) cur.block2.push(cell(row, 4));
        if (cell(row, 5)) cur.actions.push(cell(row, 5));
      }
      // "4:0 케이스" 상세 표가 시작되면 중단
      if (/^4:0 케이스/.test(c0)) break;
    }
    return cases;
  }

  // ── K 문항 파싱 (세트 디자인 레이아웃: 한 시트 = 한 세트) ────────────────────
  // 문항 시작: c1 = "[주니어 문항 1] ..."  /  선지: c1 = "① ..."  /  해설: c1 = "▶ 핵심해설:"
  function parseKQuestions(rows, fallbackSetCode) {
    // 시트 상단의 "S29 | ..." 에서 세트코드 추출
    let setCode = fallbackSetCode || null;
    for (let r = 0; r < Math.min(rows.length, 3); r++) {
      const m = /\bS(\d{1,2})\b/.exec(cell(rows[r], 0));
      if (m) { setCode = "S" + m[1].padStart(2, "0"); break; }
    }
    const questions = [];
    let cur = null;
    let curLevel = null;
    for (let r = 0; r < rows.length; r++) {
      const row = rows[r];
      const c0 = cell(row, 0), c1 = cell(row, 1), c3 = cell(row, 3);
      if (KNOWN_LEVELS.includes(c0)) curLevel = c0;
      const stemM = /^\[\s*([^\]]*문항\s*\d+)\s*\]\s*(.*)$/.exec(c1);
      if (stemM) {
        const gradeCode = /^[A-Z_]+$/.test(c3) ? c3 : null;
        cur = {
          setCode: setCode,
          tag: stemM[1].trim(),
          level: GRADE_CODE_LEVEL[gradeCode] || curLevel,
          gradeCode: gradeCode,
          abilityUnit: cell(row, 2),
          stem: stemM[2].trim(),
          options: [],
          answerIndex: null,
          explanation: "",
          weight: null,
        };
        questions.push(cur);
        continue;
      }
      if (!cur) continue;
      const oi = optMarkIndex(c1);
      if (oi >= 0) {
        cur.options.push({ label: OPT_MARKS[oi], text: c1.slice(OPT_MARKS[oi].length).trim() });
        continue;
      }
      if (/^▶\s*핵심해설/.test(c1)) {
        cur.explanation = c1.replace(/^▶\s*핵심해설\s*[:：]?\s*/, "").trim();
        // 해설 본문에서 "정답 ①" 패턴이 있으면 정답 추출
        const am = /정답\s*([①-⑤])/.exec(c1);
        if (am) cur.answerIndex = OPT_MARKS.indexOf(am[1]);
        continue;
      }
      if (/계수/.test(c3)) cur.weight = toNum(c3);
    }
    return { setCode, questions };
  }

  // ── A 문항 파싱 (문항 블록 + 해설 블록) ─────────────────────────────────────
  function parseAQuestions(rows) {
    const questions = [];
    // 1) 문항 블록: 헤더(직급|클러스터|기업규모|번호|트리거|시나리오|선지|내용)
    let qHeader = -1;
    for (let r = 0; r < rows.length; r++) {
      if (cell(rows[r], 0) === "직급" && cell(rows[r], 3) === "번호") { qHeader = r; break; }
    }
    let cur = null;
    if (qHeader >= 0) {
      for (let r = qHeader + 1; r < rows.length; r++) {
        const row = rows[r];
        const c0 = cell(row, 0), no = toInt(cell(row, 3)), scenario = cell(row, 5);
        // 해설 블록 시작이면 중단
        if (/해설/.test(c0)) break;
        if (no && scenario) {
          cur = {
            no: no,
            grade: c0,
            cluster: cell(row, 1),
            companySize: cell(row, 2),
            trigger: cell(row, 4),
            stem: scenario,
            options: [],
            explanationBlocks: {},
          };
          // 첫 선지 (같은 행 c6/c7)
          const oi = optMarkIndex(cell(row, 6));
          if (oi >= 0) cur.options.push({ label: OPT_MARKS[oi], text: cell(row, 7) });
          questions.push(cur);
        } else if (cur) {
          const oi = optMarkIndex(cell(row, 6));
          if (oi >= 0) cur.options.push({ label: OPT_MARKS[oi], text: cell(row, 7) });
        }
      }
    }
    // 2) 해설 블록: 헤더(직급|클러스터|번호|해설 단계|내용)
    let eHeader = -1;
    for (let r = 0; r < rows.length; r++) {
      if (cell(rows[r], 0) === "직급" && cell(rows[r], 3) === "해설 단계") { eHeader = r; break; }
    }
    const stageKey = {
      "상황 해설": "situationAnalysis",
      "맥락 조건": "contextConditions",
      "상황 변수": "situationVariables",
      "직무 지식": "jobKnowledge",
      "리플렉션 질문": "reflectionQuestion",
      "현업 패턴 사례": "fieldPatternCase",
    };
    if (eHeader >= 0) {
      let curNo = null;
      for (let r = eHeader + 1; r < rows.length; r++) {
        const row = rows[r];
        const n = toInt(cell(row, 2));
        if (n) curNo = n;
        const stage = cell(row, 3);
        const key = stageKey[stage];
        const content = cell(row, 4);
        if (curNo && key && content) {
          const q = questions.find((x) => x.no === curNo);
          if (q) q.explanationBlocks[key] = content;
        }
      }
    }
    return questions;
  }

  // ── P 문항 파싱 (메타 + Q 테이블) ──────────────────────────────────────────
  function parsePSet(rows) {
    const meta = {};
    for (let r = 0; r < rows.length; r++) {
      const k = cell(rows[r], 0), v = cell(rows[r], 1);
      if (!k || !v) continue;
      if (k === "set_id") meta.setId = v;
      else if (k === "클러스터") meta.cluster = v;
      else if (k === "기업규모") meta.companySize = v;
      else if (k === "직급") meta.grade = v;
      else if (/시나리오 소재/.test(k)) meta.scenarioSource = v;
      else if (/진단 방식/.test(k)) meta.diagnosis = v;
    }
    return meta;
  }
  function parsePQuestions(rows) {
    // Q 테이블 헤더: 문항|유형|문항유형|카드세트|선지 텍스트|INS|ANL|REL|PIO|행동 라벨
    let header = -1;
    for (let r = 0; r < rows.length; r++) {
      if (cell(rows[r], 0) === "문항" && cell(rows[r], 1) === "유형" && cell(rows[r], 4)) { header = r; break; }
    }
    const byQ = {};
    const order = [];
    let curStem = "";
    if (header >= 0) {
      for (let r = header + 1; r < rows.length; r++) {
        const row = rows[r];
        const c0 = cell(row, 0);
        // 시나리오/스텝 텍스트 행 (【Qn】, [1스텝], 시나리오 등): c0만 있고 유형 없음
        if (c0 && !/^Q\d+$/.test(c0) && optMarkIndex(c0) < 0) {
          if (/^【|^\[|어떻게|습니까|입니까/.test(c0)) curStem = c0;
          continue;
        }
        const qm = /^Q(\d+)$/.exec(c0);
        if (!qm) continue;
        const type = cell(row, 1); // INS/ANL/REL/PIO
        if (!["INS", "ANL", "REL", "PIO"].includes(type)) continue; // 검증 리포트 행 제외
        const qid = "Q" + qm[1];
        if (!byQ[qid]) {
          byQ[qid] = { qNo: toInt(qm[1]), stem: curStem, questionType: cell(row, 2), card: cell(row, 3), options: [] };
          order.push(qid);
        }
        byQ[qid].options.push({
          axis: type,
          text: cell(row, 4),
          INS: toInt(cell(row, 5)) || 0,
          ANL: toInt(cell(row, 6)) || 0,
          REL: toInt(cell(row, 7)) || 0,
          PIO: toInt(cell(row, 8)) || 0,
          actionLabel: cell(row, 9),
        });
      }
    }
    return order.map((q) => byQ[q]);
  }

  // ── 결과 디자인 문서(프로즈) 추출 ───────────────────────────────────────────
  // A_결과 / P_결과 처럼 구조화되지 않은 설계안은 텍스트 블록으로 보존
  function extractDesignDoc(rows) {
    const lines = [];
    const typeNames = new Set();
    for (let r = 0; r < rows.length; r++) {
      const cells = (rows[r] || []).map((c) => norm(c)).filter(Boolean);
      const line = cells.join("  |  ");
      if (line) lines.push(line);
      // 유형명: "개척형·완수형·관계형·제안형·관리형·전략형" 처럼 ·로 3개 이상 묶인 셀만 채택
      cells.forEach((cellVal) => {
        const toks = cellVal.match(/[가-힣]+형/g) || [];
        if (toks.length >= 3 && /[·,]/.test(cellVal)) toks.forEach((t) => typeNames.add(t));
      });
    }
    return { text: lines.join("\n"), typeNames: Array.from(typeNames) };
  }

  // ── 워크북 → 정규화 번들 ────────────────────────────────────────────────────
  // sheets: [{ name, rows }]
  function normalizeWorkbook(sheets, jobFamilyId) {
    const out = {
      jobFamilyId: jobFamilyId || null,
      k: { topics: [], cases: [], sets: [], questions: [] },
      a: { questions: [], design: null, types: [] },
      p: { sets: [], questions: [], design: null, types: [] },
      sheetsSeen: [],
    };
    sheets.forEach(({ name, rows }) => {
      const cls = classifySheet(name);
      out.sheetsSeen.push({ name, classified: cls });
      if (!cls) return;
      if (cls.area === "K" && cls.kind === "result") {
        out.k.topics = parseKTopics(rows);
        out.k.cases = parseKCases(rows);
        if (!out.jobFamilyId && out.k.topics[0]) out.jobFamilyId = out.k.topics[0].jobFamilyId;
      } else if (cls.area === "K" && cls.kind === "question") {
        const r = parseKQuestions(rows);
        out.k.questions = out.k.questions.concat(r.questions);
      } else if (cls.area === "A" && cls.kind === "question") {
        out.a.questions = parseAQuestions(rows);
      } else if (cls.area === "A" && cls.kind === "result") {
        out.a.design = extractDesignDoc(rows);
      } else if (cls.area === "P" && cls.kind === "question") {
        const meta = parsePSet(rows);
        if (meta.setId) out.p.sets.push(meta);
        out.p.questions = parsePQuestions(rows).map((q) => ({ ...q, setId: meta.setId || null }));
      } else if (cls.area === "P" && cls.kind === "result") {
        out.p.design = extractDesignDoc(rows);
      }
    });

    // K 세트 자동구성: 문항의 setCode + 결과의 topic(set_id) 으로 세트 마스터 생성
    const setMap = {};
    out.k.topics.forEach((t) => {
      setMap[t.setId] = {
        setId: t.setId,
        setNo: toInt(t.setId.replace(/^S/, "")),
        setName: t.topicDisplayName,
        priority: t.priority,
        topicSummary: t.topicSummary,
        levelContext: t.levelContext,
        strengthRule: t.strengthRule,
        case04Title: t.case04Title,
        case40Grade: t.case40Grade,
        ncsSource: t.ncsSource,
        learningAreas: t.learningAreas,
        questionCount: 0,
      };
    });
    out.k.questions.forEach((q) => {
      if (q.setCode && !setMap[q.setCode]) {
        setMap[q.setCode] = { setId: q.setCode, setNo: toInt(q.setCode.replace(/^S/, "")), setName: null, questionCount: 0, orphan: true };
      }
      if (q.setCode && setMap[q.setCode]) setMap[q.setCode].questionCount++;
    });
    out.k.sets = Object.values(setMap).sort((a, b) => (a.setNo || 0) - (b.setNo || 0));

    // 적성유형·패턴유형 마스터 자동 등록 (엑셀 산문 + app 소스 기본값)
    out.a.types = buildATypes();
    out.p.types = buildPTypes();
    return out;
  }

  // ── 정합성 검증 ─────────────────────────────────────────────────────────────
  function validate(bundle) {
    const issues = [];
    const add = (level, area, msg) => issues.push({ level, area, msg });

    if (!bundle.jobFamilyId) add("error", "공통", "직무군(JF) 코드를 확인할 수 없습니다.");

    // K 문항: 선지 4개 / 정답 존재 / 세트 연결
    bundle.k.questions.forEach((q, i) => {
      const id = `${q.setCode || "?"} · ${q.tag || "문항" + (i + 1)}`;
      if (q.options.length !== 4) add("error", "K", `[${id}] 선지가 ${q.options.length}개입니다 (4개 필요).`);
      if (q.answerIndex == null) add("warn", "K", `[${id}] 정답 표기가 없습니다 (해설에서 추출 실패).`);
    });
    // K 토픽 ↔ 문항 세트 매칭
    const topicIds = new Set(bundle.k.topics.map((t) => t.setId));
    const qSets = new Set(bundle.k.questions.map((q) => q.setCode).filter(Boolean));
    qSets.forEach((s) => { if (!topicIds.has(s)) add("warn", "K", `문항 세트 ${s} 에 대응하는 결과 토픽(set_id)이 없습니다.`); });
    const topicsWithQ = bundle.k.sets.filter((s) => s.questionCount > 0).length;
    add("info", "K", `결과 토픽 ${bundle.k.topics.length}개 · 문항 보유 세트 ${topicsWithQ}개 · K 케이스 ${bundle.k.cases.length}개`);

    // A: 선지 / 해설 / 축매핑
    bundle.a.questions.forEach((q) => {
      if (q.options.length !== 4) add("error", "A", `A문항 #${q.no} 선지 ${q.options.length}개 (4개 필요).`);
      const blocks = Object.keys(q.explanationBlocks).length;
      if (blocks === 0) add("warn", "A", `A문항 #${q.no} 해설 블록이 없습니다.`);
    });
    const aNeed = (bundle.a.types || []).filter((t) => t._needsContent).map((t) => t.typeName);
    add("info", "A", `적성유형 ${(bundle.a.types || []).length}개 자동 등록 (콘텐츠 보강 필요: ${aNeed.join("·") || "없음"})`);
    add("warn", "A", "A 선지별 축 매핑은 0점 스캐폴드로 자동 생성됨 — 엑셀 계산식/점수 입력 후 재임포트 시 채워짐 (2차구성).");

    // P: 선지 가중합 100 / 4문항
    bundle.p.questions.forEach((q) => {
      if (q.options.length !== 4) add("error", "P", `${q.setId || ""} ${"Q" + q.qNo} 선지 ${q.options.length}개 (4개 필요).`);
      q.options.forEach((o, oi) => {
        const sum = o.INS + o.ANL + o.REL + o.PIO;
        if (sum !== 100) add("error", "P", `${"Q" + q.qNo} 선지${oi + 1} INS+ANL+REL+PIO = ${sum} (100 필요).`);
      });
    });
    if (bundle.p.questions.length === 0) add("warn", "P", "P 문항이 비어 있습니다.");
    const pNeed = (bundle.p.types || []).filter((t) => t._needsContent).map((t) => t.typeName);
    add("info", "P", `패턴유형 ${(bundle.p.types || []).length}개 자동 등록 (닮은인물·상황반응 포함 / 콘텐츠 보강 필요: ${pNeed.join("·") || "없음"})`);

    const errors = issues.filter((i) => i.level === "error").length;
    const warns = issues.filter((i) => i.level === "warn").length;
    return { issues, errors, warns, ok: errors === 0 };
  }

  // ── localStorage 반영 ───────────────────────────────────────────────────────
  // (브라우저 전용 — Node 검증 시에는 호출하지 않음)
  function commit(bundle, storage) {
    const ls = storage || global.localStorage;
    const jf = bundle.jobFamilyId;
    const setVal = (k, v) => ls.setItem(k, JSON.stringify(v));
    const getVal = (k) => { try { return JSON.parse(ls.getItem(k) || "[]"); } catch { return []; } };

    // K 세트 (kapp_k_sets_v1) — JF 단위 upsert
    const kSets = getVal("kapp_k_sets_v1").filter((s) => s.jobFamilyId !== jf);
    bundle.k.sets.forEach((s) => {
      kSets.push({
        id: "ks_" + jf + "_" + s.setId,
        jobFamilyId: jf,
        setNo: s.setNo,
        setCode: s.setId,
        setName: s.setName || s.setId,
        industryClass: "ALL",
        topicCoreSummary: s.topicSummary || "",
        topicLevelContext: s.levelContext || "",
        priority: s.priority,
        strengthRule: s.strengthRule,
        case04Title: s.case04Title,
        case40Grade: s.case40Grade,
        ncsSource: s.ncsSource,
        learningAreas: s.learningAreas || [],
      });
    });
    setVal("kapp_k_sets_v1", kSets);

    // K 문항 (kapp_k_questions_v1)
    const kQ = getVal("kapp_k_questions_v1").filter((q) => q.jobFamilyId !== jf);
    bundle.k.questions.forEach((q, i) => {
      kQ.push({
        id: "kq_" + jf + "_" + (q.setCode || "S") + "_" + (i + 1),
        jobFamilyId: jf,
        setId: "ks_" + jf + "_" + q.setCode,
        setCode: q.setCode,
        level: q.level,
        gradeCode: q.gradeCode,
        abilityUnit: q.abilityUnit,
        stem: q.stem,
        options: q.options,
        answerIndex: q.answerIndex,
        explanationCore: q.explanation,
        weight: q.weight,
      });
    });
    setVal("kapp_k_questions_v1", kQ);

    // K 케이스 (kapp_k_cases_v1) — JF 키 맵
    const kCases = (() => { try { return JSON.parse(ls.getItem("kapp_k_cases_v1") || "{}"); } catch { return {}; } })();
    kCases[jf] = bundle.k.cases;
    ls.setItem("kapp_k_cases_v1", JSON.stringify(kCases));

    // A 문항 (kapp_a_questions_v1)
    const aQ = getVal("kapp_a_questions_v1").filter((q) => q.jobFamilyId !== jf);
    const aIds = [];
    bundle.a.questions.forEach((q) => {
      const id = "aq_" + jf + "_" + q.no;
      aIds.push({ id, options: q.options ? q.options.length : 4 });
      aQ.push({
        id,
        jobFamilyId: jf,
        round: 1,
        no: q.no,
        grade: q.grade,
        cluster: q.cluster,
        companySize: q.companySize,
        trigger: q.trigger,
        stem: q.stem,
        options: q.options,
        explanationBlocks: q.explanationBlocks,
      });
    });
    setVal("kapp_a_questions_v1", aQ);

    // A 적성유형 마스터 (kapp_a_types_v1) — 자동 등록 (admin은 조회/수정만)
    const jobName = (bundle.k.topics[0] && bundle.k.topics[0].jobName) || "";
    const aTypes = getVal("kapp_a_types_v1").filter((t) => t.jobFamilyId !== jf);
    (bundle.a.types || []).forEach((t) => {
      aTypes.push({ id: "at_" + jf + "_" + t.typeName, jobFamilyId: jf, jobBadge: jobName, ...t });
    });
    setVal("kapp_a_types_v1", aTypes);

    // A 유형 매핑 스캐폴드 (kapp_a_mappings_v1) — 문항×선지 → 6유형 점수 (엑셀에 계산식 입력 전 0)
    const aMap = (() => { try { return JSON.parse(ls.getItem("kapp_a_mappings_v1") || "{}"); } catch { return {}; } })();
    // 기존 JF 매핑 제거
    Object.keys(aMap).forEach((k) => { if (k.startsWith("aq_" + jf + "_")) delete aMap[k]; });
    aIds.forEach(({ id, options }) => {
      for (let oi = 0; oi < options; oi++) {
        const key = id + "_" + oi;
        if (!aMap[key]) { aMap[key] = {}; A_TYPE_NAMES.forEach((n) => (aMap[key][n] = 0)); }
      }
    });
    ls.setItem("kapp_a_mappings_v1", JSON.stringify(aMap));

    // P 세트/문항
    const pSets = getVal("kapp_p_sets_v1").filter((s) => s.jobFamilyId !== jf);
    bundle.p.sets.forEach((s, i) => {
      pSets.push({ id: "ps_" + jf + "_" + (i + 1), jobFamilyId: jf, setCode: s.setId, cluster: s.cluster, companySize: s.companySize, grade: s.grade, scenarioSource: s.scenarioSource, diagnosis: s.diagnosis });
    });
    setVal("kapp_p_sets_v1", pSets);

    const pQ = getVal("kapp_p_questions_v1").filter((q) => q.jobFamilyId !== jf);
    bundle.p.questions.forEach((q) => {
      pQ.push({ id: "pq_" + jf + "_" + q.setId + "_Q" + q.qNo, jobFamilyId: jf, setCode: q.setId, qNo: q.qNo, questionType: q.questionType, card: q.card, stem: q.stem, options: q.options });
    });
    setVal("kapp_p_questions_v1", pQ);

    // P 패턴유형 마스터 (kapp_p_types_v1) — 자동 등록 (admin은 조회/수정만)
    const pTypes = getVal("kapp_p_types_v1").filter((t) => t.jobFamilyId !== jf);
    (bundle.p.types || []).forEach((t) => {
      pTypes.push({ id: "pt_" + jf + "_" + t.axis, jobFamilyId: jf, ...t });
    });
    setVal("kapp_p_types_v1", pTypes);

    // 결과 설계 문서(프로즈)
    const design = (() => { try { return JSON.parse(ls.getItem("kapp_result_design_v1") || "{}"); } catch { return {}; } })();
    design[jf] = { a: bundle.a.design, p: bundle.p.design };
    ls.setItem("kapp_result_design_v1", JSON.stringify(design));
  }

  const API = {
    norm, classifySheet, normalizeWorkbook, validate, commit,
    parseKTopics, parseKCases, parseKQuestions, parseAQuestions, parsePSet, parsePQuestions, extractDesignDoc,
  };

  if (typeof module !== "undefined" && module.exports) module.exports = API;
  global.KappImport = API;
})(typeof window !== "undefined" ? window : globalThis);
