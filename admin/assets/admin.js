const CODE_STORAGE_KEY = "kapp_admin_code_options_v1";
const defaultCodeOptions = {
  jobs: [
    { code: "JF_SAL_01", label: "B2B 영업" },
    { code: "JF_STR_03", label: "PM/PO" },
  ],
  industries: [
    { code: "ALL", label: "전체" },
    { code: "A", label: "IT/서비스" },
    { code: "B", label: "영업/판매" },
  ],
};

const PAGE_SIZE = 10;
const funnelStepOrder = ["온보딩", "회원가입/로그인", "프로필 설정", "스킬카드", "문항 풀이", "해설/결과", "인사이트"];

const stepMeta = {
  "온보딩": { use: "첫 방문 메시지와 CTA 전환율 점검", defaultDropoff: "체험 시작 전 이탈" },
  "회원가입/로그인": { use: "가입 장벽, 로그인 채널 효율 분석", defaultDropoff: "로그인 채널 선택 후 복귀 없음" },
  "프로필 설정": { use: "직무군 탐색 UI와 필수 입력 병목 확인", defaultDropoff: "직무군 또는 산업군 미선택" },
  "스킬카드": { use: "직무군별 카드 관심도와 최초 풀이 진입률 확인", defaultDropoff: "카드 상세 진입 후 K 시작 전" },
  "문항 풀이": { use: "K/A/P 난이도, 길이, 지루함 지점 파악", defaultDropoff: "선택 확인 전 이탈" },
  "해설/결과": { use: "해설 소비와 결과 이해도 개선", defaultDropoff: "해설 시트 중도 닫기" },
  "인사이트": { use: "리포트 가치 전달과 재방문 유도", defaultDropoff: "리포트 상세 미확인" },
};

