# 디포지엄 전시 시스템 (NFC 제거 버전)

## 개요
- NFC 리더기를 제거하고, 웹/앱 기반으로 작품 선택 → 출력까지 구현

## 기술 스택
- Frontend: Next.js + Tailwind CSS
- Backend: Node.js (Express) + Supabase
- Deployment: Render.com + Docker

## 디렉터리 구조
```bash
diposium-export/
├── .gitignore                     # 공통 무시 파일 (node_modules, env 등)
├── package.json                   # 루트 스크립트 (setup/dev/build/start)
├── render.yaml                    # Render 배포 설정 파일 (API + Web)
│
├── docs/                          # 기획·설계 문서
│   ├── API_SPEC.md                # API 명세
│   ├── CIRCUIT_MAP_DESIGN.md      # 회로도 스타일 지도 디자인 문서
│   ├── CHIP_RULES.md              # 개인화 칩 규칙표
│   ├── USER_FLOW_DIAGRAM.md       # 유저 플로우 다이어그램
│   └── DEPLOYMENT_GUIDE.md        # 배포 가이드
│
├── client/                        # Next.js 기반 프론트엔드 (출력 UI & 대시보드)
│   ├── package.json
│   ├── next.config.js
│   ├── postcss.config.mjs         # PostCSS 설정 (Tailwind 포함)
│   ├── tailwind.config.js         # Tailwind 설정 (src 경로 스캔 필수)
│   ├── public/
│   │   ├── favicon.ico
│   │   └── logo.png
│   └── src/
│       └── app/                   # App Router 방식 페이지
│           ├── page.js            # 메인: 전시장 회로도 지도 & 작품 선택
│           ├── preview/
│           │   └── page.js        # 선택 결과 & 개인 칩 미리보기/출력
│           └── dashboard/
│               └── page.js        # 관리자 대시보드 (통계)
│
├── server/                        # Express + Supabase 백엔드 API
│   ├── package.json
│   ├── .env.example               # 환경 변수 샘플 (PORT, SUPABASE_URL, KEY)
│   └── src/
│       ├── index.js               # 서버 진입점 (Express, Helmet, CORS)
│       ├── utils/
│       │   └── supabaseClient.js  # Supabase 연결 클라이언트
│       ├── routes/
│       │   ├── artworks.js        # GET /api/artworks (작품 목록)
│       │   ├── selections.js      # POST /api/selections, GET /api/selections/:userId
│       │   └── stats.js           # GET /api/stats (통계)
│       ├── controllers/
│       │   ├── artworkController.js    # 작품 메타데이터 처리 로직
│       │   ├── selectionController.js  # 관람객 선택 저장/조회 로직
│       │   └── statsController.js      # 작품별/카테고리별 통계 로직
│       └── models/
│           ├── Artwork.js         # (향후) 작품 정보 모델 정의
│           └── Selection.js       # (향후) 선택 로그 모델 정의
│
└── scripts/                       # 빌드 및 초기화 스크립트
    ├── build_server.sh            # 서버 빌드/배포 스크립트
    ├── build_client.sh            # 클라이언트 빌드/배포 스크립트
    └── seed_artworks.sh           # 초기 작품 메타데이터 DB 입력