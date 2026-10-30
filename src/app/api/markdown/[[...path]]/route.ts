import { NodeHtmlMarkdown } from "node-html-markdown";
import { NextResponse, type NextRequest } from "next/server";
import { getSitePages } from "@/lib/site-pages";

type RouteContext = {
  params: Promise<{ path?: string[] }>;
};

// 本文に関係しない要素を取り除いてから Markdown に変換する
const NON_CONTENT_ELEMENTS =
  /<(script|style|svg|video|noscript|template|nav|header|footer)\b[\s\S]*?<\/\1>/gi;

function extractContentHtml(html: string) {
  const content = html.match(/<main\b[\s\S]*<\/main>/i) ?? html.match(/<body\b[\s\S]*<\/body>/i);
  return (content?.[0] ?? html).replace(NON_CONTENT_ELEMENTS, "");
}

// Accept: text/markdown のリクエストを next.config.ts の rewrites から受け取り、
// 公開中のHTMLを変換して返す(ページ本文を二重管理しないため)
export async function GET(request: NextRequest, { params }: RouteContext) {
  const { path = [] } = await params;
  const pagePath = `/${path.join("/")}`;

  if (!getSitePages().some((page) => page.path === pagePath)) {
    return new NextResponse("Not Found", { status: 404 });
  }

  const pageResponse = await fetch(new URL(pagePath, request.nextUrl.origin), {
    headers: { Accept: "text/html" },
    cache: "no-store",
  });
  if (!pageResponse.ok) {
    return new NextResponse("Bad Gateway", { status: 502 });
  }

  const html = await pageResponse.text();
  const title = html.match(/<title>([^<]*)<\/title>/i)?.[1];
  const body = NodeHtmlMarkdown.translate(extractContentHtml(html));
  const markdown = title ? `# ${title}\n\n${body}\n` : `${body}\n`;

  return new NextResponse(markdown, {
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
      "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
      Vary: "Accept",
      "X-Robots-Tag": "noindex",
    },
  });
}
