---
title: Utility アドオン
description: UnityでVRChatアバターを改変していると、複雑な繰り返し作業を減らして、本来のアバター制作やカスタマイズに集中したい場面が多くあります。さまざまなアドオンを通して、より素早く、思い通りのスタイルに仕上げられるようなツールを制作しています。
image: https://macchiato.kr/assets/card/website_card_addon.jpg
pageClass: command
aside: true
outline: [1, 2]
---

# Utility

![Utility](/assets/addon/unity/macchiato-utility.jpg)

UnityでVRChatアバターを改変していると、複雑な繰り返し作業を減らして本来のアバター制作やカスタマイズに集中したい場面が多くあります。
さまざまなアドオンを通して、より素早く思い通りのスタイルに仕上げられるようなツールを制作しています。

<br>

## ColorGenerator

![ColorGenerator](/assets/addon/unity/colorgenerator_ja.jpg)

ColorGeneratorは、**ベースカラーに微妙な変化が生じたことで、影のカラーなどさまざまな色を再計算する必要がある場合に役立つツール**です。<br>
ベースカラーを基準として、それぞれの色がどの程度異なるのかを記録し、基準となる色が変わった場合でも再計算することで、元の色に近いカラーを算出します。

### 起動方法 {#colorgenerator-run}

- Unityエディター上部のメニューから Tools → Macchiato → Utility → ColorGenerator を実行します。

### 使用方法 {#colorgenerator-how-to-use}

1. `ソースマテリアル`からカラーを抽出するか、6種類のベースおよびシェーディングカラーを設定します。
1. プロファイルで`新規`ボタンを押して、プロファイルを生成します。
1. プロファイルにベースカラーを基準とした各カラーの差分が記録されます。
1. ベースカラー<small>（または影のカラー）</small>を変更した後、下にある`再計算`ボタンを押すと、そのカラーを基準として残りのカラーが計算されます。
1. `アバター`から適用するマテリアルのリストを取得するか、マテリアル欄に適用するマテリアルを設定します。
1. `適用`ボタンを押してカラーを適用します。
1. 結果が気に入らない場合は`元に戻す`を押して復元します。

::: tip

必要に応じて`Oklabグラデーション計算`ボタンを押すことで、ベースカラーと3段階の影の間の色を知覚的に計算できます。

:::

<br>

## GUIDUtility

![GUIDUtility](/assets/addon/unity/guidutility_ja.jpg)

Unityでは多くのアセットがGUIDによって管理されているため、そのGUIDがどのアセットを指しているのか確認する必要がある場面が多くあります。<br>
また、GUIDを利用することで、テキストエディターからアセットを素早く一括置換・編集することもできます。

### アセットのGUIDをクリップボードにコピー {#guidutility-copy-guid}

- UnityエディターのProjectタブでアセットを選択し、右クリックメニューから Macchiato → Asset → Get GUID を実行します。<br>
<small>（複数のアセットのGUIDをコピーした場合は、複数行でコピーされます。）</small>

### 起動方法 {#guidutility-run}

- Unityエディター上部のメニューから Tools → Macchiato → Utility → GUIDUtility を実行します。

### アセットのパスを検索 {#guidutility-get-assetpath}

- 空欄にGUIDを入力して`参照`ボタンを押します。

<br>

## MeshRendererUtility

