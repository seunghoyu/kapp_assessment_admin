const CODE_STORAGE_KEY = "kapp_admin_code_options_v3";
const defaultCodeOptions = {
  "industries": [
    {
      "code": "A",
      "shortName": "농업·임업·어업",
      "sortOrder": 1
    },
    {
      "code": "B",
      "shortName": "광업",
      "sortOrder": 2
    },
    {
      "code": "C",
      "shortName": "제조업",
      "sortOrder": 3
    },
    {
      "code": "D",
      "shortName": "전기·가스·증기·공기조절",
      "sortOrder": 4
    },
    {
      "code": "E",
      "shortName": "수도·하수·폐기물·원료재생",
      "sortOrder": 5
    },
    {
      "code": "F",
      "shortName": "건설업",
      "sortOrder": 6
    },
    {
      "code": "G",
      "shortName": "도매 및 소매업",
      "sortOrder": 7
    },
    {
      "code": "H",
      "shortName": "운수 및 창고업",
      "sortOrder": 8
    },
    {
      "code": "I",
      "shortName": "숙박 및 음식점업",
      "sortOrder": 9
    },
    {
      "code": "J",
      "shortName": "정보통신업",
      "sortOrder": 10
    },
    {
      "code": "K",
      "shortName": "금융 및 보험업",
      "sortOrder": 11
    },
    {
      "code": "L",
      "shortName": "부동산 임대 및 공급업",
      "sortOrder": 12
    },
    {
      "code": "M",
      "shortName": "전문·과학·기술 서비스업",
      "sortOrder": 13
    },
    {
      "code": "N",
      "shortName": "사업시설관리·사업지원·임대",
      "sortOrder": 14
    },
    {
      "code": "O",
      "shortName": "공공행정·국방·사회보장",
      "sortOrder": 15
    },
    {
      "code": "P",
      "shortName": "교육 서비스업",
      "sortOrder": 16
    },
    {
      "code": "Q",
      "shortName": "보건·사회복지 서비스업",
      "sortOrder": 17
    },
    {
      "code": "R",
      "shortName": "예술·스포츠·여가 서비스업",
      "sortOrder": 18
    },
    {
      "code": "S",
      "shortName": "협회 및 단체",
      "sortOrder": 19
    }
  ],
  "jobFamilies": [
    {
      "jobFamilyId": "JF_STR_01",
      "familyGroupId": "FG_STRATEGY",
      "majorCategoryNum": 1,
      "majorCategoryLabel": "기획·전략",
      "majorCategoryIcon": "📊",
      "jobFamilyNameKo": "경영기획·사업기획",
      "typicalRoles": [
        "경영기획자",
        "사업기획자",
        "전략기획담당",
        "경영기획팀장",
        "사업개발담당",
        "신사업기획자"
      ]
    },
    {
      "jobFamilyId": "JF_STR_02",
      "familyGroupId": "FG_STRATEGY",
      "majorCategoryNum": 1,
      "majorCategoryLabel": "기획·전략",
      "majorCategoryIcon": "📊",
      "jobFamilyNameKo": "경영컨설팅·자문",
      "typicalRoles": [
        "경영컨설턴트",
        "전략컨설턴트",
        "비즈니스어드바이저",
        "경영자문위원",
        "기업진단전문가"
      ]
    },
    {
      "jobFamilyId": "JF_STR_03",
      "familyGroupId": "FG_STRATEGY",
      "majorCategoryNum": 1,
      "majorCategoryLabel": "기획·전략",
      "majorCategoryIcon": "📊",
      "jobFamilyNameKo": "PM·PO·상품기획·서비스기획",
      "typicalRoles": [
        "프로젝트매니저",
        "PMO담당",
        "애자일코치",
        "스크럼마스터",
        "프로그램매니저",
        "상품기획자",
        "Product Owner",
        "서비스기획자",
        "PM(ProductManager)",
        "기획PM",
        "플랫폼기획자",
        "웹기획자",
        "앱기획자"
      ]
    },
    {
      "jobFamilyId": "JF_STR_05",
      "familyGroupId": "FG_STRATEGY",
      "majorCategoryNum": 1,
      "majorCategoryLabel": "기획·전략",
      "majorCategoryIcon": "📊",
      "jobFamilyNameKo": "경영지원·일반관리",
      "typicalRoles": [
        "경영지원담당",
        "사업관리담당",
        "임원비서",
        "경영총괄지원",
        "사무국장",
        "CEO",
        "COO",
        "CTO",
        "대표이사",
        "공동창업자"
      ]
    },
    {
      "jobFamilyId": "JF_MKT_01",
      "familyGroupId": "FG_MARKETING",
      "majorCategoryNum": 2,
      "majorCategoryLabel": "마케팅·홍보·조사",
      "majorCategoryIcon": "📣",
      "jobFamilyNameKo": "브랜드마케팅",
      "typicalRoles": [
        "브랜드마케터",
        "브랜드매니저",
        "캠페인기획자",
        "ATL마케터",
        "마케팅매니저",
        "브랜드전략담당"
      ]
    },
    {
      "jobFamilyId": "JF_MKT_02",
      "familyGroupId": "FG_MARKETING",
      "majorCategoryNum": 2,
      "majorCategoryLabel": "마케팅·홍보·조사",
      "majorCategoryIcon": "📣",
      "jobFamilyNameKo": "디지털·퍼포먼스마케팅",
      "typicalRoles": [
        "퍼포먼스마케터",
        "디지털마케터",
        "검색광고담당",
        "SA/DA운영자",
        "미디어바잉담당",
        "광고운영담당"
      ]
    },
    {
      "jobFamilyId": "JF_MKT_03",
      "familyGroupId": "FG_MARKETING",
      "majorCategoryNum": 2,
      "majorCategoryLabel": "마케팅·홍보·조사",
      "majorCategoryIcon": "📣",
      "jobFamilyNameKo": "콘텐츠마케팅",
      "typicalRoles": [
        "콘텐츠마케터",
        "SNS마케터",
        "콘텐츠에디터",
        "소셜미디어담당",
        "콘텐츠크리에이터",
        "블로그마케터"
      ]
    },
    {
      "jobFamilyId": "JF_MKT_04",
      "familyGroupId": "FG_MARKETING",
      "majorCategoryNum": 2,
      "majorCategoryLabel": "마케팅·홍보·조사",
      "majorCategoryIcon": "📣",
      "jobFamilyNameKo": "CRM·그로스마케팅",
      "typicalRoles": [
        "CRM마케터",
        "그로스해커",
        "리텐션마케터",
        "MAU담당",
        "그로스매니저",
        "CRM전략담당"
      ]
    },
    {
      "jobFamilyId": "JF_MKT_05",
      "familyGroupId": "FG_MARKETING",
      "majorCategoryNum": 2,
      "majorCategoryLabel": "마케팅·홍보·조사",
      "majorCategoryIcon": "📣",
      "jobFamilyNameKo": "온라인마케팅·이커머스마케팅",
      "typicalRoles": [
        "온라인마케터",
        "이커머스마케터",
        "채널매니저",
        "플랫폼마케터",
        "D2C마케터",
        "채널관리자"
      ]
    },
    {
      "jobFamilyId": "JF_MKT_06",
      "familyGroupId": "FG_MARKETING",
      "majorCategoryNum": 2,
      "majorCategoryLabel": "마케팅·홍보·조사",
      "majorCategoryIcon": "📣",
      "jobFamilyNameKo": "PR·홍보·대외협력",
      "typicalRoles": [
        "PR매니저",
        "홍보담당",
        "언론홍보담당",
        "대외협력담당",
        "IR홍보담당",
        "위기커뮤니케이션담당"
      ]
    },
    {
      "jobFamilyId": "JF_MKT_07",
      "familyGroupId": "FG_MARKETING",
      "majorCategoryNum": 2,
      "majorCategoryLabel": "마케팅·홍보·조사",
      "majorCategoryIcon": "📣",
      "jobFamilyNameKo": "광고기획·AE",
      "typicalRoles": [
        "AE(광고기획)",
        "광고기획자",
        "마케팅기획자",
        "크리에이티브디렉터",
        "카피라이터",
        "CD(CreativeDirector)"
      ]
    },
    {
      "jobFamilyId": "JF_MKT_08",
      "familyGroupId": "FG_MARKETING",
      "majorCategoryNum": 2,
      "majorCategoryLabel": "마케팅·홍보·조사",
      "majorCategoryIcon": "📣",
      "jobFamilyNameKo": "시장조사·리서치·인사이트",
      "typicalRoles": [
        "마케팅리서처",
        "시장조사담당",
        "소비자인사이트분석가",
        "리서치매니저",
        "트렌드분석가"
      ]
    },
    {
      "jobFamilyId": "JF_MKT_09",
      "familyGroupId": "FG_MARKETING",
      "majorCategoryNum": 2,
      "majorCategoryLabel": "마케팅·홍보·조사",
      "majorCategoryIcon": "📣",
      "jobFamilyNameKo": "MD·상품관리·바잉",
      "typicalRoles": [
        "MD(머천다이저)",
        "바이어",
        "상품관리자",
        "VMD",
        "카테고리매니저",
        "바잉담당"
      ]
    },
    {
      "jobFamilyId": "JF_FIN_01",
      "familyGroupId": "FG_FINANCE_GEN",
      "majorCategoryNum": 3,
      "majorCategoryLabel": "회계·세무·재무",
      "majorCategoryIcon": "💰",
      "jobFamilyNameKo": "재무·회계",
      "typicalRoles": [
        "결산담당",
        "경리담당",
        "공인회계사(CPA)",
        "원가분석가",
        "자본시장담당",
        "재무기획자",
        "재무담당",
        "재무회계담당",
        "회계사",
        "CFO스태프",
        "FP&A담당",
        "IR담당"
      ]
    },
    {
      "jobFamilyId": "JF_FIN_03",
      "familyGroupId": "FG_FINANCE_GEN",
      "majorCategoryNum": 3,
      "majorCategoryLabel": "회계·세무·재무",
      "majorCategoryIcon": "💰",
      "jobFamilyNameKo": "세무·감사",
      "typicalRoles": [
        "세무사",
        "세무담당",
        "내부감사",
        "관세사",
        "세무조정담당",
        "조세전략담당"
      ]
    },
    {
      "jobFamilyId": "JF_FIN_04",
      "familyGroupId": "FG_FINANCE_GEN",
      "majorCategoryNum": 3,
      "majorCategoryLabel": "회계·세무·재무",
      "majorCategoryIcon": "💰",
      "jobFamilyNameKo": "자금·예산관리",
      "typicalRoles": [
        "자금담당",
        "예산관리담당",
        "자금운용담당",
        "현금흐름관리",
        "재무운용담당"
      ]
    },
    {
      "jobFamilyId": "JF_HR_01",
      "familyGroupId": "FG_HR",
      "majorCategoryNum": 4,
      "majorCategoryLabel": "인사·노무·HRD",
      "majorCategoryIcon": "👥",
      "jobFamilyNameKo": "HRM",
      "typicalRoles": [
        "급여담당",
        "리크루터",
        "보상전략담당",
        "성과관리담당",
        "인사관리담당",
        "인사기획자",
        "인사팀장",
        "인재확보담당",
        "채용담당",
        "채용매니저",
        "평가보상담당",
        "헤드헌터",
        "C&B매니저",
        "HR담당",
        "HR매니저",
        "HR제너럴리스트",
        "HRBP",
        "TA(TalentAcquisition)"
      ]
    },
    {
      "jobFamilyId": "JF_HR_04",
      "familyGroupId": "FG_HR",
      "majorCategoryNum": 4,
      "majorCategoryLabel": "인사·노무·HRD",
      "majorCategoryIcon": "👥",
      "jobFamilyNameKo": "HRD",
      "typicalRoles": [
        "교육기획자",
        "러닝디자이너",
        "변화관리담당",
        "사내강사",
        "역량개발담당",
        "조직개발담당",
        "조직문화담당",
        "조직설계담당",
        "HRD담당",
        "L&D매니저",
        "OD컨설턴트"
      ]
    },
    {
      "jobFamilyId": "JF_HR_06",
      "familyGroupId": "FG_HR",
      "majorCategoryNum": 4,
      "majorCategoryLabel": "인사·노무·HRD",
      "majorCategoryIcon": "👥",
      "jobFamilyNameKo": "노무관리·노사관계",
      "typicalRoles": [
        "노무담당",
        "노무사",
        "노사관계담당",
        "산재관리담당",
        "근로계약관리",
        "CLA담당",
        "직업상담사"
      ]
    },
    {
      "jobFamilyId": "JF_ADM_01",
      "familyGroupId": "FG_ADMIN_LEGAL",
      "majorCategoryNum": 5,
      "majorCategoryLabel": "총무·법무·사무",
      "majorCategoryIcon": "🗂️",
      "jobFamilyNameKo": "총무·행정·비서",
      "typicalRoles": [
        "사무담당자",
        "경영지원담당",
        "총무담당",
        "행정지원담당",
        "비서",
        "사무보조",
        "총무팀장",
        "시설담당"
      ]
    },
    {
      "jobFamilyId": "JF_ADM_02",
      "familyGroupId": "FG_ADMIN_LEGAL",
      "majorCategoryNum": 5,
      "majorCategoryLabel": "총무·법무·사무",
      "majorCategoryIcon": "🗂️",
      "jobFamilyNameKo": "기업법무",
      "typicalRoles": [
        "계약검토담당",
        "계약관리담당",
        "공무원",
        "기업법무담당",
        "내부통제담당",
        "리스크매니저",
        "법무매니저",
        "법무팀원",
        "변리사(IP전담)",
        "사무관",
        "정책기획담당",
        "주무관",
        "준법감시인",
        "지식재산담당",
        "컴플라이언스담당",
        "특허엔지니어",
        "특허출원담당",
        "행정직",
        "GRC담당",
        "IP담당"
      ]
    },
    {
      "jobFamilyId": "JF_DEV_01",
      "familyGroupId": "FG_IT_DEV",
      "majorCategoryNum": 6,
      "majorCategoryLabel": "IT·개발",
      "majorCategoryIcon": "💻",
      "jobFamilyNameKo": "백엔드개발",
      "typicalRoles": [
        "백엔드개발자",
        "서버개발자",
        "Java개발자",
        "Python개발자",
        "Node.js개발자",
        "Spring개발자"
      ]
    },
    {
      "jobFamilyId": "JF_DEV_02",
      "familyGroupId": "FG_IT_DEV",
      "majorCategoryNum": 6,
      "majorCategoryLabel": "IT·개발",
      "majorCategoryIcon": "💻",
      "jobFamilyNameKo": "프론트엔드개발",
      "typicalRoles": [
        "프론트엔드개발자",
        "웹개발자",
        "React개발자",
        "Vue개발자",
        "UI개발자",
        "Angular개발자"
      ]
    },
    {
      "jobFamilyId": "JF_DEV_03",
      "familyGroupId": "FG_IT_DEV",
      "majorCategoryNum": 6,
      "majorCategoryLabel": "IT·개발",
      "majorCategoryIcon": "💻",
      "jobFamilyNameKo": "풀스택·웹개발",
      "typicalRoles": [
        "소프트웨어개발자",
        "풀스택개발자",
        "웹개발자",
        "웹퍼블리셔",
        "풀스택엔지니어"
      ]
    },
    {
      "jobFamilyId": "JF_DEV_04",
      "familyGroupId": "FG_IT_DEV",
      "majorCategoryNum": 6,
      "majorCategoryLabel": "IT·개발",
      "majorCategoryIcon": "💻",
      "jobFamilyNameKo": "앱·모바일개발",
      "typicalRoles": [
        "앱개발자",
        "iOS개발자",
        "Android개발자",
        "Flutter개발자",
        "React Native개발자",
        "모바일엔지니어"
      ]
    },
    {
      "jobFamilyId": "JF_DEV_05",
      "familyGroupId": "FG_IT_DEV",
      "majorCategoryNum": 6,
      "majorCategoryLabel": "IT·개발",
      "majorCategoryIcon": "💻",
      "jobFamilyNameKo": "게임개발",
      "typicalRoles": [
        "게임개발자",
        "게임클라이언트개발자",
        "게임서버개발자",
        "Unity개발자",
        "Unreal개발자",
        "TD(TechnicalDirector)"
      ]
    },
    {
      "jobFamilyId": "JF_DEV_06",
      "familyGroupId": "FG_IT_DEV",
      "majorCategoryNum": 6,
      "majorCategoryLabel": "IT·개발",
      "majorCategoryIcon": "💻",
      "jobFamilyNameKo": "임베디드·펌웨어",
      "typicalRoles": [
        "임베디드개발자",
        "펌웨어개발자",
        "HW개발자",
        "BSP개발자",
        "RTOS개발자"
      ]
    },
    {
      "jobFamilyId": "JF_DEV_07",
      "familyGroupId": "FG_IT_DEV",
      "majorCategoryNum": 6,
      "majorCategoryLabel": "IT·개발",
      "majorCategoryIcon": "💻",
      "jobFamilyNameKo": "QA·테스트엔지니어",
      "typicalRoles": [
        "QA엔지니어",
        "테스터",
        "SDET",
        "자동화QA",
        "테스트엔지니어",
        "QA매니저"
      ]
    },
    {
      "jobFamilyId": "JF_DEV_08",
      "familyGroupId": "FG_IT_DEV",
      "majorCategoryNum": 6,
      "majorCategoryLabel": "IT·개발",
      "majorCategoryIcon": "💻",
      "jobFamilyNameKo": "IT컨설팅·SI·ERP",
      "typicalRoles": [
        "IT컨설턴트",
        "SI엔지니어",
        "SAP컨설턴트",
        "ERP구축담당",
        "Oracle컨설턴트",
        "Salesforce개발자"
      ]
    },
    {
      "jobFamilyId": "JF_DEV_09",
      "familyGroupId": "FG_IT_DEV",
      "majorCategoryNum": 6,
      "majorCategoryLabel": "IT·개발",
      "majorCategoryIcon": "💻",
      "jobFamilyNameKo": "블록체인·Web3",
      "typicalRoles": [
        "블록체인개발자",
        "스마트컨트랙트개발자",
        "Web3개발자",
        "DApp개발자",
        "Solidity개발자"
      ]
    },
    {
      "jobFamilyId": "JF_AI_01",
      "familyGroupId": "FG_AI_DATA",
      "majorCategoryNum": 7,
      "majorCategoryLabel": "AI·데이터·인프라",
      "majorCategoryIcon": "🤖",
      "jobFamilyNameKo": "AI·머신러닝 엔지니어",
      "typicalRoles": [
        "딥러닝연구원",
        "머신러닝엔지니어",
        "생성AI연구원",
        "음성AI연구원",
        "AI엔지니어",
        "AI연구원",
        "CV연구원",
        "LLMOps엔지니어",
        "ML엔지니어",
        "MLOps엔지니어",
        "NLP연구원"
      ]
    },
    {
      "jobFamilyId": "JF_AI_03",
      "familyGroupId": "FG_AI_DATA",
      "majorCategoryNum": 7,
      "majorCategoryLabel": "AI·데이터·인프라",
      "majorCategoryIcon": "🤖",
      "jobFamilyNameKo": "데이터사이언티스트",
      "typicalRoles": [
        "데이터사이언티스트",
        "ML분석가",
        "통계모델러",
        "예측모델담당"
      ]
    },
    {
      "jobFamilyId": "JF_AI_04",
      "familyGroupId": "FG_AI_DATA",
      "majorCategoryNum": 7,
      "majorCategoryLabel": "AI·데이터·인프라",
      "majorCategoryIcon": "🤖",
      "jobFamilyNameKo": "데이터분석가·BI·DBA",
      "typicalRoles": [
        "데이터분석가",
        "BI엔지니어",
        "DBA",
        "SQL분석가",
        "데이터애널리스트",
        "인사이트분석가"
      ]
    },
    {
      "jobFamilyId": "JF_AI_05",
      "familyGroupId": "FG_AI_DATA",
      "majorCategoryNum": 7,
      "majorCategoryLabel": "AI·데이터·인프라",
      "majorCategoryIcon": "🤖",
      "jobFamilyNameKo": "데이터엔지니어",
      "typicalRoles": [
        "데이터엔지니어",
        "ETL개발자",
        "Spark엔지니어",
        "파이프라인엔지니어",
        "Kafka엔지니어"
      ]
    },
    {
      "jobFamilyId": "JF_AI_06",
      "familyGroupId": "FG_AI_DATA",
      "majorCategoryNum": 7,
      "majorCategoryLabel": "AI·데이터·인프라",
      "majorCategoryIcon": "🤖",
      "jobFamilyNameKo": "AI서비스개발·LLM응용",
      "typicalRoles": [
        "AI서비스개발자",
        "LLM응용개발자",
        "AI Agent개발자",
        "RAG개발자",
        "ChatBot개발자"
      ]
    },
    {
      "jobFamilyId": "JF_AI_07",
      "familyGroupId": "FG_AI_DATA",
      "majorCategoryNum": 7,
      "majorCategoryLabel": "AI·데이터·인프라",
      "majorCategoryIcon": "🤖",
      "jobFamilyNameKo": "클라우드·DevOps·인프라",
      "typicalRoles": [
        "클라우드엔지니어",
        "DevOps엔지니어",
        "SRE(사이트신뢰성엔지니어)",
        "인프라엔지니어",
        "AWS엔지니어",
        "GCP엔지니어"
      ]
    },
    {
      "jobFamilyId": "JF_AI_08",
      "familyGroupId": "FG_AI_DATA",
      "majorCategoryNum": 7,
      "majorCategoryLabel": "AI·데이터·인프라",
      "majorCategoryIcon": "🤖",
      "jobFamilyNameKo": "시스템·네트워크엔지니어",
      "typicalRoles": [
        "시스템엔지니어",
        "네트워크엔지니어",
        "서버관리자",
        "네트워크관리자",
        "시스템운영담당"
      ]
    },
    {
      "jobFamilyId": "JF_AI_09",
      "familyGroupId": "FG_AI_DATA",
      "majorCategoryNum": 7,
      "majorCategoryLabel": "AI·데이터·인프라",
      "majorCategoryIcon": "🤖",
      "jobFamilyNameKo": "정보보안·보안엔지니어",
      "typicalRoles": [
        "정보보안엔지니어",
        "보안담당",
        "침해대응담당",
        "모의해킹전문가",
        "ISMS담당",
        "보안아키텍트",
        "AI보안전문가"
      ]
    },
    {
      "jobFamilyId": "JF_AI_11",
      "familyGroupId": "FG_AI_DATA",
      "majorCategoryNum": 7,
      "majorCategoryLabel": "AI·데이터·인프라",
      "majorCategoryIcon": "🤖",
      "jobFamilyNameKo": "AI기획·DX전략",
      "typicalRoles": [
        "AI기획자",
        "DX전략담당",
        "AI사업전략담당",
        "AI컨설턴트",
        "디지털전환기획자"
      ]
    },
    {
      "jobFamilyId": "JF_AI_12",
      "familyGroupId": "FG_AI_DATA",
      "majorCategoryNum": 7,
      "majorCategoryLabel": "AI·데이터·인프라",
      "majorCategoryIcon": "🤖",
      "jobFamilyNameKo": "프롬프트엔지니어·AI활용",
      "typicalRoles": [
        "프롬프트엔지니어",
        "AI활용전문가",
        "AI튜터",
        "데이터라벨러",
        "AI윤리담당"
      ]
    },
    {
      "jobFamilyId": "JF_DES_01",
      "familyGroupId": "FG_DESIGN",
      "majorCategoryNum": 8,
      "majorCategoryLabel": "디자인",
      "majorCategoryIcon": "🎨",
      "jobFamilyNameKo": "UX·UI·프로덕트디자인",
      "typicalRoles": [
        "UX디자이너",
        "UI디자이너",
        "프로덕트디자이너",
        "서비스디자이너",
        "인터랙션디자이너",
        "UX리서처",
        "웹디자이너"
      ]
    },
    {
      "jobFamilyId": "JF_DES_02",
      "familyGroupId": "FG_DESIGN",
      "majorCategoryNum": 8,
      "majorCategoryLabel": "디자인",
      "majorCategoryIcon": "🎨",
      "jobFamilyNameKo": "그래픽·시각·편집디자인",
      "typicalRoles": [
        "그래픽디자이너",
        "시각디자이너",
        "편집디자이너",
        "북디자이너",
        "타이포그래퍼"
      ]
    },
    {
      "jobFamilyId": "JF_DES_03",
      "familyGroupId": "FG_DESIGN",
      "majorCategoryNum": 8,
      "majorCategoryLabel": "디자인",
      "majorCategoryIcon": "🎨",
      "jobFamilyNameKo": "브랜드·광고디자인",
      "typicalRoles": [
        "브랜드디자이너",
        "광고디자이너",
        "아트디렉터",
        "비주얼아이덴티티디자이너"
      ]
    },
    {
      "jobFamilyId": "JF_DES_04",
      "familyGroupId": "FG_DESIGN",
      "majorCategoryNum": 8,
      "majorCategoryLabel": "디자인",
      "majorCategoryIcon": "🎨",
      "jobFamilyNameKo": "영상·모션·3D디자인",
      "typicalRoles": [
        "영상디자이너",
        "모션그래픽디자이너",
        "3D디자이너",
        "VFX아티스트",
        "컴포지터"
      ]
    },
    {
      "jobFamilyId": "JF_DES_05",
      "familyGroupId": "FG_DESIGN",
      "majorCategoryNum": 8,
      "majorCategoryLabel": "디자인",
      "majorCategoryIcon": "🎨",
      "jobFamilyNameKo": "패션·텍스타일디자인",
      "typicalRoles": [
        "패션디자이너",
        "텍스타일디자이너",
        "의상디자이너",
        "액세서리디자이너"
      ]
    },
    {
      "jobFamilyId": "JF_DES_06",
      "familyGroupId": "FG_DESIGN",
      "majorCategoryNum": 8,
      "majorCategoryLabel": "디자인",
      "majorCategoryIcon": "🎨",
      "jobFamilyNameKo": "제품·산업디자인",
      "typicalRoles": [
        "제품디자이너",
        "산업디자이너",
        "ID(IndustrialDesigner)",
        "패키지디자이너"
      ]
    },
    {
      "jobFamilyId": "JF_DES_07",
      "familyGroupId": "FG_DESIGN",
      "majorCategoryNum": 8,
      "majorCategoryLabel": "디자인",
      "majorCategoryIcon": "🎨",
      "jobFamilyNameKo": "공간·인테리어·환경디자인",
      "typicalRoles": [
        "실내디자이너",
        "공간디자이너",
        "인테리어기획자",
        "디스플레이디자이너",
        "환경디자이너"
      ]
    },
    {
      "jobFamilyId": "JF_DES_08",
      "familyGroupId": "FG_DESIGN",
      "majorCategoryNum": 8,
      "majorCategoryLabel": "디자인",
      "majorCategoryIcon": "🎨",
      "jobFamilyNameKo": "일러스트·캐릭터·웹툰",
      "typicalRoles": [
        "일러스트레이터",
        "캐릭터디자이너",
        "웹툰작가",
        "콘셉트아티스트"
      ]
    },
    {
      "jobFamilyId": "JF_SAL_01",
      "familyGroupId": "FG_SALES",
      "majorCategoryNum": 9,
      "majorCategoryLabel": "영업·판매·무역",
      "majorCategoryIcon": "💼",
      "jobFamilyNameKo": "B2B영업·법인영업",
      "typicalRoles": [
        "제품영업",
        "서비스영업",
        "B2B영업담당",
        "법인영업담당",
        "기업영업매니저",
        "세일즈매니저",
        "영업팀장",
        "금융영업담당"
      ]
    },
    {
      "jobFamilyId": "JF_SAL_02",
      "familyGroupId": "FG_SALES",
      "majorCategoryNum": 9,
      "majorCategoryLabel": "영업·판매·무역",
      "majorCategoryIcon": "💼",
      "jobFamilyNameKo": "기술영업·IT영업",
      "typicalRoles": [
        "기술영업담당",
        "IT영업담당",
        "솔루션영업",
        "프리세일즈엔지니어",
        "테크니컬세일즈"
      ]
    },
    {
      "jobFamilyId": "JF_SAL_03",
      "familyGroupId": "FG_SALES",
      "majorCategoryNum": 9,
      "majorCategoryLabel": "영업·판매·무역",
      "majorCategoryIcon": "💼",
      "jobFamilyNameKo": "해외영업·무역·수출입",
      "typicalRoles": [
        "해외영업담당",
        "무역담당",
        "수출입담당",
        "글로벌세일즈",
        "국제영업담당"
      ]
    },
    {
      "jobFamilyId": "JF_SAL_04",
      "familyGroupId": "FG_SALES",
      "majorCategoryNum": 9,
      "majorCategoryLabel": "영업·판매·무역",
      "majorCategoryIcon": "💼",
      "jobFamilyNameKo": "B2C·리테일영업",
      "typicalRoles": [
        "B2C영업담당",
        "리테일영업",
        "채널영업",
        "대리점관리",
        "프랜차이즈관리자",
        "법인영업"
      ]
    },
    {
      "jobFamilyId": "JF_SAL_05",
      "familyGroupId": "FG_SALES",
      "majorCategoryNum": 9,
      "majorCategoryLabel": "영업·판매·무역",
      "majorCategoryIcon": "💼",
      "jobFamilyNameKo": "광고·미디어영업",
      "typicalRoles": [
        "광고영업담당",
        "미디어영업",
        "스폰서십매니저",
        "광고솔루션영업"
      ]
    },
    {
      "jobFamilyId": "JF_SAL_06",
      "familyGroupId": "FG_SALES",
      "majorCategoryNum": 9,
      "majorCategoryLabel": "영업·판매·무역",
      "majorCategoryIcon": "💼",
      "jobFamilyNameKo": "영업관리·영업지원",
      "typicalRoles": [
        "영업관리",
        "영업지원",
        "영업기획",
        "영업관리담당",
        "영업지원담당",
        "세일즈옵스",
        "영업기획자",
        "CRM운영담당"
      ]
    },
    {
      "jobFamilyId": "JF_CS_01",
      "familyGroupId": "FG_CS",
      "majorCategoryNum": 10,
      "majorCategoryLabel": "고객상담·TM",
      "majorCategoryIcon": "🎧",
      "jobFamilyNameKo": "CS",
      "typicalRoles": [
        "고객담당자",
        "고객성공매니저(CSM)",
        "고객센터관리자",
        "고객센터상담원",
        "어카운트매니저(AM)",
        "인바운드상담원",
        "채팅상담원",
        "콜센터상담원",
        "콜센터운영관리자",
        "키어카운트매니저",
        "CS담당",
        "CS팀장",
        "QA매니저",
        "WFM담당"
      ]
    },
    {
      "jobFamilyId": "JF_CS_02",
      "familyGroupId": "FG_CS",
      "majorCategoryNum": 10,
      "majorCategoryLabel": "고객상담·TM",
      "majorCategoryIcon": "🎧",
      "jobFamilyNameKo": "TM",
      "typicalRoles": [
        "아웃바운드상담원",
        "텔레마케터(TM)",
        "콜영업",
        "전화영업담당"
      ]
    },
    {
      "jobFamilyId": "JF_OPS_01",
      "familyGroupId": "FG_SCM",
      "majorCategoryNum": 11,
      "majorCategoryLabel": "구매·자재·물류",
      "majorCategoryIcon": "📦",
      "jobFamilyNameKo": "SCM",
      "typicalRoles": [
        "3PL관리",
        "공급망관리담당",
        "구매관리자",
        "구매담당",
        "구매팀장",
        "물류관리자",
        "물류기획담당",
        "물류운영담당",
        "물류현장담당",
        "바이어(구매)",
        "소싱담당",
        "유통관리자",
        "자재관리담당",
        "자재관리자",
        "재고관리담당",
        "전략구매담당",
        "조달담당",
        "창고관리담당",
        "SCM매니저",
        "WMS운영"
      ]
    },
    {
      "jobFamilyId": "JF_OPS_04",
      "familyGroupId": "FG_SCM",
      "majorCategoryNum": 11,
      "majorCategoryLabel": "구매·자재·물류",
      "majorCategoryIcon": "📦",
      "jobFamilyNameKo": "이커머스운영·플랫폼운영",
      "typicalRoles": [
        "이커머스운영담당",
        "플랫폼운영담당",
        "커머스MD",
        "온라인운영매니저"
      ]
    },
    {
      "jobFamilyId": "JF_OPS_05",
      "familyGroupId": "FG_SCM",
      "majorCategoryNum": 11,
      "majorCategoryLabel": "구매·자재·물류",
      "majorCategoryIcon": "📦",
      "jobFamilyNameKo": "시설·자산관리",
      "typicalRoles": [
        "시설관리자",
        "시설관리담당",
        "자산관리담당",
        "CAFM운영",
        "부동산운영담당",
        "빌딩관리자"
      ]
    },
    {
      "jobFamilyId": "JF_OPS_06",
      "familyGroupId": "FG_SCM",
      "majorCategoryNum": 11,
      "majorCategoryLabel": "구매·자재·물류",
      "majorCategoryIcon": "📦",
      "jobFamilyNameKo": "운전·배송·물류현장직",
      "typicalRoles": [
        "납품·배송기사",
        "배달기사",
        "수행기사·운전기사",
        "화물기사",
        "중장비기사",
        "버스기사",
        "택시기사",
        "지게차기사",
        "퀵서비스기사",
        "탑차기사",
        "조종사·기관사"
      ]
    },
    {
      "jobFamilyId": "JF_OPS_07",
      "familyGroupId": "FG_SCM",
      "majorCategoryNum": 11,
      "majorCategoryLabel": "구매·자재·물류",
      "majorCategoryIcon": "📦",
      "jobFamilyNameKo": "수출입·통관",
      "typicalRoles": [
        "통관담당",
        "수출입담당",
        "무역사무원",
        "포워더",
        "관세사(무역)",
        "수출입물류담당"
      ]
    },
    {
      "jobFamilyId": "JF_PMD_01",
      "familyGroupId": "FG_PRODUCT_MD",
      "majorCategoryNum": 12,
      "majorCategoryLabel": "상품기획·MD",
      "majorCategoryIcon": "🛍️",
      "jobFamilyNameKo": "상품기획·카테고리매니저",
      "typicalRoles": [
        "상품기획자",
        "카테고리매니저",
        "MD담당(기획)",
        "품목기획자"
      ]
    },
    {
      "jobFamilyId": "JF_PMD_02",
      "familyGroupId": "FG_PRODUCT_MD",
      "majorCategoryNum": 12,
      "majorCategoryLabel": "상품기획·MD",
      "majorCategoryIcon": "🛍️",
      "jobFamilyNameKo": "MD·바이어·소싱",
      "typicalRoles": [
        "MD(머천다이저)",
        "바이어(패션/유통)",
        "소싱담당",
        "구매MD"
      ]
    },
    {
      "jobFamilyId": "JF_PMD_03",
      "familyGroupId": "FG_PRODUCT_MD",
      "majorCategoryNum": 12,
      "majorCategoryLabel": "상품기획·MD",
      "majorCategoryIcon": "🛍️",
      "jobFamilyNameKo": "VMD·비주얼머천다이징",
      "typicalRoles": [
        "VMD(비주얼머천다이저)",
        "매장기획담당",
        "디스플레이기획"
      ]
    },
    {
      "jobFamilyId": "JF_PMD_04",
      "familyGroupId": "FG_PRODUCT_MD",
      "majorCategoryNum": 12,
      "majorCategoryLabel": "상품기획·MD",
      "majorCategoryIcon": "🛍️",
      "jobFamilyNameKo": "이커머스MD·온라인MD",
      "typicalRoles": [
        "온라인MD",
        "이커머스MD",
        "셀러매니저",
        "마켓플레이스MD"
      ]
    },
    {
      "jobFamilyId": "JF_MFG_01",
      "familyGroupId": "FG_PRODUCTION",
      "majorCategoryNum": 13,
      "majorCategoryLabel": "생산·품질·안전",
      "majorCategoryIcon": "🏭",
      "jobFamilyNameKo": "생산관리·공정엔지니어",
      "typicalRoles": [
        "생산직종사자",
        "생산관리자",
        "공정엔지니어",
        "제조기술담당",
        "생산기술엔지니어",
        "공장관리자",
        "포장·가공담당"
      ]
    },
    {
      "jobFamilyId": "JF_MFG_02",
      "familyGroupId": "FG_PRODUCTION",
      "majorCategoryNum": 13,
      "majorCategoryLabel": "생산·품질·안전",
      "majorCategoryIcon": "🏭",
      "jobFamilyNameKo": "품질관리·QC·품질보증",
      "typicalRoles": [
        "품질관리자",
        "QC엔지니어",
        "품질보증담당",
        "검사담당",
        "QA(생산)",
        "6시그마담당"
      ]
    },
    {
      "jobFamilyId": "JF_MFG_03",
      "familyGroupId": "FG_PRODUCTION",
      "majorCategoryNum": 13,
      "majorCategoryLabel": "생산·품질·안전",
      "majorCategoryIcon": "🏭",
      "jobFamilyNameKo": "안전관리·EHS·환경",
      "typicalRoles": [
        "안전관리자",
        "EHS담당",
        "환경관리자",
        "보건관리자",
        "산업안전담당"
      ]
    },
    {
      "jobFamilyId": "JF_MFG_04",
      "familyGroupId": "FG_PRODUCTION",
      "majorCategoryNum": 13,
      "majorCategoryLabel": "생산·품질·안전",
      "majorCategoryIcon": "🏭",
      "jobFamilyNameKo": "설비·유지보수·기계정비",
      "typicalRoles": [
        "설비엔지니어",
        "유지보수담당",
        "기계정비기사",
        "PM엔지니어",
        "설비보전담당"
      ]
    },
    {
      "jobFamilyId": "JF_MFG_05",
      "familyGroupId": "FG_PRODUCTION",
      "majorCategoryNum": 13,
      "majorCategoryLabel": "생산·품질·안전",
      "majorCategoryIcon": "🏭",
      "jobFamilyNameKo": "전기·전자·반도체엔지니어",
      "typicalRoles": [
        "전기엔지니어",
        "전자설계엔지니어",
        "반도체엔지니어",
        "PCB설계엔지니어",
        "회로설계담당"
      ]
    },
    {
      "jobFamilyId": "JF_MFG_06",
      "familyGroupId": "FG_PRODUCTION",
      "majorCategoryNum": 13,
      "majorCategoryLabel": "생산·품질·안전",
      "majorCategoryIcon": "🏭",
      "jobFamilyNameKo": "기계·자동화·로봇엔지니어",
      "typicalRoles": [
        "기계엔지니어",
        "자동화엔지니어",
        "로봇엔지니어",
        "CAD설계엔지니어",
        "메카트로닉스",
        "AI로봇엔지니어"
      ]
    },
    {
      "jobFamilyId": "JF_MFG_07",
      "familyGroupId": "FG_PRODUCTION",
      "majorCategoryNum": 13,
      "majorCategoryLabel": "생산·품질·안전",
      "majorCategoryIcon": "🏭",
      "jobFamilyNameKo": "화학·소재·환경엔지니어",
      "typicalRoles": [
        "화학엔지니어",
        "소재엔지니어",
        "환경엔지니어",
        "공정개발엔지니어",
        "고분자엔지니어"
      ]
    },
    {
      "jobFamilyId": "JF_MFG_08",
      "familyGroupId": "FG_PRODUCTION",
      "majorCategoryNum": 13,
      "majorCategoryLabel": "생산·품질·안전",
      "majorCategoryIcon": "🏭",
      "jobFamilyNameKo": "통신·RF·하드웨어엔지니어",
      "typicalRoles": [
        "통신엔지니어",
        "RF엔지니어",
        "하드웨어엔지니어",
        "필드엔지니어",
        "안테나엔지니어"
      ]
    },
    {
      "jobFamilyId": "JF_MFG_09",
      "familyGroupId": "FG_PRODUCTION",
      "majorCategoryNum": 13,
      "majorCategoryLabel": "생산·품질·안전",
      "majorCategoryIcon": "🏭",
      "jobFamilyNameKo": "기계설계·CAD·엔지니어링",
      "typicalRoles": [
        "기계설계엔지니어",
        "CAD설계담당",
        "3D설계엔지니어",
        "메카니컬엔지니어",
        "구조해석담당",
        "CAD/CAM담당"
      ]
    },
    {
      "jobFamilyId": "JF_MFG_10",
      "familyGroupId": "FG_PRODUCTION",
      "majorCategoryNum": 13,
      "majorCategoryLabel": "생산·품질·안전",
      "majorCategoryIcon": "🏭",
      "jobFamilyNameKo": "플랜트·에너지엔지니어",
      "typicalRoles": [
        "플랜트엔지니어",
        "에너지엔지니어",
        "화공플랜트담당",
        "피핑엔지니어",
        "프로세스엔지니어"
      ]
    },
    {
      "jobFamilyId": "JF_CON_01",
      "familyGroupId": "FG_CONSTRUCTION",
      "majorCategoryNum": 14,
      "majorCategoryLabel": "건설·건축",
      "majorCategoryIcon": "🏗️",
      "jobFamilyNameKo": "건축설계·건축기사·감리",
      "typicalRoles": [
        "건축가",
        "건축기사",
        "건축설계담당",
        "감리원",
        "건축구조기사"
      ]
    },
    {
      "jobFamilyId": "JF_CON_02",
      "familyGroupId": "FG_CONSTRUCTION",
      "majorCategoryNum": 14,
      "majorCategoryLabel": "건설·건축",
      "majorCategoryIcon": "🏗️",
      "jobFamilyNameKo": "토목·시공·현장관리",
      "typicalRoles": [
        "토목기사",
        "시공기사",
        "현장관리자",
        "공무",
        "공무(현장)",
        "토목설계기사",
        "현장보조"
      ]
    },
    {
      "jobFamilyId": "JF_CON_03",
      "familyGroupId": "FG_CONSTRUCTION",
      "majorCategoryNum": 14,
      "majorCategoryLabel": "건설·건축",
      "majorCategoryIcon": "🏗️",
      "jobFamilyNameKo": "전기·소방·설비공사",
      "typicalRoles": [
        "소방설비기사",
        "전기기사",
        "소방설비담당",
        "설비공사담당",
        "배관기사",
        "전기설계담당"
      ]
    },
    {
      "jobFamilyId": "JF_CON_04",
      "familyGroupId": "FG_CONSTRUCTION",
      "majorCategoryNum": 14,
      "majorCategoryLabel": "건설·건축",
      "majorCategoryIcon": "🏗️",
      "jobFamilyNameKo": "건설안전·환경기사",
      "typicalRoles": [
        "건설안전관리자",
        "환경기사",
        "비파괴검사기사",
        "건설안전기사"
      ]
    },
    {
      "jobFamilyId": "JF_CON_05",
      "familyGroupId": "FG_CONSTRUCTION",
      "majorCategoryNum": 14,
      "majorCategoryLabel": "건설·건축",
      "majorCategoryIcon": "🏗️",
      "jobFamilyNameKo": "인테리어·공간기획",
      "typicalRoles": [
        "실내건축기사",
        "인테리어기획자",
        "공간기획자",
        "인테리어설계담당"
      ]
    },
    {
      "jobFamilyId": "JF_CON_06",
      "familyGroupId": "FG_CONSTRUCTION",
      "majorCategoryNum": 14,
      "majorCategoryLabel": "건설·건축",
      "majorCategoryIcon": "🏗️",
      "jobFamilyNameKo": "도시계획·조경·부동산",
      "typicalRoles": [
        "도시설계담당",
        "조경기사",
        "조경설계담당",
        "환경기사",
        "비파괴검사원",
        "분양매니저"
      ]
    },
    {
      "jobFamilyId": "JF_SVC_01",
      "familyGroupId": "FG_SERVICE",
      "majorCategoryNum": 15,
      "majorCategoryLabel": "서비스·식음료",
      "majorCategoryIcon": "🍽️",
      "jobFamilyNameKo": "호텔·항공·여행",
      "typicalRoles": [
        "호텔리어",
        "승무원(항공)",
        "여행에이전트",
        "여행가이드",
        "객실담당",
        "프론트담당",
        "호텔종사자",
        "승무원"
      ]
    },
    {
      "jobFamilyId": "JF_SVC_02",
      "familyGroupId": "FG_SERVICE",
      "majorCategoryNum": 15,
      "majorCategoryLabel": "서비스·식음료",
      "majorCategoryIcon": "🍽️",
      "jobFamilyNameKo": "식·음료·F&B",
      "typicalRoles": [
        "요리사",
        "조리사",
        "셰프·주방장",
        "제과제빵사",
        "바리스타",
        "카페·레스토랑매니저",
        "홀서버",
        "주방보조",
        "소믈리에·바텐더",
        "영양사",
        "푸드스타일리스트",
        "식품연구원(현장)"
      ]
    },
    {
      "jobFamilyId": "JF_SVC_04",
      "familyGroupId": "FG_SERVICE",
      "majorCategoryNum": 15,
      "majorCategoryLabel": "서비스·식음료",
      "majorCategoryIcon": "🍽️",
      "jobFamilyNameKo": "경호·경비·시설보안",
      "typicalRoles": [
        "경호원",
        "경비원",
        "시설보안요원",
        "청원경찰"
      ]
    },
    {
      "jobFamilyId": "JF_SVC_06",
      "familyGroupId": "FG_SERVICE",
      "majorCategoryNum": 15,
      "majorCategoryLabel": "서비스·식음료",
      "majorCategoryIcon": "🍽️",
      "jobFamilyNameKo": "기능·숙련기술직",
      "typicalRoles": [
        "정비기사",
        "설치·수리기사",
        "전기공",
        "배관공",
        "용접공",
        "냉동설비기사",
        "도장공",
        "기계수리기사",
        "용접사"
      ]
    },
    {
      "jobFamilyId": "JF_SVC_08",
      "familyGroupId": "FG_SERVICE",
      "majorCategoryNum": 15,
      "majorCategoryLabel": "서비스·식음료",
      "majorCategoryIcon": "🍽️",
      "jobFamilyNameKo": "매장서비스",
      "typicalRoles": [
        "고객서비스담당",
        "리셉셔니스트",
        "리테일어소시에이트",
        "리테일운영담당",
        "매장관리자",
        "매장슈퍼바이저",
        "매장직원",
        "샵매니저",
        "스토어매니저",
        "안내데스크담당",
        "운영보조",
        "점장",
        "판매사원",
        "판매원"
      ]
    },
    {
      "jobFamilyId": "JF_BNK_01",
      "familyGroupId": "FG_FINANCE_FIN",
      "majorCategoryNum": 17,
      "majorCategoryLabel": "금융·보험",
      "majorCategoryIcon": "🏦",
      "jobFamilyNameKo": "금융사무·은행텔러",
      "typicalRoles": [
        "은행원",
        "텔러(Teller)",
        "금융사무원",
        "창구직원",
        "출납담당"
      ]
    },
    {
      "jobFamilyId": "JF_BNK_02",
      "familyGroupId": "FG_FINANCE_FIN",
      "majorCategoryNum": 17,
      "majorCategoryLabel": "금융·보험",
      "majorCategoryIcon": "🏦",
      "jobFamilyNameKo": "금융상품영업·PB",
      "typicalRoles": [
        "금융영업담당",
        "PB(프라이빗뱅커)",
        "WM(Wealth Manager)",
        "자산관리사",
        "재무설계사(CFP)"
      ]
    },
    {
      "jobFamilyId": "JF_BNK_03",
      "familyGroupId": "FG_FINANCE_FIN",
      "majorCategoryNum": 17,
      "majorCategoryLabel": "금융·보험",
      "majorCategoryIcon": "🏦",
      "jobFamilyNameKo": "대출·여신심사",
      "typicalRoles": [
        "대출상담사",
        "여신심사담당",
        "신용심사담당",
        "담보심사담당",
        "모기지담당"
      ]
    },
    {
      "jobFamilyId": "JF_BNK_04",
      "familyGroupId": "FG_FINANCE_FIN",
      "majorCategoryNum": 17,
      "majorCategoryLabel": "금융·보험",
      "majorCategoryIcon": "🏦",
      "jobFamilyNameKo": "보험상담·보험사무",
      "typicalRoles": [
        "보험상담사",
        "보험사무원",
        "언더라이터(보험)",
        "계약심사담당"
      ]
    },
    {
      "jobFamilyId": "JF_BNK_05",
      "familyGroupId": "FG_FINANCE_FIN",
      "majorCategoryNum": 17,
      "majorCategoryLabel": "금융·보험",
      "majorCategoryIcon": "🏦",
      "jobFamilyNameKo": "보험상품개발·계리",
      "typicalRoles": [
        "보험상품개발자",
        "보험기획담당",
        "계리사(보조)",
        "상품전략담당"
      ]
    },
    {
      "jobFamilyId": "JF_BNK_06",
      "familyGroupId": "FG_FINANCE_FIN",
      "majorCategoryNum": 17,
      "majorCategoryLabel": "금융·보험",
      "majorCategoryIcon": "🏦",
      "jobFamilyNameKo": "보험설계사",
      "typicalRoles": [
        "보험설계사",
        "GA보험설계사",
        "재무설계사(FP)",
        "보험컨설턴트"
      ]
    },
    {
      "jobFamilyId": "JF_BNK_07",
      "familyGroupId": "FG_FINANCE_FIN",
      "majorCategoryNum": 17,
      "majorCategoryLabel": "금융·보험",
      "majorCategoryIcon": "🏦",
      "jobFamilyNameKo": "손해사정·클레임",
      "typicalRoles": [
        "손해사정사",
        "클레임담당",
        "보상담당",
        "배상담당",
        "사고조사담당"
      ]
    },
    {
      "jobFamilyId": "JF_BNK_08",
      "familyGroupId": "FG_FINANCE_FIN",
      "majorCategoryNum": 17,
      "majorCategoryLabel": "금융·보험",
      "majorCategoryIcon": "🏦",
      "jobFamilyNameKo": "심사역·신용분석·IB",
      "typicalRoles": [
        "심사담당",
        "심사역",
        "신용분석가",
        "IB담당",
        "기업금융담당",
        "인수합병담당",
        "구조화금융"
      ]
    },
    {
      "jobFamilyId": "JF_BNK_09",
      "familyGroupId": "FG_FINANCE_FIN",
      "majorCategoryNum": 17,
      "majorCategoryLabel": "금융·보험",
      "majorCategoryIcon": "🏦",
      "jobFamilyNameKo": "애널리스트·리서치",
      "typicalRoles": [
        "주식애널리스트",
        "채권애널리스트",
        "리서치담당",
        "투자분석가",
        "섹터애널리스트"
      ]
    },
    {
      "jobFamilyId": "JF_BNK_10",
      "familyGroupId": "FG_FINANCE_FIN",
      "majorCategoryNum": 17,
      "majorCategoryLabel": "금융·보험",
      "majorCategoryIcon": "🏦",
      "jobFamilyNameKo": "딜러·트레이더",
      "typicalRoles": [
        "외환딜러",
        "주식트레이더",
        "파생상품트레이더",
        "외환관리담당",
        "FX담당"
      ]
    },
    {
      "jobFamilyId": "JF_BNK_11",
      "familyGroupId": "FG_FINANCE_FIN",
      "majorCategoryNum": 17,
      "majorCategoryLabel": "금융·보험",
      "majorCategoryIcon": "🏦",
      "jobFamilyNameKo": "펀드매니저·자산운용",
      "typicalRoles": [
        "펀드매니저",
        "자산운용역",
        "포트폴리오매니저",
        "운용전략담당"
      ]
    },
    {
      "jobFamilyId": "JF_BNK_12",
      "familyGroupId": "FG_FINANCE_FIN",
      "majorCategoryNum": 17,
      "majorCategoryLabel": "금융·보험",
      "majorCategoryIcon": "🏦",
      "jobFamilyNameKo": "계리사",
      "typicalRoles": [
        "계리사",
        "보험수리담당",
        "보험계리사",
        "계리분석담당"
      ]
    },
    {
      "jobFamilyId": "JF_BNK_13",
      "familyGroupId": "FG_FINANCE_FIN",
      "majorCategoryNum": 17,
      "majorCategoryLabel": "금융·보험",
      "majorCategoryIcon": "🏦",
      "jobFamilyNameKo": "리스크·금융컴플라이언스",
      "typicalRoles": [
        "리스크관리담당",
        "금융컴플라이언스",
        "내부통제담당",
        "리스크애널리스트"
      ]
    },
    {
      "jobFamilyId": "JF_BNK_14",
      "familyGroupId": "FG_FINANCE_FIN",
      "majorCategoryNum": 17,
      "majorCategoryLabel": "금융·보험",
      "majorCategoryIcon": "🏦",
      "jobFamilyNameKo": "핀테크·디지털금융기획",
      "typicalRoles": [
        "핀테크기획자",
        "디지털금융담당",
        "금융IT기획자",
        "오픈뱅킹담당",
        "마이데이터담당"
      ]
    },
    {
      "jobFamilyId": "JF_BNK_15",
      "familyGroupId": "FG_FINANCE_FIN",
      "majorCategoryNum": 17,
      "majorCategoryLabel": "금융·보험",
      "majorCategoryIcon": "🏦",
      "jobFamilyNameKo": "부동산투자·신탁",
      "typicalRoles": [
        "부동산투자담당",
        "신탁업무담당",
        "REITs담당",
        "자산관리(부동산)"
      ]
    },
    {
      "jobFamilyId": "JF_RND_01",
      "familyGroupId": "FG_RND",
      "majorCategoryNum": 18,
      "majorCategoryLabel": "연구·R&D",
      "majorCategoryIcon": "🔬",
      "jobFamilyNameKo": "자연과학·생명과학R&D",
      "typicalRoles": [
        "R&D연구원",
        "생명과학연구원",
        "신소재연구원",
        "화학연구원",
        "재료공학연구원"
      ]
    },
    {
      "jobFamilyId": "JF_RND_02",
      "familyGroupId": "FG_RND",
      "majorCategoryNum": 18,
      "majorCategoryLabel": "연구·R&D",
      "majorCategoryIcon": "🔬",
      "jobFamilyNameKo": "바이오·제약·임상연구",
      "typicalRoles": [
        "바이오연구원",
        "제약연구원",
        "임상연구원(CRA)",
        "RA담당",
        "규제담당"
      ]
    },
    {
      "jobFamilyId": "JF_RND_03",
      "familyGroupId": "FG_RND",
      "majorCategoryNum": 18,
      "majorCategoryLabel": "연구·R&D",
      "majorCategoryIcon": "🔬",
      "jobFamilyNameKo": "식품과학·영양·식품개발",
      "typicalRoles": [
        "식품연구원",
        "영양사",
        "식품공학담당",
        "식품개발담당",
        "조리과학연구원"
      ]
    },
    {
      "jobFamilyId": "JF_MED_H04",
      "familyGroupId": "FG_HEALTHCARE",
      "majorCategoryNum": 19,
      "majorCategoryLabel": "의료·복지",
      "majorCategoryIcon": "🏥",
      "jobFamilyNameKo": "의료행정",
      "typicalRoles": [
        "간호조무사",
        "기타의료종사자",
        "병원코디네이터",
        "원무과직원",
        "원무행정담당",
        "의료·약무보조",
        "의무기록사"
      ]
    },
    {
      "jobFamilyId": "JF_SOC_01",
      "familyGroupId": "FG_HEALTHCARE",
      "majorCategoryNum": 19,
      "majorCategoryLabel": "의료·복지",
      "majorCategoryIcon": "🏥",
      "jobFamilyNameKo": "사회복지사·요양보호사",
      "typicalRoles": [
        "사회복지사",
        "요양보호사",
        "케어매니저",
        "생활지원사",
        "재활담당"
      ]
    },
    {
      "jobFamilyId": "JF_SOC_02",
      "familyGroupId": "FG_HEALTHCARE",
      "majorCategoryNum": 19,
      "majorCategoryLabel": "의료·복지",
      "majorCategoryIcon": "🏥",
      "jobFamilyNameKo": "상담사·심리치료사",
      "typicalRoles": [
        "상담사",
        "심리치료사",
        "직업상담사",
        "EAP상담사",
        "정신건강사회복지사"
      ]
    },
    {
      "jobFamilyId": "JF_EDU_01",
      "familyGroupId": "FG_EDUCATION",
      "majorCategoryNum": 20,
      "majorCategoryLabel": "교육",
      "majorCategoryIcon": "📚",
      "jobFamilyNameKo": "유아·초중고 교사·보육교사",
      "typicalRoles": [
        "유치원교사",
        "보육교사",
        "초등교사",
        "중학교교사",
        "고등학교교사",
        "특수교사",
        "교직원",
        "조교",
        "방과후교사"
      ]
    },
    {
      "jobFamilyId": "JF_EDU_05",
      "familyGroupId": "FG_EDUCATION",
      "majorCategoryNum": 20,
      "majorCategoryLabel": "교육",
      "majorCategoryIcon": "📚",
      "jobFamilyNameKo": "기업교육·HRD·교수설계",
      "typicalRoles": [
        "HRD강사",
        "기업교육강사",
        "교수설계자",
        "이러닝기획자",
        "러닝디자이너",
        "사내강사",
        "L&D담당",
        "역량개발담당"
      ]
    },
    {
      "jobFamilyId": "JF_EDU_06",
      "familyGroupId": "FG_EDUCATION",
      "majorCategoryNum": 20,
      "majorCategoryLabel": "교육",
      "majorCategoryIcon": "📚",
      "jobFamilyNameKo": "이러닝·에듀테크개발",
      "typicalRoles": [
        "이러닝개발자",
        "콘텐츠개발자",
        "SCORM개발자",
        "에듀테크기획자",
        "교육플랫폼개발",
        "Moodle운영자",
        "교재개발자"
      ]
    },
    {
      "jobFamilyId": "JF_PUB_01",
      "familyGroupId": "FG_PUBLIC",
      "majorCategoryNum": 21,
      "majorCategoryLabel": "공공·복지",
      "majorCategoryIcon": "🏛️",
      "jobFamilyNameKo": "공무원·행정직",
      "typicalRoles": [
        "공무원",
        "행정직",
        "사무관",
        "주무관",
        "정책기획담당"
      ]
    },
    {
      "jobFamilyId": "JF_PUB_02",
      "familyGroupId": "FG_PUBLIC",
      "majorCategoryNum": 21,
      "majorCategoryLabel": "공공·복지",
      "majorCategoryIcon": "🏛️",
      "jobFamilyNameKo": "공공기관·준정부",
      "typicalRoles": [
        "공공기관직원",
        "준정부기관담당",
        "기금운용담당",
        "공공기관기획"
      ]
    },
    {
      "jobFamilyId": "JF_PUB_04",
      "familyGroupId": "FG_PUBLIC",
      "majorCategoryNum": 21,
      "majorCategoryLabel": "공공·복지",
      "majorCategoryIcon": "🏛️",
      "jobFamilyNameKo": "군무원·경찰·소방",
      "typicalRoles": [
        "군무원",
        "경찰행정직",
        "소방행정직",
        "교정직",
        "출입국심사관"
      ]
    },
    {
      "jobFamilyId": "JF_PUB_05",
      "familyGroupId": "FG_PUBLIC",
      "majorCategoryNum": 21,
      "majorCategoryLabel": "공공·복지",
      "majorCategoryIcon": "🏛️",
      "jobFamilyNameKo": "보건·방역·사회서비스직",
      "typicalRoles": [
        "보건관리자",
        "방역기사",
        "방재기사",
        "환경미화원",
        "사서",
        "자원봉사코디네이터",
        "보건교사"
      ]
    }
  ]
};

