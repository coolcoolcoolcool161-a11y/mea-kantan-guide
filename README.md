# かんたん紹介コード案内（mea-kantan-guide）

メアのポイ活メディア「かんたん紹介コード案内」の独立サイト版。Astro＋Markdownで構築し、Cloudflare Pages（Free）で公開する。旧サイト（muse.ai）は移行完了＋ユーザー最終承認があるまで削除しない。

## 公開URL（暫定）

- https://mea-kantan-guide.pages.dev （Cloudflare Pagesのプロジェクト作成時にサブドメインが確定したら `astro.config.mjs`・`public/robots.txt`・`public/sitemap.xml` のURLを書き換えること）

## 内容

- 記事：全19サービス分の個別記事ページ（`src/content/articles/`）。カテゴリ6部門（ポイントサイト4／SNS・動画2／支払い・お買い物3／通信・銀行・その他4／AIアシスタント1／新しいポイ活アプリ5）
- トップページ：メアのいちおし（Freecash）、使い方はかんたん3ステップ、部門別カード一覧（全19サービス）、姉妹ブログ、FAQ 3件、AdMax 3箇所
- カテゴリページ：6部門
- サイト内検索：`/search/`（ビルド時に `/search-index.json` を生成し、ブラウザ内で絞り込み）
- 法務ページ：広告・紹介報酬に関する表記／プライバシーポリシー／利用規約・免責事項（旧サイトの文言をそのまま移行）
- SEO：ページごとの固有title・meta description・canonical・XMLサイトマップ・robots.txt・OGP・JSON-LD（WebPage／ItemList／FAQPage／Article／BreadcrumbList）・パンくず・内部リンク・モバイル対応。JavaScriptなしでも記事本文はHTMLに含まれる。

## 紹介コード・URLの扱い

- コード・紹介URL・特典額・条件は `src/content/articles/*.md` のfrontmatterと本文に記載。変更するときは `~/workspace/*-referral-post.txt` と台帳 `~/workspace/site-migration-inventory.md` §4.1 で照合すること。
- ワラウのレートは1pt＝1円（公式確認済み）。紹介URLは `/bEs5`（コード `bEs7` と末尾が違うのが正しい）。公式バナーHTMLの `/boav` は使わないこと。
- Freecashは招待コード入力後、初回DLで1,430円分ゲット（旧表記「招待された側は初回DLで1,430円分」は誤りで使わないこと）。
- トクエルの記事ファイル名は `tokueru.md`（公式ドメイン tokueru.jp・既存5サイトのスラッグと一致）。`tokueu.md` は誤り。
- ミラポイの招待特典400ptは公式未確認のため金額を記載しないこと（旧サイト通り「招待特典あり／金額はアプリ内でご確認ください」とする）。

## 画像について

- `public/images/` の画像6ファイルはGitHubの `push_files` では送れない（UTF-8テキストのみ対応）。GitHub Web UIのドラッグ＆ドロップで `public/images/` にアップロードすること。アップロードが済むまでデプロイ先では画像が表示されない。
- hero.jpg＝ヒーローバナー、banner-freecash.jpg＝Freecash HQバナー、banner-muse.jpg＝Muse紹介画像、banner-official-{warau,moppy,hapitas}＝公式細型バナー3枚。6枚すべて旧サイトのexportから抽出したバイトとSHA256一致。

## ビルド

- `npm run build`（Astro 5）。`node_modules` は `../poikatsu-magazine/node_modules` へのシンボリックリンク（同じAstroバージョンを共有）。ビルド前に `ls -la node_modules` でリンクが有効なことを確認すること。
- ビルド後、簡易サーバーで全URLの200確認を行うこと（トップ・記事19件・カテゴリ6件・検索・FAQ・運営者情報・お問い合わせ・法務3件・サイトマップ・robots.txt・検索インデックス・画像6件）。
- `dist/` はビルド成果物。GitHubへのプッシュ対象外（マニフェストから除外）。

## プッシュ

- `github push-files --owner mea-poikatsu --repo mea-kantan-guide --branch main --message "かんたん紹介コード案内 Astro版 初回コミット" --source-dir ~/workspace/site-migration/poikatsu-kantan --paths-file ~/workspace/site-migration/work/poikatsu-kantan-paths-textonly.txt`
- 手順書 `/opt/hatch/connectors/github/references/snapshot-push.md` に従うこと。プッシュ前に `list_commits` でリポジトリが空（409 Git Repository is empty）であることを確認し、プッシュ直前にも再確認すること。
- 同期記録は `~/workspace/site-migration/poikatsu-kantan.muse-github-snapshot-sync.json` に保存する。
