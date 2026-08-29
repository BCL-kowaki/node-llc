"use client";

import { useState, type FormEvent } from "react";
import styles from "../test.module.css";

// 本番トップのお問い合わせと同じGAS(Google Apps Script)エンドポイントへ送信する
const GAS_URL = process.env.NEXT_PUBLIC_GAS_URL || "";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    nameKana: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setStatus("sending");
    try {
      await fetch(GAS_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "text/plain" },
        body: JSON.stringify(formData),
      });
      // no-corsのためレスポンスは読めないが、例外がなければ送信成功とみなす
      setStatus("sent");
      setFormData({ name: "", nameKana: "", email: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  return (
    <form className={styles.contactForm} onSubmit={handleSubmit}>
      <label className={styles.formField}>
        <span>
          お名前<b>必須</b>
        </span>
        <input
          type="text"
          name="name"
          autoComplete="name"
          required
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
      </label>
      <label className={styles.formField}>
        <span>ふりがな</span>
        <input
          type="text"
          name="nameKana"
          value={formData.nameKana}
          onChange={(e) => setFormData({ ...formData, nameKana: e.target.value })}
        />
      </label>
      <label className={styles.formField}>
        <span>
          メールアドレス<b>必須</b>
        </span>
        <input
          type="email"
          name="email"
          autoComplete="email"
          required
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
      </label>
      <label className={styles.formField}>
        <span>
          お問い合わせ内容<b>必須</b>
        </span>
        <textarea
          name="message"
          required
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
        />
      </label>

      <button
        type="submit"
        className={`${styles.contactButton} ${styles.formSubmit}`}
        disabled={status === "sending"}
      >
        {status === "sending" ? "送信中…" : "この内容で送信する"}
        <span aria-hidden="true">↗</span>
      </button>

      {status === "sent" && (
        <p className={styles.formStatus} role="status">
          送信しました。3営業日以内にご返信いたします。
        </p>
      )}
      {status === "error" && (
        <p className={`${styles.formStatus} ${styles.formStatusError}`} role="alert">
          送信に失敗しました。時間をおいて再度お試しください。
        </p>
      )}
    </form>
  );
}