const rawFunnelEvents = [
  { user: "u_1001", session: "s_001", period: "2026-05-26", job: "JF_SAL_01", step: "온보딩", entry: "Start", completion: "GoStudy", status: "active", reason: "온보딩 전체 완료", lastAt: "2026-05-26 09:10" },
  { user: "u_1002", session: "s_002", period: "2026-05-26", job: "JF_SAL_01", step: "온보딩", entry: "Start", completion: "TryPreview", status: "dropoff", reason: "체험 시작 CTA 미클릭", lastAt: "2026-05-26 09:16" },
  { user: "u_1003", session: "s_003", period: "2026-05-25", job: "JF_STR_03", step: "온보딩", entry: "Intro", completion: "Benefits", status: "active", reason: "혜택 화면까지 확인", lastAt: "2026-05-25 14:23" },
  { user: "u_1004", session: "s_004", period: "2026-05-24", job: "JF_SAL_01", step: "온보딩", entry: "Start", completion: "Differentiation", status: "dropoff", reason: "차별점 화면 이후 이탈", lastAt: "2026-05-24 12:40" },
  { user: "u_1005", session: "s_005", period: "2026-05-23", job: "JF_STR_03", step: "온보딩", entry: "Start", completion: "GoStudy", status: "active", reason: "온보딩 전체 완료", lastAt: "2026-05-23 19:45" },
  { user: "u_1006", session: "s_006", period: "2026-05-20", job: "JF_SAL_01", step: "온보딩", entry: "TryPreview", completion: "KQuestion", status: "active", reason: "샘플 K문항 진입", lastAt: "2026-05-20 11:11" },
  { user: "u_1007", session: "s_007", period: "2026-05-18", job: "JF_STR_03", step: "온보딩", entry: "Start", completion: "Intro", status: "dropoff", reason: "소개 화면 이후 이탈", lastAt: "2026-05-18 10:08" },
  { user: "u_1008", session: "s_008", period: "2026-05-12", job: "JF_SAL_01", step: "온보딩", entry: "Start", completion: "GoStudy", status: "active", reason: "온보딩 전체 완료", lastAt: "2026-05-12 17:31" },
  { user: "u_1009", session: "s_009", period: "2026-05-08", job: "JF_STR_03", step: "온보딩", entry: "Start", completion: "TryPreview", status: "dropoff", reason: "체험 미시작", lastAt: "2026-05-08 08:51" },
  { user: "u_1010", session: "s_010", period: "2026-05-04", job: "JF_SAL_01", step: "온보딩", entry: "Intro", completion: "GoStudy", status: "active", reason: "온보딩 전체 완료", lastAt: "2026-05-04 21:14" },
  { user: "u_1011", session: "s_011", period: "2026-04-29", job: "JF_SAL_01", step: "온보딩", entry: "Start", completion: "Benefits", status: "active", reason: "혜택 확인", lastAt: "2026-04-29 09:02" },
  { user: "u_1012", session: "s_012", period: "2026-04-20", job: "JF_STR_03", step: "온보딩", entry: "Start", completion: "Differentiation", status: "dropoff", reason: "차별점 화면 이후 이탈", lastAt: "2026-04-20 13:55" },

  { user: "u_1001", session: "s_001", period: "2026-05-26", job: "JF_SAL_01", step: "회원가입/로그인", entry: "GoStudy", completion: "카카오 로그인", status: "active", reason: "소셜 로그인 완료", lastAt: "2026-05-26 09:13" },
  { user: "u_1003", session: "s_003", period: "2026-05-25", job: "JF_STR_03", step: "회원가입/로그인", entry: "AuthLanding", completion: "이메일 회원가입", status: "active", reason: "약관 동의 후 가입 완료", lastAt: "2026-05-25 14:28" },
  { user: "u_1005", session: "s_005", period: "2026-05-23", job: "JF_STR_03", step: "회원가입/로그인", entry: "AuthLanding", completion: "구글 로그인", status: "active", reason: "소셜 로그인 완료", lastAt: "2026-05-23 19:49" },
  { user: "u_1006", session: "s_006", period: "2026-05-20", job: "JF_SAL_01", step: "회원가입/로그인", entry: "AuthLanding", completion: "아이디 입력", status: "dropoff", reason: "비밀번호 입력 전 이탈", lastAt: "2026-05-20 11:16" },
  { user: "u_1008", session: "s_008", period: "2026-05-12", job: "JF_SAL_01", step: "회원가입/로그인", entry: "AuthLanding", completion: "애플 로그인", status: "active", reason: "소셜 로그인 완료", lastAt: "2026-05-12 17:34" },
  { user: "u_1010", session: "s_010", period: "2026-05-04", job: "JF_SAL_01", step: "회원가입/로그인", entry: "AuthLanding", completion: "서비스 약관", status: "dropoff", reason: "필수 약관 미동의", lastAt: "2026-05-04 21:18" },

  { user: "u_1001", session: "s_001", period: "2026-05-26", job: "JF_SAL_01", step: "프로필 설정", entry: "산업군 선택", completion: "B2B 영업", status: "active", reason: "산업군/직무군/직급 완료", lastAt: "2026-05-26 09:17" },
  { user: "u_1003", session: "s_003", period: "2026-05-25", job: "JF_STR_03", step: "프로필 설정", entry: "산업군 선택", completion: "PM/PO", status: "active", reason: "프로필 저장 완료", lastAt: "2026-05-25 14:34" },
  { user: "u_1005", session: "s_005", period: "2026-05-23", job: "JF_STR_03", step: "프로필 설정", entry: "산업군 선택", completion: "직무군 선택", status: "dropoff", reason: "직급 선택 전 이탈", lastAt: "2026-05-23 19:55" },
  { user: "u_1008", session: "s_008", period: "2026-05-12", job: "JF_SAL_01", step: "프로필 설정", entry: "산업군 선택", completion: "B2B 영업", status: "active", reason: "프로필 저장 완료", lastAt: "2026-05-12 17:39" },

  { user: "u_1001", session: "s_001", period: "2026-05-26", job: "JF_SAL_01", step: "스킬카드", entry: "홈 카드 목록", completion: "B2B 영업 카드 상세", status: "active", reason: "최초 카드 진입", lastAt: "2026-05-26 09:20" },
  { user: "u_1003", session: "s_003", period: "2026-05-25", job: "JF_STR_03", step: "스킬카드", entry: "홈 카드 목록", completion: "PM/PO 카드 상세", status: "active", reason: "카드 상세 진입", lastAt: "2026-05-25 14:38" },
  { user: "u_1008", session: "s_008", period: "2026-05-12", job: "JF_SAL_01", step: "스킬카드", entry: "홈 카드 목록", completion: "카드 목록", status: "dropoff", reason: "카드 상세 미진입", lastAt: "2026-05-12 17:42" },

  { user: "u_1001", session: "s_001", period: "2026-05-26", job: "JF_SAL_01", step: "문항 풀이", entry: "K-03", completion: "P-01", status: "active", reason: "K/A/P 순차 풀이 완료", lastAt: "2026-05-26 09:34" },
  { user: "u_1003", session: "s_003", period: "2026-05-25", job: "JF_STR_03", step: "문항 풀이", entry: "K-01", completion: "A-04", status: "dropoff", reason: "P영역 진입 전 이탈", lastAt: "2026-05-25 14:53" },
  { user: "u_1008", session: "s_008", period: "2026-05-12", job: "JF_SAL_01", step: "문항 풀이", entry: "K-03", completion: "K-03", status: "dropoff", reason: "A영역 선택 전 이탈", lastAt: "2026-05-12 17:51" },

  { user: "u_1001", session: "s_001", period: "2026-05-26", job: "JF_SAL_01", step: "해설/결과", entry: "K 해설", completion: "전체 결과 요약", status: "active", reason: "해설과 결과 확인", lastAt: "2026-05-26 09:39" },
  { user: "u_1003", session: "s_003", period: "2026-05-25", job: "JF_STR_03", step: "해설/결과", entry: "K 해설", completion: "A 해설", status: "dropoff", reason: "결과 요약 전 이탈", lastAt: "2026-05-25 14:58" },

  { user: "u_1001", session: "s_001", period: "2026-05-26", job: "JF_SAL_01", step: "인사이트", entry: "리포트 목록", completion: "리포트 상세", status: "active", reason: "리포트 상세 확인", lastAt: "2026-05-26 09:43" },
  { user: "u_1003", session: "s_003", period: "2026-05-25", job: "JF_STR_03", step: "인사이트", entry: "리포트 목록", completion: "리포트 목록", status: "dropoff", reason: "리포트 상세 미확인", lastAt: "2026-05-25 15:02" },
];

