// フレーズ・シャドーイング暗記アプリのデータ
// 頻出のビジネス英語(work)と日常英語(daily)を各100フレーズ、10セット×10で収録。
// 構造: PHRASES = { key: { title, icon, sets: [ { name, items: [ { en, ja, tag } ] } ] } }
//   en: 英語フレーズ / ja: 日本語 / tag: 使う場面

const PHRASES = {
  work: {
    title: "Work（仕事）",
    icon: "💼",
    sets: [
      { name: "Set 1: 依頼・お願い", items: [
        { en: "Could you send me the file?", ja: "そのファイルを送ってもらえますか?", tag: "依頼" },
        { en: "Can you take a look at this?", ja: "これを見てもらえますか?", tag: "依頼" },
        { en: "Would you mind helping me with this?", ja: "これを手伝ってもらえますか?", tag: "依頼" },
        { en: "Let me know if you have any questions.", ja: "質問があれば教えてください。", tag: "依頼" },
        { en: "Please get back to me by tomorrow.", ja: "明日までに返信ください。", tag: "依頼" },
        { en: "Can we set up a quick call?", ja: "短い通話を設定できますか?", tag: "依頼" },
        { en: "Could you double-check this for me?", ja: "これを再確認してもらえますか?", tag: "依頼" },
        { en: "Do you have a minute?", ja: "少しお時間ありますか?", tag: "依頼" },
        { en: "I'd appreciate your feedback.", ja: "フィードバックをいただけると助かります。", tag: "依頼" },
        { en: "Can you keep me posted?", ja: "進捗を教えてもらえますか?", tag: "依頼" }
      ]},
      { name: "Set 2: 確認・質問", items: [
        { en: "Just to confirm, is the meeting at three?", ja: "確認ですが、会議は3時ですよね?", tag: "確認" },
        { en: "Could you clarify what you mean?", ja: "どういう意味か説明してもらえますか?", tag: "確認" },
        { en: "Let me make sure I understand.", ja: "理解できているか確認させてください。", tag: "確認" },
        { en: "Are we still on for tomorrow?", ja: "明日の予定は変わりないですか?", tag: "確認" },
        { en: "What's the deadline for this?", ja: "これの締め切りはいつですか?", tag: "確認" },
        { en: "Who is responsible for this task?", ja: "この作業の担当は誰ですか?", tag: "確認" },
        { en: "Can you walk me through it?", ja: "順を追って説明してもらえますか?", tag: "確認" },
        { en: "Does that make sense?", ja: "意味は通じていますか?", tag: "確認" },
        { en: "Am I on the right track?", ja: "この方向で合っていますか?", tag: "確認" },
        { en: "Could you give me more context?", ja: "もう少し背景を教えてもらえますか?", tag: "確認" }
      ]},
      { name: "Set 3: 会議で", items: [
        { en: "Let's get started.", ja: "始めましょう。", tag: "会議" },
        { en: "Let's move on to the next point.", ja: "次の議題に移りましょう。", tag: "会議" },
        { en: "Can I add something here?", ja: "ここで一つ付け加えてもいいですか?", tag: "会議" },
        { en: "Let's take this offline.", ja: "この件は別途話しましょう。", tag: "会議" },
        { en: "What are the next steps?", ja: "次のステップは何ですか?", tag: "会議" },
        { en: "Let's wrap this up.", ja: "そろそろまとめましょう。", tag: "会議" },
        { en: "I'd like to hear your thoughts.", ja: "皆さんの考えを聞きたいです。", tag: "会議" },
        { en: "Let's put that on hold for now.", ja: "それは一旦保留にしましょう。", tag: "会議" },
        { en: "Could you summarize the key points?", ja: "要点をまとめてもらえますか?", tag: "会議" },
        { en: "Let's align on the next steps.", ja: "次のステップの認識を合わせましょう。", tag: "会議" }
      ]},
      { name: "Set 4: 意見・提案", items: [
        { en: "In my opinion, we should wait.", ja: "私の意見では、待つべきだと思います。", tag: "意見" },
        { en: "I'd suggest a different approach.", ja: "別のやり方を提案します。", tag: "意見" },
        { en: "That's a good point.", ja: "それはいい指摘ですね。", tag: "意見" },
        { en: "I see what you mean, but...", ja: "言いたいことは分かりますが…", tag: "意見" },
        { en: "How about we try this?", ja: "これを試してみるのはどうですか?", tag: "意見" },
        { en: "I'm not sure that's the best option.", ja: "それが最善とは限らないと思います。", tag: "意見" },
        { en: "Let's weigh the pros and cons.", ja: "長所と短所を比べましょう。", tag: "意見" },
        { en: "I'd rather focus on this first.", ja: "まずこれに集中したいです。", tag: "意見" },
        { en: "Correct me if I'm wrong.", ja: "間違っていたら訂正してください。", tag: "意見" },
        { en: "That works for me.", ja: "それで問題ありません。", tag: "意見" }
      ]},
      { name: "Set 5: 進捗・報告", items: [
        { en: "I'm still working on it.", ja: "まだ作業中です。", tag: "報告" },
        { en: "It's almost done.", ja: "ほぼ完成しています。", tag: "報告" },
        { en: "We're on track.", ja: "予定どおり進んでいます。", tag: "報告" },
        { en: "We're a bit behind schedule.", ja: "少し予定より遅れています。", tag: "報告" },
        { en: "I'll have it ready by Friday.", ja: "金曜までに用意します。", tag: "報告" },
        { en: "There's been a slight delay.", ja: "少し遅れが出ています。", tag: "報告" },
        { en: "I'll follow up with the team.", ja: "チームに確認しておきます。", tag: "報告" },
        { en: "Everything is under control.", ja: "すべて問題ありません。", tag: "報告" },
        { en: "I ran into a small issue.", ja: "ちょっとした問題が出ました。", tag: "報告" },
        { en: "I'll send you an update soon.", ja: "近いうちに最新情報を送ります。", tag: "報告" }
      ]},
      { name: "Set 6: メール定型", items: [
        { en: "Thank you for your quick response.", ja: "迅速なご返信ありがとうございます。", tag: "メール" },
        { en: "Please find the attached file.", ja: "添付ファイルをご確認ください。", tag: "メール" },
        { en: "I'm writing to follow up on...", ja: "…の件でご連絡しています。", tag: "メール" },
        { en: "Let me know your availability.", ja: "ご都合を教えてください。", tag: "メール" },
        { en: "I look forward to your reply.", ja: "ご返信お待ちしています。", tag: "メール" },
        { en: "Apologies for the late reply.", ja: "返信が遅くなり申し訳ありません。", tag: "メール" },
        { en: "Feel free to reach out anytime.", ja: "いつでもご連絡ください。", tag: "メール" },
        { en: "As discussed, here are the details.", ja: "お話しした通り、詳細を送ります。", tag: "メール" },
        { en: "I'll circle back once I know more.", ja: "分かり次第、改めて連絡します。", tag: "メール" },
        { en: "Thanks in advance for your help.", ja: "ご協力よろしくお願いします。", tag: "メール" }
      ]},
      { name: "Set 7: 問題・トラブル", items: [
        { en: "We have a problem.", ja: "問題が発生しました。", tag: "問題" },
        { en: "What's the root cause?", ja: "根本原因は何ですか?", tag: "問題" },
        { en: "Let's figure out a solution.", ja: "解決策を考えましょう。", tag: "問題" },
        { en: "It's not working as expected.", ja: "期待どおりに動いていません。", tag: "問題" },
        { en: "Let me look into it.", ja: "調べてみます。", tag: "問題" },
        { en: "We need to fix this quickly.", ja: "これを早く直す必要があります。", tag: "問題" },
        { en: "How did this happen?", ja: "どうしてこうなったのですか?", tag: "問題" },
        { en: "Let's make sure it doesn't happen again.", ja: "再発しないようにしましょう。", tag: "問題" },
        { en: "I'll escalate this if needed.", ja: "必要なら上に報告します。", tag: "問題" },
        { en: "Let's not jump to conclusions.", ja: "結論を急がないようにしましょう。", tag: "問題" }
      ]},
      { name: "Set 8: 交渉・調整", items: [
        { en: "Can we push the deadline?", ja: "締め切りを延ばせますか?", tag: "交渉" },
        { en: "Let's find a middle ground.", ja: "折り合いをつけましょう。", tag: "交渉" },
        { en: "That's a bit out of our budget.", ja: "少し予算を超えています。", tag: "交渉" },
        { en: "Is there any room for flexibility?", ja: "融通は利きますか?", tag: "交渉" },
        { en: "Let's revisit this later.", ja: "後でまた検討しましょう。", tag: "交渉" },
        { en: "I'll need to check with my manager.", ja: "上司に確認する必要があります。", tag: "交渉" },
        { en: "What would work best for you?", ja: "どれが一番ご都合いいですか?", tag: "交渉" },
        { en: "Let's meet halfway.", ja: "お互い歩み寄りましょう。", tag: "交渉" },
        { en: "Can we prioritize this task?", ja: "この作業を優先できますか?", tag: "交渉" },
        { en: "I think we can make that work.", ja: "それなら何とかできると思います。", tag: "交渉" }
      ]},
      { name: "Set 9: 感謝・謝罪", items: [
        { en: "Thanks for your patience.", ja: "お待ちいただきありがとうございます。", tag: "感謝" },
        { en: "I really appreciate it.", ja: "本当に感謝します。", tag: "感謝" },
        { en: "Thanks for pointing that out.", ja: "指摘してくれてありがとう。", tag: "感謝" },
        { en: "Sorry for the confusion.", ja: "混乱させてすみません。", tag: "謝罪" },
        { en: "My apologies for the mistake.", ja: "ミスをお詫びします。", tag: "謝罪" },
        { en: "Thanks for the heads-up.", ja: "事前に知らせてくれてありがとう。", tag: "感謝" },
        { en: "I owe you one.", ja: "恩に着ます。", tag: "感謝" },
        { en: "Sorry to bother you.", ja: "お忙しいところすみません。", tag: "謝罪" },
        { en: "Thanks for your understanding.", ja: "ご理解ありがとうございます。", tag: "感謝" },
        { en: "That's on me.", ja: "それは私の責任です。", tag: "謝罪" }
      ]},
      { name: "Set 10: 雑談・つなぎ", items: [
        { en: "How's the project going?", ja: "プロジェクトの調子はどう?", tag: "雑談" },
        { en: "Let's catch up later.", ja: "後で話しましょう。", tag: "雑談" },
        { en: "Sounds like a plan.", ja: "いい計画ですね。", tag: "つなぎ" },
        { en: "Let me think about it.", ja: "少し考えさせてください。", tag: "つなぎ" },
        { en: "That makes sense.", ja: "なるほど、分かります。", tag: "つなぎ" },
        { en: "I'll get right on it.", ja: "すぐ取りかかります。", tag: "つなぎ" },
        { en: "No worries at all.", ja: "全然問題ありません。", tag: "つなぎ" },
        { en: "Let's touch base tomorrow.", ja: "明日また確認しましょう。", tag: "雑談" },
        { en: "Good work today.", ja: "今日はお疲れさまでした。", tag: "雑談" },
        { en: "Talk to you soon.", ja: "またすぐ話しましょう。", tag: "雑談" }
      ]}
    ]
  },

  daily: {
    title: "Daily（日常）",
    icon: "☕",
    sets: [
      { name: "Set 1: あいさつ", items: [
        { en: "How's it going?", ja: "調子はどう?", tag: "あいさつ" },
        { en: "How have you been?", ja: "最近どうしてた?", tag: "あいさつ" },
        { en: "Long time no see.", ja: "久しぶり。", tag: "あいさつ" },
        { en: "Nice to see you again.", ja: "また会えてうれしい。", tag: "あいさつ" },
        { en: "What's up?", ja: "どうしたの?/最近どう?", tag: "あいさつ" },
        { en: "Have a good one.", ja: "よい一日を。", tag: "あいさつ" },
        { en: "Take care.", ja: "気をつけてね。", tag: "あいさつ" },
        { en: "See you around.", ja: "またね。", tag: "あいさつ" },
        { en: "Good to see you.", ja: "会えてよかった。", tag: "あいさつ" },
        { en: "How's your day going?", ja: "今日はどんな感じ?", tag: "あいさつ" }
      ]},
      { name: "Set 2: 相づち・反応", items: [
        { en: "That sounds great.", ja: "それはいいね。", tag: "反応" },
        { en: "No way!", ja: "まさか!", tag: "反応" },
        { en: "Got it.", ja: "了解。", tag: "反応" },
        { en: "That makes sense.", ja: "なるほどね。", tag: "反応" },
        { en: "I know, right?", ja: "だよね?", tag: "反応" },
        { en: "Fair enough.", ja: "まあ、そうだね。", tag: "反応" },
        { en: "Good for you!", ja: "よかったね!", tag: "反応" },
        { en: "That's too bad.", ja: "それは残念。", tag: "反応" },
        { en: "Same here.", ja: "私も同じ。", tag: "反応" },
        { en: "Tell me about it.", ja: "ほんとそれ。", tag: "反応" }
      ]},
      { name: "Set 3: 気持ち", items: [
        { en: "I'm so tired.", ja: "すごく疲れた。", tag: "気持ち" },
        { en: "I can't wait!", ja: "待ちきれない!", tag: "気持ち" },
        { en: "I'm really happy about it.", ja: "それが本当にうれしい。", tag: "気持ち" },
        { en: "I'm a bit worried.", ja: "ちょっと心配。", tag: "気持ち" },
        { en: "That's a relief.", ja: "ほっとした。", tag: "気持ち" },
        { en: "I'm not in the mood.", ja: "そんな気分じゃない。", tag: "気持ち" },
        { en: "I feel much better now.", ja: "だいぶ良くなった。", tag: "気持ち" },
        { en: "I'm so excited.", ja: "すごくわくわくする。", tag: "気持ち" },
        { en: "That drives me crazy.", ja: "それにはイライラする。", tag: "気持ち" },
        { en: "I'm proud of you.", ja: "あなたを誇りに思う。", tag: "気持ち" }
      ]},
      { name: "Set 4: 食事・カフェ", items: [
        { en: "I'm starving.", ja: "お腹ぺこぺこ。", tag: "食事" },
        { en: "What do you feel like eating?", ja: "何が食べたい?", tag: "食事" },
        { en: "Let's grab a bite.", ja: "軽く食べに行こう。", tag: "食事" },
        { en: "It's on me.", ja: "私がおごるよ。", tag: "食事" },
        { en: "Can I get the check, please?", ja: "お会計お願いします。", tag: "食事" },
        { en: "This tastes amazing.", ja: "これすごく美味しい。", tag: "食事" },
        { en: "I'll have the same.", ja: "私も同じものを。", tag: "食事" },
        { en: "Do you want to split it?", ja: "シェアする?", tag: "食事" },
        { en: "I'm full.", ja: "お腹いっぱい。", tag: "食事" },
        { en: "Let's get coffee sometime.", ja: "今度コーヒーでも行こう。", tag: "カフェ" }
      ]},
      { name: "Set 5: 予定・約束", items: [
        { en: "Are you free this weekend?", ja: "今週末空いてる?", tag: "予定" },
        { en: "Let's make plans.", ja: "予定を立てよう。", tag: "予定" },
        { en: "What time works for you?", ja: "何時が都合いい?", tag: "予定" },
        { en: "Can we reschedule?", ja: "予定を変えられる?", tag: "予定" },
        { en: "I'll be there around seven.", ja: "7時ごろ行くね。", tag: "予定" },
        { en: "Something came up.", ja: "急に用事ができた。", tag: "予定" },
        { en: "Let's meet up soon.", ja: "近いうちに会おう。", tag: "予定" },
        { en: "I'm running late.", ja: "遅れそう。", tag: "予定" },
        { en: "See you there.", ja: "現地で会おう。", tag: "予定" },
        { en: "Count me in.", ja: "私も参加するよ。", tag: "予定" }
      ]},
      { name: "Set 6: 依頼・お願い", items: [
        { en: "Can you do me a favor?", ja: "お願いがあるんだけど。", tag: "依頼" },
        { en: "Could you pass me the salt?", ja: "塩を取ってもらえる?", tag: "依頼" },
        { en: "Do you mind if I sit here?", ja: "ここ座ってもいい?", tag: "依頼" },
        { en: "Can you hold this for a sec?", ja: "ちょっとこれ持ってて。", tag: "依頼" },
        { en: "Would you help me out?", ja: "手伝ってくれる?", tag: "依頼" },
        { en: "Let me know when you're ready.", ja: "準備できたら教えて。", tag: "依頼" },
        { en: "Can I borrow your pen?", ja: "ペン借りていい?", tag: "依頼" },
        { en: "Give me a second.", ja: "ちょっと待ってて。", tag: "依頼" },
        { en: "Could you turn it down a bit?", ja: "少し音量下げてくれる?", tag: "依頼" },
        { en: "Text me when you get home.", ja: "着いたら連絡してね。", tag: "依頼" }
      ]},
      { name: "Set 7: 買い物・外出", items: [
        { en: "How much is this?", ja: "これいくら?", tag: "買い物" },
        { en: "I'm just looking, thanks.", ja: "見ているだけです。", tag: "買い物" },
        { en: "Do you have this in blue?", ja: "これの青はありますか?", tag: "買い物" },
        { en: "Can I try this on?", ja: "試着できますか?", tag: "買い物" },
        { en: "I'll take it.", ja: "これください。", tag: "買い物" },
        { en: "Where's the restroom?", ja: "お手洗いはどこ?", tag: "外出" },
        { en: "Is it far from here?", ja: "ここから遠い?", tag: "外出" },
        { en: "Let's head out.", ja: "そろそろ出かけよう。", tag: "外出" },
        { en: "I'll be right back.", ja: "すぐ戻るね。", tag: "外出" },
        { en: "Let's call it a day.", ja: "今日はこれで終わりにしよう。", tag: "外出" }
      ]},
      { name: "Set 8: 天気・雑談", items: [
        { en: "It's freezing today.", ja: "今日は凍えるほど寒い。", tag: "天気" },
        { en: "Looks like it's going to rain.", ja: "雨が降りそうだね。", tag: "天気" },
        { en: "What a beautiful day!", ja: "なんていい天気!", tag: "天気" },
        { en: "It's so humid.", ja: "すごく蒸し暑い。", tag: "天気" },
        { en: "Any plans for the weekend?", ja: "週末の予定は?", tag: "雑談" },
        { en: "How was your weekend?", ja: "週末どうだった?", tag: "雑談" },
        { en: "Time flies.", ja: "時間が経つのは早いね。", tag: "雑談" },
        { en: "You look great today.", ja: "今日すてきだね。", tag: "雑談" },
        { en: "What have you been up to?", ja: "最近何してたの?", tag: "雑談" },
        { en: "Small world!", ja: "世間は狭いね!", tag: "雑談" }
      ]},
      { name: "Set 9: 困ったとき", items: [
        { en: "I have no idea.", ja: "全然分からない。", tag: "困った" },
        { en: "Can you say that again?", ja: "もう一度言ってくれる?", tag: "困った" },
        { en: "I'm not sure.", ja: "よく分からないな。", tag: "困った" },
        { en: "What do you mean?", ja: "どういう意味?", tag: "困った" },
        { en: "Hold on a second.", ja: "ちょっと待って。", tag: "困った" },
        { en: "I forgot.", ja: "忘れちゃった。", tag: "困った" },
        { en: "It slipped my mind.", ja: "うっかり忘れてた。", tag: "困った" },
        { en: "I got lost.", ja: "道に迷った。", tag: "困った" },
        { en: "Could you speak more slowly?", ja: "もう少しゆっくり話してくれる?", tag: "困った" },
        { en: "Let me check.", ja: "ちょっと確認させて。", tag: "困った" }
      ]},
      { name: "Set 10: 別れ・締め", items: [
        { en: "I'd better get going.", ja: "そろそろ行かなきゃ。", tag: "別れ" },
        { en: "It was nice talking to you.", ja: "話せて楽しかった。", tag: "別れ" },
        { en: "Let's do this again.", ja: "また今度やろう。", tag: "別れ" },
        { en: "Say hi to your family.", ja: "家族によろしくね。", tag: "別れ" },
        { en: "Get home safe.", ja: "気をつけて帰ってね。", tag: "別れ" },
        { en: "Catch you later.", ja: "またね。", tag: "別れ" },
        { en: "Have a great weekend.", ja: "良い週末を。", tag: "別れ" },
        { en: "Thanks for having me.", ja: "招いてくれてありがとう。", tag: "別れ" },
        { en: "Let's keep in touch.", ja: "連絡取り合おうね。", tag: "別れ" },
        { en: "Take it easy.", ja: "無理しないでね。", tag: "別れ" }
      ]}
    ]
  },

  explain: {
    title: "Explain（状況説明）",
    icon: "🧭",
    sets: [
      { name: "Set 1: 切り出す", items: [
        { en: "Let me explain the situation.", ja: "状況を説明させてください。", tag: "切り出し" },
        { en: "Here's what happened.", ja: "何が起きたか説明します。", tag: "切り出し" },
        { en: "To give you some context,", ja: "背景をお伝えすると、", tag: "切り出し" },
        { en: "Let me walk you through it.", ja: "順を追って説明します。", tag: "切り出し" },
        { en: "The situation is that...", ja: "状況としては…", tag: "切り出し" },
        { en: "I want to update you on something.", ja: "共有したいことがあります。", tag: "切り出し" },
        { en: "Let me give you a quick summary.", ja: "手短にまとめます。", tag: "切り出し" },
        { en: "Basically, here's the story.", ja: "要するに、こういうことです。", tag: "切り出し" },
        { en: "Let me back up a little.", ja: "少し前に戻って説明します。", tag: "切り出し" },
        { en: "First, let me set the scene.", ja: "まず状況を整理させてください。", tag: "切り出し" }
      ]},
      { name: "Set 2: 時系列でつなぐ", items: [
        { en: "First, we noticed the problem.", ja: "まず、問題に気づきました。", tag: "時系列" },
        { en: "Then, we looked into it.", ja: "それから、調べました。", tag: "時系列" },
        { en: "After that, things changed.", ja: "その後、状況が変わりました。", tag: "時系列" },
        { en: "At first, everything seemed fine.", ja: "最初は問題なさそうでした。", tag: "時系列" },
        { en: "By the time we checked, it was too late.", ja: "確認したときにはもう手遅れでした。", tag: "時系列" },
        { en: "Once we understood it, we acted fast.", ja: "理解した時点で、すぐ動きました。", tag: "時系列" },
        { en: "In the meantime, we kept working.", ja: "その間も作業を続けました。", tag: "時系列" },
        { en: "Eventually, we found the cause.", ja: "最終的に、原因を見つけました。", tag: "時系列" },
        { en: "Right after that, we informed everyone.", ja: "その直後、全員に伝えました。", tag: "時系列" },
        { en: "Finally, the issue was resolved.", ja: "最終的に、問題は解決しました。", tag: "時系列" }
      ]},
      { name: "Set 3: 原因を説明する", items: [
        { en: "It was caused by a small mistake.", ja: "小さなミスが原因でした。", tag: "原因" },
        { en: "This happened due to a delay.", ja: "これは遅延が原因で起きました。", tag: "原因" },
        { en: "The problem was because of the system.", ja: "問題はシステムのせいでした。", tag: "原因" },
        { en: "The main reason is a lack of time.", ja: "主な理由は時間不足です。", tag: "原因" },
        { en: "It came down to a misunderstanding.", ja: "結局、誤解が原因でした。", tag: "原因" },
        { en: "That's why the schedule slipped.", ja: "そのため、予定がずれました。", tag: "原因" },
        { en: "It was triggered by an unexpected error.", ja: "予期しないエラーが引き金でした。", tag: "原因" },
        { en: "Part of the reason is the workload.", ja: "理由の一つは作業量です。", tag: "原因" },
        { en: "This was largely due to poor communication.", ja: "主に連携不足が原因でした。", tag: "原因" },
        { en: "The root cause was a wrong setting.", ja: "根本原因は設定ミスでした。", tag: "原因" }
      ]},
      { name: "Set 4: 影響・結果を伝える", items: [
        { en: "As a result, we lost some time.", ja: "その結果、少し時間を失いました。", tag: "結果" },
        { en: "This means we need to adjust the plan.", ja: "つまり計画の調整が必要です。", tag: "結果" },
        { en: "The impact was fairly small.", ja: "影響は比較的小さかったです。", tag: "結果" },
        { en: "Because of this, the deadline moved.", ja: "これにより、締め切りが動きました。", tag: "結果" },
        { en: "It affected the whole team.", ja: "チーム全体に影響しました。", tag: "結果" },
        { en: "So, we had to change our approach.", ja: "そこで、やり方を変えました。", tag: "結果" },
        { en: "This led to some extra work.", ja: "これで追加作業が生じました。", tag: "結果" },
        { en: "In the end, nothing serious happened.", ja: "結局、大事には至りませんでした。", tag: "結果" },
        { en: "The good news is, it's under control now.", ja: "幸い、今は落ち着いています。", tag: "結果" },
        { en: "As a consequence, costs went up a little.", ja: "結果として、費用が少し増えました。", tag: "結果" }
      ]},
      { name: "Set 5: 対比・逆接", items: [
        { en: "However, there's a small problem.", ja: "ただ、少し問題があります。", tag: "逆接" },
        { en: "Although it worked, it was slow.", ja: "動きはしましたが、遅かったです。", tag: "逆接" },
        { en: "On the other hand, it saved money.", ja: "一方で、費用は抑えられました。", tag: "対比" },
        { en: "Despite the delay, we finished it.", ja: "遅れはしましたが、完了しました。", tag: "逆接" },
        { en: "That said, we should be careful.", ja: "とはいえ、注意が必要です。", tag: "逆接" },
        { en: "Even so, the result was good.", ja: "それでも、結果は良かったです。", tag: "逆接" },
        { en: "While I agree, I have one concern.", ja: "賛成ですが、一つ懸念があります。", tag: "逆接" },
        { en: "Unlike last time, it went smoothly.", ja: "前回と違い、順調でした。", tag: "対比" },
        { en: "In contrast, this option is cheaper.", ja: "対照的に、こちらの方が安いです。", tag: "対比" },
        { en: "Still, we can't ignore the risk.", ja: "それでも、リスクは無視できません。", tag: "逆接" }
      ]},
      { name: "Set 6: 問題を報告する", items: [
        { en: "We ran into an issue.", ja: "問題が発生しました。", tag: "報告" },
        { en: "The problem is that it's not working.", ja: "問題は、動いていないことです。", tag: "報告" },
        { en: "Something went wrong with the process.", ja: "工程で何か問題が起きました。", tag: "報告" },
        { en: "We noticed an unexpected result.", ja: "予期しない結果に気づきました。", tag: "報告" },
        { en: "There seems to be a mismatch.", ja: "食い違いがあるようです。", tag: "報告" },
        { en: "It's more complicated than we thought.", ja: "思ったより複雑です。", tag: "報告" },
        { en: "We're seeing the same error again.", ja: "同じエラーがまた出ています。", tag: "報告" },
        { en: "The numbers don't add up.", ja: "数字が合いません。", tag: "報告" },
        { en: "It's affecting more than one area.", ja: "複数の箇所に影響しています。", tag: "報告" },
        { en: "I wanted to flag this early.", ja: "早めに知らせておきたくて。", tag: "報告" }
      ]},
      { name: "Set 7: 対応・解決を述べる", items: [
        { en: "To fix this, we changed the settings.", ja: "これを直すため、設定を変えました。", tag: "対応" },
        { en: "We decided to try another way.", ja: "別の方法を試すことにしました。", tag: "対応" },
        { en: "We've already taken care of it.", ja: "すでに対処済みです。", tag: "対応" },
        { en: "As a workaround, we did this.", ja: "応急処置として、こうしました。", tag: "対応" },
        { en: "We're working on a permanent fix.", ja: "恒久対応に取り組んでいます。", tag: "対応" },
        { en: "So we rolled it back for now.", ja: "ひとまず元に戻しました。", tag: "対応" },
        { en: "We double-checked everything.", ja: "すべて再確認しました。", tag: "対応" },
        { en: "We asked the team for help.", ja: "チームに協力を求めました。", tag: "対応" },
        { en: "We tested it again to be sure.", ja: "念のため再テストしました。", tag: "対応" },
        { en: "That solved the main problem.", ja: "それで主要な問題は解決しました。", tag: "対応" }
      ]},
      { name: "Set 8: 見通し・次の一手", items: [
        { en: "The next step is to review it.", ja: "次のステップは見直しです。", tag: "見通し" },
        { en: "We're planning to finish by Friday.", ja: "金曜までに終える予定です。", tag: "見通し" },
        { en: "To prevent this, we'll add a check.", ja: "再発防止に、確認を追加します。", tag: "見通し" },
        { en: "Going forward, we'll be more careful.", ja: "今後はもっと注意します。", tag: "見通し" },
        { en: "We should have an answer soon.", ja: "まもなく回答できるはずです。", tag: "見通し" },
        { en: "I'll keep you updated on the progress.", ja: "進捗はまた共有します。", tag: "見通し" },
        { en: "Let's revisit this next week.", ja: "来週また見直しましょう。", tag: "見通し" },
        { en: "We'll monitor it for a few days.", ja: "数日間、様子を見ます。", tag: "見通し" },
        { en: "The plan is to test it first.", ja: "まずテストする計画です。", tag: "見通し" },
        { en: "If it happens again, we'll escalate.", ja: "再発したら、上に報告します。", tag: "見通し" }
      ]},
      { name: "Set 9: 要約・言い換え", items: [
        { en: "In short, we're back on track.", ja: "要するに、元の軌道に戻りました。", tag: "要約" },
        { en: "To sum up, it went well.", ja: "まとめると、うまくいきました。", tag: "要約" },
        { en: "What I mean is, it's not urgent.", ja: "つまり、緊急ではありません。", tag: "言い換え" },
        { en: "In other words, we need more time.", ja: "言い換えると、もっと時間が必要です。", tag: "言い換え" },
        { en: "The main point is safety.", ja: "要点は安全性です。", tag: "要約" },
        { en: "Long story short, it works now.", ja: "早い話、今は動いています。", tag: "要約" },
        { en: "So the takeaway is to test early.", ja: "教訓は、早めにテストすることです。", tag: "要約" },
        { en: "Simply put, it was a timing issue.", ja: "簡単に言えば、タイミングの問題でした。", tag: "言い換え" },
        { en: "All in all, it's a minor issue.", ja: "全体として、小さな問題です。", tag: "要約" },
        { en: "That's the gist of it.", ja: "それが要点です。", tag: "要約" }
      ]},
      { name: "Set 10: 不確かさ・推測", items: [
        { en: "It seems that the data was wrong.", ja: "データが間違っていたようです。", tag: "推測" },
        { en: "I'm not entirely sure, but...", ja: "確信はありませんが…", tag: "不確か" },
        { en: "As far as I know, it's fine.", ja: "私が知る限り、問題ありません。", tag: "推測" },
        { en: "It looks like a temporary issue.", ja: "一時的な問題のようです。", tag: "推測" },
        { en: "My guess is it's a small bug.", ja: "たぶん小さな不具合だと思います。", tag: "推測" },
        { en: "It could be related to the update.", ja: "更新が関係しているかもしれません。", tag: "推測" },
        { en: "I'll need to confirm this.", ja: "これは確認が必要です。", tag: "不確か" },
        { en: "From what I can tell, it's stable.", ja: "見た限りでは、安定しています。", tag: "推測" },
        { en: "There's a chance it happens again.", ja: "また起こる可能性はあります。", tag: "推測" },
        { en: "Don't quote me on this, but...", ja: "確実ではないですが…", tag: "不確か" }
      ]}
    ]
  },

  // ===== 文型カテゴリ（16セット）Phase 1 =====
  // 1セット = 1つの主表現 × 10場面。英作文の答えが一意になるよう設計。
  // 各セットの最終ページ（variants）で「他の言い方とニュアンス」を知識として確認する。
  patterns: {
    title: "Patterns 1（土台）",
    icon: "🔑",
    sets: [
      { name: "1. 聞き返す・確認する", items: [
        { en: "Sorry, could you say that again?", ja: "すみません、もう一度言っていただけますか?", tag: "聞き返し" },
        { en: "Sorry, I didn't catch that.", ja: "すみません、聞き取れませんでした。", tag: "聞き返し" },
        { en: "Could you speak a little more slowly, please?", ja: "もう少しゆっくり話していただけますか?", tag: "聞き返し" },
        { en: "What do you mean by that?", ja: "それはどういう意味ですか?", tag: "確認" },
        { en: "Sorry, do you mean the report?", ja: "すみません、レポートのことですか?", tag: "確認" },
        { en: "Could you spell that for me?", ja: "つづりを教えていただけますか?", tag: "確認" },
        { en: "Sorry, I'm not following.", ja: "すみません、話についていけていません。", tag: "聞き返し" },
        { en: "Could you explain that again, please?", ja: "もう一度説明していただけますか?", tag: "聞き返し" },
        { en: "Sorry, was that Friday or Monday?", ja: "すみません、金曜でしたか月曜でしたか?", tag: "確認" },
        { en: "Sorry, one more time, please.", ja: "すみません、もう一度お願いします。", tag: "聞き返し" }
      ], variants: [
        { en: "Pardon?", note: "ごく短い聞き返し。ややカジュアル" },
        { en: "Sorry, what was that?", note: "自然でよく使う口語" },
        { en: "Could you repeat that?", note: "say that again とほぼ同じ。repeat はやや事務的" },
        { en: "I beg your pardon?", note: "非常に丁寧・やや古風。フォーマルな場で" },
        { note: "コツ: 分からないまま流さず必ず聞き返す。会話が止まる最大の原因は「聞き返せないこと」" }
      ]},
      { name: "2. 反応する・つなぐ", items: [
        { en: "Really?", ja: "本当ですか?", tag: "反応" },
        { en: "I see.", ja: "なるほど。", tag: "反応" },
        { en: "That's great!", ja: "それはいいですね!", tag: "反応" },
        { en: "That's too bad.", ja: "それは残念です。", tag: "反応" },
        { en: "Oh, I didn't know that.", ja: "へえ、知りませんでした。", tag: "反応" },
        { en: "That makes sense.", ja: "納得です。", tag: "反応" },
        { en: "Let me think for a moment.", ja: "少し考えさせてください。", tag: "つなぎ" },
        { en: "Well, actually...", ja: "ええと、実は…", tag: "つなぎ" },
        { en: "Yes, I have.", ja: "はい、あります。", tag: "応答" },
        { en: "No, I haven't.", ja: "いいえ、ありません。", tag: "応答" }
      ], variants: [
        { en: "Is that right?", note: "「そうなんですか?」Really? より落ち着いた響き" },
        { en: "Got it.", note: "「了解」理解した合図。業務で頻出" },
        { en: "Fair enough.", note: "「まあ、そうですね」相手の言い分を受け入れる" },
        { en: "Good point.", note: "「いい指摘ですね」会議で使える" },
        { note: "コツ: 無言は「聞いていない」と受け取られる。短い反応を必ず返すと相手が話し続けてくれる" }
      ]},
      { name: "3. 質問を返す・広げる", items: [
        { en: "How about you?", ja: "あなたはどうですか?", tag: "質問返し" },
        { en: "What do you think?", ja: "どう思いますか?", tag: "質問返し" },
        { en: "How was it?", ja: "どうでしたか?", tag: "広げる" },
        { en: "What happened?", ja: "何があったのですか?", tag: "広げる" },
        { en: "Why do you think so?", ja: "なぜそう思うのですか?", tag: "広げる" },
        { en: "Could you tell me more about it?", ja: "もう少し詳しく教えていただけますか?", tag: "広げる" },
        { en: "And then what?", ja: "それからどうなったのですか?", tag: "広げる" },
        { en: "Have you tried it?", ja: "試したことはありますか?", tag: "広げる" },
        { en: "What would you do?", ja: "あなたならどうしますか?", tag: "質問返し" },
        { en: "Do you have any suggestions?", ja: "何か提案はありますか?", tag: "質問返し" }
      ], variants: [
        { en: "What about you?", note: "How about you? とほぼ同じ。どちらも自然" },
        { en: "And you?", note: "最も短い返し。カジュアル" },
        { en: "Any thoughts?", note: "会議で「何か意見は?」短くて便利" },
        { en: "How do you feel about it?", note: "意見より「感じ方」を聞く" },
        { note: "コツ: 自分が話せなくても、質問を返せば会話は続く。初心者最大の武器" }
      ]},
      { name: "4. 認識を確認する（Just to confirm ~）", items: [
        { en: "Just to confirm, the deadline is Friday?", ja: "確認ですが、締め切りは金曜ですね?", tag: "確認" },
        { en: "Just to confirm, we're meeting at three?", ja: "確認ですが、3時に会いますね?", tag: "確認" },
        { en: "Am I right in thinking you'll send it?", ja: "送っていただけるという理解で合っていますか?", tag: "確認" },
        { en: "So, if I understand correctly, we start next week?", ja: "私の理解では、来週開始ということですね?", tag: "確認" },
        { en: "Let me make sure I've got this right.", ja: "認識が合っているか確認させてください。", tag: "確認" },
        { en: "Does that make sense?", ja: "ここまで伝わっていますか?", tag: "確認" },
        { en: "Is that what you meant?", ja: "そういう意味でしたか?", tag: "確認" },
        { en: "So the next step is to review it, right?", ja: "つまり次はレビューですね?", tag: "確認" },
        { en: "Just so we're on the same page, I'll handle the data.", ja: "認識合わせですが、データは私が担当します。", tag: "確認" },
        { en: "Could you confirm that for me?", ja: "それを確認していただけますか?", tag: "確認" }
      ], variants: [
        { en: "Just checking, ~?", note: "「一応確認ですが」より軽い言い方" },
        { en: "Correct me if I'm wrong, but ~", note: "「間違っていたら訂正してください」丁寧に確認" },
        { en: "You mean ~, right?", note: "「〜ということですね?」短くて使いやすい" },
        { en: "To be clear, ~", note: "「明確にすると」誤解を避けたい時" },
        { note: "コツ: 聞き取れた後の「内容確認」は手戻りを防ぐ最重要スキル。遠慮せず確認する" }
      ]},
      { name: "5. 依頼する（Could you ~?）", items: [
        { en: "Could you send me the file, please?", ja: "ファイルを送っていただけますか?", tag: "メール" },
        { en: "Could you check this when you have time?", ja: "お時間のある時に確認していただけますか?", tag: "職場" },
        { en: "Could you give me a hand with this?", ja: "これを手伝っていただけますか?", tag: "依頼" },
        { en: "Could you ask him to call me back?", ja: "彼に折り返しをお願いできますか?", tag: "電話" },
        { en: "Could you let me know by tomorrow?", ja: "明日までに教えていただけますか?", tag: "連絡" },
        { en: "Could you move your bag a little?", ja: "カバンを少し移動していただけますか?", tag: "電車" },
        { en: "Could you keep this between us?", ja: "この件は内緒にしていただけますか?", tag: "会話" },
        { en: "Could you take a look at this?", ja: "これを見ていただけますか?", tag: "職場" },
        { en: "Could you wait a few minutes?", ja: "数分お待ちいただけますか?", tag: "依頼" },
        { en: "Could you close the window, please?", ja: "窓を閉めていただけますか?", tag: "部屋" }
      ], variants: [
        { en: "Can you ~?", note: "カジュアル・直接的。親しい相手に" },
        { en: "Would you mind ~ing?", note: "やわらかい。返答が逆転（No = やります）" },
        { en: "I was wondering if you could ~", note: "最も遠慮がち。大きめの頼み事や上位者に" },
        { en: "Do you think you could ~?", note: "「〜できそうですか?」控えめ" },
        { note: "コツ: please を添えると柔らかくなる。文末より Could you please ~? の位置も自然" }
      ]},
      { name: "6. 許可を求める（Could I ~?）", items: [
        { en: "Could I ask you something?", ja: "少しお尋ねしてもいいですか?", tag: "会話" },
        { en: "Could I use the restroom?", ja: "お手洗いを使ってもいいですか?", tag: "外出" },
        { en: "Could I borrow your pen for a second?", ja: "少しペンを借りてもいいですか?", tag: "職場" },
        { en: "Could I have the menu, please?", ja: "メニューをいただけますか?", tag: "レストラン" },
        { en: "Could I get a receipt, please?", ja: "領収書をいただけますか?", tag: "買い物" },
        { en: "Could I sit here?", ja: "ここに座ってもいいですか?", tag: "カフェ" },
        { en: "Could I leave a little early today?", ja: "今日少し早く失礼してもいいですか?", tag: "職場" },
        { en: "Could I take a photo here?", ja: "ここで写真を撮ってもいいですか?", tag: "観光" },
        { en: "Could I pay by card?", ja: "カードで払えますか?", tag: "買い物" },
        { en: "Could I call you tonight?", ja: "今夜お電話してもいいですか?", tag: "連絡" }
      ], variants: [
        { en: "Can I ~?", note: "中立〜カジュアル。日常では普通に使う" },
        { en: "May I ~?", note: "最もフォーマル。接客側や初対面の年長者に" },
        { en: "Do you mind if I ~?", note: "「迷惑ではないですか」返答が逆転（No = どうぞ）" },
        { en: "Would it be okay if I ~?", note: "遠慮がち。早退など少し大きめの願いに" },
        { note: "注意: Do you mind ~? に Yes と答えると「困ります」の意味。迷ったら Could I ~? が安全" }
      ]},
      { name: "7. 丁寧に尋ねる（Could you tell me ~?）", items: [
        { en: "Could you tell me where the station is?", ja: "駅がどこか教えていただけますか?", tag: "道案内" },
        { en: "Could you tell me how much this costs?", ja: "これがいくらか教えていただけますか?", tag: "買い物" },
        { en: "Could you tell me when he'll be back?", ja: "彼がいつ戻るか教えていただけますか?", tag: "職場" },
        { en: "Could you tell me what this means?", ja: "これがどういう意味か教えていただけますか?", tag: "確認" },
        { en: "Could you tell me which one you'd recommend?", ja: "どちらがおすすめか教えていただけますか?", tag: "買い物" },
        { en: "Could you tell me how to get there?", ja: "そこへの行き方を教えていただけますか?", tag: "移動" },
        { en: "Could you tell me who's in charge?", ja: "担当者を教えていただけますか?", tag: "仕事" },
        { en: "Could you tell me what time it starts?", ja: "何時に始まるか教えていただけますか?", tag: "予定" },
        { en: "Could you tell me why it's closed?", ja: "なぜ閉まっているか教えていただけますか?", tag: "外出" },
        { en: "Could you tell me how long it takes?", ja: "どのくらいかかるか教えていただけますか?", tag: "移動" }
      ], variants: [
        { en: "Do you know ~?", note: "「ご存じですか?」より軽くカジュアル" },
        { en: "May I ask ~?", note: "フォーマル。電話で May I ask who's calling? など" },
        { en: "Any idea ~?", note: "「〜分かる?」ごくカジュアル" },
        { note: "語順注意: 間接疑問は where the station is の順（× where is the station）" },
        { note: "コツ: 道でも店でも職場でも同じ型が使える。最も応用が広い依頼形" }
      ]},
      { name: "8. 引き受ける・条件付きで受ける・断る", items: [
        { en: "Sure, I'll take care of it.", ja: "はい、私が対応します。", tag: "引き受け" },
        { en: "Of course. I'll do it right away.", ja: "もちろんです。すぐにやります。", tag: "引き受け" },
        { en: "No problem at all.", ja: "全く問題ありません。", tag: "引き受け" },
        { en: "I'll look into it.", ja: "調べてみます。", tag: "引き受け" },
        { en: "Sure, but I might need until Friday.", ja: "はい、ただ金曜までかかるかもしれません。", tag: "条件付き" },
        { en: "I can do it if we push the deadline a little.", ja: "締め切りを少し延ばせればできます。", tag: "条件付き" },
        { en: "I'd be happy to help after this meeting.", ja: "この会議の後なら喜んで手伝います。", tag: "条件付き" },
        { en: "I'd love to, but I have other plans.", ja: "ぜひですが、他の予定があります。", tag: "断り" },
        { en: "I'm afraid I can't today.", ja: "申し訳ありませんが、今日は無理です。", tag: "断り" },
        { en: "Sorry, I'm a bit tied up right now.", ja: "すみません、今少し手が離せません。", tag: "断り" }
      ], variants: [
        { en: "Will do.", note: "「了解、やります」短くカジュアル" },
        { en: "Let me see what I can do.", note: "「できるか見てみます」確約を避けたい時" },
        { en: "I wish I could, but ~", note: "「できたらよかったのですが」やわらかい断り" },
        { en: "Maybe next time.", note: "断りの締めに添えると印象が良い" },
        { note: "コツ: 断る時は「理由」か「代替案」を一言添えると関係が悪くならない" }
      ]},
      { name: "9. 今していることを言う（I'm ~ing）", items: [
        { en: "I'm working on the report right now.", ja: "今レポートに取り組んでいます。", tag: "仕事" },
        { en: "I'm just looking, thank you.", ja: "見ているだけです、ありがとう。", tag: "買い物" },
        { en: "I'm waiting for a friend.", ja: "友人を待っています。", tag: "外出" },
        { en: "I'm having lunch at the moment.", ja: "今昼食をとっています。", tag: "食事" },
        { en: "I'm not feeling very well today.", ja: "今日は少し体調が良くありません。", tag: "体調" },
        { en: "We're running a little behind.", ja: "少し遅れています。", tag: "予定" },
        { en: "I'm getting on the train now.", ja: "今電車に乗ります。", tag: "移動" },
        { en: "I'm not doing anything special.", ja: "特に何もしていません。", tag: "予定" },
        { en: "What are you working on?", ja: "何に取り組んでいるのですか?", tag: "質問" },
        { en: "Are you doing anything this evening?", ja: "今晩何か予定はありますか?", tag: "誘い" }
      ], variants: [
        { en: "right now / at the moment", note: "「今」を添える定番。currently はやや硬い" },
        { en: "I'm meeting him tomorrow.", note: "決まった近い予定も進行形で言える" },
        { note: "注意: know, like, want など状態を表す動詞は進行形にしない（× I'm knowing）" },
        { note: "否定は I'm not ~ing、疑問は Are you ~ing? で作る" },
        { note: "コツ: 「今どうしてる?」は業務でも雑談でも最頻出。まずこの型を固める" }
      ]},
      { name: "10. 習慣を言う（I usually ~）", items: [
        { en: "I usually get up around six.", ja: "普段6時ごろに起きます。", tag: "生活" },
        { en: "I always check my email first.", ja: "いつも最初にメールを確認します。", tag: "職場" },
        { en: "I often work from home on Fridays.", ja: "金曜はよく在宅で働きます。", tag: "仕事" },
        { en: "I don't usually drink coffee at night.", ja: "夜はあまりコーヒーを飲みません。", tag: "生活" },
        { en: "I rarely watch TV these days.", ja: "最近はほとんどテレビを見ません。", tag: "生活" },
        { en: "We have a team meeting every Monday.", ja: "毎週月曜にチーム会議があります。", tag: "職場" },
        { en: "Do you usually come by train?", ja: "普段は電車で来ますか?", tag: "質問" },
        { en: "How often do you go to the gym?", ja: "どのくらいの頻度でジムに行きますか?", tag: "質問" },
        { en: "What time do you usually finish work?", ja: "普段は何時に仕事を終えますか?", tag: "質問" },
        { en: "I hardly ever eat out on weekdays.", ja: "平日はめったに外食しません。", tag: "食事" }
      ], variants: [
        { note: "頻度副詞の位置: be動詞の後（I am always）、一般動詞の前（I always go）" },
        { note: "強さの順: always > usually > often > sometimes > rarely > hardly ever > never" },
        { en: "every day / once a week / twice a month", note: "回数の表現は文末に置く" },
        { note: "注意: 三人称単数は -s を付ける（He usually gets up early.）" },
        { note: "否定・疑問は don't / Do you ~? を使う（I don't usually ~ / Do you usually ~?）" }
      ]},
      { name: "11. 過去のことを言う（I went / It was）", items: [
        { en: "I went to a movie last weekend.", ja: "先週末、映画に行きました。", tag: "週末" },
        { en: "It was really good.", ja: "とても良かったです。", tag: "感想" },
        { en: "I had lunch with a client yesterday.", ja: "昨日クライアントと昼食をとりました。", tag: "仕事" },
        { en: "I sent the email this morning.", ja: "今朝メールを送りました。", tag: "報告" },
        { en: "I finished it yesterday.", ja: "昨日終えました。", tag: "報告" },
        { en: "I didn't have time to check it.", ja: "確認する時間がありませんでした。", tag: "報告" },
        { en: "Did you have a good weekend?", ja: "良い週末でしたか?", tag: "質問" },
        { en: "What did you do yesterday?", ja: "昨日は何をしましたか?", tag: "質問" },
        { en: "I couldn't join the meeting.", ja: "会議に参加できませんでした。", tag: "報告" },
        { en: "I forgot to tell you.", ja: "お伝えするのを忘れていました。", tag: "会話" }
      ], variants: [
        { note: "不規則動詞に注意: go→went / have→had / send→sent / do→did / see→saw" },
        { note: "否定・疑問は did を使い、動詞は原形（I didn't go / Did you go?）" },
        { en: "It was good. / They were busy.", note: "be動詞の過去は was / were" },
        { en: "I just sent it.", note: "「ついさっき」は just を添える" },
        { en: "I used to live in Osaka.", note: "「昔は〜していた（今は違う）」習慣の過去。Phase 2 で扱う" }
      ]},
      { name: "12. 予定を言う（I'm going to ~）", items: [
        { en: "I'm going to visit my parents this weekend.", ja: "今週末、親を訪ねる予定です。", tag: "家族" },
        { en: "I'm going to leave around five.", ja: "5時ごろ出る予定です。", tag: "予定" },
        { en: "I'm going to send it after this meeting.", ja: "この会議の後に送る予定です。", tag: "仕事" },
        { en: "We're going to move next month.", ja: "来月引っ越す予定です。", tag: "生活" },
        { en: "I'm not going to stay long.", ja: "長くはいない予定です。", tag: "予定" },
        { en: "I'm going to take a day off tomorrow.", ja: "明日休みを取る予定です。", tag: "職場" },
        { en: "I'm going to check with my manager.", ja: "上司に確認するつもりです。", tag: "仕事" },
        { en: "It's going to rain this afternoon.", ja: "午後は雨になりそうです。", tag: "天気" },
        { en: "Are you going to join the call?", ja: "その通話に参加しますか?", tag: "質問" },
        { en: "What are you going to do about it?", ja: "それについてどうするつもりですか?", tag: "質問" }
      ], variants: [
        { en: "I'll ~", note: "その場で決めたこと・申し出・約束（I'll get it. 私が取ります）" },
        { en: "I'm planning to ~", note: "計画として決めている。やや意図的" },
        { en: "I'm thinking of ~ing", note: "まだ決めていない・検討中" },
        { en: "I'm meeting him at three.", note: "確定した予定は現在進行形でも言える" },
        { note: "使い分け: 前から決めていた=I'm going to / 今決めた=I'll" }
      ]},
      { name: "13. 希望を言う（I'd like to ~）", items: [
        { en: "I'd like to make a reservation, please.", ja: "予約をお願いしたいのですが。", tag: "レストラン" },
        { en: "I'd like to try this on.", ja: "これを試着したいのですが。", tag: "買い物" },
        { en: "I'd like a table by the window, please.", ja: "窓際の席をお願いします。", tag: "レストラン" },
        { en: "I'd like to change my appointment.", ja: "予約を変更したいのですが。", tag: "手続き" },
        { en: "I'd like to ask a question.", ja: "質問したいのですが。", tag: "会議" },
        { en: "I'd like to know more about it.", ja: "もっと詳しく知りたいです。", tag: "情報" },
        { en: "I'd like two coffees, please.", ja: "コーヒーを2つお願いします。", tag: "カフェ" },
        { en: "I'd like to leave a message.", ja: "伝言をお願いしたいのですが。", tag: "電話" },
        { en: "I'd like to confirm my booking.", ja: "予約を確認したいのですが。", tag: "手続き" },
        { en: "Would you like something to drink?", ja: "何かお飲み物はいかがですか?", tag: "質問" }
      ], variants: [
        { en: "I want to ~", note: "直接的。店では少し子どもっぽく響くことがある" },
        { en: "I'd love to ~", note: "「ぜひしたい」強い前向きさ" },
        { en: "I'm looking for ~", note: "探し物を伝える。買い物で便利" },
        { en: "I'd rather ~", note: "二択の好み（どちらかと言えば）。Phase 2 で扱う" },
        { en: "I wish I could ~", note: "実現しない願い＝やわらかい断り" }
      ]},
      { name: "14. 進捗・状況・問題を報告する", items: [
        { en: "It's almost done.", ja: "ほぼ終わっています。", tag: "進捗" },
        { en: "I'm still working on it.", ja: "まだ作業中です。", tag: "進捗" },
        { en: "It's finished. I'll send it now.", ja: "完了しました。今送ります。", tag: "進捗" },
        { en: "We're on track.", ja: "予定どおり進んでいます。", tag: "進捗" },
        { en: "We're a bit behind schedule.", ja: "少し予定より遅れています。", tag: "進捗" },
        { en: "Actually, I ran into a problem.", ja: "実は、問題が起きました。", tag: "問題" },
        { en: "There's a small issue with the data.", ja: "データに小さな問題があります。", tag: "問題" },
        { en: "It's taking longer than expected.", ja: "予想より時間がかかっています。", tag: "問題" },
        { en: "I'll have it ready by Friday.", ja: "金曜までに用意します。", tag: "見通し" },
        { en: "Everything is going well so far.", ja: "今のところ順調です。", tag: "進捗" }
      ], variants: [
        { en: "It's under control.", note: "「問題ありません」落ち着いた報告" },
        { en: "I'm halfway through.", note: "「半分ほど終わりました」進捗を具体的に" },
        { en: "I'll keep you posted.", note: "「進捗は随時共有します」報告の締めに便利" },
        { note: "期限は by（by Friday＝金曜まで）、継続は until（until Friday＝金曜まで続く）" },
        { note: "コツ: 悪い報告は早く short に。Actually, ~ と切り出すと自然" }
      ]},
      { name: "15. 意見を言う・同意/不同意", items: [
        { en: "I think we should wait a little.", ja: "少し待つべきだと思います。", tag: "意見" },
        { en: "In my opinion, this is the best option.", ja: "私の意見では、これが最良の選択です。", tag: "意見" },
        { en: "I agree with you.", ja: "同意します。", tag: "同意" },
        { en: "That's a good point.", ja: "それはいい指摘です。", tag: "同意" },
        { en: "I feel the same way.", ja: "私も同じ気持ちです。", tag: "同意" },
        { en: "I see your point, but I have a concern.", ja: "おっしゃることは分かりますが、懸念があります。", tag: "不同意" },
        { en: "I'm not sure I agree with that.", ja: "それには賛成しきれません。", tag: "不同意" },
        { en: "I don't think that will work.", ja: "それはうまくいかないと思います。", tag: "不同意" },
        { en: "I'd say it's worth trying.", ja: "試す価値はあると思います。", tag: "意見" },
        { en: "From my point of view, it's too early.", ja: "私の見方では、まだ早いです。", tag: "意見" }
      ], variants: [
        { en: "Personally, I ~", note: "「個人的には」控えめに意見を出す" },
        { en: "You have a point.", note: "「確かにそうですね」部分的な同意" },
        { en: "I'm afraid I disagree.", note: "丁寧な不同意" },
        { note: "注意: 否定は前に置く（I don't think it will work / × I think it will not work）" },
        { note: "コツ: 反対する時は「相手を認める一言→but」の順にすると角が立たない" }
      ]},
      { name: "16. 申し出る（Would you like me to ~?）", items: [
        { en: "Would you like me to help you with that?", ja: "それをお手伝いしましょうか?", tag: "申し出" },
        { en: "Would you like me to send it now?", ja: "今それを送りましょうか?", tag: "仕事" },
        { en: "Would you like me to explain it again?", ja: "もう一度説明しましょうか?", tag: "職場" },
        { en: "Would you like me to book a room?", ja: "部屋を予約しましょうか?", tag: "手配" },
        { en: "Would you like me to check with him?", ja: "彼に確認しましょうか?", tag: "仕事" },
        { en: "Would you like some help?", ja: "お手伝いしましょうか?", tag: "手伝い" },
        { en: "Shall I open the window?", ja: "窓を開けましょうか?", tag: "配慮" },
        { en: "Do you need a hand?", ja: "手伝いは必要ですか?", tag: "手伝い" },
        { en: "Let me get that for you.", ja: "それはお持ちしますよ。", tag: "申し出" },
        { en: "I can do it if you'd like.", ja: "よろしければ私がやります。", tag: "申し出" }
      ], variants: [
        { en: "Shall I ~?", note: "簡潔で自然。やや英国寄り" },
        { en: "Do you want me to ~?", note: "カジュアル。親しい相手に" },
        { en: "Let me ~", note: "「やりますよ」と前に出る積極的な申し出" },
        { en: "No worries. Just let me know.", note: "断られた時の受け流し方" },
        { note: "コツ: 業務では「察して動く」より、申し出て確認するほうが安全" }
      ]}
    ]
  },

  // ===== Phase 2（発展・11セット）: 土台ができたら会話の幅を広げる =====
  patterns2: {
    title: "Patterns 2（発展）",
    icon: "📗",
    sets: [
      { name: "1. 誘う（Why don't we ~?）", items: [
        { en: "Why don't we grab lunch together?", ja: "一緒に昼食を食べませんか?", tag: "誘い" },
        { en: "Why don't we take a short break?", ja: "少し休憩しませんか?", tag: "職場" },
        { en: "Why don't we meet a bit earlier?", ja: "少し早めに会いませんか?", tag: "予定" },
        { en: "Why don't we try a different approach?", ja: "違う方法を試しませんか?", tag: "仕事" },
        { en: "Why don't we ask someone for help?", ja: "誰かに助けを求めませんか?", tag: "問題" },
        { en: "Why don't we split the bill?", ja: "割り勘にしませんか?", tag: "食事" },
        { en: "Why don't we do this next week?", ja: "これは来週にしませんか?", tag: "調整" },
        { en: "Why don't we invite them too?", ja: "彼らも誘いませんか?", tag: "集まり" },
        { en: "Why don't we start with the easy part?", ja: "簡単な部分から始めませんか?", tag: "仕事" },
        { en: "Why don't we walk instead?", ja: "代わりに歩きませんか?", tag: "移動" }
      ], variants: [
        { en: "How about ~ing?", note: "アイデアを軽く出す。最もやわらかい" },
        { en: "Shall we ~?", note: "丁寧な誘い。やや英国寄り" },
        { en: "Let's ~", note: "相手の同意を前提。最も直接的" },
        { en: "Why don't you ~?", note: "we→you にすると「あなたが〜したら?」相手への提案に変わる" },
        { note: "コツ: 断られても気にしない前提で軽く誘うのが英語の作法" }
      ]},
      { name: "2. 助言する（You might want to ~）", items: [
        { en: "You might want to check the schedule first.", ja: "まず予定を確認したほうがいいかもしれません。", tag: "助言" },
        { en: "You might want to bring an umbrella.", ja: "傘を持って行ったほうがいいかもしれません。", tag: "天気" },
        { en: "You might want to ask your manager.", ja: "上司に聞いたほうがいいかもしれません。", tag: "仕事" },
        { en: "You might want to save your work.", ja: "作業を保存したほうがいいかもしれません。", tag: "注意" },
        { en: "You might want to get some rest.", ja: "少し休んだほうがいいかもしれません。", tag: "体調" },
        { en: "It might be better to wait until tomorrow.", ja: "明日まで待ったほうがいいかもしれません。", tag: "助言" },
        { en: "It might be worth trying again.", ja: "もう一度試す価値があるかもしれません。", tag: "助言" },
        { en: "I'd suggest starting with the data.", ja: "データから始めることを提案します。", tag: "提案" },
        { en: "Maybe you should take a break.", ja: "休憩したほうがいいかもしれません。", tag: "配慮" },
        { en: "If it were me, I'd ask first.", ja: "私なら、まず聞きます。", tag: "助言" }
      ], variants: [
        { en: "You should ~", note: "普通の助言。言い方次第で「指示」に聞こえる" },
        { en: "You'd better ~", note: "警告に近い（しないと困る）。上から目線になりやすい" },
        { en: "Why don't you ~?", note: "友好的な提案" },
        { en: "Have you thought about ~ing?", note: "「〜は考えました?」最も押しつけない" },
        { note: "コツ: 相手が上位者なら助言より「質問の形」にすると安全" }
      ]},
      { name: "3. 必要・義務を言う（I need to ~）", items: [
        { en: "I need to finish this by five.", ja: "5時までにこれを終える必要があります。", tag: "仕事" },
        { en: "I need to charge my phone.", ja: "スマホを充電する必要があります。", tag: "生活" },
        { en: "I need to check with my manager.", ja: "上司に確認する必要があります。", tag: "仕事" },
        { en: "I need to leave in ten minutes.", ja: "10分後に出る必要があります。", tag: "予定" },
        { en: "I have to work late tonight.", ja: "今夜は残業しなければなりません。", tag: "仕事" },
        { en: "I have to catch the last train.", ja: "終電に乗らなければなりません。", tag: "移動" },
        { en: "Do I need to book in advance?", ja: "事前予約は必要でしょうか?", tag: "手続き" },
        { en: "Do I need to bring anything?", ja: "何か持って行く必要はありますか?", tag: "確認" },
        { en: "You don't have to come if you're busy.", ja: "お忙しければ来なくて大丈夫です。", tag: "配慮" },
        { en: "We need to talk about the schedule.", ja: "予定について話す必要があります。", tag: "職場" }
      ], variants: [
        { en: "I have to ~", note: "外的な事情・規則で仕方なく" },
        { en: "I must ~", note: "強い。書き言葉寄りで会話では少ない" },
        { en: "I've got to ~", note: "口語で have to と同じ。とてもよく使う" },
        { en: "I'm supposed to ~", note: "取り決め・そういうことになっている（Phase 3）" },
        { note: "注意: don't have to =「しなくてよい」、must not =「してはいけない」で意味が正反対" }
      ]},
      { name: "4. 検討中を言う（I'm thinking of ~ing）", items: [
        { en: "I'm thinking of moving next year.", ja: "来年引っ越そうかと思っています。", tag: "生活" },
        { en: "I'm thinking of taking a day off.", ja: "休みを取ろうかと思っています。", tag: "職場" },
        { en: "I'm thinking of trying that new place.", ja: "あの新しい店を試そうかと思っています。", tag: "食事" },
        { en: "I'm thinking of asking for feedback.", ja: "フィードバックをもらおうかと思っています。", tag: "仕事" },
        { en: "I'm thinking of joining a gym.", ja: "ジムに入ろうかと思っています。", tag: "健康" },
        { en: "I'm considering changing my plan.", ja: "計画の変更を検討しています。", tag: "予定" },
        { en: "I might go, but I'm not sure yet.", ja: "行くかもしれませんが、まだ分かりません。", tag: "予定" },
        { en: "I haven't decided yet.", ja: "まだ決めていません。", tag: "予定" },
        { en: "I'm still thinking about it.", ja: "まだ考えているところです。", tag: "会話" },
        { en: "What do you think I should do?", ja: "私はどうすべきだと思いますか?", tag: "相談" }
      ], variants: [
        { en: "I'm considering ~ing", note: "やや形式的。ビジネス文書向き" },
        { en: "I might ~", note: "「〜するかもしれない」最も軽い" },
        { en: "I'm planning to ~", note: "すでに計画として決めている（検討中とは違う）" },
        { en: "I'm leaning toward ~", note: "「〜に傾いている」自然な口語" },
        { note: "コツ: 決定前は thinking of ~ing、決まったら going to に切り替えると伝わりやすい" }
      ]},
      { name: "5. 能力を言う（I can ~）", items: [
        { en: "I can speak a little English.", ja: "英語を少し話せます。", tag: "学習" },
        { en: "I can help you tomorrow.", ja: "明日なら手伝えます。", tag: "申し出" },
        { en: "I can't come this afternoon.", ja: "今日の午後は行けません。", tag: "予定" },
        { en: "I can't hear you very well.", ja: "よく聞こえません。", tag: "通話" },
        { en: "I'm not very good at cooking.", ja: "料理はあまり得意ではありません。", tag: "趣味" },
        { en: "She's really good at explaining things.", ja: "彼女は説明がとても上手です。", tag: "職場" },
        { en: "Do you know how to use this?", ja: "これの使い方をご存じですか?", tag: "質問" },
        { en: "I don't know how to say it in English.", ja: "英語でどう言うか分かりません。", tag: "会話" },
        { en: "I couldn't finish it in time.", ja: "期限内に終えられませんでした。", tag: "報告" },
        { en: "Can you hear me okay?", ja: "私の声は聞こえていますか?", tag: "通話" }
      ], variants: [
        { en: "be able to ~", note: "can とほぼ同じ。未来形で使いやすい（I'll be able to）" },
        { en: "know how to ~", note: "方法を知っている（技能より知識）" },
        { en: "manage to ~", note: "「なんとかできた」達成のニュアンス" },
        { note: "注意: 過去の1回の達成は could より was able to / managed to が自然" },
        { note: "コツ: I don't know how to say it in English. は詰まった時の万能フレーズ" }
      ]},
      { name: "6. 経験を言う（Have you ever ~? / 現在完了）", items: [
        { en: "Have you ever been to Kyoto?", ja: "京都に行ったことはありますか?", tag: "旅行" },
        { en: "Have you ever tried Thai food?", ja: "タイ料理を食べたことはありますか?", tag: "食事" },
        { en: "Have you ever worked from home?", ja: "在宅勤務をしたことはありますか?", tag: "仕事" },
        { en: "Have you ever used this tool?", ja: "このツールを使ったことはありますか?", tag: "職場" },
        { en: "I've never been there before.", ja: "そこには行ったことがありません。", tag: "経験" },
        { en: "I've already sent it.", ja: "もう送りました。", tag: "報告" },
        { en: "I haven't finished it yet.", ja: "まだ終えていません。", tag: "進捗" },
        { en: "Have you finished the report?", ja: "レポートは終わりましたか?", tag: "質問" },
        { en: "I've done this before.", ja: "これは以前やったことがあります。", tag: "経験" },
        { en: "That's the best coffee I've ever had.", ja: "今まで飲んだ中で一番のコーヒーです。", tag: "感想" }
      ], variants: [
        { note: "ever は疑問文で「今までに」。肯定文には普通入れない" },
        { note: "already（もう）は肯定文、yet（まだ）は否定文・疑問文で使う" },
        { note: "been to（行ったことがある）と gone to（行ってしまった）は意味が違う" },
        { note: "注意: 具体的な過去の時（yesterday など）と現在完了は一緒に使えない" },
        { en: "I've done this before.", note: "「やったことがある」経験を示す定番" }
      ]},
      { name: "7. 過去の習慣を言う（I used to ~）", items: [
        { en: "I used to live in Osaka.", ja: "昔は大阪に住んでいました。", tag: "生活" },
        { en: "I used to play soccer every weekend.", ja: "昔は毎週末サッカーをしていました。", tag: "趣味" },
        { en: "I used to work at a small company.", ja: "昔は小さな会社で働いていました。", tag: "仕事" },
        { en: "I used to drink a lot of coffee.", ja: "昔はコーヒーをたくさん飲んでいました。", tag: "習慣" },
        { en: "I used to be really shy.", ja: "昔はとても内気でした。", tag: "性格" },
        { en: "I didn't use to like vegetables.", ja: "昔は野菜が好きではありませんでした。", tag: "食事" },
        { en: "Did you use to play any sports?", ja: "昔は何かスポーツをしていましたか?", tag: "質問" },
        { en: "There used to be a bookstore here.", ja: "ここには昔、本屋がありました。", tag: "過去" },
        { en: "I'm used to working late now.", ja: "今は残業に慣れています。", tag: "慣れ" },
        { en: "It takes time to get used to it.", ja: "慣れるには時間がかかります。", tag: "慣れ" }
      ], variants: [
        { note: "used to は「今はもうしていない」を含む。今も続くなら現在形で言う" },
        { en: "be used to ~ing", note: "「慣れている」で意味が全く違う（I'm used to it）" },
        { en: "get used to ~ing", note: "「慣れる」その過程を表す" },
        { en: "When I was a kid, I would ~", note: "would も過去の習慣。used to より文語的" },
        { note: "過去の状態は used to be を使う（I used to be shy）" }
      ]},
      { name: "8. 推測・断定を避ける（It looks like ~）", items: [
        { en: "It looks like it's going to rain.", ja: "雨が降りそうですね。", tag: "天気" },
        { en: "It looks like the train is delayed.", ja: "電車が遅れているようです。", tag: "電車" },
        { en: "It looks like we're running late.", ja: "遅れているようです。", tag: "予定" },
        { en: "It seems like he's busy right now.", ja: "彼は今忙しいようです。", tag: "職場" },
        { en: "It seems there's been a misunderstanding.", ja: "誤解があったようです。", tag: "問題" },
        { en: "Maybe I'm wrong, but I think it's closed.", ja: "違うかもしれませんが、閉まっていると思います。", tag: "意見" },
        { en: "It's probably better to wait.", ja: "おそらく待つほうがいいです。", tag: "判断" },
        { en: "I'm not sure if this is correct.", ja: "これが正しいか分かりません。", tag: "確認" },
        { en: "I'm afraid there's a problem.", ja: "申し上げにくいのですが、問題があります。", tag: "報告" },
        { en: "As far as I know, it's fine.", ja: "私が知る限り、問題ありません。", tag: "情報" }
      ], variants: [
        { en: "It seems (like) ~", note: "全体の印象。looks like より少し形式的" },
        { note: "確度の調整: Maybe（低め）< Probably（高め）< Definitely（確実）" },
        { en: "I'm afraid ~", note: "悪い知らせを丁寧に伝える" },
        { en: "I guess ~", note: "軽い推測。カジュアル" },
        { note: "コツ: 英語では断定を避ける表現が丁寧さを生む。自信がない時は必ず添える" }
      ]},
      { name: "9. 条件を言う（If ~, I'll ~）", items: [
        { en: "If it rains, we'll cancel the picnic.", ja: "雨なら、ピクニックは中止します。", tag: "予定" },
        { en: "If I have time, I'll join you.", ja: "時間があれば、参加します。", tag: "誘い" },
        { en: "If you need help, please just ask.", ja: "助けが必要なら、遠慮なく言ってください。", tag: "依頼" },
        { en: "If you finish early, let me know.", ja: "早く終わったら、教えてください。", tag: "仕事" },
        { en: "If it's too expensive, I'll skip it.", ja: "高すぎるなら、やめておきます。", tag: "買い物" },
        { en: "Let me know if anything changes.", ja: "何か変わったら教えてください。", tag: "連絡" },
        { en: "Let me know if that works for you.", ja: "それで問題なければ教えてください。", tag: "調整" },
        { en: "As long as we leave by six, we'll be fine.", ja: "6時までに出れば大丈夫です。", tag: "予定" },
        { en: "Unless it rains, we'll go as planned.", ja: "雨でなければ、予定どおり行きます。", tag: "予定" },
        { en: "In case you need it, here's my number.", ja: "念のため、これが私の番号です。", tag: "備え" }
      ], variants: [
        { note: "注意: if の中は未来のことでも現在形（× If it will rain）" },
        { en: "as long as ~", note: "「〜する限り」条件を強調" },
        { en: "unless ~", note: "「〜でなければ」if not と同じ意味" },
        { en: "in case ~", note: "「念のため」まだ起きていないことへの備え" },
        { note: "If I were you, I'd ~ は現実と違う仮定（Phase 3 で扱う）" }
      ]},
      { name: "10. 存在を言う（There is / There are ~）", items: [
        { en: "There's a convenience store around the corner.", ja: "角にコンビニがあります。", tag: "道案内" },
        { en: "There are a lot of people today.", ja: "今日は人が多いですね。", tag: "外出" },
        { en: "There's a problem with the file.", ja: "ファイルに問題があります。", tag: "問題" },
        { en: "There seems to be a mistake.", ja: "間違いがあるようです。", tag: "問題" },
        { en: "Is there anything I can do?", ja: "何かできることはありますか?", tag: "申し出" },
        { en: "There's nothing to worry about.", ja: "心配することは何もありません。", tag: "安心" },
        { en: "There are two options.", ja: "選択肢が2つあります。", tag: "仕事" },
        { en: "There's no time left.", ja: "もう時間がありません。", tag: "予定" },
        { en: "Is there a restroom nearby?", ja: "近くにお手洗いはありますか?", tag: "外出" },
        { en: "There used to be a shop here.", ja: "ここには昔、店がありました。", tag: "過去" }
      ], variants: [
        { en: "There seems to be ~", note: "「〜があるようだ」やわらかい指摘。問題報告に便利" },
        { en: "There used to be ~", note: "「昔はあった」" },
        { note: "疑問形は Is there ~? / Are there ~?" },
        { note: "注意: 「〜がある」を It is ~ で始めない（× It is a store around the corner）" },
        { note: "口語では複数でも There's と言うことがある（くだけた言い方）" }
      ]},
      { name: "11. 所要時間・形式主語（It takes ~ / It's ~ to do）", items: [
        { en: "It takes about twenty minutes by train.", ja: "電車で20分ほどかかります。", tag: "移動" },
        { en: "How long does it take?", ja: "どのくらいかかりますか?", tag: "確認" },
        { en: "It took longer than expected.", ja: "予想より時間がかかりました。", tag: "報告" },
        { en: "It's hard to explain.", ja: "説明するのが難しいです。", tag: "会話" },
        { en: "It's important to check first.", ja: "先に確認することが大切です。", tag: "仕事" },
        { en: "It's easy to forget.", ja: "忘れやすいです。", tag: "注意" },
        { en: "It's nice to meet you.", ja: "お会いできてうれしいです。", tag: "あいさつ" },
        { en: "It's worth trying.", ja: "試す価値があります。", tag: "提案" },
        { en: "It doesn't take much time.", ja: "そんなに時間はかかりません。", tag: "説明" },
        { en: "It's difficult to say right now.", ja: "今は言いにくいです。", tag: "会話" }
      ], variants: [
        { en: "It takes + 時間 + to do ~", note: "「〜するのに…かかる」時間の基本形" },
        { en: "It costs + 金額", note: "お金の場合は cost を使う" },
        { en: "It's ~ for me to do", note: "「私には〜」を挟める" },
        { note: "コツ: 主語が長くなる時は It で始めて後ろに置くと伝わりやすい" },
        { note: "天気・時間・距離の主語も it（It's raining / It's five o'clock）" }
      ]}
    ]
  },

  // ===== Phase 3（表現力・7セット）: 伝え方に幅と精度を出す =====
  patterns3: {
    title: "Patterns 3（表現力）",
    icon: "🎯",
    sets: [
      { name: "1. 二択の好みを言う（I'd rather A than B）", items: [
        { en: "I'd rather stay home tonight.", ja: "今夜は家にいたいです。", tag: "予定" },
        { en: "I'd rather take the train than drive.", ja: "運転するより電車がいいです。", tag: "移動" },
        { en: "I'd rather not talk about it right now.", ja: "今はその話を控えたいです。", tag: "会話" },
        { en: "I'd rather start early than finish late.", ja: "遅く終わるより早く始めたいです。", tag: "仕事" },
        { en: "I'd rather ask than guess.", ja: "推測するより聞きたいです。", tag: "判断" },
        { en: "I'd prefer to meet in the morning.", ja: "できれば午前中に会いたいです。", tag: "調整" },
        { en: "I prefer coffee to tea.", ja: "紅茶よりコーヒーが好きです。", tag: "好み" },
        { en: "I'd rather wait until next week.", ja: "来週まで待ちたいです。", tag: "時期" },
        { en: "Would you rather meet online?", ja: "オンラインのほうがよろしいですか?", tag: "質問" },
        { en: "If you'd rather not, that's fine.", ja: "気が進まなければ、それで構いません。", tag: "配慮" }
      ], variants: [
        { note: "would rather の後は動詞の原形（× I'd rather to go）" },
        { en: "prefer A to B", note: "名詞を比べる時。prefer to do は動詞の時" },
        { en: "I'd rather not ~", note: "やわらかい拒否。断りに使いやすい" },
        { en: "Would you rather A or B?", note: "二択を丁寧に尋ねる" },
        { note: "コツ: I'd rather は「どちらかと言えば」控えめに主張できる便利な型" }
      ]},
      { name: "2. 取り決め・〜のはず（I'm supposed to ~）", items: [
        { en: "I'm supposed to meet him at five.", ja: "5時に彼と会う予定です。", tag: "予定" },
        { en: "I'm supposed to finish this today.", ja: "今日これを終える予定です。", tag: "仕事" },
        { en: "We're supposed to bring our own lunch.", ja: "昼食は持参のはずです。", tag: "ルール" },
        { en: "You're supposed to sign here.", ja: "ここに署名するはずです。", tag: "手続き" },
        { en: "I was supposed to send it yesterday.", ja: "昨日送るはずでした。", tag: "失念" },
        { en: "It's supposed to rain this evening.", ja: "今夜は雨が降るらしいです。", tag: "天気" },
        { en: "This button is supposed to start it.", ja: "このボタンで起動するはずです。", tag: "操作" },
        { en: "Aren't we supposed to wait outside?", ja: "外で待つはずではないですか?", tag: "確認" },
        { en: "I'm not supposed to tell anyone.", ja: "誰にも言ってはいけないことになっています。", tag: "秘密" },
        { en: "It was supposed to be easy.", ja: "簡単なはずだったのですが。", tag: "感想" }
      ], variants: [
        { note: "be supposed to =「そういうことになっている」取り決めや評判を表す" },
        { note: "過去形 was supposed to は「〜する予定だったが（していない）」を含みやすい" },
        { en: "It's supposed to ~", note: "「〜らしい」伝聞（天気予報など）" },
        { note: "have to（義務）より弱く、破れる余地があるニュアンス" },
        { note: "コツ: 言い訳や状況説明でとても便利。まず型として覚える" }
      ]},
      { name: "3. 仮定で助言する（If I were you, I'd ~）", items: [
        { en: "If I were you, I'd take the earlier train.", ja: "私なら、早い電車に乗ります。", tag: "助言" },
        { en: "If I were you, I'd talk to him directly.", ja: "私なら、直接彼に話します。", tag: "助言" },
        { en: "If I were you, I wouldn't worry about it.", ja: "私なら、気にしません。", tag: "助言" },
        { en: "If I were in your position, I'd wait.", ja: "あなたの立場なら、待ちます。", tag: "助言" },
        { en: "If I knew the answer, I'd tell you.", ja: "答えを知っていれば、教えます。", tag: "会話" },
        { en: "If I had more time, I'd help you.", ja: "もっと時間があれば、手伝います。", tag: "状況" },
        { en: "I would if I could.", ja: "できるならそうします。", tag: "断り" },
        { en: "What would you do in my situation?", ja: "私の状況ならどうしますか?", tag: "相談" },
        { en: "It would be better to ask first.", ja: "まず聞いたほうがいいでしょう。", tag: "助言" },
        { en: "I wouldn't do that if I were you.", ja: "私ならそれはしません。", tag: "注意" }
      ], variants: [
        { note: "現実と違う仮定なので was ではなく were を使う（口語では was も聞く）" },
        { note: "形: If + 過去形, would + 動詞の原形" },
        { note: "主節は would / could / might を使い分けられる" },
        { en: "I would if I could.", note: "「できればするけど（できない）」やわらかい断り" },
        { note: "コツ: 押しつけずに助言できるので、上位者にも使いやすい" }
      ]},
      { name: "4. ずっと続いていることを言う（I've been ~ing）", items: [
        { en: "I've been waiting for about ten minutes.", ja: "10分ほど待っています。", tag: "待ち合わせ" },
        { en: "I've been working on this all morning.", ja: "午前中ずっとこれに取り組んでいます。", tag: "仕事" },
        { en: "I've been feeling a bit tired lately.", ja: "最近少し疲れ気味です。", tag: "体調" },
        { en: "I've been studying English every day.", ja: "毎日英語を勉強しています。", tag: "学習" },
        { en: "I've been meaning to call you.", ja: "ずっと連絡しようと思っていました。", tag: "会話" },
        { en: "It's been raining since this morning.", ja: "今朝から雨が降り続いています。", tag: "天気" },
        { en: "We've been talking about this for weeks.", ja: "数週間これについて話しています。", tag: "仕事" },
        { en: "How long have you been waiting?", ja: "どのくらい待っていますか?", tag: "質問" },
        { en: "I've been trying to reach him.", ja: "彼に連絡を取ろうとしています。", tag: "連絡" },
        { en: "I haven't been sleeping well.", ja: "よく眠れていません。", tag: "体調" }
      ], variants: [
        { note: "for + 期間（for ten minutes）/ since + 起点（since this morning）" },
        { en: "I've been meaning to ~", note: "「ずっと〜しようと思っていた」謝罪や前置きに便利" },
        { note: "現在完了（I've worked）との違い: 進行形は「今も続いている」感じが強い" },
        { note: "注意: know など状態動詞は進行形にしにくい" },
        { en: "How long have you been ~ing?", note: "雑談で使いやすい質問" }
      ]},
      { name: "5. 比べる（~er than / as ~ as / the most）", items: [
        { en: "This one is cheaper than that one.", ja: "こちらのほうが安いです。", tag: "買い物" },
        { en: "Today is warmer than yesterday.", ja: "今日は昨日より暖かいです。", tag: "天気" },
        { en: "It's not as difficult as I thought.", ja: "思ったほど難しくありません。", tag: "感想" },
        { en: "This is the best option we have.", ja: "これが最良の選択肢です。", tag: "仕事" },
        { en: "This is the most important part.", ja: "ここが最も重要な部分です。", tag: "説明" },
        { en: "Could you speak a little louder?", ja: "もう少し大きな声で話していただけますか?", tag: "会話" },
        { en: "I like this one better.", ja: "こちらのほうが好きです。", tag: "好み" },
        { en: "It's getting better and better.", ja: "どんどん良くなっています。", tag: "進捗" },
        { en: "The sooner, the better.", ja: "早いほど良いです。", tag: "調整" },
        { en: "It's more expensive than I expected.", ja: "思ったより高いです。", tag: "買い物" }
      ], variants: [
        { note: "短い語は -er / -est、長い語は more / most を使う" },
        { en: "not as ~ as", note: "「〜ほどではない」やわらかい比較" },
        { note: "比較級を強める語: much / a lot / far（much better）" },
        { en: "The 比較級, the 比較級", note: "「〜すればするほど」（The sooner, the better）" },
        { note: "注意: good→better→best、bad→worse→worst は不規則変化" }
      ]},
      { name: "6. 数量・程度を言う（too ~ / not enough）", items: [
        { en: "There's too much noise in here.", ja: "ここは音がうるさすぎます。", tag: "環境" },
        { en: "I don't have enough time today.", ja: "今日は時間が足りません。", tag: "予定" },
        { en: "It's too expensive for me.", ja: "私には高すぎます。", tag: "買い物" },
        { en: "I'm too tired to go out tonight.", ja: "疲れすぎて今夜は出かけられません。", tag: "体調" },
        { en: "It was so busy that I skipped lunch.", ja: "忙しすぎて昼食を抜きました。", tag: "仕事" },
        { en: "Could I have a little more time?", ja: "もう少し時間をいただけますか?", tag: "依頼" },
        { en: "We only have a few minutes left.", ja: "残り数分しかありません。", tag: "予定" },
        { en: "There aren't many people today.", ja: "今日はあまり人がいません。", tag: "外出" },
        { en: "That's more than enough, thank you.", ja: "十分です、ありがとう。", tag: "食事" },
        { en: "It's not quite big enough.", ja: "少し大きさが足りません。", tag: "買い物" }
      ], variants: [
        { note: "too much + 数えられない名詞 / too many + 数えられる名詞" },
        { note: "enough の位置: 名詞の前（enough time）、形容詞の後（big enough）" },
        { en: "too ~ to do", note: "「〜すぎて…できない」" },
        { en: "so ~ that ...", note: "「とても〜なので…」結果を続ける" },
        { note: "a few（少しある・肯定的）/ few（ほとんどない・否定的）の違いに注意" }
      ]},
      { name: "7. 受動態で言う（was ~ed / get + p.p.）", items: [
        { en: "The train was delayed this morning.", ja: "今朝、電車が遅れました。", tag: "電車" },
        { en: "The meeting has been cancelled.", ja: "会議は中止になりました。", tag: "職場" },
        { en: "It's made in Japan.", ja: "日本製です。", tag: "買い物" },
        { en: "This form needs to be signed.", ja: "この書類は署名が必要です。", tag: "手続き" },
        { en: "I was told to wait here.", ja: "ここで待つように言われました。", tag: "案内" },
        { en: "I got invited to the party.", ja: "パーティーに招待されました。", tag: "誘い" },
        { en: "The email was sent yesterday.", ja: "メールは昨日送られました。", tag: "報告" },
        { en: "Breakfast is served until ten.", ja: "朝食は10時まで提供されます。", tag: "ホテル" },
        { en: "It's written in English.", ja: "英語で書かれています。", tag: "確認" },
        { en: "The problem has been fixed.", ja: "問題は解決されました。", tag: "対応" }
      ], variants: [
        { note: "形: be + 過去分詞。by ~ で行為者を示せるが普通は省略する" },
        { en: "get + 過去分詞", note: "口語的な受動態（I got invited）" },
        { en: "has been ~ed", note: "「すでに〜された」状態を表せる" },
        { note: "誰がやったか言いたくない・重要でない時に受動態を使う" },
        { note: "コツ: 業務では「誰のミスか」を避けて事実だけ伝えるのに便利" }
      ]}
    ]
  }
};

