---
title: MaterialTemplate 애드온
description: VRChat 아바타의 머테리얼을 모듈러 아바타처럼 적용된 모습만 볼 수 있는 비파괴 형태의 애드온, 실시간 프리뷰와 실제 머테리얼에 적용하는 기능까지 있습니다
image: https://macchiato.kr/assets/card/website_card_materialtemplate.jpg
pageClass: command
aside: true
outline: [1, 2]
---

# MaterialTemplate

<script setup>
import { VPButton } from 'vitepress/theme'
const MaterialTemplateImages = [
  { src: '/assets/addon/unity/materialtemplate/materialtemplate_1.jpg', alt: '표지' },
  { src: '/assets/addon/unity/materialtemplate/materialtemplate_2.jpg', alt: '아바타에 전체 적용' },
  { src: '/assets/addon/unity/materialtemplate/materialtemplate_3.jpg', alt: '같은 의상, 다른 아바타' },
  { src: '/assets/addon/unity/materialtemplate/materialtemplate_4.jpg', alt: '같은 아바타, 다른 템플릿' },
]
</script>

<ImageCarousel :images="MaterialTemplateImages" />

## 특징 {#feature}

- 아바타의 머테리얼을 실제로 수정하지 않고, 머테리얼이 적용된 모습만 볼 수 있습니다
- 실시간으로 머테리얼을 수정해도 바로 결과를 볼 수 있습니다
- 모듈러 아바타를 지원하여 프리뷰와 업로드 시에만 적용됩니다
- 적용 옵션을 자유롭게 조정하고, 필요하다면 실제 아바타 머테리얼에 적용 할 수 있습니다

## 필수 구성요소 {#requirement}

MaterialTemplate의 모든 기능을 이용하기 위해서는 아래의 구성요소들이 필요합니다