const screenNameMap = {
  Start: "시작 화면",
  Intro: "서비스 소개 화면",
  Differentiation: "차별점 안내 화면",
  TryPreview: "미리 체험 안내 화면",
  KQuestion: "K영역 샘플 문항 화면",
  AQuestion: "A영역 샘플 문항 화면",
  PQuestion: "P영역 샘플 문항 화면",
  Benefits: "혜택 안내 화면",
  GoStudy: "학습하러 가기 화면",
  AuthLanding: "로그인 선택 화면",
  "아이디 입력": "아이디 입력 화면",
  "서비스 약관": "서비스 약관 동의 화면",
  "산업군 선택": "산업군 선택 화면",
  "직무군 선택": "직무군 선택 화면",
  "홈 카드 목록": "홈 스킬카드 목록 화면",
  "카드 목록": "홈 스킬카드 목록 화면",
  "B2B 영업 카드 상세": "B2B 영업 스킬카드 상세 화면",
  "PM/PO 카드 상세": "PM/PO 스킬카드 상세 화면",
  "K-03": "K영역 고객 발굴 문항 화면",
  "K-01": "K영역 요구사항 분해 문항 화면",
  "A-04": "A영역 우선순위 충돌 문항 화면",
  "P-01": "P영역 KPI 스캔 문항 화면",
  "K 해설": "K영역 해설 화면",
  "A 해설": "A영역 해설 화면",
  "전체 결과 요약": "전체 결과 요약 화면",
  "리포트 목록": "인사이트 리포트 목록 화면",
  "리포트 상세": "인사이트 리포트 상세 화면",
  "카카오 로그인": "카카오 로그인 완료 화면",
  "구글 로그인": "구글 로그인 완료 화면",
  "애플 로그인": "애플 로그인 완료 화면",
  "이메일 회원가입": "이메일 회원가입 완료 화면",
  "B2B 영업": "B2B 영업 프로필 완료 화면",
  "PM/PO": "PM/PO 프로필 완료 화면",
};