[Modular Avatar](https://modular-avatar.nadena.dev/)などのアドオンによって、レンダラーの設定を直接操作する必要は少なくなりましたが、制作者にとっては、意図したレンダラー設定で配布することがとても重要です。このツールでは、そうした設定をワンクリックで行えるようにサポートします。

### 起動方法 {#meshrendererutility-run}

- Unityエディター上部のメニューから Tools → Macchiato → Utility → MeshRenderer のサブメニューから機能を選択します。

::: warning

以下のすべての機能は、Unityシーン内にあるすべてのアバターに対して実行されます。

:::

### Update Renderer Setting {#meshrendererutility-update-renderer-setting}

以下の5つの機能を一度に実行します。

#### Adjust Bound Box {#meshrendererutility-adjust-bound-box}

`SkinnedMeshRender`のBounds設定を、Center `[0, 0, 0]`、Extent `[1, 1, 1]`に統一します。

#### Assign AnchorOverride {#meshrendererutility-assign-anchorOverride}

アバターの基本AnchorOverrideまたは`Head`に`AnchorOverride`GameObjectを作成し、すべての`SkinnedMeshRender`および`MeshRenderer`に割り当てます。

#### Change Probes Settings {#meshrendererutility-change-probes-settings}

すべての`SkinnedMeshRender`および`MeshRenderer`のProbes設定を、Light Probesは`Blend Probes`、Reflection Probesは`Off`に設定します。

#### Change to Two-Sided Shadow {#meshrendererutility-change-to-two-sided-shadow}

テニススカートのような片面でモデリングされたモデルでは、裏面に影が描画されないビジュアル上の問題が発生する場合があります。<br>
この設定によって、このような問題を解決できます。すべての`SkinnedMeshRender`および`MeshRenderer`のCast Shadowsを`Two Sided`に設定します。

#### Update MA Mesh Settings {#meshrendererutility-update-ma-mesh-settings}

アバター内のすべての`MA Mesh Settings`を変更し、設定モードを`親で指定されている時は継承、それ以外では設定`に切り替えます。また、対象アバターの`AnchorOverride`と`Bounds`の設定に変更します。

<br>

## PhysBoneController

アバターや衣装など、さまざまなアセットを制作していると、多数のPhysBoneコンポーネントを扱うことになります。このツールでは、さまざまなプロパティを一括で変更できるようにサポートします。

### 起動方法 {#physbonecontroller-run}

- Unityエディター上部のメニューから Tools → Macchiato → Utility → PhysBone のサブメニューから機能を選択します。

::: warning

以下のすべての機能は、Unityシーン内にあるすべてのPhysBoneコンポーネントに対して実行されます。

:::

### Animated, FoldOut, Gizmo, Immobile, Reset, Version {#physbonecontroller-properties}

- PhysBoneコンポーネントの該当するプロパティを一括で適用します。
- Debugでは、各コンポーネントがどのような値を持っているかをConsoleにレポートします。

### Collider {#physbonecontroller-collider}

#### Adjust Humanoid Collider {#physbonecontroller-adjust-humanoid-collider}

`Hips`、`Spine`、`Chest`、`Head`、`UpperArm`、`LowerArm`、`Hand`、`IndexDistal`、`UpperLeg`にPhysBone Colliderコンポーネントを作成し、各ボーンの長さに合わせて調整します。

::: info

PhysBone ColliderコンポーネントのRadiusは、作成後に手動で調整する必要があります。

:::

#### Assign Humanoid Collider {#physbonecontroller-assign-humanoid-collider}

PhysBoneの名前に合わせてPhysBone Colliderを割り当てます。

| **PhysBone名** | **割り当てられるCollider** |
| --- | --- |
| Hair | Hips, Spine, Chest, Head, UpperArm, LowerArm, `Floor` |
| FrontHair | Head, UpperArm, LowerArm |
| BackHair | Hips, Spine, Chest, Head, UpperArm, LowerArm, `Floor` |
| Breast | `{RootTransformName}L` または `{RootTransformName}R` |
| Skirt | Hips, UpperLeg |
| Tail | UpperLeg |

#### Remove Hand Collider {#physbonecontroller-remove-hand-collider}

PhysBone Colliderに手のひらや指のColliderが含まれている場合、それらをリストから削除します。<br>
以前の[Dynamic Bone](https://assetstore.unity.com/packages/tools/animation/dynamic-bone-16743)をPhysBoneへ変換した際に、手に関連するColliderが割り当てられてCollider数が増えてしまう問題を解決します。

### Quest {#physbonecontroller-quest}

#### Remove Colliders {#physbonecontroller-remove-colliders}

すべてのPhysBoneのColliderを初期化します。

#### Remove Parameter {#physbonecontroller-remove-parameter}

すべてのPhysBoneのParameterを初期化します。