- [VRChat SDK](https://vcc.docs.vrchat.com/)
- [lilToon](https://lilxyzw.github.io/lilToon/)
- [Modular Avatar](https://modular-avatar.nadena.dev/)

## 컴포넌트 추가 {#add-component}

![컴포넌트 추가](/assets/addon/unity/materialtemplate/materialtemplate_add_component.jpg)

- 하이어라키에서 아바타를 우클릭한 다음, Macchiato → Add MaterialTemplate 실행
- 또는 아바타 내부에서 Add Component를 한 다음, Caramel Macchiato → Macchiato MaterialTemplate 컴포넌트 추가

::: tip

컴포넌트를 추가하면 자동으로 해당 오브젝트를 기준으로 오브젝트와 머테리얼을 자동으로 추가합니다

:::

## 간단 적용 {#simple-mode}

![간단 적용](/assets/addon/unity/materialtemplate/materialtemplate_simple_ko.jpg)

1. `기준 머테리얼`에 적용하고 싶은 머테리얼을 넣습니다
1. 원하는 프리셋을 선택합니다

## 상세 적용 {#advanced-mode}

<div class="macchiato-center">
    <img src="/assets/addon/unity/materialtemplate/materialtemplate_advanced_ko.jpg" alt="상세 적용" class="macchiato-image">
</div>

| **설정** | **설명** |
| --- | --- |
| `메모` | 템플릿이 어떤 내용을 담고 있는지 적어둘 수 있습니다 |
| `참조 오브젝트` | 어떤 오브젝트로부터 `머테리얼` 목록을 가져올지 설정할 수 있습니다  |
| `머테리얼` | 어떤 머테리얼에 적용될 지 리스트를 볼 수 있습니다<br>`-` 버튼을 눌러 대상에서 제외할 수 있습니다 |
| `머테리얼 가져오기` | `참조 오브젝트`에서 머테리얼들을 가져와서 목록을 갱신합니다 |
| `기준 머테리얼` | `머테리얼`에 수치를 넣을 때 기준이 될 머테리얼 입니다 |
| `일반`, `확장`, `대부분`, `모두 복사`, `선택 해제` | 아래의 `lilToon`, `일반` 옵션을 해당 프리셋으로 설정합니다 |
| `lilToon` | `업데이트` 계열은 해당 섹션의 프로퍼티들을 가져와서 적용할지 고를 수 있습니다<br>`기능 사용 여부 동기화`는 쉐이더의 기능 사용 여부도 가져옵니다<br>`강제 적용` 계열은 해당 기능을 강제로 활성화 합니다 |
| `일반` | 렌더큐나 GPU 인스턴싱, Global Illumination 프로퍼티를 업데이트 또는 리셋 여부를 설정할 수 있습니다 |
| `프리뷰` | NDMF의 프리뷰 기능을 적용할 지 여부 |
| `활성화된 경우에만 값 적용` | `기준 머테리얼`과 `머테리얼`이 해당 기능을 사용하고 있으면 프로퍼티를 적용합니다<br>예를 들면 그림자를 사용하지 않는 머테리얼은 그림자 색상과 프로퍼티 값을 적용하지 않습니다 |
| `쉐이더 업데이트` | lilToon의 아웃라인과 테셀레이션 기능은 `머테리얼`의 쉐이더 종류를 업데이트해야 적용이 됩니다<br>**Variant Material은 적용되지 않습니다** |
| `디버그` | 적용시 콘솔에 디버그용 메시지를 출력합니다 |
| `머테리얼에 실제로 적용` | `적용` 버튼을 누르면 실제로 머테리얼에 값을 쓰고 저장합니다<br>`실행 취소`를 누르면 마지막 적용을 취소합니다 |

## 활용 예시 {#example}

### 아바타 전체 적용 {#apply-avatar}

![아바타 전체 적용](/assets/addon/unity/materialtemplate/materialtemplate_fullavatar_ko.jpg)

- 아바타의 스타일을 전체적으로 쉽게 통일할 수 있어요

<br>

### 파츠별 적용 {#apply-per-part}

![파츠별 적용](/assets/addon/unity/materialtemplate/materialtemplate_part_ko.jpg)

- 하나의 아바타에서 바디, 의상, 헤어 스타일도 각각 다르게 적용 가능합니다

<br>

### 아바타별 적용 {#apply-per-avatar}

![아바타별 적용](/assets/addon/unity/materialtemplate/materialtemplate_peravatar_ko.jpg)

- 같은 의상을 입은 아바타이더라도 아바타마다 다른 스타일로 적용 가능!

<br>

## 업데이트 로그 {#update}

### 2026-10-10 / 버전 1.00 {#1.00}

- 릴리즈

## 크레딧 {#credit}

### 아바타 {#avatar}

- 뀨비 선생님의 [아이리](https://kyubihome.booth.pm/items/6082686)
- 코마도 선생님의 [쇼콜라](https://komado.booth.pm/items/6405390)
- 마끼아또의 [로코나](https://macchiato.booth.pm/items/7682496)
- 폰데로 선생님의 [시나노](https://ponderogen.booth.pm/items/6106863)

### 모델 {#model}

- Libero 선생님의 [Chained UP](https://liberoboutique.booth.pm/items/8355832)
- LookVook 선생님의 [Sera Yura](https://lookvook.booth.pm/items/8786891)
- てんぷらぱすた 선생님의 [本命ニット](https://tempasta.booth.pm/items/6110958)
- リネ 선생님의 [ねこタイドボブヘア](https://li-ne.booth.pm/items/7977491)
- リネ 선생님의 [ラブリーロングヘア](https://li-ne.booth.pm/items/7643173)

## 버그 리포트 {#bug-report}

올바르게 동작하지 않는 경우에는 [BOOTH 메시지](https://macchiato.booth.pm/conversations/new)로 문의를 해 주세요<br>
가능하다면 스크린샷이나 동영상, 아래의 내용들과 콘솔 메시지와 같은 자세한 내용들을 함께 보내주시면 문제를 빠르게 해결하는데 도움이 됩니다

::: info

사용 중인 쉐이더 종류 및 버전

Unity 프로젝트에서 사용 중인 애드온 목록<br>
<small>(모듈러 아바타와 같이 빌드 시 적용되는 애드온을 설치하였다면 필수로 적어주세요)</small>

:::

<div class="macchiato-center">
<VPButton tag="a" href="https://macchiato.booth.pm/items/8960598" text="BOOTH 페이지" theme="brand" /> 
</div>