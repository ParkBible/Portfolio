export const ProjectInfos = [
    {
        title: '맞춤형 스마트 관광 추천 서비스 "우주공감"',
        description: "한국관광공사 협업 관광지 추천 웹 개발 프로젝트입니다. 공공API와 크롤링 데이터를 토대로 추천 웹 페이지를 구축하였습니다.",
        company: "한국관광공사, 빅리더 AI 아카데미 (데이터 청년 캠퍼스)",
        date: "2021.10.01 ~ 2021.12.31",
        role: "Python BeautifulSoup을 이용한 숙박업소 리뷰 사이트 크롤링, HTML, CSS, JS를 통한 프론트엔드 개발",
        stacks: ["JavaScript", "Python"],
        git: "https://github.com/parkbible/KTO"
    },
    {
        title: '다이어리형 커뮤니티 사이트 "오늘 어때?"',
        description: "CAPTCHA API를 통한 회원가입/로그인과 게시물 작성, 추천, 댓글 기능이 포함되어 있는 게시판 프로젝트입니다.",
        company: "부경대학교X멀티캠퍼스",
        date: "2022.01.27 ~ 2022.02.14",
        role: "풀스택 개발(1인) - Spring MVC 패턴 이용, DAO 패턴을 이용하여 DB 로직과 비즈니스 로직을 분리하여 개발",
        stacks: ["JSP", "JQuery", "Spring"],
        git: "https://github.com/parkbible/Diary-Community"
    },
    {
        title: "웹 기반 대기 환경 모니터링 시스템",
        description: "미세먼지 등 현재 대기 정보를 폴리곤 형식으로 지도에 표시하고 통계 정보를 차트로 제공하는 솔루션입니다.",
        company: "(주)아이지아이에스",
        date: "2022.10.18 ~ 2023.1.17",
        role: "풀스택 개발(1인) - JPA, QueryDSL 사용 및 테스트 코드 작성, CentOS 서버에 배포 작업",
        stacks: ["TypeScript", "Angular", "Jasmine", "Java", "Spring_Boot", "Junit", "MariaDB"]
    },
    {
        title: "사내 플랫폼",
        description: "사내 제공 서비스들을 하나의 계정 정보로 접속할 수 있게 하는 통합 플랫폼입니다.",
        company: "(주)아이지아이에스",
        date: "2023.4.9 ~ ",
        role: "풀스택 개발(3인) - Keycloak을 통한 SSO 로그인, 제품 소개 페이지, 강의 신청, Lazy Loading 적용한 FAQ 페이지 개발",
        stacks: ["TypeScript", "React", "React_Testing_Library", "Kotlin", "Spring_Boot","Kotest", "GraphQL", "MariaDB"],
        web: "https://www.dfos.kr"
    },
    {
        title: "창원시 드론 실증도시 통합 관제 시스템",
        description: "드론 물류배송 및 화재/재난 알림 시스템입니다. 드론의 정보와 위치, 재난 정보를 지도상에서 실시간 파악하는 기능이 포함되었습니다.",
        company: "(주)아이지아이에스, 창원시",
        date: "2023.7.3 ~ 2023.8.18",
        role: "풀스택 개발(2인) - TDD 방법론으로 알림 기능을 제외한 모든 기능 개발, DB 설계, View 테이블 적극 활용",
        stacks: ["TypeScript", "React", "React_Testing_Library", "Kotlin", "Spring_Boot", "Kotest", "PostgreSQL"]
    },
    {
        title: "UAM 시뮬레이션",
        description: "CesiumJS에서 제공하는 3D 지도 위에 드론 3D 모델이 정해진 시나리오에 따라 움직이는 시뮬레이터입니다. 시뮬레이터는 배속, 되감기, 일시정지, 위치 초기화 기능을 제공하며, API에서 제공받은 날씨 정보를 정해진 시간마다 DB에 수집합니다.",
        company: "(주)아이지아이에스",
        date: "2023.11.21 ~ 2023.12.22",
        role: "풀스택 개발(1인) - DB 테이블 설계, 스케줄링을 위한 서버 개발, CesiumJS 라이브러리를 활용한 국내 제공 솔루션 'Vworld'를 통해 3D 지도에 시뮬레이션을 구현",
        stacks: ["TypeScript", "JavaScript", "React", "Node.js_Express", "SQLite"]
    },
    {
        title: "파노라마 관리 시스템",
        description: "드론이 촬영한 정사영상을 이용해 파노라마를 만들고 그 파노라마를 이용해 URL 형태로 공유 가능한 배포 산출물을 제작하는 시스템입니다.",
        company: "(주)아이지아이에스",
        date: "2024.1.17 ~ ",
        role: "기존 프로젝트 유지보수 및 고도화 - 버그 수정, 산출물 저장 방식 개선, 탐색기, 엑셀 파일 브라우저에서 시각화 등 기능 추가",
        stacks: ["TypeScript", "Angular", "Spring_Boot", "MariaDB"],
        web: "https://panorama.dfos.kr/"
    },
    {
        title: "스테이션 관제 시스템",
        description: "무인으로 드론을 조작할 수 있는 '스테이션' 이라는 기기를 원격으로 관리하는 시스템입니다. 스테이션과는 MQTT 프로토콜을 이용하여 통신합니다.",
        company: "(주)아이지아이에스",
        date: "2024.5.27 ~ ",
        role: "기존 프로젝트 고도화 - 웹소켓을 이용한 알림 기능, 드론 조작(렌즈 돌리기 등) 기능 추가, 미디어 탐색기 분류 기능 고도화",
        stacks: ["JavaScript", "Go", "WebAssembly", "TailwindCSS", "AlpineJS", "PostgreSQL"],
        web: "http://dev-dfos-station.igis.co.kr/"
    },
    {
        title: "스테이션 스트리밍 뷰어",
        description: "스테이션 관제 시스템과 연계된 서비스로, 스테이션과 드론, CCTV 등 연결된 여러 기기들의 스트리밍 화면을 한눈에 볼 수 있는 서비스입니다. MQTT 통신과 웹소켓 연결을 통해 기기의 실시간 상태 정보를 확인할 수 있도록 구현하였습니다.",
        company: "(주)아이지아이에스",
        date: "2024.6.18 ~ 2024.9.25",
        role: "풀스택 개발(3인) - 퍼블리싱과 관리자 페이지를 제외한 모든 기능 개발, 관리자 페이지 리팩토링",
        stacks: ["TypeScript", "Next.js", "Spring_Boot", "PostgreSQL"],
        web: "http://dev-dfos-station-viewer.igis.co.kr/"
    },
    {
        title: "스테이션 관제 시스템 (마이그레이션 버전)",
        description: "기존 스테이션 관제 시스템의 개발환경, 코드상의 많은 문제점으로 인해 유지보수가 난해하다고 판단, 새로운 프로젝트로의 마이그레이션이 결정되었습니다.",
        company: "(주)아이지아이에스",
        date: "2024.10.4 ~ ",
        role: "풀스택 개발(4인) - MQTT 통신을 통한 기기 원격 조작 기능(해당 기능에 필요한 클라이언트 퍼블리싱, 프론트엔드, API 서버 개발)",
        stacks: ["TypeScript", "React", "TailwindCSS", "Spring_Boot", "PostgreSQL"],
        web: "http://dev-dfos-station-viewer.igis.co.kr/"
    },
];