"use client";

import { useState, FormEvent } from "react";
import Link from "next/link";
import FadeUpSection from "./FadeUpSection";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    nameKana: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // フォーム送信処理をここに実装
  };

  return (
    <FadeUpSection id="contact" className="min-h-screen relative flex flex-col justify-center py-24 md:py-32">
      <div className="w-[90%] max-w-6xl mx-auto flex-1 flex flex-col justify-center">
        <div className="mb-12">
          <h2
            className="text-sm tracking-[0.3em] text-white/50 uppercase mb-4"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            CONTACT
          </h2>
          <div className="w-12 h-0.5 bg-gradient-to-r from-red-500 to-purple-500 mb-12" />
        </div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          {/* Left: Message */}
          <div className="lg:w-2/5">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-relaxed mb-6">
              まずは、ご相談から。
            </h3>
            <div className="space-y-4 text-base md:text-lg text-white/75 leading-relaxed">
              <p>
                具体的なプランがなくても構いません。
                「AIで何かできないか」という段階から、お気軽にお声がけください。
              </p>
              <p className="text-white/50 text-sm">
                ※ 24時間以内にご返信いたします
              </p>
            </div>
          </div>

          {/* Right: Form */}
          <div className="lg:w-3/5">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-white/50 text-sm tracking-wider mb-2">
                  お名前
                </label>
                <input
                  type="text"
                  placeholder="山田 太郎"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 px-5 py-3.5 text-white placeholder-white/30 focus:outline-none focus:border-purple-500/50 focus:bg-white/10 transition-all duration-300"
                />
              </div>

              <div>
                <label className="block text-white/50 text-sm tracking-wider mb-2">
                  フリガナ
                </label>
                <input
                  type="text"
                  placeholder="ヤマダ タロウ"
                  value={formData.nameKana}
                  onChange={(e) => setFormData({ ...formData, nameKana: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 px-5 py-3.5 text-white placeholder-white/30 focus:outline-none focus:border-purple-500/50 focus:bg-white/10 transition-all duration-300"
                />
              </div>

              <div>
                <label className="block text-white/50 text-sm tracking-wider mb-2">
                  メールアドレス
                </label>
                <input
                  type="email"
                  placeholder="example@gmail.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 px-5 py-3.5 text-white placeholder-white/30 focus:outline-none focus:border-purple-500/50 focus:bg-white/10 transition-all duration-300"
                />
              </div>

              <div>
                <label className="block text-white/50 text-sm tracking-wider mb-2">
                  お問い合わせ内容
                </label>
                <textarea
                  placeholder="お問い合わせ内容"
                  rows={6}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 px-5 py-3.5 text-white placeholder-white/30 focus:outline-none focus:border-purple-500/50 focus:bg-white/10 transition-all duration-300 resize-none"
                />
              </div>

              <button
                type="submit"
                className="btn-gradient px-12 py-4 text-white font-bold text-sm tracking-wider rounded-lg"
              >
                送信
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <footer className="w-[90%] mx-auto pt-12 pb-6 border-t border-white/5">
        <div className="flex flex-col md:flex-row-reverse items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <Link
              href="/privacy"
              className="text-xs text-white/30 hover:text-white/60 transition-colors"
            >
              プライバシーポリシー
            </Link>
            <span className="text-white/15">|</span>
            <Link
              href="/tokushoho"
              className="text-xs text-white/30 hover:text-white/60 transition-colors"
            >
              特定商取引法に基づく表記
            </Link>
          </div>
          <p className="text-xs text-white/30">
            &copy; {new Date().getFullYear()} node LLC. All rights reserved.
          </p>
        </div>
      </footer>
    </FadeUpSection>
  );
}
