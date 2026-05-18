/* src/Formatter.jsx */
import Markdown from "react-markdown";

export default function Formatter({ displayText, imageLoading, imageURL, setImageLoading }) {
  return (
    <Markdown
      components={{
        h1: ({ children }) => (
          <>
            <h1 className="font-[family-name:var(--font-display)] text-[clamp(1.8rem,5vw,3rem)] font-bold text-[#1c1612] tracking-[-0.02em] leading-[1.15] mb-6 pb-5 border-b-2 border-[#f2ede4]">
              {children}
            </h1>
            {imageURL && (
              <div className="my-6 rounded-[14px] overflow-hidden border border-[#e0d8ce]">
                {imageLoading && <div className="w-full aspect-[16/7] animate-shimmer" />}
                <img
                  src={imageURL}
                  alt="Recipe"
                  className="w-full max-w-full block object-cover"
                  style={{ display: imageLoading ? "none" : "block" }}
                  onLoad={() => setImageLoading(false)}
                />
              </div>
            )}
          </>
        ),
        h2: ({ children }) => (
          <h2 className="font-[family-name:var(--font-display)] text-[clamp(1.2rem,3vw,1.6rem)] font-semibold text-[#c4714a] tracking-[-0.01em] mt-9 mb-3.5">
            {children}
          </h2>
        ),
        h3: ({ children }) => <h3 className="font-[family-name:var(--font-display)] text-lg font-semibold text-[#4a3f35] mt-6 mb-2.5">{children}</h3>,
        p: ({ children }) => <p className="text-[.95rem] text-[#4a3f35] leading-[1.8] mb-4">{children}</p>,
        ul: ({ children }) => <ul className="list-none p-0 mb-5 flex flex-col gap-2">{children}</ul>,
        ol: ({ children }) => <ol className="pl-5 mb-5 flex flex-col gap-2.5 list-decimal list-inside">{children}</ol>,
        li: ({ children }) => (
          <li className="text-[.93rem] text-[#4a3f35] leading-[1.7] pl-1.5 before:content-['—'] before:text-[#c4714a] before:font-semibold before:mr-2.5">
            {children}
          </li>
        ),
        em: ({ children }) => <em className="italic text-[#8c7d72] text-sm block mb-2">{children}</em>,
        strong: ({ children }) => <strong className="font-semibold text-[#9e4f30]">{children}</strong>,
        code: ({ children }) => (
          <code className="bg-[#f2ede4] border border-[#e0d8ce] text-[#9e4f30] px-2 py-0.5 rounded text-[.84rem] font-mono">{children}</code>
        ),
        hr: () => <hr className="border-none border-t border-[#e0d8ce] my-8" />,
      }}
    >
      {displayText}
    </Markdown>
  );
}