const calculationCriteria = {
  users: "검색 조건에 포함되는 단계별 퍼널 raw data와 K/A/P raw data의 고유 사용자 ID를 합산한 뒤 중복 제거합니다.",
  onboarding: "온보딩 완료율 = 온보딩 단계의 완료/활성 건수 ÷ 온보딩 진입 건수 × 100",
  profile: "프로필 완료율 = 프로필 설정 단계의 완료/활성 건수 ÷ 프로필 설정 진입 건수 × 100",
  card: "스킬카드 진입률 = 스킬카드 진입 수 ÷ 프로필 설정 완료 수 × 100",
  kap: "K/A/P 완료율 = 문항 풀이 단계의 완료/활성 건수 ÷ 문항 풀이 진입 건수 × 100",
  report: "인사이트 확인율 = 인사이트 완료/활성 건수 ÷ K/A/P 완료 수 × 100. K/A/P 완료 수가 0이면 인사이트 진입 수를 보조 분모로 사용합니다.",
  funnel: "진입 수는 단계별 raw data 건수, 완료 수는 status가 완료/활성인 건수, 전환율은 완료 수 ÷ 진입 수 × 100으로 계산합니다. 주요 이탈 지점은 이탈/미완료 사유의 최빈값입니다.",
  kapTable: "풀이 수는 직무군·영역·문항/세트 조합별 raw data 건수입니다. 대표 선택은 최빈 선택지, 정답률은 채점 대상 중 정답 비율, 해설/리포트 확인율은 각 확인값이 true인 비율입니다.",
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

function displayScreenName(value) {
  return screenNameMap[value] || (value ? `미정의 화면(${value})` : "-");
}

function getMemberType(row) {
  if (row.memberType) return row.memberType;
  if (row.report) return "리포트확인회원";
  if (row.explanation || row.choice) return "풀이완료회원";
  if (row.step === "인사이트" && row.status === "active") return "리포트확인회원";
  if (row.step === "해설/결과" || row.step === "문항 풀이") return row.status === "active" ? "풀이완료회원" : "프로필완료회원";
  if (row.step === "스킬카드" || row.step === "프로필 설정") return row.status === "active" ? "프로필완료회원" : "가입회원";
  if (row.step === "회원가입/로그인") return row.status === "active" ? "가입회원" : "방문자";
  return "방문자";
}

function questionScreenName(row) {
  if (row.area === "K") return `K영역 ${row.item} 화면`;
  if (row.area === "A") return `A영역 ${row.item} 화면`;
  if (row.area === "P") return `P영역 ${row.item} 화면`;
  return `${row.item} 화면`;
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

function showCalculation(key) {
  const panel = document.querySelector("#calculation-criteria-panel");
  const text = document.querySelector("#calculation-criteria-text");
  if (!panel || !text) return;
  text.textContent = calculationCriteria[key] || "등록된 계산 기준이 없습니다.";
  panel.classList.add("active");
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
                  <th>회원 구분</th>
                  <th>사용자 ID</th>
                  <th>세션</th>
                  <th>진입 화면</th>
                  <th>완료/마지막 화면</th>
                  <th>현재 상태</th>
                  <th>판단 사유</th>
                  <th>직무군</th>
                  <th>마지막 발생 시각</th>
                </tr>
              </thead>
              <tbody>
                ${page.pageRows.length ? page.pageRows.map((row) => `
                  <tr>
                    <td>${getMemberType(row)}</td>
                    <td>${row.user}</td>
                    <td>${row.session}</td>
                    <td>${displayScreenName(row.entry)}</td>
                    <td>${displayScreenName(row.completion)}</td>
                    <td>${row.status === "active" ? badge("완료/활성", "success") : badge("이탈/미완료", "warning")}</td>
                    <td>${row.reason}</td>
                    <td>${row.job}</td>
                    <td>${row.lastAt}</td>
                  </tr>
                `).join("") : emptyRow(9, "선택된 단계의 raw data가 없습니다.")}
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
                  <th>회원 구분</th>
                  <th>사용자 ID</th>
                  <th>세션</th>
                  <th>직무군</th>
                  <th>영역</th>
                  <th>문항/세트</th>
                  <th>문항 화면</th>
                  <th>해설 화면</th>
                  <th>리포트 화면</th>
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
                    <td>${getMemberType(row)}</td>
                    <td>${row.user}</td>
                    <td>${row.session}</td>
                    <td>${row.job}</td>
                    <td>${row.area}</td>
                    <td>${row.item}</td>
                    <td>${questionScreenName(row)}</td>
                    <td>${row.explanation ? `${row.area}영역 해설 화면` : "-"}</td>
                    <td>${row.report ? "인사이트 리포트 상세 화면" : "-"}</td>
                    <td>${row.choice}</td>
                    <td>${row.isCorrect == null ? "선택형" : row.isCorrect ? badge("정답", "success") : badge("오답", "warning")}</td>
                    <td>${row.explanation ? badge("확인", "success") : badge("미확인", "warning")}</td>
                    <td>${row.report ? badge("확인", "success") : badge("미확인", "warning")}</td>
                    <td>${row.occurredAt}</td>
                  </tr>
                `).join("") : emptyRow(14, "선택된 문항의 raw data가 없습니다.")}
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
    if (parsed?.jobFamilies && parsed?.industries) {
      const hasLegacyIndustry = parsed.industries.some((item) => item.code === "ALL" || !item.shortName);
      const hasLegacyJob = parsed.jobFamilies.some((item) => !item.majorCategoryLabel || !item.familyGroupId || !Array.isArray(item.typicalRoles));
      if (!hasLegacyIndustry && !hasLegacyJob) return parsed;
    }
    if (parsed?.jobs && parsed?.industries) {
      return {
        industries: parsed.industries.map((item, idx) => ({
          code: item.code,
          shortName: item.shortName || item.label,
          sortOrder: item.sortOrder || idx + 1,
        })),
        jobFamilies: parsed.jobs.map((item) => ({
          jobFamilyId: item.code,
          familyGroupId: item.familyGroupId || "FG_CUSTOM",
          majorCategoryLabel: item.majorCategoryLabel || "미분류",
          majorCategoryIcon: item.majorCategoryIcon || "",
          jobFamilyNameKo: item.jobFamilyNameKo || item.label,
          typicalRoles: item.typicalRoles || [],
        })),
      };
    }
  } catch (error) {
    // Fall through to defaults when stored data is malformed.
  }
  setCodeOptions(defaultCodeOptions);
  return structuredClone(defaultCodeOptions);
}

function setCodeOptions(options) {
  window.localStorage.setItem(CODE_STORAGE_KEY, JSON.stringify(options));
}

function renderTwemoji(root = document.body) {
  if (!window.twemoji || !root) return;
  window.twemoji.parse(root, {
    folder: "svg",
    ext: ".svg",
  });
}

function jobOptionLabel(item) {
  return item.jobFamilyNameKo;
}

function industryOptionLabel(item) {
  return item.shortName;
}

function renderSearchSelectOptions(wrapper, query = "") {
  const select = wrapper.controlledSelect;
  const list = wrapper.querySelector(".search-select-list");
  const normalized = query.trim().toLowerCase();
  const matched = [...select.options].filter((option) => {
    const label = option.textContent || "";
    const value = option.value || "";
    return !normalized || `${label} ${value}`.toLowerCase().includes(normalized);
  });
  list.innerHTML = matched.length
    ? matched.slice(0, 80).map((option) => `
      <button class="search-select-option ${option.selected ? "active" : ""}" type="button" data-value="${option.value}">
        ${option.textContent}
      </button>
    `).join("")
    : `<div class="search-select-empty">검색 결과가 없습니다.</div>`;
}

function enhanceSearchSelect(select) {
  let wrapper = select.nextElementSibling?.classList?.contains("search-select") ? select.nextElementSibling : null;
  if (!wrapper) {
    wrapper = document.createElement("div");
    wrapper.className = "search-select";
    wrapper.innerHTML = `
      <input type="text" autocomplete="off" placeholder="키워드 입력 후 선택" />
      <div class="search-select-list"></div>
    `;
    select.insertAdjacentElement("afterend", wrapper);
    select.classList.add("native-select-hidden");
    wrapper.controlledSelect = select;
    const input = wrapper.querySelector("input");
    const list = wrapper.querySelector(".search-select-list");
    input.addEventListener("focus", () => {
      wrapper.classList.add("open");
      input.select();
      renderSearchSelectOptions(wrapper, input.value);
    });
    input.addEventListener("input", () => {
      wrapper.classList.add("open");
      renderSearchSelectOptions(wrapper, input.value);
    });
    list.addEventListener("click", (event) => {
      const button = event.target.closest(".search-select-option");
      if (!button) return;
      select.value = button.dataset.value;
      input.value = select.selectedOptions[0]?.textContent || "";
      wrapper.classList.remove("open");
      select.dispatchEvent(new Event("change", { bubbles: true }));
    });
    document.addEventListener("click", (event) => {
      if (!wrapper.contains(event.target) && event.target !== select) wrapper.classList.remove("open");
    });
  }
  wrapper.controlledSelect = select;
  const input = wrapper.querySelector("input");
  input.value = select.selectedOptions[0]?.textContent || "";
  renderSearchSelectOptions(wrapper, "");
}

function fillSelect(selector, items, includeAll = false, getLabel = (item) => item.label, getValue = (item) => item.code) {
  const select = document.querySelector(selector);
  if (!select) return;
  const current = select.value;
  select.innerHTML = "";
  if (includeAll) select.add(new Option("전체", "all"));
  items.forEach((item) => select.add(new Option(getLabel(item), getValue(item))));
  if ([...select.options].some((option) => option.value === current)) {
    select.value = current;
  }
  enhanceSearchSelect(select);
}

function initializeCodeSelects() {
  const codes = getCodeOptions();
  const industries = [...codes.industries].sort((a, b) => a.sortOrder - b.sortOrder);
  fillSelect("#analytics-job", codes.jobFamilies, true, jobOptionLabel, (item) => item.jobFamilyId);
  fillSelect("#content-k-job", codes.jobFamilies, false, jobOptionLabel, (item) => item.jobFamilyId);
  fillSelect("#content-a-job", codes.jobFamilies, false, jobOptionLabel, (item) => item.jobFamilyId);
  fillSelect("#content-k-industry", industries, false, industryOptionLabel, (item) => item.code);
}

function toggleCodeSection(id) {
  document.querySelector(`#${id}`)?.classList.toggle("open");
}

function resetIndustryForm() {
  document.querySelector("#industry-original-code").value = "";
  document.querySelector("#industry-code").value = "";
  document.querySelector("#industry-code").disabled = false;
  document.querySelector("#industry-short-name").value = "";
  document.querySelector("#industry-sort-order").value = "";
}

function saveIndustryOption(event) {
  event.preventDefault();
  const codes = getCodeOptions();
  const original = document.querySelector("#industry-original-code").value.trim();
  const codeInput = document.querySelector("#industry-code");
  const nameInput = document.querySelector("#industry-short-name");
  const sortInput = document.querySelector("#industry-sort-order");
  const code = codeInput.value.trim();
  const shortName = nameInput.value.trim();
  const sortOrder = Number(sortInput.value);
  if (!code || !shortName || !sortOrder) return;

  const existingIndex = codes.industries.findIndex((item) => item.code === (original || code));
  const nextItem = { code, shortName, sortOrder };
  if (existingIndex >= 0) {
    codes.industries[existingIndex] = nextItem;
  } else if (!codes.industries.some((item) => item.code === code)) {
    codes.industries.push(nextItem);
  } else {
    window.alert("이미 존재하는 산업군 코드입니다.");
    return;
  }

  setCodeOptions(codes);
  resetIndustryForm();
  renderIndustryTable();
  initializeCodeSelects();
}

function editIndustryOption(code) {
  const item = getCodeOptions().industries.find((row) => row.code === code);
  if (!item) return;
  document.querySelector("#industry-original-code").value = item.code;
  document.querySelector("#industry-code").value = item.code;
  document.querySelector("#industry-code").disabled = true;
  document.querySelector("#industry-short-name").value = item.shortName;
  document.querySelector("#industry-sort-order").value = item.sortOrder;
}

function deleteIndustryOption(code) {
  if (!window.confirm("선택한 산업군을 삭제하시겠습니까?")) return;
  const codes = getCodeOptions();
  codes.industries = codes.industries.filter((item) => item.code !== code);
  setCodeOptions(codes);
  resetIndustryForm();
  renderIndustryTable();
  initializeCodeSelects();
}

function renderIndustryTable() {
  const body = document.querySelector("#industries-code-body");
  if (!body) return;
  const rows = [...getCodeOptions().industries].sort((a, b) => a.sortOrder - b.sortOrder);
  body.innerHTML = rows.length ? rows.map((item) => `
    <tr>
      <td>${item.code}</td>
      <td>${item.shortName}</td>
      <td>${item.sortOrder}</td>
      <td>${item.shortName}</td>
      <td>
        <div class="table-actions">
          <button class="button secondary small" type="button" onclick="editIndustryOption('${item.code}')">수정</button>
          <button class="button danger small" type="button" onclick="deleteIndustryOption('${item.code}')">삭제</button>
        </div>
      </td>
    </tr>
  `).join("") : emptyRow(5, "등록된 산업군이 없습니다.");
}

function resetJobFamilyForm() {
  document.querySelector("#job-original-id").value = "";
  document.querySelector("#job-family-id").value = "";
  document.querySelector("#job-family-id").disabled = false;
  document.querySelector("#job-family-group-id").value = "";
  document.querySelector("#job-major-label").value = "";
  document.querySelector("#job-family-name").value = "";
  document.querySelector("#job-typical-roles").value = "";
}

function saveJobFamily(event) {
  event.preventDefault();
  const codes = getCodeOptions();
  const original = document.querySelector("#job-original-id").value.trim();
  const jobFamilyId = document.querySelector("#job-family-id").value.trim();
  const nextItem = {
    jobFamilyId,
    familyGroupId: document.querySelector("#job-family-group-id").value.trim(),
    majorCategoryLabel: document.querySelector("#job-major-label").value.trim(),
    jobFamilyNameKo: document.querySelector("#job-family-name").value.trim(),
    typicalRoles: document.querySelector("#job-typical-roles").value
      .split("\n")
      .map((role) => role.trim())
      .filter(Boolean),
  };
  if (!nextItem.jobFamilyId || !nextItem.familyGroupId || !nextItem.majorCategoryLabel || !nextItem.jobFamilyNameKo) return;
  const sameCategory = codes.jobFamilies.find((item) => item.majorCategoryLabel === nextItem.majorCategoryLabel);
  const previous = codes.jobFamilies.find((item) => item.jobFamilyId === (original || jobFamilyId));
  nextItem.majorCategoryIcon = previous?.majorCategoryIcon || sameCategory?.majorCategoryIcon || "";

  const existingIndex = codes.jobFamilies.findIndex((item) => item.jobFamilyId === (original || jobFamilyId));
  if (existingIndex >= 0) {
    codes.jobFamilies[existingIndex] = nextItem;
  } else if (!codes.jobFamilies.some((item) => item.jobFamilyId === jobFamilyId)) {
    codes.jobFamilies.push(nextItem);
  } else {
    window.alert("이미 존재하는 직무군 ID입니다.");
    return;
  }

  setCodeOptions(codes);
  resetJobFamilyForm();
  renderJobFamilyGroups();
  initializeCodeSelects();
}

function editJobFamily(jobFamilyId) {
  const item = getCodeOptions().jobFamilies.find((row) => row.jobFamilyId === jobFamilyId);
  if (!item) return;
  document.querySelector("#job-original-id").value = item.jobFamilyId;
  document.querySelector("#job-family-id").value = item.jobFamilyId;
  document.querySelector("#job-family-id").disabled = true;
  document.querySelector("#job-family-group-id").value = item.familyGroupId;
  document.querySelector("#job-major-label").value = item.majorCategoryLabel;
  document.querySelector("#job-family-name").value = item.jobFamilyNameKo;
  document.querySelector("#job-typical-roles").value = item.typicalRoles.join("\n");
}

function deleteJobFamily(jobFamilyId) {
  if (!window.confirm("선택한 직무군을 삭제하시겠습니까?")) return;
  const codes = getCodeOptions();
  codes.jobFamilies = codes.jobFamilies.filter((item) => item.jobFamilyId !== jobFamilyId);
  setCodeOptions(codes);
  resetJobFamilyForm();
  renderJobFamilyGroups();
  initializeCodeSelects();
}

function renderJobFamilyGroups() {
  const target = document.querySelector("#job-family-groups");
  if (!target) return;
  const groups = getCodeOptions().jobFamilies.reduce((acc, item) => {
    const key = item.majorCategoryLabel || "미분류";
    if (!acc[key]) acc[key] = [];
    acc[key].push(item);
    return acc;
  }, {});

  target.innerHTML = Object.entries(groups).map(([label, items], idx) => `
    <details class="nested-accordion" ${idx === 0 ? "open" : ""}>
      <summary><span class="twemoji-icon">${items[0].majorCategoryIcon || ""}</span> ${label} <span>${items.length}개 직무군</span></summary>
      <div class="table-wrap">
        <table>
          <thead>
            <tr>
              <th>직무군 ID</th>
              <th>그룹 ID</th>
              <th>직무군명</th>
              <th>typical_roles</th>
              <th>프론트 최초 선택 표기</th>
              <th>관리</th>
            </tr>
          </thead>
          <tbody>
            ${items.map((item) => `
              <tr>
                <td>${item.jobFamilyId}</td>
                <td>${item.familyGroupId}</td>
                <td>${item.jobFamilyNameKo}</td>
                <td>${item.typicalRoles.join(", ") || "역할 미등록"}</td>
                <td>${item.jobFamilyNameKo}</td>
                <td>
                  <div class="table-actions">
                    <button class="button secondary small" type="button" onclick="editJobFamily('${item.jobFamilyId}')">수정</button>
                    <button class="button danger small" type="button" onclick="deleteJobFamily('${item.jobFamilyId}')">삭제</button>
                  </div>
                </td>
              </tr>
            `).join("")}
          </tbody>
        </table>
      </div>
    </details>
  `).join("");
  renderTwemoji(target);
}

function initializeCodeManagement() {
  if (!document.querySelector("#industries-code-body")) return;
  renderIndustryTable();
  renderJobFamilyGroups();
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
