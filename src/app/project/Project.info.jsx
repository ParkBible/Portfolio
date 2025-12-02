export const ProjectInfos = [
    {
        title: "스테이션 관제 시스템 (마이그레이션 버전)",
        description:
            "기존 Vanila JavaScript 및 Alpine.js로 구현된 레거시 코드의 복잡한 UI 구조의 유지보수 한계를 극복하고자 React 기반으로 전체 아키텍처를 재구성하였습니다. 컴포넌트 단위 설계, 상태 관리 체계 도입 등 유지보수성과 확장성을 고려해 마이그레이션하였습니다.",
        company: "(주)아이지아이에스",
        date: "2024.10 ~ ",
        role: "5인 개발(20%) - 실시간 MQTT 통신 기반 UI 구현, 페이지 전환 없는 SPA 구조 설계 및 상태 관리 구현",
        stacks: ["React", "TypeScript", "TailwindCSS", "Spring_Boot", "PostgreSQL"],
    },
    {
        title: "통합 회원관리(IAM) 시스템",
        description:
            "사내 여러 웹 솔루션에서 공통으로 사용하는 인증·인가 체계를 통합하기 위해 JWT 토큰 방식으로 SSO 기반의 회원관리 서비스를 개발했습니다. Redis 및 RabbitMQ를 이용해 유저 정보 동기화를 안정적으로 처리하도록 아키텍처를 개편했습니다. 기존 서비스들의 레거시 인증 로직에서 발생하던 보안 취약점을 개선하였습니다.",
        company: "(주)아이지아이에스",
        date: "2025.11 ~ ",
        role: "1인 개발 (아키텍처 협의 후 단독 구현)",
        stacks: ["Spring_Boot", "Java", "PostgreSQL", "Redis", "RabbitMQ"],
    },
    {
        title: "스테이션 스트리밍 뷰어",
        description:
            "스테이션과 드론, CCTV의 실시간 영상 스트리밍을 통합하여 보여주는 서비스입니다.",
        company: "(주)아이지아이에스",
        date: "2024.06 ~ 2024.09",
        role: "3인 개발(60%) - WebSocket을 통한 기기별 상태 모니터링 및 반응형 레이아웃 최적화",
        stacks: ["React", "TypeScript", "Spring_Boot", "PostgreSQL"],
    },
    {
        title: "스테이션 관제 시스템 (레거시 버전)",
        description:
            "무인으로 드론을 조작할 수 있는 기기인 '스테이션'을 원격으로 관리하는 시스템입니다. MQTT 프로토콜을 이용하여 통신합니다.",
        company: "(주)아이지아이에스",
        date: "2024.05 ~ ",
        role: "기존 프로젝트 고도화 - WebSocket을 통한 알림 기능과 드론 조작 기능",
        stacks: ["AlpineJS", "JavaScript", "TailwindCSS", "Go", "WebAssembly", "PostgreSQL"],
    },
    {
        title: "파노라마 관리 시스템",
        description:
            "드론이 촬영한 낱장 사진을 기반으로 파노라마를 생성하고, 이를 웹 링크 형태로 공유 가능한 형태로 가공하는 시스템입니다. Angular 기반으로 구현된 레거시 UI의 기능 개선 및 시각화 고도화를 담당하였습니다.",
        company: "(주)아이지아이에스",
        date: "2024.01 ~ ",
        role: "기존 프로젝트 유지보수 및 고도화 - 엑셀 기반 데이터 시각화 UI 추가, 작업물 저장 방식 개선, 탐색기 기능 고도화, 기타 버그 수정",
        stacks: ["Angular", "TypeScript", "Spring_Boot", "MariaDB"],
    },
    {
        title: "UAM 시뮬레이션",
        description:
            "CesiumJS 기반 3D 지도에 드론 모델을 시나리오에 따라 시뮬레이션하는 시스템입니다. React로 컨트롤 UI(배속, 일시정지, 되감기 등)를 구성하고, 프론트에서 시뮬레이션 타이밍과 사용자 조작 간 상호작용을 처리하였습니다.",
        company: "(주)아이지아이에스",
        date: "2023.11 ~ 2023.12",
        role: "1인 개발(100%) - 3D 지도 기반 시뮬레이션 구현, React UI 구성, 날씨 API 연동 및 DB 스케줄링 처리",
        stacks: ["React", "TypeScript", "Node.js_Express", "SQLite"],
    },
    {
        title: "드론 실증도시 통합 관제 시스템",
        description:
            "실시간 드론 배송/재난 데이터를 지도 상에서 시각화하고, 사용자에게 실시간 상태 정보를 제공하는 관제 시스템입니다. React 기반 UI를 구성하고, 지도 연동 기능 및 각종 상태 표시 컴포넌트를 개발하였습니다.",
        company: "(주)아이지아이에스, 창원시",
        date: "2023.07 ~ 2023.08",
        role: "2인 개발(80%) - UI 구성, 실시간 지도 상태 표시, View 테이블 기반 데이터 흐름 구성, 프론트/백 양단에서 TDD 방식 적용",
        stacks: [
            "React",
            "TypeScript",
            "React_Testing_Library",
            "Kotlin",
            "Spring_Boot",
            "Kotest",
            "PostgreSQL",
        ],
    },
    {
        title: "사내 플랫폼",
        description:
            "사내 서비스에 통합 계정으로 접근 가능한 SSO 기반 플랫폼입니다. 포털, 사용자 콘솔, 백오피스의 세 가지 사이트로 구성되어 있습니다. TDD 방식으로 테스트 코드를 작성하였습니다.",
        company: "(주)아이지아이에스",
        date: "2023.04 ~ ",
        role: "3인 개발(30%) - 제품 소개와 강의 신청, FAQ를 비롯한 기능성 페이지들의 UI와 플로우 구성, Keycloak 연동을 통해 인증/인가 구현, 테스트 코드 작성",
        stacks: [
            "React",
            "TypeScript",
            "React_Testing_Library",
            "Kotlin",
            "Spring_Boot",
            "Kotest",
            "GraphQL",
            "MariaDB",
        ],
    },
    {
        title: "웹 기반 대기 환경 모니터링 시스템",
        description:
            "실시간 대기 정보를 지도상에 시각화하고, 통계 데이터를 차트 형태로 제공하는 환경 모니터링 웹 애플리케이션입니다. Angular 기반으로 폴리곤 시각화, 차트 렌더링 UI 및 상태 관리 구조를 구성하였습니다.",
        company: "(주)아이지아이에스",
        date: "2022.10 ~ 2023.01",
        role: "1인 개발(100%) - 시각화 UI 구현, Angular 상태 관리 구성, 백엔드 로직 및 배포 자동화",
        stacks: ["Angular", "TypeScript", "Jasmine", "Java", "Spring_Boot", "Junit", "MariaDB"],
    },
];

