---
title: MaterialTemplateアドオン一
description: VRChatアバターのマテリアルを非破壊で調整できるアドオン。Modular Avatarのように元のマテリアルを直接変更せず、適用後の見た目をプレビューできます。リアルタイムプレビューや、設定を実際のマテリアルに反映する機能も搭載。
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

## 特徴 {#feature}

- アバターのマテリアルを直接変更することなく、設定を適用した状態をプレビューできます！
- マテリアルの設定をリアルタイムで変更しても、すぐに結果を確認できます！
- Modular Avatarに対応！プレビュー時とアバターのアップロード時にのみ設定が適用されます。
- 適用する設定を自由にカスタマイズでき、必要に応じてアバターのマテリアルに直接反映することもできます。

## 必要なコンポーネント {#requirement}

MaterialTemplate のすべての機能を利用するには、以下のコンポーネントが必要です。

- [VRChat SDK](https://vcc.docs.vrchat.com/)
- [lilToon](https://lilxyzw.github.io/lilToon/)
- [Modular Avatar](https://modular-avatar.nadena.dev/)

## コンポーネントの追加 {#add-component}

![コンポーネントの追加](/assets/addon/unity/materialtemplate/materialtemplate_add_component.jpg)

- Hierarchy でアバターを右クリックし、Macchiato → Add MaterialTemplate を実行します。
- または、アバター内のオブジェクトで Add Component を選択し、Caramel Macchiato → Macchiato MaterialTemplate コンポーネントを追加します。

::: tip

コンポーネントを追加すると、対象のオブジェクトが自動的に参照先として設定され、オブジェクトとマテリアルの一覧も自動的に追加されます。

:::

## 簡易設定 {#simple-mode}

![簡易設定](/assets/addon/unity/materialtemplate/materialtemplate_simple_ja.jpg)

1. `基準マテリアル` に設定を適用したいマテリアルを指定します。
1. お好みのプリセットを選択します。

## 詳細設定 {#advanced-mode}

<div class="macchiato-center">
    <img src="/assets/addon/unity/materialtemplate/materialtemplate_advanced_ja.jpg" alt="상세 적용" class="macchiato-image">
</div>

| **設定** | **説明** |
| --- | --- |
| `メモ` | テンプレートにどのような設定が含まれているか、メモを残せます。 |
| `参照オブジェクト` | マテリアル一覧の取得元となるオブジェクトを指定します。 |
| `マテリアル` | 設定の適用対象となるマテリアルの一覧を表示します。<br>`-`ボタンを押すと、適用対象から除外できます。 |
| `マテリアルを取得` | `参照オブジェクト`からマテリアルを取得し、一覧を更新します。 |
| `基準マテリアル` | `マテリアル`に設定値を適用する際の基準となるマテリアルを指定します。 |
| `一般`、`拡張`、`ほぼすべて`、`すべてコピー`、`選択解除` | `lilToon`と`一般`の各オプションを、選択したプリセットに設定します。 |
| `lilToon` | `更新`系のオプションでは、各セクションのプロパティを取得して適用するかどうかを設定できます。<br>`機能の有効状態を同期`では、シェーダー機能の有効・無効の状態も取得します。<br>`強制適用`系のオプションでは、該当する機能を強制的に有効化します。 |
| `一般` | レンダーキュー、GPU Instancing、Global Illuminationに関するプロパティを更新するか、リセットするかを設定できます。 |
| `プレビュー` | NDMFのプレビュー機能を有効にするかどうかを設定します。 |
| `有効時のみ値を適用` | `基準マテリアル`と`マテリアル`の両方で該当する機能が有効になっている場合のみ、プロパティを適用します。<br>例えば、影を使用していないマテリアルには、影の色や関連するプロパティを適用しません。 |
| `シェーダーを更新` | lilToonの輪郭線やテッセレーション機能を適用するには、`マテリアル`のシェーダーの種類も更新する必要があります。<br>**Variant Materialには適用されません。** |
| `デバッグ` | 設定の適用時に、デバッグ用のメッセージをコンソールに出力します。 |
| `マテリアルに適用` | `適用`ボタンを押すと、設定値を実際のマテリアルに書き込み、保存します。<br>`元に戻す`ボタンを押すと、最後に適用した変更を取り消します。 |

## 使用例 {#example}

### アバター全体に適用 {#apply-avatar}

![アバター全体に適用](/assets/addon/unity/materialtemplate/materialtemplate_fullavatar_ja.jpg)

- アバター全体のマテリアルを調整して、スタイルを簡単に統一できます！

<br>

### パーツごとに適用 {#apply-per-part}

![パーツごとに適用](/assets/addon/unity/materialtemplate/materialtemplate_part_ja.jpg)

- 1つのアバターでも、ボディ・衣装・髪の毛にそれぞれ異なる設定を適用できます！

<br>

### アバターごとに適用 {#apply-per-avatar}

![アバターごとに適用](/assets/addon/unity/materialtemplate/materialtemplate_peravatar_ja.jpg)

- 同じ衣装を着ていても、アバターごとに異なるスタイルを適用できます！

<br>

## アップデート記録 {#update}

### 2026-10-10 / バージョン 1.00 {#1.00}

- リリース

## クレジット {#credit}

### アバター {#avatar}

- キュビ先生の[愛莉](https://kyubihome.booth.pm/items/6082686)
- こまど先生の[ショコラ](https://komado.booth.pm/items/6405390)
- マキアートの[ロコナ](https://macchiato.booth.pm/items/7682496)
- ぽんでろ先生の[しなの](https://ponderogen.booth.pm/items/6106863)

### モデル {#model}

- Libero先生の[Chained UP](https://liberoboutique.booth.pm/items/8355832)
- LookVook先生の[Sera Yura](https://lookvook.booth.pm/items/8786891)
- てんぷらぱすた先生の[本命ニット](https://tempasta.booth.pm/items/6110958)
- リネ先生の[ねこタイドボブヘア](https://li-ne.booth.pm/items/7977491)
- リネ先生の[ラブリーロングヘア](https://li-ne.booth.pm/items/7643173)

## バグ報告 {#bug-report}

正常に動作しない場合は、[BOOTHのメッセージ](https://macchiato.booth.pm/conversations/new)からお問い合わせください。<br>
可能であれば、スクリーンショットや動画に加え、以下の情報やコンソールに出力されたメッセージなど、詳しい情報も併せてお送りいただけると、問題の早期解決に役立ちます。

::: info

使用しているシェーダーの種類とバージョン

Unity プロジェクトに導入しているアドオンの一覧<br>
<small>（Modular Avatar のように、ビルド時に処理を適用するアドオンを導入している場合は、必ず記載してください）</small>

:::

<div class="macchiato-center">
<VPButton tag="a" href="https://macchiato.booth.pm/items/8960598" text="BOOTHページ" theme="brand" /> 
</div>