const rawKapEvents = [
  { user: "u_1001", session: "s_001", period: "2026-05-26", job: "JF_SAL_01 · B2B 영업", jobCode: "JF_SAL_01", area: "K", item: "K-03 / 고객 발굴", choice: "3번: 우선순위 분류", isCorrect: true, explanation: true, report: true, status: "active", occurredAt: "2026-05-26 09:25" },
  { user: "u_1002", session: "s_002", period: "2026-05-26", job: "JF_SAL_01 · B2B 영업", jobCode: "JF_SAL_01", area: "K", item: "K-03 / 고객 발굴", choice: "1번: 바로 접촉", isCorrect: false, explanation: true, report: false, status: "active", occurredAt: "2026-05-26 09:52" },
  { user: "u_1004", session: "s_004", period: "2026-05-24", job: "JF_SAL_01 · B2B 영업", jobCode: "JF_SAL_01", area: "K", item: "K-03 / 고객 발굴", choice: "3번: 우선순위 분류", isCorrect: true, explanation: false, report: false, status: "dropoff", occurredAt: "2026-05-24 13:02" },
  { user: "u_1006", session: "s_006", period: "2026-05-20", job: "JF_SAL_01 · B2B 영업", jobCode: "JF_SAL_01", area: "K", item: "K-03 / 고객 발굴", choice: "2번: 소개 요청", isCorrect: false, explanation: true, report: false, status: "dropoff", occurredAt: "2026-05-20 11:23" },
  { user: "u_1008", session: "s_008", period: "2026-05-12", job: "JF_SAL_01 · B2B 영업", jobCode: "JF_SAL_01", area: "K", item: "K-03 / 고객 발굴", choice: "3번: 우선순위 분류", isCorrect: true, explanation: true, report: false, status: "active", occurredAt: "2026-05-12 17:48" },
  { user: "u_1010", session: "s_010", period: "2026-05-04", job: "JF_SAL_01 · B2B 영업", jobCode: "JF_SAL_01", area: "K", item: "K-03 / 고객 발굴", choice: "4번: 패턴 분석", isCorrect: false, explanation: false, report: false, status: "dropoff", occurredAt: "2026-05-04 21:26" },
  { user: "u_1011", session: "s_011", period: "2026-04-29", job: "JF_SAL_01 · B2B 영업", jobCode: "JF_SAL_01", area: "K", item: "K-03 / 고객 발굴", choice: "3번: 우선순위 분류", isCorrect: true, explanation: true, report: true, status: "active", occurredAt: "2026-04-29 09:17" },
  { user: "u_1013", session: "s_013", period: "2026-05-26", job: "JF_SAL_01 · B2B 영업", jobCode: "JF_SAL_01", area: "K", item: "K-03 / 고객 발굴", choice: "3번: 우선순위 분류", isCorrect: true, explanation: true, report: false, status: "active", occurredAt: "2026-05-26 12:11" },
  { user: "u_1014", session: "s_014", period: "2026-05-26", job: "JF_SAL_01 · B2B 영업", jobCode: "JF_SAL_01", area: "K", item: "K-03 / 고객 발굴", choice: "1번: 바로 접촉", isCorrect: false, explanation: false, report: false, status: "dropoff", occurredAt: "2026-05-26 12:18" },
  { user: "u_1015", session: "s_015", period: "2026-05-25", job: "JF_SAL_01 · B2B 영업", jobCode: "JF_SAL_01", area: "K", item: "K-03 / 고객 발굴", choice: "3번: 우선순위 분류", isCorrect: true, explanation: true, report: true, status: "active", occurredAt: "2026-05-25 16:40" },
  { user: "u_1016", session: "s_016", period: "2026-05-25", job: "JF_SAL_01 · B2B 영업", jobCode: "JF_SAL_01", area: "K", item: "K-03 / 고객 발굴", choice: "2번: 소개 요청", isCorrect: false, explanation: true, report: false, status: "active", occurredAt: "2026-05-25 18:01" },
  { user: "u_1017", session: "s_017", period: "2026-05-24", job: "JF_SAL_01 · B2B 영업", jobCode: "JF_SAL_01", area: "K", item: "K-03 / 고객 발굴", choice: "4번: 패턴 분석", isCorrect: false, explanation: false, report: false, status: "dropoff", occurredAt: "2026-05-24 20:33" },

  { user: "u_1001", session: "s_001", period: "2026-05-26", job: "JF_SAL_01 · B2B 영업", jobCode: "JF_SAL_01", area: "A", item: "A-07 / 경쟁사 진입", choice: "2번: 우회 정보 수집", isCorrect: null, explanation: true, report: true, status: "active", occurredAt: "2026-05-26 09:30" },
  { user: "u_1008", session: "s_008", period: "2026-05-12", job: "JF_SAL_01 · B2B 영업", jobCode: "JF_SAL_01", area: "A", item: "A-07 / 경쟁사 진입", choice: "1번: 직접 확인", isCorrect: null, explanation: false, report: false, status: "dropoff", occurredAt: "2026-05-12 17:50" },
  { user: "u_1015", session: "s_015", period: "2026-05-25", job: "JF_SAL_01 · B2B 영업", jobCode: "JF_SAL_01", area: "A", item: "A-07 / 경쟁사 진입", choice: "2번: 우회 정보 수집", isCorrect: null, explanation: true, report: true, status: "active", occurredAt: "2026-05-25 16:45" },
  { user: "u_1001", session: "s_001", period: "2026-05-26", job: "JF_SAL_01 · B2B 영업", jobCode: "JF_SAL_01", area: "P", item: "P-01 / KPI 스캔", choice: "4번: 전략 선택", isCorrect: null, explanation: true, report: true, status: "active", occurredAt: "2026-05-26 09:35" },
  { user: "u_1015", session: "s_015", period: "2026-05-25", job: "JF_SAL_01 · B2B 영업", jobCode: "JF_SAL_01", area: "P", item: "P-01 / KPI 스캔", choice: "3번: 이슈 해석", isCorrect: null, explanation: true, report: false, status: "active", occurredAt: "2026-05-25 16:50" },

  { user: "u_1003", session: "s_003", period: "2026-05-25", job: "JF_STR_03 · PM/PO", jobCode: "JF_STR_03", area: "K", item: "K-01 / 요구사항 분해", choice: "1번: 범위 재정의", isCorrect: true, explanation: true, report: false, status: "active", occurredAt: "2026-05-25 14:42" },
  { user: "u_1005", session: "s_005", period: "2026-05-23", job: "JF_STR_03 · PM/PO", jobCode: "JF_STR_03", area: "K", item: "K-01 / 요구사항 분해", choice: "3번: 이해관계자 조율", isCorrect: false, explanation: false, report: false, status: "dropoff", occurredAt: "2026-05-23 20:02" },
  { user: "u_1007", session: "s_007", period: "2026-05-18", job: "JF_STR_03 · PM/PO", jobCode: "JF_STR_03", area: "K", item: "K-01 / 요구사항 분해", choice: "1번: 범위 재정의", isCorrect: true, explanation: true, report: false, status: "active", occurredAt: "2026-05-18 10:18" },
  { user: "u_1003", session: "s_003", period: "2026-05-25", job: "JF_STR_03 · PM/PO", jobCode: "JF_STR_03", area: "A", item: "A-04 / 우선순위 충돌", choice: "3번: 이해관계자 조율", isCorrect: null, explanation: true, report: false, status: "dropoff", occurredAt: "2026-05-25 14:48" },
  { user: "u_1007", session: "s_007", period: "2026-05-18", job: "JF_STR_03 · PM/PO", jobCode: "JF_STR_03", area: "A", item: "A-04 / 우선순위 충돌", choice: "2번: 일정 재협의", isCorrect: null, explanation: true, report: false, status: "active", occurredAt: "2026-05-18 10:24" },
];

