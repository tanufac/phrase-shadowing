# AI Script: フレーズ暗記アプリ「Phrase Shadowing」を再現するための指示書

このファイルの内容をそのままAIに渡せば、同じ暗記アプリ「Phrase Shadowing」を再現できます。
UI（ヨーロッパ風クラシック）・機能・データ構造まで厳密に指定しています。
特定の企業・団体に固有の情報や、実在個人の情報は含めないこと（一般的な英語フレーズで構成）。

---

## ゴール
頻出のビジネス英語・日常英語フレーズを「聞いて→口に出して→自分から言える」まで
反復する暗記アプリを、素のHTML/CSS/JavaScript（バニラJS、フレームワーク不使用）で作る。
ブラウザでファイルを開くだけで動く。外部通信・外部CDN・ビルドツールは一切使わない。
発想の核: まず耳から入れる（音声優先）。英語・日本語は伏せておき、必要なときだけ表示する。

## ファイル構成（フォルダを1つ作り、その中に配置）
- `phrases.js` … フレーズデータ（本体から分離）
- `index.html` … アプリ本体（HTML/CSS/JS を1ファイルに内包し、phrases.js を読み込む）

---

## データ構造（phrases.js）
グローバル定数 `PHRASES` を定義する。

    const PHRASES = {
      categoryKey: {
        title: "カテゴリ表示名",
        icon: "絵文字",
        sets: [
          { name: "Set 1: サブテーマ", items: [ { en: "英語フレーズ", ja: "日本語", tag: "使う場面" }, ... ] },
          ...
        ]
      },
      ...
    };

- 2カテゴリ: work（仕事）と daily（日常）。各カテゴリ 10セット × 10フレーズ = 各100。
- item = { en, ja, tag }。tag は「依頼／確認／会議／あいさつ／反応」等の短い場面ラベル。
- フレーズは頻出の一般的な定型表現を選ぶ（レベルは頻度優先で、初級〜実務標準が混在してよい）。
- work のセット例: 依頼・お願い/確認・質問/会議で/意見・提案/進捗・報告/メール定型/
  問題・トラブル/交渉・調整/感謝・謝罪/雑談・つなぎ。
- daily のセット例: あいさつ/相づち・反応/気持ち/食事・カフェ/予定・約束/依頼・お願い/
  買い物・外出/天気・雑談/困ったとき/別れ・締め。

---

## UI仕様（ヨーロッパ風クラシック・厳密に再現）

### トーン
落ち着いた上品なクラシック。生成りの紙、セリフ体（Georgia系）の見出し、
ネイビー×ボルドー×ゴールドの配色。飾り記号（✦ ◆）でヨーロッパの古典的な印象。

### CSS変数（:root）
    --navy: #1f3a5f;      --navy-soft: #33517a;
    --bordeaux: #7b2d3a;
    --gold: #b8974a;      --gold-soft: #cdb173;
    --cream: #f4efe4;     --paper: #fbf8f0;
    --ink: #2a2b2f;       --ink-soft: #6b6559;
    --line: #ddd2ba;

### 背景（body）
地色 var(--cream)。文字色 var(--ink)、line-height 1.7。
フォント: "Georgia","Times New Roman","Hiragino Mincho ProN", serif（セリフ体）。
背景に淡い円形グラデを2つ重ねる（左上ネイビー系・右上ボルドー系、いずれも薄く）。background-attachment: fixed。

### ヘッダー
- `.crest`「✦ ✦ ✦」（ゴールド・letter-spacing大）
- h1「Phrase Shadowing」（ネイビー・weight700）
- `.rule`（幅90pxのゴールドの横罫。::before/::after で左右に小さな ◆ を置く）
- サブコピー（斜体・薄字）「頻出フレーズを『聞いて、口に出して、自分から言える』まで」

### 共通パネル（.panel）
背景 var(--paper)、border 1px solid var(--line)、border-radius 4px、
box-shadow: 0 1px 0 #fff inset, 0 8px 22px rgba(40,40,60,0.08)。

### 主要パーツ
- `.tab`（カテゴリ選択）: セリフ体、ネイビー文字。active は navy 背景＋cream 文字。
- `.set`（セット選択）: ピル型（border-radius 999px）。hover/ active は bordeaux 系。
  習得数があれば `.done`（ゴールド）で「(n/10)」を名前の後ろに表示。
- `.mode`（モード切替）: active は gold 背景＋濃茶文字。
- `.card`（.panel）: 中央寄せ。上部に `.counter`（カテゴリ·セット名、字間広め）、
  `.tag`（場面ラベル、ボルドー文字の枠ピル）。
