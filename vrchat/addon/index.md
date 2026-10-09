---
title: 애드온 목록
description: Blender 및 Unity 등 각종 VRChat 관련 컨텐츠 제작에 도움이 되는 애드온
image: https://macchiato.kr/assets/card/website_card_addon.jpg
aside: false
---

<script setup>
    import { VPButton } from 'vitepress/theme'
    const PaidItem = [
        {
            title: 'MaterialTemplate',
            description: 'VRChat 머테리얼 실시간 가상 적용 애드온',
            src: '/assets/addon/unity/materialtemplate.jpg',
            link: '/vrchat/addon/unity/materialtemplate'
        }
    ]
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
    const BlenderItem = [
        {
            title: 'Blender Utility',
            description: 'Blender 조작과 프로젝트 관리를 도와주는 각종 기능들',
            src: '/assets/addon/blender/blender-utility.jpg',
            link: '/vrchat/addon/blender/blender-utility'
        },
        {
            title: 'Bone Utility',
            description: '휴머노이드 본을 쉽게 편집할 수 있게 만드는 애드온',
            src: '/assets/addon/blender/bone-utility.jpg',
            link: '/vrchat/addon/blender/bone-utility'
        },
        {
            title: 'ShapeKey Utility',
            description: '쉐이프키 편집 관련 조작을 편리하게 도와주는 애드온',
            src: '/assets/addon/blender/shapekey-utility.jpg',
            link: '/vrchat/addon/blender/shapekey-utility'
        },
        {
            title: 'Vertex Utility',
            description: '수많은 버텍스들을 빠르게 관리해 주는 애드온',
            src: '/assets/addon/blender/vertex-utility.jpg',
            link: '/vrchat/addon/blender/vertex-utility'
        },
        {
            title: 'Weight Utility',
            description: '웨이트를 손쉽게 다루게 도와주는 보조 애드온',
            src: '/assets/addon/blender/weight-utility.jpg',
            link: '/vrchat/addon/blender/weight-utility'
        }
    ]
</script>

# 유료 애드온 {#paid-addon}

<PageGrid :items="PaidItem" />

<br>

---

# Unity 애드온 {#unity-addon}

<PageGrid :items="UnityItem" />

<div class="macchiato-center">
    <VPButton tag="a" href="/vrchat/addon/vpm" text="VPM 리포지토리 등록" theme="brand" /> 
</div>

<br>

---

# Blender 애드온 {#blender-addon}

<PageGrid :items="BlenderItem" />