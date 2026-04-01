// Google Apps Script - お問い合わせフォーム受信スクリプト
// 使い方:
// 1. Google Apps Script (https://script.google.com) で新しいプロジェクトを作成
// 2. このコードを貼り付け
// 3. 「デプロイ」→「新しいデプロイ」→「ウェブアプリ」を選択
// 4. 「アクセスできるユーザー」を「全員」に設定してデプロイ
// 5. 表示されるURLをコピーして、ContactSection.tsx の GAS_URL に設定

// 通知先メールアドレス
var NOTIFICATION_EMAIL = "support@node-llc.com";

function doPost(e) {
  try {
    var data = JSON.parse(e.postData.contents);

    var name = data.name || "";
    var nameKana = data.nameKana || "";
    var email = data.email || "";
    var message = data.message || "";

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
      + "送信日時: " + new Date().toLocaleString("ja-JP", { timeZone: "Asia/Tokyo" }) + "\n";

    MailApp.sendEmail(NOTIFICATION_EMAIL, subject, body);

    // スプレッドシートにも記録（任意）
    logToSheet(name, nameKana, email, message);

    return ContentService
      .createTextOutput(JSON.stringify({ result: "success" }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({ result: "error", message: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// スプレッドシートに記録する関数
function logToSheet(name, nameKana, email, message) {
  // 初回実行時にスプレッドシートが自動作成されます
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  if (!ss) {
    ss = SpreadsheetApp.create("node_お問い合わせログ");
    var sheet = ss.getActiveSheet();
    sheet.appendRow(["受信日時", "お名前", "フリガナ", "メールアドレス", "お問い合わせ内容"]);
  }
  var sheet = ss.getActiveSheet();
  sheet.appendRow([
    new Date().toLocaleString("ja-JP", { timeZone: "Asia/Tokyo" }),
    name,
    nameKana,
    email,
    message
  ]);
}

// CORSプリフライトリクエスト対応
function doGet(e) {
  return ContentService
    .createTextOutput(JSON.stringify({ result: "ok" }))
    .setMimeType(ContentService.MimeType.JSON);
}