// ===== B: モデル状況説明文（3〜5文で1つの状況を通しで説明した例）=====
// 「聞く→真似して言う」で、つなぎ方の全体像を体得する。
// lines は文単位（en/ja）で分割。読み上げは全文を順に、または1文ずつ。
const MODELS = [
  {
    id: "model-1",
    title: "納期の遅れを報告する",
    scene: "上司にプロジェクトの遅延を説明する",
    lines: [
      { en: "Let me explain the situation.", ja: "状況を説明させてください。" },
      { en: "We ran into an unexpected issue with the system last week.", ja: "先週、システムで予期しない問題が発生しました。" },
      { en: "As a result, we're about two days behind schedule.", ja: "その結果、予定より2日ほど遅れています。" },
      { en: "To fix it, we've already changed the settings and tested again.", ja: "対処として、設定を変更し再テスト済みです。" },
      { en: "Going forward, we'll add a check to prevent this.", ja: "今後は再発防止のため確認を追加します。" }
    ]
  },
  {
    id: "model-2",
    title: "顧客からのクレームを共有する",
    scene: "チームに顧客の不満とその対応を説明する",
    lines: [
      { en: "Here's what happened.", ja: "何が起きたか説明します。" },
      { en: "A customer complained that the delivery was late.", ja: "顧客から配達が遅いと苦情がありました。" },
      { en: "It was caused by a mistake in the shipping address.", ja: "配送先の入力ミスが原因でした。" },
      { en: "We've already apologized and resent the package.", ja: "すでに謝罪し、荷物を再送しました。" },
      { en: "In short, the issue is resolved and the customer is happy.", ja: "要するに、問題は解決し顧客も満足しています。" }
    ]
  },
  {
    id: "model-3",
    title: "計画の変更を説明する",
    scene: "予定を変更する理由と代替案を伝える",
    lines: [
      { en: "To give you some context, our plan has changed a little.", ja: "背景として、計画が少し変わりました。" },
      { en: "At first, we planned to launch this month.", ja: "当初は今月ローンチする予定でした。" },
      { en: "However, we found a few things that need more testing.", ja: "しかし、もう少しテストが必要な点が見つかりました。" },
      { en: "So, we decided to move the date to next month.", ja: "そこで、日程を来月に動かすことにしました。" },
      { en: "The good news is, the quality will be much better.", ja: "幸い、品質はずっと良くなります。" }
    ]
  },
  {
    id: "model-4",
    title: "自分の一日を説明する",
    scene: "同僚に今日の予定や状況を軽く話す",
    lines: [
      { en: "Let me give you a quick summary of my day.", ja: "今日の予定を手短に話します。" },
      { en: "This morning, I had two meetings back to back.", ja: "午前中、会議が2件続けてありました。" },
      { en: "After that, I spent some time on the report.", ja: "その後、レポートに取り組みました。" },
      { en: "It took longer than I expected, so I'm a bit behind.", ja: "思ったより時間がかかり、少し遅れています。" },
      { en: "Still, I should finish everything by the end of the day.", ja: "それでも、今日中には全部終わる見込みです。" }
    ]
  },

  // ===== 紹介の型（What it is → Features → Who it's for → Recommendation）=====
  // 物が変わっても同じ言い回しを流用できる「万能な紹介」の型。
  {
    id: "model-5",
    title: "商品紹介：腕時計",
    scene: "お客様や同僚に腕時計をおすすめする",
    lines: [
      { en: "Honestly, this is the watch I've been waiting for my whole life.", ja: "正直に言って、これは一生待っていた時計です。" },
      { en: "Let me show you why I can't stop talking about it.", ja: "なぜ話が止まらないのか、お見せしますね。" },
      { en: "The moment you put it on, you feel it — solid steel, but light as air.", ja: "着けた瞬間に分かります。頑丈なスチールなのに、羽のように軽いんです。" },
      { en: "The design is clean and timeless, so it works with a suit or a T-shirt.", ja: "デザインは無駄がなく普遍的。スーツにもTシャツにも合います。" },
      { en: "And here's the amazing part: it survives rain, sweat, even the ocean.", ja: "そして驚くのはここ。雨も汗も、海水にさえ耐えます。" },
      { en: "I've worn mine every single day for two years, and it still looks brand new.", ja: "私は2年間毎日着けていますが、今も新品同様です。" },
      { en: "I've dropped it, scratched it, taken it swimming — and it just keeps going.", ja: "落として、傷つけて、泳ぎにも持ち込みました。それでも平気で動き続けます。" },
      { en: "Most watches at this price feel cheap in your hand. This one feels serious.", ja: "この価格帯の時計は安っぽく感じるものが多い。これは本物の重みがあります。" },
      { en: "People notice it, too. I get asked about it almost every week.", ja: "周りも気づきます。ほぼ毎週、これについて聞かれます。" },
      { en: "Trust me, this isn't just a watch. It's a companion you'll never want to take off.", ja: "本当に、これは単なる時計じゃありません。外したくなくなる相棒です。" }
    ]
  },
  {
    id: "model-6",
    title: "商品紹介：ノートパソコン",
    scene: "仕事用のノートPCの特徴を説明する",
    lines: [
      { en: "You know that panic when your battery hits five percent in a meeting?", ja: "会議中にバッテリーが5%になる、あの焦りを知っていますか?" },
      { en: "I used to carry a charger everywhere. Not anymore.", ja: "以前はどこにでも充電器を持ち歩いていました。もう不要です。" },
      { en: "With this laptop, that never happens. It runs all day — twelve hours, easily.", ja: "このノートPCならそれは起きません。丸一日、12時間は余裕で動きます。" },
      { en: "And it's unbelievably light. You'll forget it's even in your bag.", ja: "しかも信じられないほど軽い。カバンに入れたことを忘れるほどです。" },
      { en: "It wakes up instantly, so you never wait to start working.", ja: "瞬時に起動するので、作業開始で待たされることがありません。" },
      { en: "The screen is bright and sharp, even outside in the sunlight.", ja: "画面は明るく鮮明で、屋外の日差しの下でも見えます。" },
      { en: "The keyboard is quiet, too — perfect for cafés and shared offices.", ja: "キーボードも静か。カフェや共有オフィスに最適です。" },
      { en: "I took it on a two-week trip and never once looked for a power outlet.", ja: "2週間の出張に持って行きましたが、一度もコンセントを探しませんでした。" },
      { en: "For the first time, my laptop stopped deciding where I could work.", ja: "初めて、PCが「働ける場所」を制限しなくなりました。" },
      { en: "If you work on the move, this thing will completely change your day.", ja: "移動しながら働く人なら、これは日常を根本から変えてくれます。" }
    ]
  },
  {
    id: "model-7",
    title: "商品紹介：ワイヤレスイヤホン",
    scene: "イヤホンの良さを短く紹介する",
    lines: [
      { en: "I have to tell you about these earphones — they honestly blew me away.", ja: "このイヤホンの話をさせてください。本当に驚かされました。" },
      { en: "I've tried a lot of earphones, and most of them disappointed me.", ja: "たくさん試してきましたが、ほとんどは期待外れでした。" },
      { en: "The first time I turned on the noise cancellation, the whole world went silent.", ja: "初めてノイズキャンセリングを入れた時、世界が静まり返りました。" },
      { en: "A crowded train suddenly felt like my own private room.", ja: "満員電車が、まるで自分の個室のようになったんです。" },
      { en: "And the sound? Rich, clear, and full of detail — far better than the price suggests.", ja: "音は?豊かでクリアで細部まで見える。価格以上の実力です。" },
      { en: "I started hearing small things in songs I've listened to for years.", ja: "何年も聴いてきた曲の中に、小さな音が聞こえ始めました。" },
      { en: "They're tiny, too. They disappear into my pocket and I forget they're there.", ja: "とても小さい。ポケットに消えて、あることを忘れます。" },
      { en: "The battery lasts through my whole commute, both ways, for days.", ja: "バッテリーは往復の通勤を何日も持ちます。" },
      { en: "Calls are clear as well, so I use them for meetings without thinking twice.", ja: "通話も明瞭なので、会議でも迷わず使っています。" },
      { en: "Seriously, once you try these, you'll never go back to ordinary earphones.", ja: "本当に、一度使ったら普通のイヤホンには戻れません。" }
    ]
  },
  {
    id: "model-8",
    title: "サービス紹介",
    scene: "自社サービスを初対面の相手に説明する",
    lines: [
      { en: "Let me ask you something. How much time do you waste just finding information?", ja: "一つ質問です。情報を探すだけで、どれだけ時間を無駄にしていますか?" },
      { en: "Most teams lose hours every week, and nobody even notices.", ja: "多くのチームは毎週何時間も失っていて、誰も気づいていません。" },
      { en: "That's exactly the problem we set out to kill.", ja: "それこそが、私たちが本気で潰そうとした問題です。" },
      { en: "Our service brings every task, every update, every decision into one place.", ja: "私たちのサービスは、すべての業務・更新・決定を一か所に集めます。" },
      { en: "You open it once in the morning, and you know exactly where everything stands.", ja: "朝に一度開けば、すべての状況が正確に分かります。" },
      { en: "No more digging through emails, no more asking who is doing what.", ja: "メールを掘り返すことも、誰が何をしているか聞くことも、もう不要です。" },
      { en: "One of our clients cut their meeting time in half in just three weeks.", ja: "あるお客様は、わずか3週間で会議時間を半分にしました。" },
      { en: "Another told me his team finally stopped working late on Fridays.", ja: "別の方は、チームがようやく金曜の残業をやめられたと話してくれました。" },
      { en: "I'm genuinely excited about this because it gives people their time back.", ja: "私は本当にこれに興奮しています。人々に時間を返してくれるからです。" },
      { en: "Give it two weeks, and you'll wonder how you ever worked without it.", ja: "2週間使えば、これ無しでどう働いていたのか不思議になりますよ。" }
    ]
  },
  {
    id: "model-9",
    title: "自己紹介",
    scene: "初対面の相手に自分を紹介する",
    lines: [
      { en: "Hi, I'm Kenji — and I'm the person who gets excited about messy problems.", ja: "こんにちは、ケンジです。厄介な問題にワクワクするタイプの人間です。" },
      { en: "I work in planning, which means I turn chaos into something people can actually follow.", ja: "企画職です。つまり、混乱を人が実行できる形に変える仕事です。" },
      { en: "When a project is falling apart, that's usually when someone calls me.", ja: "プロジェクトが崩れ始めたとき、たいてい私が呼ばれます。" },
      { en: "Over the past five years, I've learned that the right question beats the fastest answer.", ja: "この5年で学んだのは、正しい問いは最速の答えに勝るということです。" },
      { en: "So before I plan anything, I ask one thing: what problem are we really solving?", ja: "だから計画の前に必ず問います。本当に解くべき問題は何か?" },
      { en: "What drives me is seeing a team go from stuck to unstoppable.", ja: "私の原動力は、行き詰まったチームが止まらなくなる瞬間を見ることです。" },
      { en: "Honestly, that moment never gets old for me.", ja: "正直、その瞬間には何度立ち会っても飽きません。" },
      { en: "And right now, I'm pushing hard on my English, because I want to work with people like you.", ja: "そして今、英語に本気で取り組んでいます。あなたのような人と働きたいからです。" },
      { en: "I'd rather speak imperfectly today than stay silent for another year.", ja: "もう一年黙っているより、今日下手でも話すほうを選びます。" },
      { en: "So please, don't hold back — I'd love to hear what you're working on.", ja: "だから遠慮なく。あなたが取り組んでいることをぜひ聞かせてください。" }
    ]
  },
  {
    id: "model-10",
    title: "チーム紹介",
    scene: "自分のチームの役割と強みを説明する",
    lines: [
      { en: "We're only six people — but I'd put this team up against any team twice our size.", ja: "たった6人です。でも2倍の規模のチームとでも勝負できると思っています。" },
      { en: "Our job is simple to say and hard to do: take a vague idea and make it real.", ja: "仕事は言うのは簡単、やるのは難しい。曖昧なアイデアを現実にすることです。" },
      { en: "Everyone here owns something completely different, and that's exactly our strength.", ja: "全員が全く違う領域を持っています。それがまさに私たちの強みです。" },
      { en: "One person sees the numbers, another sees the customer, another sees the risk.", ja: "ある人は数字を、別の人は顧客を、また別の人はリスクを見ています。" },
      { en: "We argue openly, we decide fast, and nobody hides a problem.", ja: "率直に議論し、素早く決め、誰も問題を隠しません。" },
      { en: "If something breaks, we say it out loud the same day.", ja: "何かが壊れたら、その日のうちに声に出します。" },
      { en: "That honesty is why we move faster than people expect.", ja: "その率直さが、周りの予想より速く動ける理由です。" },
      { en: "And when something works, we celebrate it together — loudly.", ja: "うまくいったときは、みんなで盛大に喜びます。" },
      { en: "Honestly, I look forward to Monday mornings — and that says everything.", ja: "正直、月曜の朝が楽しみです。それがすべてを物語っています。" },
      { en: "So come talk to us anytime. We love a good challenge.", ja: "いつでも話しに来てください。難しい挑戦は大歓迎です。" }
    ]
  }
];
