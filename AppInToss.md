# 모이삼 앱인토스(App-in-Toss) 대응 가이드라인

> 기존 모이삼 웹 서비스와 앱인토스 환경에서의 모이삼이 **어떻게 달라지는지**를 한곳에 정리하는 문서입니다.
> 작성/유지보수 시 "기존 서비스 → 앱인토스" 의 변경 포인트를 기준으로 채워주세요.

---

## 0. 문서 정보

| 항목 | 내용 |
| --- | --- |
| 최종 수정일 | (작성) |
| 작성/관리자 | (작성) |
| 관련 디자인(Figma) | (링크) |
| 관련 이슈/PR | (링크) |

---

## 1. 개요

### 1.1 배경
- 모이삼은 현재 React 기반으로 배포 중인 반응형 웹 서비스이며, 링크를 통해 브라우저/디바이스에서 접근 가능하다.
- 여기에 **앱인토스(App-in-Toss)** 를 붙여, 토스 앱 내부에서도 모이삼을 제공할 계획이다.
- (작성: 앱인토스 도입 목적 / 기대 효과 / 기간 등)

### 1.2 핵심 전략
- 모이삼 실행 시 **현재 앱인토스 환경인지 여부를 판별하는 훅**을 통해 분기한다.
- 동일 코드베이스에서 환경에 따라 **서로 다른 UI / 로그인 프로세스**를 제공한다.
- (작성: 단일 코드베이스 분기 방식인지, 빌드 분리인지 등 결정 사항)

### 1.3 범위 (What changes)
- [ ] 디자인 / UI
- [ ] 로그인 · 인증 로직
- [ ] 헤더 · 네비게이션
- [ ] 종료(나가기) 흐름
- [ ] 공유 동작
- [ ] (작성: 추가 항목)

---

## 2. 환경 판별 (App-in-Toss Detection)

> 모든 분기의 기준이 되는 "현재 앱인토스 환경인가?" 판별 로직.

| 항목 | 내용 |
| --- | --- |
| 판별 훅 이름 | (작성: 예 `useIsInToss`) |
| 위치(파일 경로) | (작성) |
| 판별 방식 | (작성: User-Agent / SDK / window 객체 / 쿼리파라미터 등) |
| 반환 값 | (작성: 예 `boolean` / `{ isInToss, ... }`) |
| 구현 상태 | ☐ 미구현 / ☐ 구현중 / ☐ 완료 |

### 2.1 판별 코드 스니펫
```ts
// (작성: 실제 판별 로직 코드 붙여넣기)
```

### 2.2 분기 사용 패턴
```tsx
// (작성: 컴포넌트/페이지에서 어떻게 분기해 쓰는지 예시)
// const isInToss = useIsInToss();
// return isInToss ? <AppInTossHeader /> : <DefaultHeader />;
```

---

## 3. 영역별 비교 (기존 서비스 ↔ 앱인토스)

> 각 영역마다 "기존" 과 "앱인토스" 를 나란히 적고, 관련 파일/컴포넌트를 명시한다.

### 3.1 진입 · 환경

| 구분 | 기존 웹 서비스 | 앱인토스 모이삼 |
| --- | --- | --- |
| 진입 경로 | 링크(브라우저/디바이스) | 토스 앱 내부 |
| 환경 판별 | 불필요 | 판별 훅 사용 (2장) |
| (작성) | | |

### 3.2 로그인 · 인증

| 구분 | 기존 웹 서비스 | 앱인토스 모이삼 |
| --- | --- | --- |
| 로그인 수단 | 카카오 로그인 (`kakaoLogin`) | 토스 로그인 (예정) |
| 진입 UI | (작성) | `LoginBottomSheet` (바텀시트) |
| 리다이렉트 | `VITE_REDIRECT_URL` 기반 | (작성) |
| 토큰/세션 관리 | (작성) | (작성) |
| 현재 상태 | 운영 중 | ⚠️ 임시로 카카오 리다이렉트 (`LoginBottomSheet.tsx` 내 TODO) |

- 관련 파일: `src/shared/ui/AppInToss/LoginBottomSheet.tsx`, `src/shared/utils`(`kakaoLogin`)
- (작성: 토스 로그인 SDK / API 흐름, 동의 항목, 제3자 제공동의 등)

### 3.3 헤더 · 네비게이션

| 구분 | 기존 웹 서비스 | 앱인토스 모이삼 |
| --- | --- | --- |
| 헤더 컴포넌트 | (작성: 기존 헤더) | `AppInTossHeader` |
| 구성 요소 | (작성) | 뒤로가기 · 모이삼 타이틀 pill · 홈 · 더보기 · 닫기 |
| 뒤로가기 동작 | `navigate(-1)` | `ExitModal` 노출 후 확정 시 이동 |
| 더보기 | (작성) | `MenuBottomSheet` |
| 높이/스타일 | (작성) | `h-[44px]` 등 (작성) |