const analyticsState = {
  selectedFunnelStep: null,
  selectedKapKey: null,
  funnelPage: 1,
  kapPage: 1,
  appliedFilters: {
    startDate: "2026-05-20",
    endDate: "2026-05-26",
    job: "all",
    area: "all",
    step: "all",
    status: "all",
  },
};

function mockSubmit(message) {
  window.alert(message || "테스트 환경에서 저장되었습니다.");
}

function confirmDelete(message) {
  if (window.confirm(message || "삭제하시겠습니까?")) {
    window.alert("테스트 환경에서 삭제되었습니다.");
  }
}

function loginAdmin(event) {
  event.preventDefault();
  const id = document.querySelector("#admin-id").value;
  const pw = document.querySelector("#admin-pw").value;
  if (id === "admin" && pw === "admin1234") {
    window.location.href = "./content-create.html";
    return;
  }
  window.alert("임시 계정은 admin / admin1234 입니다.");
}

function readFilterForm() {
  return {
    startDate: document.querySelector("#analytics-start-date")?.value || "",
    endDate: document.querySelector("#analytics-end-date")?.value || "",
    job: document.querySelector("#analytics-job")?.value || "all",
    area: document.querySelector("#analytics-area")?.value || "all",
    step: document.querySelector("#analytics-step")?.value || "all",
    status: document.querySelector("#analytics-status")?.value || "all",
  };
}

