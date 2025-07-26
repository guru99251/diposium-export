# 디포지엄 전시 시스템 (NFC 제거 버전)

## 개요
- NFC 리더기를 제거하고, 웹/앱 기반으로 작품 선택 → 출력까지 구현

## 기술 스택
- Frontend: Next.js + Tailwind CSS
- Backend: Node.js (Express) + Supabase
- Deployment: Render.com + Docker

## 디렉터리 구조
/project-root
├── README.md                    # 프로젝트 개요 및 실행 가이드
├── .gitignore
├── render.yaml                  # Render.com 서비스 정의 (서버 + 웹 UI)

├── docs/                        # 설계 및 디자인 문서
│   ├── CIRCUIT_MAP_DESIGN.md    # 회로도 스타일 전시장 지도 디자인
│   ├── USER_FLOW_DIAGRAM.md     # 전체 인터랙션 & 출력 플로우
│   └── DEPLOYMENT_GUIDE.md      # 배포 가이드 (Render + Supabase)

├── client/                      # Next.js 기반 관람객/출력 UI & 관리자 대시보드
│   ├── package.json
│   ├── next.config.js
│   ├── tailwind.config.js
│   ├── public/
│   │   ├── favicon.ico
│   │   └── logo.png
│   └── src/
│       ├── pages/
│       │   ├── index.js         # 관람객 메인 UI (회로도 지도 + 작품 선택)
│       │   ├── preview.js       # 선택한 작품 & 개인 칩 미리보기/출력
│       │   └── dashboard.js     # 관리자 대시보드 (작품별 선택 통계)
│       ├── components/
│       │   ├── CircuitMap.jsx   # 전시장 회로도 SVG/Canvas 컴포넌트
│       │   ├── ArtworkNode.jsx  # 각 작품 노드(애니메이션, 선택 기능)
│       │   ├── ChipVisualizer.jsx # 개인화 칩(MBTI 스타일) 생성기
│       │   ├── SelectionList.jsx # 선택 작품 리스트 UI
│       │   └── Loader.jsx
│       ├── hooks/
│       │   └── useFetch.js      # API 연동 (Supabase 백엔드)
│       └── utils/
│           ├── chipGenerator.js # 4종 카테고리 기반 성향 칩 로직
│           └── circuitLayout.js # 전시장 노드 좌표/회로도 경로 계산

├── server/                      # Node.js API 서버 (Supabase 연동)
│   ├── Dockerfile
│   ├── package.json
│   ├── .env.example
│   └── src/
│       ├── index.js             # Express 서버 초기화
│       ├── routes/
│       │   ├── artworks.js      # 작품 메타데이터 제공
│       │   ├── selections.js    # 관람객 선택 기록 저장/조회
│       │   └── stats.js         # 선택 통계 API (대시보드용)
│       ├── controllers/
│       │   ├── artworkController.js
│       │   ├── selectionController.js
│       │   └── statsController.js
│       ├── models/
│       │   ├── Artwork.js       # 작품 정보 스키마
│       │   └── Selection.js     # 관람객 선택 로그 스키마
│       └── utils/
│           └── supabaseClient.js # Supabase 연결
│
└── scripts/                     # 배포/개발 편의 스크립트
    ├── build_server.sh
    ├── build_client.sh
    └── seed_artworks.sh         # 초기 작품 메타데이터 입력
