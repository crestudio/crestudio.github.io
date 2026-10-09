---
title: Utility 애드온
description: Unity에서 VRChat 아바타를 개변하다 보면 복잡한 반복 작업을 줄이고 본연의 꾸미는 작업에 몰두하고 싶을 때가 많습니다, 여러가지 애드온을 통해 더 빠르고 원하는 스타일로 꾸밀 수 있게 애드온들을 만들고 있습니다
image: https://macchiato.kr/assets/card/website_card_addon.jpg
pageClass: command
aside: true
outline: [1, 2]
---

# Utility

![Utility](/assets/addon/unity/macchiato-utility.jpg)

Unity에서 VRChat 아바타를 개변하다 보면 복잡한 반복 작업을 줄이고 본연의 꾸미는 작업에 몰두하고 싶을 때가 많습니다, 여러가지 애드온을 통해 더 빠르고 원하는 스타일로 꾸밀 수 있게 애드온들을 만들고 있습니다

<br>

## ColorGenerator

![ColorGenerator](/assets/addon/unity/colorgenerator_ko.jpg)

ColorGenerator 애드온은 **베이스 컬러의 미묘한 변화가 생겨서 그림자 컬러 등 다양한 색상을 재계산**할 필요가 있을 때 보조해 주는 프로그램 입니다<br>
베이스 컬러를 기준으로 나머지 색이 어느만큼 차이가 나는지 기록한 다음, 기준이 바뀌더라도 재계산을 통해 비슷한 색상을 계산해 줍니다

### 실행 방법 {#colorgenerator-run}

- Unity 에디터 상단 메뉴에서 Tools → Macchiato → Utility → ColorGenerator 실행

### 사용 방법 {#colorgenerator-how-to-use}

1. `소스 머테리얼`에서 컬러를 추출하거나, 6가지 베이스 및 쉐이딩 컬러를 넣습니다
1. 프로파일에서 `생성` 버튼을 눌러 프로파일을 생성합니다
1. 프로파일에는 이제 베이스 컬러를 기준으로 각 색상마다 차이가 기록되었습니다
1. 베이스 컬러<small>(또는 그림자 색상)</small>을 변경한 후, 아래의 `재계산` 버튼을 누르면 해당 색상을 기준으로 나머지 색이 계산되어 나옵니다
1. `아바타`에서 적용할 머테리얼 리스트를 가져오거나, 머테리얼 란에 적용할 머테리얼을 넣습니다
1. `적용` 버튼을 눌러 색상을 적용합니다
1. 결과가 마음에 들지 않는다면 `실행 취소`를 눌러서 복구합니다

::: tip

필요하다면 `Oklab 그라디언트 계산` 버튼을 눌러 베이스와 3단 그림자 사이의 색을 지각적으로 계산할 수 있습니다

:::

<br>

## GUIDUtility

![GUIDUtility](/assets/addon/unity/guidutility_ko.jpg)

Unity에서는 많은 에셋들이 GUID로 관리 되기 때문에, 해당 GUID가 어떤 에셋인지 확인해야 될 때가 많습니다, 또한 GUID를 활용하면 텍스트 에디터에서 빠르게 일괄로 교체하거나 수정하기 편리합니다

### 에셋의 GUID를 클립보드에 복사 {#guidutility-copy-guid}

- Unity 에디터 프로젝트 탭에서 에셋을 선택한 다음, 우클릭 메뉴에서 Macchiato → Asset → Get GUID 실행<br>
<small>(여러 개의 에셋의 GUID를 복사하면 여러 행으로 복사됩니다)</small>

### 실행 방법 {#guidutility-run}

- Unity 에디터 상단 메뉴에서 Tools → Macchiato → Utility → GUIDUtility 실행

### 에셋 경로 찾기 {#guidutility-get-assetpath}

- 빈 칸에 GUID를 넣은 다음 `찾아보기` 버튼을 누릅니다

<br>

## MeshRendererUtility