function currentFilters() {
  return analyticsState.appliedFilters;
}

function inDateRange(dateValue, startDate, endDate) {
  if (startDate && dateValue < startDate) return false;
  if (endDate && dateValue > endDate) return false;
  return true;
}

function percent(done, total) {
  if (!total) return "0%";
  return `${Math.round((done / total) * 100)}%`;
}

function progressCell(value) {
  return `
    <div class="progress-cell">
      <strong>${value}%</strong>
      <div class="progress-bar"><span style="width: ${value}%"></span></div>
    </div>
  `;
}

function badge(text, type) {
  return `<span class="badge ${type || ""}">${text}</span>`;
}

function emptyRow(colspan, text) {
  return `<tr><td colspan="${colspan}" class="empty-state">${text}</td></tr>`;
}

function filterFunnelEvents() {
  const filters = currentFilters();
  return rawFunnelEvents.filter((row) => {
    const periodOk = inDateRange(row.period, filters.startDate, filters.endDate);
    const jobOk = filters.job === "all" || row.job === filters.job;
    const stepOk = filters.step === "all" || row.step === filters.step;
    const statusOk = filters.status === "all" || row.status === filters.status;
    return periodOk && jobOk && stepOk && statusOk;
  });
}

function filterKapEvents() {
  const filters = currentFilters();
  return rawKapEvents.filter((row) => {
    const periodOk = inDateRange(row.period, filters.startDate, filters.endDate);
    const jobOk = filters.job === "all" || row.jobCode === filters.job;
    const areaOk = filters.area === "all" || row.area === filters.area;
    const statusOk = filters.status === "all" || row.status === filters.status;
    return periodOk && jobOk && areaOk && statusOk;
  });
}

function summarizeFunnel(rows) {
  return funnelStepOrder
    .map((step) => {
      const stepRows = rows.filter((row) => row.step === step);
      if (!stepRows.length) return null;
      const completed = stepRows.filter((row) => row.status === "active").length;
      const dropoffs = stepRows.filter((row) => row.status === "dropoff");
      const dropoffCounts = dropoffs.reduce((acc, row) => {
        acc[row.reason] = (acc[row.reason] || 0) + 1;
        return acc;
      }, {});
      const topDropoff = Object.entries(dropoffCounts).sort((a, b) => b[1] - a[1])[0]?.[0] || stepMeta[step].defaultDropoff;
      return {
        step,
        entered: stepRows.length,
        completed,
        conversion: Math.round((completed / stepRows.length) * 100),
        dropoff: topDropoff,
        use: stepMeta[step].use,
      };
    })
    .filter(Boolean);
}

function summarizeKap(rows) {
  const groups = new Map();
  rows.forEach((row) => {
    const key = `${row.jobCode}|${row.area}|${row.item}`;
    if (!groups.has(key)) groups.set(key, []);
    groups.get(key).push(row);
  });

  return [...groups.entries()].map(([key, group]) => {
    const [jobCode, area, item] = key.split("|");
    const choiceCounts = group.reduce((acc, row) => {
      acc[row.choice] = (acc[row.choice] || 0) + 1;
      return acc;
    }, {});
    const topChoice = Object.entries(choiceCounts).sort((a, b) => b[1] - a[1])[0]?.[0] || "-";
    const correctnessRows = group.filter((row) => typeof row.isCorrect === "boolean");
    const accuracy = correctnessRows.length
      ? Math.round((correctnessRows.filter((row) => row.isCorrect).length / correctnessRows.length) * 100)
      : null;
    return {
      key,
      job: group[0].job,
      jobCode,
      area,
      item,
      solves: group.length,
      choice: topChoice,
      accuracy,
      explanation: Math.round((group.filter((row) => row.explanation).length / group.length) * 100),
      report: Math.round((group.filter((row) => row.report).length / group.length) * 100),
    };
  }).sort((a, b) => a.jobCode.localeCompare(b.jobCode) || a.area.localeCompare(b.area) || a.item.localeCompare(b.item));
}

