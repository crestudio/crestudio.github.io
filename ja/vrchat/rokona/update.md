---
title: アップデート記録
description: ロコナアバターのアップデート記録
image: https://macchiato.kr/assets/card/website_card_rokona.jpg
aside: true
outline: [1, 2]
---

# アップデート記録 {#update}

## 2025-12-19 / バージョン 1.00 {#1.00}

- アバターリリース

## 2026-01-15 / バージョン 1.01 {#1.01}

![6種の追加表情＋8種のポーズ](/assets/rokona/update/rokona_update_1.01_1_ja.jpg)
![ほっぺボーンを追加](/assets/rokona/update/rokona_update_1.01_2_ja.jpg)
![Body Detail レイヤー追加とShadow トーンの調整](/assets/rokona/update/rokona_update_1.01_3_ja.jpg)
![光沢のあるマテリアルを追加](/assets/rokona/update/rokona_update_1.01_4_ja.jpg)

### モデル {#1.01-model}

- 顎先をよりシャープにするシェイプキーを追加
- 腕章上部とシャツの間に隙間を追加
- 下着のクリップウェイトの不具合を修正
- 透過エフェクト用メッシュをやや前方に移動
- ほっぺボーンを追加
- エフェクト関連メッシュの法線を修正
- 一部エッジの不要なプロパティを削除

### マテリアル・テクスチャ {#1.01-material}

- 光沢のあるシェーディングバージョンを追加
- 目のハイライトをEmissionに追加
- 目のEmission強度を下げ、完全暗い環境では発光しないよう修正
- 眉間付近のアウトラインが目立ちにくいよう調整
- ボディディテールの影を追加し、影の範囲を調整
- 目の領域にMatcapを追加

### Unity関連 {#1.01-unity}

- Base用ジェスチャーのVR用Idleアニメーション欠落を修正
- fileID基準を「0」から「9100000」に変更
- Action実行中はLocomotionが再生されないよう修正
- 基本表情固定機能を追加＋固定用表情6種を追加
- ジェスチャーレイヤーのWrite DefaultsをOFFに変更
- VRモード時にヘアがChestコライダーを使用しないよう修正
- VRCEmoteポーズ8種を追加

## 2026-01-17 / バージョン 1.02 {#1.02}

### マテリアル・テクスチャ {#1.02-material}

- Glossyタイプで目のEmission変更が反映されていなかった問題を修正

### Unity関連 {#1.02-unity}

- BaseプレハブでBonesのオーバーライドを削除

## 2026-05-09 / バージョン 1.03 {#1.03}

![座っていてもフルトラ対応](/assets/rokona/update/rokona_update_1.03_1_ja.jpg)
![Visemeレイヤー追加](/assets/rokona/update/rokona_update_1.03_2_ja.jpg)

### Unity関連 {#1.03-unity}

- Blendshape Normal警告が発生しないようImport設定を修正
- アバターのHumanoid Colliderをより正確に調整
- Visemeと表情の干渉を軽減するFXレイヤーを追加
- フルトラッキング時、VRChatの椅子に座ってもトラッキングを継続する機能を追加