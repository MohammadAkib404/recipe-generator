import Markdown from "react-markdown"

export default function Formatter({displayText, imageLoading, imageURL, setImageLoading}) {
    return (
        <>
            <Markdown
                components={{
                    h1: ({ children }) => (
                        <>
                            <h1 className="text-xl text-center md:text-3xl lg:text-5xl font-bold mb-6 text-orange-400 border-b-2 border-orange-400 pb-3">
                                {children}
                            </h1>
                            {imageURL && (
                                <>
                                    {imageLoading && (
                                        <div className='rounded-3xl bg-gradient-to-br from-gray-600 via-gray-500 to-gray-700 animate-pulse w-full aspect-square'></div>
                                    )}

                                    <div className="my-6">
                                        <img
                                            src={imageURL}
                                            alt="Recipe"
                                            className={`${imageLoading ? 'hidden' : 'block'} object-cover rounded-3xl`}
                                            style={{
                                                width: '720px',
                                                maxWidth: '100%',
                                                opacity: imageLoading ? 0 : 1,
                                                transition: 'opacity 0.5s ease',
                                            }}
                                            onLoad={() => setImageLoading(false)}
                                        />
                                    </div>
                                </>
                            )}
                        </>
                    ),
                    h2: ({ children }) => <h2 className="text-2xl md:text-3xl font-semibold mb-4 mt-8 text-orange-300">{children}</h2>,
                    h3: ({ children }) => <h3 className="text-xl md:text-2xl font-semibold mb-3 mt-6 text-orange-200">{children}</h3>,
                    p: ({ children }) => <p className="mb-4 text-slate-300 font-semibold leading-relaxed text-base md:text-lg">{children}</p>,
                    ul: ({ children }) => <ul className="mb-6 space-y-2 ml-4">{children}</ul>,
                    ol: ({ children }) => <ol className="mb-6 space-y-3 ml-4 list-decimal list-inside">{children}</ol>,
                    li: ({ children }) => <li className="text-slate-300 leading-relaxed mb-2">{children}</li>,
                    em: ({ children }) => <em className="text-slate-300 italic text-sm block mb-2">{children}</em>,
                    strong: ({ children }) => <strong className="text-orange-300 font-semibold">{children}</strong>,
                    code: ({ children }) => <code className="bg-slate-700 text-orange-300 px-2 py-1 rounded text-sm font-mono">{children}</code>,
                    hr: () => <hr className="border-slate-600 my-8" />
                }}
            >
                {displayText}
            </Markdown>
        </>
    )
}