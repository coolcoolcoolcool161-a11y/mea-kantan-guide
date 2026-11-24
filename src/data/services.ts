// S06 ポイ活のトリセツ：サービス事実の参照モジュール。
// 事実の正は ~/workspace/site-migration/work/services-data.json。CI（GitHub Actions）はリポジトリ外を
// 読めないため、その同期コピーを src/data/services-data.json に置いて読み込む。
// 事実（コード・紹介URL・特典・条件・期限）を更新したら、必ず正と同期コピーを両方更新すること。
import data from './services-data.json';

export interface ServiceFacts {
  slug: string;
  name: string;
  code: string | null;
  /** 併記する友達招待コード（dipsのみ） */
  friendCode: string | null;
  url: string | null;
  officialSite: string | null;
  benefit: string;
  conditions: string[];
  deadline: string | null;
  verified: string;
}

interface RawService {
  slug: string;
  name: string;
  code?: string | null;
  friendCode?: string | null;
  url?: string | null;
  officialSite?: string | null;
  benefit: string;
  conditions?: string[];
  deadline?: string | null;
  verified: string;
}

const rawServices = (data as unknown as { services: RawService[] }).services;

export const SERVICE_FACTS: Record<string, ServiceFacts> = Object.fromEntries(
  rawServices.map((s) => [
    s.slug,
    {
      slug: s.slug,
      name: s.name,
      code: s.code ?? null,
      friendCode: s.friendCode ?? null,
      url: s.url ?? null,
      officialSite: s.officialSite ?? null,
      benefit: s.benefit,
      conditions: s.conditions ?? [],
      deadline: s.deadline ?? null,
      verified: s.verified,
    },
  ]),
);

export const factsOf = (slug: string): ServiceFacts | undefined => SERVICE_FACTS[slug];

/** はじめての人向けおすすめ導線の並び（おすすめ優先度順） */
export const RECOMMEND_ORDER = ['freecash', 'warau', 'tiktok', 'tiktok-lite', 'moppy', 'hapitas'] as const;