- 관련 파일: `src/shared/ui/AppInToss/AppInTossHeader.tsx`

### 3.4 종료 · 나가기 흐름

| 구분 | 기존 웹 서비스 | 앱인토스 모이삼 |
| --- | --- | --- |
| 종료 트리거 | (작성: 브라우저 뒤로/닫기) | 헤더 뒤로/닫기 → `ExitModal` |
| 확인 모달 | (작성) | `ExitModal` |
| 종료 후 동작 | (작성) | (작성: 토스 앱으로 복귀 등) |

- 관련 파일: `src/shared/ui/AppInToss/ExitModal.tsx`

### 3.5 디자인 · 레이아웃

| 구분 | 기존 웹 서비스 | 앱인토스 모이삼 |
| --- | --- | --- |
| 레이아웃 기준 | 반응형(웹 우선) | (작성: 토스 앱 뷰포트 기준) |
| 세이프 에어리어 | (작성) | (작성) |
| 디자인 토큰/색상 | (작성) | (작성) |
| (작성) | | |

### 3.6 공유

| 구분 | 기존 웹 서비스 | 앱인토스 모이삼 |
| --- | --- | --- |
| 공유 방식 | `navigator.clipboard` 링크 복사 (`ShareModal`) | (작성: 토스 공유 SDK?) |
| 관련 파일 | `src/shared/ui/ShareModal.tsx` | (작성) |

---

## 4. 페이지별 분기 영향

> 환경 판별에 따라 UI/동작이 달라지는 페이지를 정리.

| 페이지 | 파일 | 기존 | 앱인토스 | 비고 |
| --- | --- | --- | --- | --- |
| 메인 | `src/pages/MainPage.tsx` | (작성) | (작성) | |
| 히스토리 | `src/pages/HistoryPage.tsx` | (작성) | (작성) | |
| 지도 보기 | `src/pages/MapViewPage.tsx` | (작성) | (작성) | |
| 약속 찾기 - 이름 | `src/features/find/ui/NameStep.tsx` | (작성) | (작성) | |
| 약속 찾기 - 이벤트명 | `src/features/find/ui/EventNameStep.tsx` | (작성) | (작성) | |
| 약속 찾기 - 출발지 | `src/features/find/ui/LocationStep.tsx` | (작성) | (작성) | |
| (작성) | | | | |

---

## 5. 앱인토스 전용 컴포넌트 인벤토리

> `src/shared/ui/AppInToss/` 하위 컴포넌트. (`src/shared/ui/AppInToss/index.ts` 에서 일괄 export)

| 컴포넌트 | 파일 | 역할 | 주요 props | 비고 |
| --- | --- | --- | --- | --- |
| `AppInTossHeader` | `AppInTossHeader.tsx` | 앱인토스 전용 헤더 | `title`, `onBack/onHome/onMore/onClose`, `menuTitle`, `menuItems` | 뒤로가기 시 `ExitModal` |
| `AppInTossBottomSheet` | `AppInTossBottomSheet.tsx` | 공용 바텀시트 베이스 | `isOpen`, `onClose`, `actions` | 다른 바텀시트의 토대 |
| `LoginBottomSheet` | `LoginBottomSheet.tsx` | 로그인 안내 바텀시트 | `isOpen`, `onClose`, `onConfirm`, `onClickPolicy` | 현재 카카오 임시 연동 |
| `MenuBottomSheet` | `MenuBottomSheet.tsx` | 더보기 메뉴 바텀시트 | (작성) `MenuBottomSheetItem[]` | 헤더 더보기 |
| `ExitModal` | `ExitModal.tsx` | 나가기 확인 모달 | (작성) | 종료 흐름 |

### 5.1 관련 에셋
- `src/assets/icon/appInTossHome.svg`, `appInTossMore.svg`, `appInTossClose.svg`
- `src/assets/icon/moisamAppIcon.png`

---

## 6. 미해결 과제 · TODO

| # | 항목 | 상태 | 담당 | 비고 |
| --- | --- | --- | --- | --- |
| 1 | 앱인토스 환경 판별 훅 구현 | ☐ | | 2장 |
| 2 | 토스 로그인 정식 연동 (임시 카카오 대체) | ☐ | | `LoginBottomSheet.tsx` TODO |
| 3 | (작성) | | | |

---

## 7. 참고 링크

- 앱인토스 공식 문서: (작성)
- 토스 로그인/SDK 문서: (작성)
- 디자인 시안: (작성)
- 내부 기획/스펙 문서: (작성)
