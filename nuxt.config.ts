// nuxt.config.ts
export default defineNuxtConfig({
  // Nuxt3の場合はデフォルトでフレームワークがVue3・Vite利用になっています。

  // 静的サイトとしてGitHub Pagesにデプロイするので "static" ターゲットへ
  // Nuxt3では target は必要なくなり、代わりに `ssr: false` + `nitro` の静的モードなどがあります。
  // Nuxt2の場合は `target: 'static'` を指定します。
  // Nuxt3で静的生成の設定は以下のように書きます。（必要に応じて）
  nitro: {
    prerender: {
      routes: ['/']  // 必要に応じてプリレンダリングしたいルートを列挙
    }
  },

  // GitHub Pagesのリポジトリ名が "nuxt-github-pages-sample" の場合、
  // カスタムドメインを設定しないかぎりベースパスが "/nuxt-github-pages-sample/" になります。
  app: {
    baseURL: '/home/', // GitHub Pages用に設定
  },

  // SCSSをグローバルに使いたい場合
  css: [
    '~/assets/styles/global.scss',
  ],

  // build設定 (特にSCSSやTypeScriptの追加設定) は以下のように
  // Nuxt3 では基本的に Vite が裏で動いているため大きくカスタマイズしなくても大丈夫です。
  // 例:
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          // 全ページ共通で使う変数・mixinなどを読み込む場合
          additionalData: '@import "assets/styles/_variables.scss";'
        }
      }
    }
  },
  modules: [
    '@nuxt/content'
  ],
});