function renderKpis() {
  const funnelRows = filterFunnelEvents();
  const kapRows = filterKapEvents();
  const users = new Set([...funnelRows.map((row) => row.user), ...kapRows.map((row) => row.user)]).size;
  const stepSummary = summarizeFunnel(funnelRows);
  const byStep = Object.fromEntries(stepSummary.map((row) => [row.step, row]));
  const profileCompleted = byStep["프로필 설정"]?.completed || 0;
  const cardEntered = byStep["스킬카드"]?.entered || 0;
  const questionEntered = byStep["문항 풀이"]?.entered || 0;
  const questionCompleted = byStep["문항 풀이"]?.completed || 0;
  const reportEntered = byStep["인사이트"]?.entered || 0;
  const reportCompleted = byStep["인사이트"]?.completed || 0;

  document.querySelector("#kpi-users").textContent = users.toLocaleString("ko-KR");
  document.querySelector("#kpi-onboarding").textContent = percent(byStep["온보딩"]?.completed || 0, byStep["온보딩"]?.entered || 0);
  document.querySelector("#kpi-profile").textContent = percent(byStep["프로필 설정"]?.completed || 0, byStep["프로필 설정"]?.entered || 0);
  document.querySelector("#kpi-card-open").textContent = percent(cardEntered, profileCompleted);
  document.querySelector("#kpi-kap").textContent = percent(questionCompleted, questionEntered);
  document.querySelector("#kpi-report").textContent = percent(reportCompleted, questionCompleted || reportEntered);
}

function renderFunnelTable() {
  const body = document.querySelector("#funnel-table-body");
  if (!body) return [];
  const rows = summarizeFunnel(filterFunnelEvents());
  if (!rows.some((row) => row.step === analyticsState.selectedFunnelStep)) {
    analyticsState.selectedFunnelStep = null;
  }

  body.innerHTML = rows.length ? rows.map((row) => {
    const expanded = row.step === analyticsState.selectedFunnelStep;
    return `
      <tr class="${expanded ? "selected-row" : ""}">
        <td>${row.step}</td>
        <td>${row.entered.toLocaleString("ko-KR")}</td>
        <td>${row.completed.toLocaleString("ko-KR")}</td>
        <td>${progressCell(row.conversion)}</td>
        <td>${row.dropoff}</td>
        <td>${row.use}</td>
        <td><button class="button small" onclick="toggleFunnelStep('${row.step}')">${expanded ? "접기" : "상세 보기"}</button></td>
      </tr>
      ${expanded ? renderFunnelAccordion(row.step) : ""}
    `;
  }).join("") : emptyRow(7, "검색 조건에 맞는 단계별 퍼널 데이터가 없습니다.");
  return rows;
}

function renderKapTable() {
  const body = document.querySelector("#kap-table-body");
  if (!body) return [];
  const rows = summarizeKap(filterKapEvents());
  if (!rows.some((row) => row.key === analyticsState.selectedKapKey)) {
    analyticsState.selectedKapKey = null;
  }

  body.innerHTML = rows.length ? rows.map((row) => {
    const expanded = row.key === analyticsState.selectedKapKey;
    return `
      <tr class="${expanded ? "selected-row" : ""}">
        <td>${row.job}</td>
        <td>${row.area}</td>
        <td>${row.item}</td>
        <td>${row.solves.toLocaleString("ko-KR")}</td>
        <td>${row.choice}</td>
        <td>${row.accuracy == null ? "선택형" : progressCell(row.accuracy)}</td>
        <td>${progressCell(row.explanation)}</td>
        <td>${progressCell(row.report)}</td>
        <td><button class="button small" onclick="toggleKapItem('${row.key}')">${expanded ? "접기" : "상세 보기"}</button></td>
      </tr>
      ${expanded ? renderKapAccordion(row.key) : ""}
    `;
  }).join("") : emptyRow(9, "검색 조건에 맞는 K/A/P 문항 데이터가 없습니다.");
  return rows;
}

function paginate(rows, page) {
  const totalPages = Math.max(1, Math.ceil(rows.length / PAGE_SIZE));
  const safePage = Math.min(Math.max(page, 1), totalPages);
  const start = (safePage - 1) * PAGE_SIZE;
  return { totalPages, safePage, pageRows: rows.slice(start, start + PAGE_SIZE) };
}

function paginationHtml(kind, total, page, totalPages) {
  return `
    <button class="button secondary small" onclick="changeDetailPage('${kind}', -1)" ${page <= 1 ? "disabled" : ""}>이전</button>
    <span>${page} / ${totalPages}</span>
    <button class="button secondary small" onclick="changeDetailPage('${kind}', 1)" ${page >= totalPages ? "disabled" : ""}>다음</button>
    <strong>총 ${total.toLocaleString("ko-KR")}건</strong>
  `;
}

