// サイト共通の設定。GA4測定IDはユーザーから提供され次第ここに入れる。
// 空のままならGA4スクリプトは出力されない。
export const SITE = {
  name: 'かんたん紹介コード案内',
  operator: 'メア',
  siteUrl: 'https://coolcoolcoolcool161-a11y.github.io/mea-kantan-guide',
  description:
    'メアのかんたん紹介コード案内｜ワラウ・ハピタス・モッピー・Freecash・TikTokなど全19サービスの紹介コード・招待コードを、大きな文字で分かりやすく案内。コードをコピーしてボタンから登録するだけ。',
  dateModified: '2026-11-21',
  gaMeasurementId: 'G-8BB8V3DRW8',
  xAccount: 'https://x.com/pppppuririn',
  hubUrl:
    'https://coolcoolcoolcool161-a11y.github.io/mea-poikatsu-media/',
} as const;

// Astro 5ではcontent collectionのentry.idに拡張子（.md）が付くため、URL用スラッグに変換する
export const slugOf = (id: string) => id.replace(/\.md$/, '');

// 旧サイト（かんたん紹介コード案内 v16）の見出し分け（6部門）
export const CATEGORIES = [
  { slug: 'point-sites', name: 'ポイントサイト' },
  { slug: 'sns-video', name: 'SNS・動画' },
  { slug: 'payment-shopping', name: '支払い・お買い物' },
  { slug: 'telecom-bank-other', name: '通信・銀行・その他' },
  { slug: 'ai-assistant', name: 'AIアシスタント' },
  { slug: 'new-apps', name: '新しいポイ活アプリ' },
] as const;

export type CategorySlug = (typeof CATEGORIES)[number]['slug'];

export const CATEGORY_NAMES: Record<string, string> = Object.fromEntries(
  CATEGORIES.map((c) => [c.slug, c.name]),
);

// 旧サイトのカードの並び（いちおしFreecash→ポイントサイト→SNS・動画→支払い・お買い物→通信・銀行・その他→AIアシスタント→新しいポイ活アプリ）
export const KANTAN_ORDER = [
  'freecash',
  'warau',
  'tiktok',
  'tiktok-lite',
  'moppy',
  'hapitas',
  'paypay',
  'mercari',
  'airwallet',
  'rakuten-mobile',
  'olive',
  'orikuji',
  'pokekatsu',
  'muse',
  'sampo',
  'butamaru',
  'mirapoi',
  'tokueru',
  'dips',
] as const;

// 姉妹ブログ（旧サイトの「メアのほかのブログも見てみてね♡」5件。旧muse.ai URL。2026-11-21にGitHub Pagesの新URLへ更新済み）
export const SISTER_BLOGS = [
  {
    name: 'ポイ活ブログ',
    note: 'ランキングや特集が充実した総合版',
    url: 'https://coolcoolcoolcool161-a11y.github.io/mea-poikatsu-blog/',
  },
  {
    name: 'おすすめ紹介コード',
    note: 'メアのおすすめ順に並べた紹介コード版',
    url: 'https://coolcoolcoolcool161-a11y.github.io/mea-ranking/',
  },
  {
    name: 'ポイ活コード検索',
    note: 'サービス名で検索してすぐ探せる検索版',
    url: 'https://coolcoolcoolcool161-a11y.github.io/mea-code-search/',
  },
  {
    name: 'ポイ活マガジン',
    note: '読み物スタイルでじっくり紹介する雑誌版',
    url: 'https://coolcoolcoolcool161-a11y.github.io/mea-poikatsu-magazine/',
  },
  {
    name: 'ゲームポイ活ブログ',
    note: 'ゲームで貯める案件に特化した版',
    url: 'https://coolcoolcoolcool161-a11y.github.io/mea-game-poikatsu/',
  },
] as const;

export const FAQS = [
  {
    q: '紹介コードはどこで入力しますか？',
    a: 'サービスの登録画面や、アプリ内の「招待コード入力」欄に入力してね。楽天モバイルのようなリンク型の紹介は、紹介リンクから申し込むだけでOKだよ◎',
  },
  {
    q: '登録にお金はかかりますか？',
    a: 'このページに載せているポイントサイトやアプリの登録はすべて無料だよ♡ 楽天モバイルやOliveなど、サービス自体の契約が必要なものは各条件を確認してね。',
  },
  {
    q: 'メアに個人情報は伝わりますか？',
    a: '伝わらないよ。紹介コードや紹介リンクを使っても、あなたの名前や契約内容がメアに知られることはないから安心してね。',
  },
] as const;
