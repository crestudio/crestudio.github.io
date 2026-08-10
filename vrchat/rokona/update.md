---
title: 업데이트 로그
description: 로코나 아바타의 업데이트 이력
image: https://macchiato.kr/assets/card/website_card_rokona.jpg
aside: true
outline: [1, 2]
---

# 업데이트 로그 {#update}

## 2025-12-19 / 버전 1.00 {#1.00}

- 아바타 릴리즈

## 2026-01-15 / 버전 1.01 {#1.01}

![6종 추가 표정 + 8종 포즈](/assets/rokona/update/rokona_update_1.01_1_ko.jpg)
![볼 본 추가](/assets/rokona/update/rokona_update_1.01_2_ko.jpg)
![바디 디테일 레이어 추가 및 그림자 영역 조정](/assets/rokona/update/rokona_update_1.01_3_ko.jpg)
![광택이 있는 머테리얼 추가](/assets/rokona/update/rokona_update_1.01_4_ko.jpg)

### 모델 {#1.01-model}

- 턱 끝을 좀 더 샤프하게 만드는 쉐이프키 추가
- 완장 위쪽 부분 셔츠와의 간격 추가
- 팬티의 클립 웨이트 오류 수정
- 투명 효과 메쉬 조금 더 앞으로 이동
- 볼 본 추가
- 효과 관련 메쉬가 올바른 노멀을 가지도록 수정
- 일부 Edge에서 의도하지 않는 프로퍼티 삭제

### 머테리얼 및 텍스쳐 {#1.01-material}

- 광택이 있는 쉐이딩 버전 추가
- 눈의 하이라이트도 Emission에 추가
- 눈의 Emission 강도 하향 및 빛이 없는 환경에서는 빛나지 않도록 수정
- 미간 영역 아웃라인이 덜 보이게 수정
- 바디 디테일 그림자 추가 및 그림자 영역 조정
- 눈 영역에 Matcap 추가

### Unity 분야 {#1.01-unity}

- Base용 제스쳐의 VR용 Idle 애니메이션 누락 수정
- fileID 기준을 0에서 9100000으로 수정
- Action이 진행 중일 때 Locomotion 재생하지 않도록 수정
- 기본 표정 고정 기능 추가 및 6종의 고정용 표정 추가
- 제스쳐 레이어 Write Defaults OFF로 수정
- VR 모드에서는 헤어가 Chest 콜라이더를 사용하지 않도록 수정
- 8종의 VRCEmote 포즈 추가

## 2026-01-17 / 버전 1.02 {#1.02}

### 머테리얼 및 텍스쳐 {#1.02-material}

- Glossy 타입에서 눈의 Emission 변경사항 누락 수정

### Unity 분야 {#1.02-unity}

- Base 프리팹에서 Bones 오버라이드 제거

## 2026-05-09 / 버전 1.03 {#1.03}

![앉아서도 풀트래킹](/assets/rokona/update/rokona_update_1.03_1_ko.jpg)
![Viseme 레이어 추가](/assets/rokona/update/rokona_update_1.03_2_ko.jpg)

### Unity 분야 {#1.03-unity}

- Blendshape Normal 경고가 발생하지 않게 Import 옵션 수정
- 아바타의 휴머노이드 Collider를 더 정확하게 수정
- Viseme와 표정의 간섭을 줄이는 FX 레이어 추가
- 풀트래킹 시 VRChat 의자에 앉아도 계속 트래킹하도록 기능 추가