[모듈러 아바타](https://modular-avatar.nadena.dev/)와 같은 애드온들로 직접 렌더러 설정을 조작할 필요가 없어졌으나, 제작자의 경우 원하는 렌더러 세팅으로 배포를 하는게 무척 중요합니다, 이러한 기능을 원클릭으로 끝낼 수 있게 도와줍니다

### 실행 방법 {#meshrendererutility-run}

- Unity 에디터 상단 메뉴에서 Tools → Macchiato → Utility → MeshRenderer 하위 메뉴에서 기능을 선택

::: warning

아래의 모든 기능들은 Unity 씬의 모든 아바타마다 실행합니다

:::

### Update Renderer Setting {#meshrendererutility-update-renderer-setting}

아래의 5가지 기능을 한 번에 수행합니다

#### Adjust Bound Box {#meshrendererutility-adjust-bound-box}

`SkinnedMeshRender`의 Bounds 설정을 Center `[0, 0, 0]`, Extent `[1, 1, 1]`으로 통일합니다

#### Assign AnchorOverride {#meshrendererutility-assign-anchorOverride}

아바타의 기본 AnchorOverride 또는 `Head`에 `AnchorOverride` GameObject를 생성한 뒤, 모든 `SkinnedMeshRender` 및 `MeshRenderer`에 할당합니다

#### Change Probes Settings {#meshrendererutility-change-probes-settings}

모든 `SkinnedMeshRender` 및 `MeshRenderer`에서 Probes 설정을 Light Probes 설정을 `Blend Probes`으로, Reflection Probes 설정을 `Off`로 설정합니다

#### Change to Two-Sided Shadow {#meshrendererutility-change-to-two-sided-shadow}

단일 면으로 모델링 된 테니스 치마 같은 경우 뒷면 그림자가 그려지지 않는 비주얼 버그가 생길 수 있습니다, 이 설정은 이러한 문제를 해결해 줍니다, 모든 `SkinnedMeshRender` 및 `MeshRenderer`에서 Cast Shadows를 `Two Sided`으로 설정합니다

#### Update MA Mesh Settings {#meshrendererutility-update-ma-mesh-settings}

아바타의 모든 `MA Mesh Settings`를 수정하여, `부모에 설정이 있으면 상속, 없으면 설정` 모드로 변경 및 해당 아바타의 AnchorOverride와 Bounds 설정으로 변경합니다

<br>

## PhysBoneController

아바타나 의상 등 다양한 에셋을 제작하다보면 수많은 PhysBone 컴포넌트를 다루게 됩니다, 여러가지 속성들을 일괄로 바꿀 수 있게 도와줍니다

### 실행 방법 {#physbonecontroller-run}

- Unity 에디터 상단 메뉴에서 Tools → Macchiato → Utility → PhysBone 하위 메뉴에서 기능을 선택

::: warning

아래의 모든 기능들은 Unity 씬의 모든 PhysBone 컴포넌트에 실행합니다

:::

### Animated, FoldOut, Gizmo, Immobile, Reset, Version {#physbonecontroller-properties}

- PhysBone 컴포넌트의 해당 프로퍼티 속성을 일괄로 적용합니다
- Debug는 컴포넌트마다 어떤 값을 가지고 있는지 Console에 리포트를 작성합니다

### Collider {#physbonecontroller-collider}

#### Adjust Humanoid Collider {#physbonecontroller-adjust-humanoid-collider}

`Hips`, `Spine`, `Chest`, `Head`, `UpperArm`, `LowerArm`, `Hand`, `IndexDistal`, `UpperLeg`에 PhysBone Collider 컴포넌트를 생성하고, 본의 길이의 맞게 조정합니다

::: info

PhysBone Collider 컴포넌트의 Radius는 생성 후 직접 조정해야 합니다

:::

#### Assign Humanoid Collider {#physbonecontroller-assign-humanoid-collider}

PhysBone 이름에 맞춰서 PhysBone 콜라이더를 할당합니다

| **PhysBone 이름** | **할당되는 콜라이더** |
| --- | --- |
| Hair | Hips, Spine, Chest, Head, UpperArm, LowerArm, `Floor` |
| FrontHair | Head, UpperArm, LowerArm |
| BackHair | Hips, Spine, Chest, Head, UpperArm, LowerArm, `Floor` |
| Breast | `{RootTransformName}L` 또는 `{RootTransformName}R` |
| Skirt | Hips, UpperLeg |
| Tail | UpperLeg |

#### Remove Hand Collider {#physbonecontroller-remove-hand-collider}

PhysBone 콜라이더에 손바닥과 손가락 콜라이더가 포함된 경우 리스트에서 제거합니다<br>
예전 [Dynamic Bone](https://assetstore.unity.com/packages/tools/animation/dynamic-bone-16743)이 PhysBone으로 컨버팅 될 때, 손 관련 콜라이더가 할당 되어 카운트가 올라가는 문제를 해결해 줍니다

### Quest {#physbonecontroller-quest}

#### Remove Colliders {#physbonecontroller-remove-colliders}

모든 PhysBone의 Collider를 초기화 합니다

#### Remove Parameter {#physbonecontroller-remove-parameter}

모든 PhysBone의 Parameter 초기화 합니다