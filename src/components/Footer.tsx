import Link from "next/link";

export default function Footer() {
  return (
    <footer className="py-10 border-t border-white/5">
      <div className="w-[90%] mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-white/40">
            copyrights node LLC. All rights reserved.
          </p>
          <Link
            href="/privacy"
            className="text-sm text-white/40 hover:text-white transition-colors"
          >
            プライバシーポリシー
          </Link>
        </div>
      </div>
    </footer>
  );
}
