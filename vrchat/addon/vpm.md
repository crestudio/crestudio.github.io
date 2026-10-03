---
title: VPM 등록 및 패키지 설치
description: 마끼아또 VPM 리스트를 VCC에 등록하고 패키지를 설치하는 방법
image: https://macchiato.kr/assets/card/website_card_addon.jpg
aside: true
outline: [1, 3]
---

<script setup>
  import { VPButton } from 'vitepress/theme'
  const UnityItem = [
    {
        title: 'Cleaner',
        description: 'Unity 에셋 정리 및 정렬 관련 애드온',
        src: '/assets/addon/unity/macchiato-cleaner.jpg',
        link: '/vrchat/addon/unity/cleaner'
    },
    {
        title: 'Core',
        description: 'VRChat 관련 Unity 함수 라이브러리',
        src: '/assets/addon/unity/macchiato-core.jpg',
        link: '/vrchat/addon/unity/core'
    },
    {
        title: 'Utility',
        description: '아바타 개변을 도와주는 각종 유용한 애드온',
        src: '/assets/addon/unity/macchiato-utility.jpg',
        link: '/vrchat/addon/unity/utility'
    }
  ]
</script>

# VPM 등록 및 패키지 설치 {#setup-vpm}

## 자동 등록 {#auto-add-repository}

<div class="macchiato-center">
    <VPButton tag="a" href="vcc://vpm/addRepo?url=https://macchiato.kr/vpm/vpm.json" text="VPM 리포지토리 등록" theme="brand" /> 
</div>

## 수동 등록 {#manual-add-repository}

:::::: details 상세과정

![VRChat Creator Companion](/assets/addon/vpm/vpm_1_vcc_settings.jpg)

VRChat Creator Companion에서 **Settings 버튼을 클릭**합니다

<br>

![VPM 주소 입력](/assets/addon/vpm/vpm_2_vcc_packages.jpg)

Packages 탭에서 **Add Repository 버튼을 누른 후 `https://macchiato.kr/vpm/vpm.json` 입력**합니다

<br>

![VPM 추가](/assets/addon/vpm/vpm_3_add_repository.jpg)

**Add Repository 버튼을 눌러 등록**합니다

::::::

## 패키지 설치 {#add-package}

![프로젝트 관리](/assets/addon/vpm/vpm_4_manage_project.jpg)

설치를 원하는 프로젝트의 **Manage Project 버튼을 클릭**합니다

<br>

![패키지 설치](/assets/addon/vpm/vpm_5_add_package.jpg)

**원하는 Macchiato 패키지에서 + 버튼 클릭**합니다

<br>

---

# 마끼아또 패키지 {#macchiato-package}

<PageGrid :items="UnityItem" />