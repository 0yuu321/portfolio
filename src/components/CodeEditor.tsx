import { useEffect, useState } from "react";

type Token = { text: string; kind?: string };
const token = (text: string, kind?: string): Token => ({ text, kind });
const lines: Token[][] = [
  [token("const ", "keyword"), token("profile", "variable"), token(" = {")],
  [token("  name", "property"), token(": "), token('"Shuu Honma"', "string"), token(",")],
  [token("  learning", "property"), token(": [")],
  [token("    "), token('"TypeScript"', "string"), token(",")],
  [token("    "), token('"Python"', "string"), token(",")],
  [token("    "), token('"React"', "string"), token(",")],
  [token("  ],")],
  [token("  goal", "property"), token(":")],
  [token("    "), token('"身近な課題を解決する"', "string"), token(" +")],
  [token("    "), token('"Webサービスを作る"', "string"), token(",")],
  [token("};")],
  [],
  [token("export default function ", "keyword"), token("Portfolio", "function"), token("() {")],
  [token("  return ", "keyword"), token("<h1>", "tag"), token("{profile.name}"), token("</h1>", "tag"), token(";")],
  [token("}")],
];

let offset = 0;
const script = lines.map((line) => {
  const start = offset;
  const tokens = line.map((part) => {
    const start = offset;
    offset += part.text.length;
    return { ...part, start, end: offset };
  });
  const end = offset;
  offset += 1;
  return { tokens, start, end };
});
const source = lines.map((line) => line.map((part) => part.text).join("")).join("\n");

export function CodeEditor() {
  const [position, setPosition] = useState(() =>
    window.matchMedia("(prefers-reduced-motion: reduce)").matches ? source.length : 0,
  );

  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const finish = () => {
      if (preference.matches) setPosition(source.length);
    };
    preference.addEventListener("change", finish);
    return () => preference.removeEventListener("change", finish);
  }, []);

  useEffect(() => {
    if (position >= source.length) return;
    const previous = source[position - 1];
    const delay = position === 0 ? 450 : previous === "\n" ? 160 : 24 + (position % 5) * 5;
    const timer = window.setTimeout(() => setPosition((value) => value + 1), delay);
    return () => window.clearTimeout(timer);
  }, [position]);

  const typing = position < source.length;
  return (
    <figure className="code-editor" aria-label="TypeScriptで表現した自己紹介">
      <figcaption className="editor-tabs">
        <span className="editor-file"><span className="editor-file-icon">TSX</span>portfolio.tsx</span>
        <span className="editor-title">PORTFOLIO</span>
      </figcaption>
      <pre className="editor-accessible">{source}</pre>
      <div className="editor-code" aria-hidden="true">
        {script.map((line, lineIndex) => (
          <div className="editor-line" key={lineIndex}>
            <span className="editor-line-number">{lineIndex + 1}</span>
            <span className="editor-line-text">
              {line.tokens.map((part, index) => {
                const visible = Math.max(0, Math.min(part.text.length, position - part.start));
                const caret = typing && position >= part.start && position < part.end;
                return (
                  <span className={part.kind ? `syntax-${part.kind}` : undefined} key={index}>
                    {part.text.slice(0, visible)}
                    {caret && <span className="editor-caret" />}
                    <span className="editor-pending">{part.text.slice(visible)}</span>
                  </span>
                );
              })}
              {typing && position === line.end && <span className="editor-caret" />}
            </span>
          </div>
        ))}
      </div>
      <div className="editor-status" aria-hidden="true">
        <span>main</span>
        <span>TypeScript React <span className="editor-encoding">UTF-8</span></span>
      </div>
    </figure>
  );
}
