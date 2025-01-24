import * as React from "react";
import rehypeShiki from '@shikijs/rehype'
import rehypeStringify from 'rehype-stringify'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import { unified } from 'unified'
import { transformerCopyButton } from '@rehype-pretty/transformers';

export async function Code({ code }: { code: string }) {
  const highlightedCode = await highlightCode(code);
  return (
    <section
      dangerouslySetInnerHTML={{
        __html: highlightedCode,
      }}
    />
  );
}

async function highlightCode(code: string) {
  const file = await unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(rehypeShiki, {
      theme: 'catppuccin-frappe',
      transformers: [
        transformerCopyButton({
          visibility: 'always',
          feedbackDuration: 3_000,
        }),
      ],
    })
    .use(rehypeStringify)
    .process(code);

  return String(file);
}