export const SideProjectInfos = [
    {
        title: "'Forkmeet'",
        description:
            "직장인 대상 점심메이트 매칭 서비스입니다. 현재 개발 중이며 UI 프로토타입 및 매칭 로직 설계 단계 진행 중에 있습니다.",
        company: "개인 프로젝트(5인 팀)",
        date: "2025.10 ~ ",
        role: "프론트엔드 개발 - 프로젝트 환경 세팅",
        stacks: ["Next.js", "TypeScript", "TailwindCSS"],
    },
    {
        title: "이커머스 '801 Coffee'",
        description:
            "Next.js 기반 쇼핑몰과 React 기반 백오피스 시스템으로 분리된 캡슐커피 쇼핑몰을 개발하였습니다.",
        company: "INNER CIRCLE Bootcamp",
        date: "2025.04 ~ 2025.06",
        role: "프론트엔드 팀 리더(프론트 4, 백 4) – 모노레포 개발 환경 및 CI/CD 배포 환경 구성, 장바구니/리뷰 등 사용자 중심 기능의 UI/UX 구현",
        stacks: ["Next.js", "React", "TypeScript", "TailwindCSS"],
        git: "https://github.com/ParkBible/commerce-FE",
    },
    {
        title: "반응형 친화적인 테이블 컴포넌트 라이브러리",
        description:
            "기본 HTML <table> 요소의 반응형 한계를 개선하고, 재사용 가능한 UI 컴포넌트를 제공하는 React 기반 라이브러리를 직접 개발하여 오픈소스로 배포, GitHub Actions를 이용한 CI/CD 파이프라인을 구축하였습니다.",
        company: "개인 프로젝트",
        date: "2025.04",
        role: "1인 개발(100%) – 환경 구성부터 테스트, 배포 및 오픈소스 관리까지 전반 담당",
        stacks: ["React", "TypeScript", "Vitest"],
        git: "https://www.npmjs.com/package/react-split-table",
    },
];
