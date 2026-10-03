---
title: アドオン一覧
description: BlenderやUnityなど、VRChat向けコンテンツ制作に役立つ各種アドオン
image: https://macchiato.kr/assets/card/website_card_addon.jpg
aside: false
---

<script setup>
    import { VPButton } from 'vitepress/theme'
    const UnityItem = [
        {
            title: 'Cleaner',
            description: 'Unityアセットの整理や整列を行うアドオン',
            src: '/assets/addon/unity/macchiato-cleaner.jpg',
            link: '/ja/vrchat/addon/unity/cleaner'
        },
        {
            title: 'Core',
            description: 'VRChat向けのUnity用関数ライブラリ',
            src: '/assets/addon/unity/macchiato-core.jpg',
            link: '/ja/vrchat/addon/unity/core'
        },
        {
            title: 'Utility',
            description: 'アバターの改変をサポートする便利な各種アドオン',
            src: '/assets/addon/unity/macchiato-utility.jpg',
            link: '/ja/vrchat/addon/unity/utility'
        }
    ]
    const BlenderItem = [
        {
            title: 'Blender Utility',
            description: 'Blenderの操作やプロジェクト管理をサポートする各種機能',
            src: '/assets/addon/blender/blender-utility.jpg',
            link: '/ja/vrchat/addon/blender/blender-utility'
        },
        {
            title: 'Bone Utility',
            description: 'ヒューマノイドボーンを簡単に編集できるようにするアドオン',
            src: '/assets/addon/blender/bone-utility.jpg',
            link: '/ja/vrchat/addon/blender/bone-utility'
        },
        {
            title: 'ShapeKey Utility',
            description: 'シェイプキーの編集をより快適にするアドオン',
            src: '/assets/addon/blender/shapekey-utility.jpg',
            link: '/ja/vrchat/addon/blender/shapekey-utility'
        },
        {
            title: 'Vertex Utility',
            description: '大量の頂点を素早く管理できるアドオン',
            src: '/assets/addon/blender/vertex-utility.jpg',
            link: '/ja/vrchat/addon/blender/vertex-utility'
        },
        {
            title: 'Weight Utility',
            description: 'ウェイトを簡単に扱えるようにする補助アドオン',
            src: '/assets/addon/blender/weight-utility.jpg',
            link: '/ja/vrchat/addon/blender/weight-utility'
        }
    ]
</script>

# Unity アドオン {#unity-addon}

<PageGrid :items="UnityItem" />

<div class="macchiato-center">
    <VPButton tag="a" href="/ja/vrchat/addon/vpm" text="VPMリポジトリを登録" theme="brand" /> 
</div>

<br>

---

# Blender アドオン {#blender-addon}

<PageGrid :items="BlenderItem" />