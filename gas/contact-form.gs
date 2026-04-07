// Google Apps Script - お問い合わせフォーム受信スクリプト
// 使い方:
// 1. Google Apps Script (https://script.google.com) で新しいプロジェクトを作成
// 2. このコードを貼り付け
// 3. 「デプロイ」→「新しいデプロイ」→「ウェブアプリ」を選択
// 4. 「アクセスできるユーザー」を「全員」に設定してデプロイ
// 5. 表示されるURLをコピーして、.env.local の NEXT_PUBLIC_GAS_URL に設定
//
// ★重要: コードを変更したら「新しいデプロイ」で再デプロイしてください
//        （「デプロイを編集」ではなく「新しいデプロイ」）

// 通知先メールアドレス
var NOTIFICATION_EMAIL = "support@node-llc.com";

function doPost(e) {
  try {
    // リクエストボディを取得
    var rawData = e.postData.contents;
    var data = JSON.parse(rawData);

    var name = data.name || "（未入力）";
    var nameKana = data.nameKana || "（未入力）";
    var email = data.email || "（未入力）";
    var message = data.message || "（未入力）";

    // 管理者への通知メール送信
    var subject = "【node】お問い合わせがありました - " + name + "様";
    var body = "nodeウェブサイトからお問い合わせがありました。\n\n"
      + "━━━━━━━━━━━━━━━━━━━━━━━━\n"
      + "お名前: " + name + "\n"
      + "フリガナ: " + nameKana + "\n"
      + "メールアドレス: " + email + "\n"
      + "━━━━━━━━━━━━━━━━━━━━━━━━\n\n"
      + "【お問い合わせ内容】\n"
      + message + "\n\n"
      + "━━━━━━━━━━━━━━━━━━━━━━━━\n"
      + "送信日時: " + Utilities.formatDate(new Date(), "Asia/Tokyo", "yyyy/MM/dd HH:mm:ss") + "\n";

    MailApp.sendEmail(NOTIFICATION_EMAIL, subject, body);

    return ContentService
      .createTextOutput(JSON.stringify({ result: "success" }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    // エラーが出ても管理者に通知（デバッグ用）
    try {
      MailApp.sendEmail(
        NOTIFICATION_EMAIL,
        "【node】フォーム送信エラー",
        "エラーが発生しました:\n" + error.toString()
          + "\n\n受信データ:\n" + (e && e.postData ? e.postData.contents : "データなし")
      );
    } catch (mailError) {
      // メール送信自体もエラーの場合は何もしない
    }

    return ContentService
      .createTextOutput(JSON.stringify({ result: "error", message: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  return ContentService
    .createTextOutput(JSON.stringify({ result: "ok", message: "GAS is running" }))
    .setMimeType(ContentService.MimeType.JSON);
}
