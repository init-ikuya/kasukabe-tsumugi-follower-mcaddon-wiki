## プロジェクト概要

- `kasukabe-tsumugi-follower-mcaddon` の日本語Wikiサイト
- VitePress で構築、GitHub Pages でホスティング
- **対象読者: ゲームを遊ぶユーザーのみ（開発者向けではない）**

## コンテンツのルール（重要）

- **このWikiはゲームを遊ぶユーザー向けであり、開発者向けではない**
- アドオン内部のコード構造に関する情報は一切記載しないこと
  - ディレクトリ構成（`BP/`, `RP/`, `scripts/` など）
  - ファイル名（`tame.ts`, `combat.ts`, `constants.ts` など）
  - 変数名・定数名（`AFFECTION_MAX`, `HEALTH_FLEE_THRESHOLD` など）
  - Dynamic Property キー、タグ名、コンポーネントグループ名、イベント名
  - § カラーコード（`§a`, `§d` など）
  - TypeScript / Script API / manifest.json などの技術用語
- 数値（HP 40、好感度最大100 など）はユーザー向けの説明として記載してOK
- ゲーム内コマンド（`/summon`, `/give` など）はユーザーが使うものなので記載OK

## 技術スタック

- VitePress + Vue
- TypeScript（設定ファイル）
- GitHub Actions（自動デプロイ）

## コマンド

- `npm run dev` — ローカル開発サーバー起動
- `npm run build` — 本番ビルド
- `npm run preview` — ビルド結果のプレビュー

## ディレクトリ構成

```
index.md                 # トップページ（Hero layout）
guide/                   # ガイド（はじめに、インストール、遊び方、FAQ）
features/                # 機能詳細（テイム、好感度、戦闘、装備、追従、ボイス、カレー、UI）
reference/               # リファレンス（ステータス、ボイスライン、コマンド、変更履歴）
.vitepress/config.ts     # サイト設定（ナビ、サイドバー、検索、日本語UI）
.vitepress/theme/        # カスタムテーマ（つむぎカラー #ffcd31）
.github/workflows/       # GitHub Pages デプロイ
public/images/           # 画像アセット置き場
```

## ページ追加時のルール

- 新しいページを追加したら `.vitepress/config.ts` のサイドバーとナビにも反映すること
- コンテンツの数値・セリフはアドオン本体のソースコードから正確に引用すること
  - 定数: `/Users/ikuya.sato/repo/kasukabe-tsumugi-follower-mcaddon/BP/scripts/constants.ts`
  - セリフ: `/Users/ikuya.sato/repo/kasukabe-tsumugi-follower-mcaddon/BP/scripts/i18n/ja.ts`

## バージョン体系

このプロジェクトには3種類のバージョンがある。混同しないこと。

| 種類                 | 現在のバージョン | 説明                                                                                    |
| -------------------- | ---------------- | --------------------------------------------------------------------------------------- |
| アドオンバージョン   | v1.0.0           | このアドオン自体のバージョン（`manifest.json` の `version`）                            |
| Minecraftバージョン  | 26.0             | ユーザーが遊ぶMinecraftのバージョン。Wikiにはこちらを記載する                           |
| Script APIバージョン | 1.26.0           | `manifest.json` の `min_engine_version`。内部的なエンジンバージョン。Wikiには記載しない |

- Wikiで「対応バージョン」と書く場合は **Minecraftバージョン（26.0）** を使う
- Script APIバージョン（1.26.0）や `@minecraft/server` のバージョン（2.5.0）は技術的な情報なのでWikiには書かない

## テーマカラー

- メインカラー: `#ffcd31`（つむぎの黄色）
- サブカラー: `#fffbdb`（薄い黄色）
- Hero グラデーション: `#ffcd31` → `#ff9a56`

## Git コミットルール

- コミットメッセージに `Co-Authored-By: Claude ...` を含めないこと
- author / committer に Claude 関連の情報を入れないこと
