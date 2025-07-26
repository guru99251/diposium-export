## 전체 개발 Dev Flow

아래는 NFC 제거 후 전시 시스템의 **전체 개발 흐름**을 단계별로 정리한 가이드입니다.
각 단계는 병렬·순차적으로 진행 가능하며, 완료 시 코드 리뷰 및 테스트 후 병합합니다.

---

### 1. 환경 준비 & 문서화

1. **레포 구성**

   * 신규 프로젝트 구조 기반 레포 생성
   * `README.md`, `.gitignore`, `render.yaml` 초기화
2. **설계 문서 작성**

   * `docs/CIRCUIT_MAP_DESIGN.md` : 전시장 회로도 스타일 지도 설계
   * `docs/USER_FLOW_DIAGRAM.md` : 사용자 인터랙션 시퀀스 다이어그램
   * `docs/API_SPEC.md` : `/api/artworks`, `/api/selections`, `/api/stats` 스펙 정의
   * `docs/DEPLOYMENT_GUIDE.md` : Render + Supabase 배포 방법

---

### 2. 백엔드 개발 (Node.js + Supabase)

1. **환경 설정**

   * `.env` 설정, `supabaseClient.js` 연결
   * Dockerfile 및 `render.yaml` 작성
2. **모델 정의**

   * `models/Artwork.js`, `models/Selection.js` 스키마 작성
3. **컨트롤러 & 라우트**

   * `controllers/artworkController.js`, `routes/artworks.js`
   * `controllers/selectionController.js`, `routes/selections.js`
   * `controllers/statsController.js`, `routes/stats.js`
4. **비즈니스 로직**

   * 작품 목록 조회, 선택 기록 CRUD, 통계 집계
5. **테스트**

   * 단위 테스트(`artwork.test.js`, `selection.test.js`, `stats.test.js`)
   * Postman 컬렉션 또는 cURL 시나리오 문서화

---

### 3. 프론트엔드 개발 (Next.js)

1. **프로토타입 및 디자인**

   * Figma 기반 회로도 UI 와이어프레임 완성
2. **핵심 컴포넌트 구현**

   * `CircuitMap.jsx` (SVG/Canvas)
   * `ArtworkNode.jsx` (노드 선택/애니메이션)
   * `SelectionList.jsx` (선택 리스트)
   * `ChipVisualizer.jsx` (개인화 칩)
3. **페이지 개발**

   * `pages/index.js` : 메인 회로도 선택 화면
   * `pages/preview.js` : 미리보기 및 출력
   * `pages/dashboard.js` : 관리자 대시보드
4. **API 연동 & Hooks**

   * `hooks/useFetch.js` 작성
   * 클라이언트-서버 통신 테스트
5. **스타일링 & 애니메이션**

   * Tailwind CSS 활용
   * D3.js 또는 Canvas 애니메이션 적용
6. **출력 기능**

   * PDF 생성 (html2canvas, jsPDF)
   * QR 코드 생성 (qrcode.react)

---

### 4. 유틸리티 모듈 개발

1. **`chipGenerator.js`**

   * 4개 카테고리별 선택 수 집계 로직
   * MBTI 스타일 타입 매핑 규칙
2. **`circuitLayout.js`**

   * 노드 좌표 계산
   * 연결 경로(라인) 생성 알고리즘
3. **모듈 테스트**

   * 유닛 테스트 작성 (`chipGenerator.test.js`, `circuitLayout.test.js`)

---

### 5. 통합 및 E2E 테스트

1. **통합 환경 구축**

   * 로컬 클라이언트 ↔ 로컬/Render 서버 ↔ Supabase
2. **시나리오별 E2E 테스트**

   * 작품 선택 → 개인 칩 생성 → PDF/QR 출력
   * 관리자 대시보드 통계 확인
3. **성능 및 접근성 점검**

   * Lighthouse, Web Vitals 테스트
   * 반응형·접근성(A11y) 검토

---

### 6. 배포 및 운영

1. **최종 빌드**

   * `scripts/build_client.sh`, `scripts/build_server.sh` 실행
2. **배포**

   * Render에 Docker 배포
   * Supabase 프로덕션 DB 마이그레이션
3. **모니터링 & 로깅**

   * 서버 로그(winston) 설정
   * 통계 대시보드(Stats) 실시간 모니터링
4. **장애 대응**

   * 롤백 플랜 문서화
   * 긴급 연락망 및 핫픽스 절차 정의

---

각 단계별로 **Jira/Trello 티켓**로 작업 분배하고, PR → 코드 리뷰 → 테스트 → 배포의 순서로 진행하세요.
