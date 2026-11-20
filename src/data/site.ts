// サイト共通の設定。GA4測定IDはユーザーから提供され次第ここに入れる。
// 空のままならGA4スクリプトは出力されない。
export const SITE = {
  name: 'かんたん紹介コード案内',
  operator: 'メア',
  siteUrl: 'https://mea-kantan-guide.pages.dev',
  description:
    'メアのかんたん紹介コード案内｜ワラウ・ハピタス・モッピー・Freecash・TikTokなど全19サービスの紹介コード・招待コードを、大きな文字で分かりやすく案内。コードをコピーしてボタンから登録するだけ。',
  dateModified: '2026-11-19',
  gaMeasurementId: '',
  xAccount: 'https://x.com/pppppuririn',
  hubUrl:
    'https://muse.ai/s/musezong-he-medeia-pr6xcxtfrplwxt/NPnupwzcqqtYUBN_-w0KoHvF5cDIBSAOBo4Nt8ve-5o',
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
  'hapitas',
  'moppy',
  'tiktok',
  'tiktok-lite',
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

// 姉妹ブログ（旧サイトの「メアのほかのブログも見てみてね♡」5件。旧muse.ai URL。姉妹サイトの移行が完了したら新pages.dev URLに更新する）
export const SISTER_BLOGS = [
  {
    name: 'ポイ活ブログ',
    note: 'ランキングや特集が充実した総合版',
    url: 'https://muse.ai/s/poihuo-burogu-xlxi6xcxsxg4ghx07/74yi0ejxEmcRwO9Gsp15bpRovm76_UruhoA3biG-N2o',
  },
  {
    name: '紹介コードランキング',
    note: '特典の大きさ順に並べたランキング版',
    url: 'https://muse.ai/s/shao-jie-kodorankingu-jxj6xcxsxfxqxj6xqx0/OqiA00u9xkaSI9_7bBwCrskhhMRQu3SkOvHqtDonW84',
  },
  {
    name: 'ポイ活コード検索',
    note: 'サービス名で検索してすぐ探せる検索版',
    url: 'https://muse.ai/s/poihuo-kodojian-suo-hb6xcxsxg20qsxl/6jl8s6igC6cBHibzVwCEADiLunryhUT0jRZr_pVQrQE',
  },
  {
    name: 'ポイ活マガジン',
    note: '読み物スタイルでじっくり紹介する雑誌版',
    url: 'https://muse.ai/s/poihuo-magazin-ob6xcxsxgwsxa0y/2A2y1OC2F5lmACOSYdjgyPIv_dFmUkHnjAtMs7Xkfcc',
  },
  {
    name: 'ゲームポイ活ブログ',
    note: 'ゲームで貯める案件に特化した版',
    url: 'https://muse.ai/s/gemupoihuo-burogu-gxi6xcxsxgpf18xc/dc3zg6z-_dnAhCoD7Nkbu9w9wGj0ytBYpNWuVBeOS-I',
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
