
import React, { useState } from 'react';

interface PromptCardProps {
  text: string;
}

const PromptCard: React.FC<PromptCardProps> = ({ text }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text.replace(/\n/g, ' '));
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  return (
    <div className="relative mb-8">
      <div className="relative flex min-h-[140px] rounded-xl border-2 border-zinc-900 dark:border-zinc-100 bg-[#F6F0D7] dark:bg-zinc-900 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] dark:shadow-[6px_6px_0px_0px_rgba(255,255,255,1)] overflow-hidden">
        {/* Text Container */}
        <div className="flex-1 p-6 md:p-8 overflow-hidden">
          <pre className="text-zinc-900 dark:text-zinc-100 font-mono text-base md:text-lg font-bold leading-relaxed whitespace-pre-wrap break-words">
            {text}
          </pre>
        </div>
        
        {/* Prominent Copy Button */}
        <button
          onClick={handleCopy}
          className={`shrink-0 w-28 md:w-36 flex flex-col items-center justify-center transition-all duration-200 border-l-2 border-zinc-900 dark:border-zinc-100 
            ${copied 
              ? 'bg-[#C5D89D] text-zinc-900' 
              : 'bg-[#9CAB84] hover:bg-[#89986D] text-zinc-900 font-black'
            }`}
        >
          {copied ? (
            <div className="flex flex-col items-center animate-in fade-in zoom-in duration-200">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-sm font-black uppercase tracking-widest">
                Copied!
              </span>
            </div>
          ) : (
            <div className="flex flex-col items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" />
              </svg>
              <span className="text-sm font-black uppercase tracking-widest">
                Copy
              </span>
            </div>
          )}
        </button>
      </div>
    </div>
  );
};

export default PromptCard;
