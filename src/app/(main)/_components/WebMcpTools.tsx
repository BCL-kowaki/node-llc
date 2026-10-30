"use client";

import { useEffect } from "react";

type ServiceSummary = {
  slug: string;
  title: string;
  summary: string;
};

type WebMcpTool = {
  name: string;
  description: string;
  inputSchema: Record<string, unknown>;
  execute: () => Promise<{ content: Array<{ type: "text"; text: string }> }>;
};

type ModelContext = {
  registerTool: (tool: WebMcpTool, options?: { signal?: AbortSignal }) => Promise<void> | void;
};

// WebMCP: ブラウザ上のAIエージェントへサイトの機能を公開する。
// 問い合わせの送信は公開せず、案内までに留める(送信は利用者本人が行う)
export default function WebMcpTools({ services }: { services: ServiceSummary[] }) {
  useEffect(() => {
    const modelContext =
      (document as Document & { modelContext?: ModelContext }).modelContext ??
      (navigator as Navigator & { modelContext?: ModelContext }).modelContext;
    if (!modelContext) return;

    const controller = new AbortController();
    const tools: WebMcpTool[] = [
      {
        name: "list_services",
        description: "合同会社nodeが提供するサービスの一覧を、概要とURL付きで返します。",
        inputSchema: { type: "object", properties: {} },
        execute: async () => ({
          content: [
            {
              type: "text",
              text: JSON.stringify(
                services.map(({ slug, title, summary }) => ({
                  title,
                  summary,
                  url: `${window.location.origin}/services/${slug}`,
                })),
              ),
            },
          ],
        }),
      },
      {
        name: "open_contact_form",
        description:
          "合同会社nodeのお問い合わせページを開きます。入力内容の送信は利用者本人が行います。",
        inputSchema: { type: "object", properties: {} },
        execute: async () => {
          window.location.assign("/contact");
          return { content: [{ type: "text", text: "お問い合わせページを開きました。" }] };
        },
      },
    ];

    for (const tool of tools) {
      // 未対応ブラウザや再登録時のエラーでページ表示を妨げない
      Promise.resolve()
        .then(() => modelContext.registerTool(tool, { signal: controller.signal }))
        .catch(() => {});
    }

    return () => controller.abort();
  }, [services]);

  return null;
}