function renderFunnelAccordion(step) {
  const rows = filterFunnelEvents()
    .filter((row) => row.step === step)
    .sort((a, b) => b.lastAt.localeCompare(a.lastAt));
  const page = paginate(rows, analyticsState.funnelPage);
  analyticsState.funnelPage = page.safePage;

  return `
    <tr class="accordion-row">
      <td colspan="7">
        <div class="accordion-panel">
          <div class="table-wrap">
            <table>
              <thead>
                <tr>
                  <th>사용자 ID</th>
                  <th>세션</th>
                  <th>진입 위치</th>
                  <th>완료 위치</th>
                  <th>현재 상태</th>
                  <th>이탈/완료 사유</th>
                  <th>직무군</th>
                  <th>마지막 발생 시각</th>
                </tr>
              </thead>
              <tbody>
                ${page.pageRows.length ? page.pageRows.map((row) => `
                  <tr>
                    <td>${row.user}</td>
                    <td>${row.session}</td>
                    <td>${row.entry}</td>
                    <td>${row.completion}</td>
                    <td>${row.status === "active" ? badge("완료/활성", "success") : badge("이탈/미완료", "warning")}</td>
                    <td>${row.reason}</td>
                    <td>${row.job}</td>
                    <td>${row.lastAt}</td>
                  </tr>
                `).join("") : emptyRow(8, "선택된 단계의 raw data가 없습니다.")}
              </tbody>
            </table>
          </div>
          <div class="pagination">${paginationHtml("funnel", rows.length, page.safePage, page.totalPages)}</div>
        </div>
      </td>
    </tr>
  `;
}

function renderKapAccordion(key) {
  const rows = filterKapEvents()
    .filter((row) => `${row.jobCode}|${row.area}|${row.item}` === key)
    .sort((a, b) => b.occurredAt.localeCompare(a.occurredAt));
  const page = paginate(rows, analyticsState.kapPage);
  analyticsState.kapPage = page.safePage;

  return `
    <tr class="accordion-row">
      <td colspan="9">
        <div class="accordion-panel">
          <div class="table-wrap">
            <table>
              <thead>
                <tr>
                  <th>사용자 ID</th>
                  <th>세션</th>
                  <th>직무군</th>
                  <th>영역</th>
                  <th>문항/세트</th>
                  <th>선택값</th>
                  <th>정답 여부</th>
                  <th>해설 확인</th>
                  <th>리포트 확인</th>
                  <th>발생 시각</th>
                </tr>
              </thead>
              <tbody>
                ${page.pageRows.length ? page.pageRows.map((row) => `
                  <tr>
                    <td>${row.user}</td>
                    <td>${row.session}</td>
                    <td>${row.job}</td>
                    <td>${row.area}</td>
                    <td>${row.item}</td>
                    <td>${row.choice}</td>
                    <td>${row.isCorrect == null ? "선택형" : row.isCorrect ? badge("정답", "success") : badge("오답", "warning")}</td>
                    <td>${row.explanation ? badge("확인", "success") : badge("미확인", "warning")}</td>
                    <td>${row.report ? badge("확인", "success") : badge("미확인", "warning")}</td>
                    <td>${row.occurredAt}</td>
                  </tr>
                `).join("") : emptyRow(10, "선택된 문항의 raw data가 없습니다.")}
              </tbody>
            </table>
          </div>
          <div class="pagination">${paginationHtml("kap", rows.length, page.safePage, page.totalPages)}</div>
        </div>
      </td>
    </tr>
  `;
}

function toggleFunnelStep(step) {
  analyticsState.selectedFunnelStep = analyticsState.selectedFunnelStep === step ? null : step;
  analyticsState.funnelPage = 1;
  renderFunnelTable();
}

function toggleKapItem(key) {
  analyticsState.selectedKapKey = analyticsState.selectedKapKey === key ? null : key;
  analyticsState.kapPage = 1;
  renderKapTable();
}

function changeDetailPage(kind, delta) {
  if (kind === "funnel") {
    analyticsState.funnelPage += delta;
    renderFunnelTable();
    return;
  }
  analyticsState.kapPage += delta;
  renderKapTable();
}

function renderAnalytics(resetPages = false) {
  if (resetPages) {
    analyticsState.funnelPage = 1;
    analyticsState.kapPage = 1;
  }
  renderKpis();
  renderFunnelTable();
  renderKapTable();
}

function searchAnalytics() {
  const button = document.querySelector("#analytics-search-button");
  const loading = document.querySelector("#analytics-loading");
  if (button) button.disabled = true;
  if (loading) loading.textContent = "검색 중...";

  window.setTimeout(() => {
    analyticsState.appliedFilters = readFilterForm();
    analyticsState.selectedFunnelStep = null;
    analyticsState.selectedKapKey = null;
    renderAnalytics(true);
    if (loading) loading.textContent = "검색 완료";
    if (button) button.disabled = false;
    window.setTimeout(() => {
      if (loading) loading.textContent = "";
    }, 900);
  }, 450);
}

