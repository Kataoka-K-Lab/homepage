<template>
    <main>
      <h1>{{ doc?.title }}</h1>
      <!-- Nuxt Contentで取得したMarkdownをnuxt-contentコンポーネントで描画 -->
      <article>
        <nuxt-content :document="doc" />
      </article>
    </main>
  </template>

  <script setup lang="ts">

  // ページマウント前(SSR時)に content/hello.md を読み込み
  const { data: doc } = await useAsyncData('markdown', () => queryContent('hello').findOne())
  </script>