- `.en`: フレーズ英語（27px, weight700, navy）。`.en.veiled` は
  color:transparent＋text-shadowでぼかし＋cursor:pointer（クリックで表示）。
- `.ja`: 日本語（薄字17px）。`.ja.big`（英作文モードで24px・濃色・太字）。
  `.ja.veiled` も英語同様に伏せ表示（text-shadowでぼかし）。
- ボタン `.btn`: セリフ体, border-radius 3px, hoverで translateY(-1px)。
  - `.btn-navy`（ネイビー/主要）、`.btn-ghost`（紙地＋罫線/サブ）、
    `.btn-gold`（ゴールド/「言えた」）、`.btn-bord`（ボルドー/「答えを表示」）。
- `.check`: 上に罫線。「言えた?」ラベル＋「✓ 言えた」(gold)＋「まだ」(ghost)。
- `.nav`（.panel）: 「← 前へ」/ カウンタ /「次へ →」。端で disabled（opacity .4）。
- `.progress`: 「習得: <b>n</b> / 10（このセット）」（ゴールドで数値強調）。
- `.hint`: 斜体の薄字ガイド。

---

## 機能仕様（index.html のJS、即時関数で全体を囲む）

### 状態
currentCat（最初のキー）, currentSet(0), index(0),
mode（"listen" | "recall"）, revealed(false), jaRevealed(false)。
習得記録: mastered オブジェクト（key = `cat|set|index`）。メモリ保持（永続化は任意）。
items() = PHRASES[currentCat].sets[currentSet].items。

### 音声（女性ボイスを選ぶ）
- Web Speech API。getVoices() から lang が en で始まるものを抽出し、名前に女性を示す語
  （female, woman, samantha, victoria, karen, moira, tessa, serena, fiona, zira,
   susan, hazel, google us english, aria, jenny, sonia 等）を含むボイスを優先選択。
  見つからなければ英語ボイスの先頭を使う。
- voices は非同期読み込みのため、初回に選定しつつ `speechSynthesis.onvoiceschanged`
  でも再選定する。
- makeUtterance(text, rate): lang="en-US"、rate=引数(既定1)、voice=選んだ女性ボイス、
  pitch=1.05（わずかに高めで女性的な響き）。
- speak(text, rate): cancel後に1回発話。speakRepeat(text, times): 同じ文を times 回キュー。
- 注記: 実際に聞こえる声は端末にインストールされた音声に依存する（環境差あり）とコメントする。

### モード（2つ・役割を明確に）
1. listen「🎧 耳から（聞く & 復唱）」: 音声優先。
   - 英語・日本語とも 最初は veiled（伏せ）。まず音声だけで意味を取り、声に出す。
   - ボタン: [▶ 聞く(rate1)] [🐢 ゆっくり(rate0.7)] [🔁 3回連続]
     [英文を表示/隠す] [訳を表示/隠す]。英語/日本語はクリックでも表示可。
2. recall「🗣 英作文（日本語→英語）」: 産出。
   - 日本語を大きく表示（.ja.big）→ 自分で英語を言う → [答えを表示](bord) で英文表示
     → [🔊 正解を聞く]。英文は最初 veiled、クリックでも表示。
   - （ラベルは「英作文」。以前の「産出」表記は使わない。）

### 習得チェック
- 各カードに「✓ 言えた / まだ」。「言えた」で mastered[key]=true にして次へ、
  「まだ」で false。セット選択に (n/10)、進捗表示に習得数を反映。

### 描画・ナビ
- render(): カード切替のたびに revealed=false, jaRevealed=false にリセット（毎回まず耳から）。
  カテゴリ/セット/モードのUIを再描画し、現在アイテムをモードに応じて描く。
- カテゴリ/セット/モード切替で index=0 に戻す。prev/next で index 増減、端で disabled。

### 実装上の注意
- innerHTMLを使う箇所は必要に応じてエスケープ（データは自分で用意する固定文字列で可）。
- トグルボタンは arguments.callee を使わず、ボタン要素を変数に保持して textContent を更新する。

---

## 完成後
- 既定ブラウザで index.html を開いて動作確認。
- 「音声は端末にインストールされた英語ボイスに依存し、女性ボイスが無い環境では
  男性の声になる場合がある」ことを利用上の注意として伝える。
- データ(phrases.js)とUI(index.html)は分離を保ち、フレーズ/セットを足すだけで拡張できる設計にする。
- 別PCへ移すときはフォルダごとコピー（index.html と phrases.js を同じ場所に）。
