import { Typography } from "@mui/material";
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";
import { Document } from "@contentful/rich-text-types";

export default function RichText({ content }: { content: { json: Document } }) {
  const innerHtml = documentToHtmlString(content.json);
  return (
    <>
      <div className="rich-text" dangerouslySetInnerHTML={{ __html: innerHtml }}></div>
    </>
  );
}
