
import React, { useState, useEffect } from 'react';
import { CINEMATIC_PROMPTS } from './constants';
import PromptCard from './components/PromptCard';

const App: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <div className={`min-h-screen transition-colors duration-500 ${isDarkMode ? 'bg-zinc-950 text-zinc-100' : 'bg-[#F6F0D7] text-zinc-900'} selection:bg-zinc-900 selection:text-white dark:selection:bg-white dark:selection:text-black`}>
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 backdrop-blur-sm border-b-2 border-zinc-900 dark:border-zinc-100 ${isDarkMode ? 'bg-zinc-950/80' : 'bg-[#F6F0D7]/80'}`}>
        <div className="max-w-4xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="text-xl font-black tracking-tighter uppercase">Vault</span>
          <button 
            onClick={toggleTheme}
            className="text-xs font-black uppercase tracking-widest px-4 py-2 border-2 border-zinc-900 dark:border-zinc-100 rounded hover:bg-zinc-900 hover:text-white dark:hover:bg-zinc-100 dark:hover:text-black transition-all bg-white dark:bg-transparent"
          >
            {isDarkMode ? 'Light' : 'Dark'}
          </button>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-6 pt-32 pb-24">
        {/* Header */}
        <header className="mb-24">
          <h1 className="text-5xl md:text-8xl font-black tracking-tighter mb-4 uppercase leading-[0.9]">
            Cinematic<br />Keywords
          </h1>
          <div className="h-3 w-32 bg-[#9CAB84] border-2 border-zinc-900 dark:border-zinc-100 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]"></div>
        </header>

        {/* Content Blocks */}
        <div className="space-y-32">
          {CINEMATIC_PROMPTS.map((group) => (
            <section key={group.id}>
              <h2 className="text-2xl font-black tracking-tight uppercase mb-10 border-b-4 border-zinc-900 dark:border-zinc-100 inline-block">
                {group.title}
              </h2>
              
              <div className="space-y-8">
                {group.prompts.map((prompt, index) => (
                  <PromptCard key={`${group.id}-${index}`} text={prompt} />
                ))}
              </div>
            </section>
          ))}
        </div>
      </main>

      <footer className="max-w-4xl mx-auto px-6 py-20 border-t-2 border-zinc-900 dark:border-zinc-100">
        <p className="text-sm font-black uppercase tracking-[0.4em] text-center opacity-60">
          Cinematic Prompt Repository
        </p>
      </footer>
    </div>
  );
};

export default App;
