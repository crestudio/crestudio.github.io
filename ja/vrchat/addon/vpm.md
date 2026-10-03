---
title: VPM登録とパッケージのインストール
description: マキアートVPMリポジトリをVCCに登録し、パッケージをインストールする方法
image: https://macchiato.kr/assets/card/website_card_addon.jpg
aside: true
outline: [1, 3]
---

<script setup>
  import { VPButton } from 'vitepress/theme'
</script>

# VPM登録とパッケージのインストール {#setup-vpm}

## 自動で登録する {#auto-add-repository}

<div class="macchiato-center">
  <VPButton tag="a" href="vcc://vpm/addRepo?url=https://macchiato.kr/vpm/vpm.json" text="VPMリポジトリを登録" theme="brand" />
</div>

## 手動で登録する {#manual-add-repository}

:::::: details 詳細ガイド

![VRChat Creator Companion](/assets/addon/vpm/vpm_1_vcc_settings.jpg)

VRChat Creator Companionで**「Settings」ボタン**をクリックします。

<br>

![VPMアドレス入力](/assets/addon/vpm/vpm_2_vcc_packages.jpg)

**「Packages」**タブを開き、**「Add Repository」**ボタンをクリックして、`https://macchiato.kr/vpm/vpm.json` を入力します。

<br>

![VPM追加](/assets/addon/vpm/vpm_3_add_repository.jpg)

**「Add Repository」**ボタンをクリックして登録します。

::::::

## VPMパッケージをインストールする {#add-package}

![プロジェクト管理](/assets/addon/vpm/vpm_4_manage_project.jpg)

インストールしたいプロジェクトの**「Manage Project」**ボタンをクリックします。

<br>

![パッケージのインストール](/assets/addon/vpm/vpm_5_add_package.jpg)

インストールしたい**パッケージ**の**「＋」**ボタンをクリックします。