function getCodeOptions() {
  try {
    const parsed = JSON.parse(window.localStorage.getItem(CODE_STORAGE_KEY) || "null");
    if (parsed?.jobs && parsed?.industries) return parsed;
  } catch (error) {
    // Fall through to defaults when stored data is malformed.
  }
  setCodeOptions(defaultCodeOptions);
  return structuredClone(defaultCodeOptions);
}

function setCodeOptions(options) {
  window.localStorage.setItem(CODE_STORAGE_KEY, JSON.stringify(options));
}

function optionLabel(item) {
  return `${item.code} · ${item.label}`;
}

function fillSelect(selector, items, includeAll = false) {
  const select = document.querySelector(selector);
  if (!select) return;
  const current = select.value;
  select.innerHTML = [
    includeAll ? `<option value="all">전체</option>` : "",
    ...items.map((item) => `<option value="${item.code}">${optionLabel(item)}</option>`),
  ].join("");
  if ([...select.options].some((option) => option.value === current)) {
    select.value = current;
  }
}

function initializeCodeSelects() {
  const codes = getCodeOptions();
  fillSelect("#analytics-job", codes.jobs, true);
  fillSelect("#content-k-job", codes.jobs);
  fillSelect("#content-a-job", codes.jobs);
  fillSelect("#content-k-industry", codes.industries);
}

function resetCodeForm(type) {
  document.querySelector(`#code-${type}-original`).value = "";
  document.querySelector(`#code-${type}-code`).value = "";
  document.querySelector(`#code-${type}-label`).value = "";
  document.querySelector(`#code-${type}-code`).disabled = false;
}

function saveCodeOption(event, type) {
  event.preventDefault();
  const codes = getCodeOptions();
  const original = document.querySelector(`#code-${type}-original`).value.trim();
  const codeInput = document.querySelector(`#code-${type}-code`);
  const labelInput = document.querySelector(`#code-${type}-label`);
  const code = codeInput.value.trim();
  const label = labelInput.value.trim();
  if (!code || !label) return;

  const existingIndex = codes[type].findIndex((item) => item.code === (original || code));
  const nextItem = { code, label };
  if (existingIndex >= 0) {
    codes[type][existingIndex] = nextItem;
  } else if (!codes[type].some((item) => item.code === code)) {
    codes[type].push(nextItem);
  } else {
    window.alert("이미 존재하는 코드입니다.");
    return;
  }

  setCodeOptions(codes);
  resetCodeForm(type);
  renderCodeTable(type);
  initializeCodeSelects();
}

function editCodeOption(type, code) {
  const item = getCodeOptions()[type].find((row) => row.code === code);
  if (!item) return;
  document.querySelector(`#code-${type}-original`).value = item.code;
  document.querySelector(`#code-${type}-code`).value = item.code;
  document.querySelector(`#code-${type}-label`).value = item.label;
  document.querySelector(`#code-${type}-code`).disabled = true;
}

function deleteCodeOption(type, code) {
  if (!window.confirm("선택한 코드를 삭제하시겠습니까?")) return;
  const codes = getCodeOptions();
  codes[type] = codes[type].filter((item) => item.code !== code);
  setCodeOptions(codes);
  resetCodeForm(type);
  renderCodeTable(type);
  initializeCodeSelects();
}

function renderCodeTable(type) {
  const body = document.querySelector(`#${type}-code-body`);
  if (!body) return;
  const rows = getCodeOptions()[type];
  body.innerHTML = rows.length ? rows.map((item) => `
    <tr>
      <td>${item.code}</td>
      <td>${item.label}</td>
      <td>${optionLabel(item)}</td>
      <td>
        <div class="table-actions">
          <button class="button secondary small" type="button" onclick="editCodeOption('${type}', '${item.code}')">수정</button>
          <button class="button danger small" type="button" onclick="deleteCodeOption('${type}', '${item.code}')">삭제</button>
        </div>
      </td>
    </tr>
  `).join("") : emptyRow(4, "등록된 코드가 없습니다.");
}

function initializeCodeManagement() {
  if (!document.querySelector("#jobs-code-body")) return;
  renderCodeTable("jobs");
  renderCodeTable("industries");
}

document.addEventListener("DOMContentLoaded", () => {
  initializeCodeSelects();
  if (!document.querySelector("#funnel-table-body")) {
    initializeCodeManagement();
    return;
  }
  analyticsState.appliedFilters = readFilterForm();
  renderAnalytics(true);
});
