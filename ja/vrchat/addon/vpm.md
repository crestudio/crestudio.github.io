---
title: VPM登録とパッケージのインストール
description: マキアートVPMリポジトリをVCCに登録し、パッケージをインストールする方法
image: https://macchiato.kr/assets/card/website_card_addon.jpg
aside: true
outline: [1, 3]
---

<script setup>
  import { VPButton } from 'vitepress/theme'
  const UnityItem = [
    {
        title: 'Cleaner',
        description: 'Unityアセットの整理や整列を行うアドオン',
        src: '/assets/addon/unity/macchiato-cleaner.jpg',
        link: '/vrchat/addon/unity/cleaner'
    },
    {
        title: 'Core',
        description: 'VRChat向けのUnity用関数ライブラリ',
        src: '/assets/addon/unity/macchiato-core.jpg',
        link: '/vrchat/addon/unity/core'
    },
    {
        title: 'Utility',
        description: 'アバターの改変をサポートする便利な各種アドオン',
        src: '/assets/addon/unity/macchiato-utility.jpg',
        link: '/vrchat/addon/unity/utility'
    }
  ]
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

<br>

---

# マキアートパッケージ {#macchiato-package}

<PageGrid :items="UnityItem" />