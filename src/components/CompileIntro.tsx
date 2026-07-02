import React from 'react';
import './CompileIntro.css';

interface CompileIntroProps {
  progress: number; // Value from 0 to 1 indicating scroll progress
}

export const CompileIntro: React.FC<CompileIntroProps> = ({ progress }) => {
  // Map progress to terminal lines visibility
  const line1Visible = progress >= 0.1;
  const line2Visible = progress >= 0.25;
  const line3Visible = progress >= 0.4;
  const line4Visible = progress >= 0.55;
  const line5Visible = progress >= 0.7;

  // Map progress to scroll prompt opacity
  const promptOpacity = progress < 0.2 ? 1 - progress / 0.2 : 0;

  // Calculate container scale & opacity for the exit transition
  const opacity = progress >= 0.82 ? Math.max(0, 1 - (progress - 0.82) / 0.15) : 1;
  const scale = progress >= 0.82 ? Math.max(0.95, 1 - (progress - 0.82) * 0.28) : 1;
  const isHidden = progress >= 0.97;

  if (isHidden) return null;

  return (
    <div 
      className="compile-intro" 
      style={{ 
        opacity, 
        transform: `scale(${scale})`,
        pointerEvents: opacity === 0 ? 'none' : 'auto'
      }}
    >
      <div className="ide-window">
        {/* Title Bar */}
        <div className="ide-titlebar">
          <div className="ide-dots">
            <span className="ide-dot ide-dot-red" />
            <span className="ide-dot ide-dot-yellow" />
            <span className="ide-dot ide-dot-green" />
          </div>
          <span className="ide-title">antigravity@portfolio: ~/projects/portfolio</span>
        </div>

        {/* Workspace */}
        <div className="ide-workspace">
          {/* Sidebar */}
          <aside className="ide-sidebar">
            <div className="sidebar-title">Explorer</div>
            <div className="file-tree">
              <div className="tree-item">
                <span className="tree-icon">📁</span>
                <span>app</span>
              </div>
              <div className="tree-item active indent-1">
                <span className="tree-icon">📄</span>
                <span>page.tsx</span>
              </div>
              <div className="tree-item indent-1">
                <span className="tree-icon">📄</span>
                <span>layout.tsx</span>
              </div>
              <div className="tree-item">
                <span className="tree-icon">📁</span>
                <span>components</span>
              </div>
              <div className="tree-item indent-1">
                <span className="tree-icon">📄</span>
                <span>Hero.tsx</span>
              </div>
              <div className="tree-item indent-1">
                <span className="tree-icon">📄</span>
                <span>Stack.tsx</span>
              </div>
              <div className="tree-item indent-1">
                <span className="tree-icon">📄</span>
                <span>CTA.tsx</span>
              </div>
              <div className="tree-item">
                <span className="tree-icon">📁</span>
                <span>lib</span>
              </div>
              <div className="tree-item indent-1">
                <span className="tree-icon">📄</span>
                <span>seo.ts</span>
              </div>
            </div>
          </aside>

          {/* Editor Container */}
          <div className="ide-editor-container">
            {/* Tab bar */}
            <div style={{ display: 'flex', height: '35px', backgroundColor: '#080E20', borderBottom: '1px solid var(--border-subtle)' }}>
              <div className="ide-tab">page.tsx</div>
            </div>

            {/* Code editor */}
            <div className="ide-editor">
              <div className="line-numbers">
                {Array.from({ length: 14 }).map((_, i) => (
                  <span key={i}>{i + 1}</span>
                ))}
              </div>
              <div className="code-content">
                <div>
                  <span className="code-keyword">import</span> <span className="code-tag">{"{ Hero }"}</span> <span className="code-keyword">from</span> <span className="code-string">"./components/Hero"</span>;
                </div>
                <div>
                  <span className="code-keyword">import</span> <span className="code-tag">{"{ TechStack }"}</span> <span className="code-keyword">from</span> <span className="code-string">"./components/TechStack"</span>;
                </div>
                <div>
                  <span className="code-keyword">import</span> <span className="code-tag">{"{ SelectedWork }"}</span> <span className="code-keyword">from</span> <span className="code-string">"./components/SelectedWork"</span>;
                </div>
                <div />
                <div>
                  <span className="code-keyword">export default function</span> <span className="code-type">Page</span>() {"{"}
                </div>
                <div>{"  "}<span className="code-keyword">return</span> (</div>
                <div>{"    "}<span className="code-tag">&lt;</span><span className="code-keyword">main</span> <span className="code-type">className</span>=<span className="code-string">"container"</span><span className="code-tag">&gt;</span></div>
                <div>
                  {"      "}<span className="code-tag">&lt;</span><span className="code-type">Hero</span>
                </div>
                <div>
                  {"        "}<span className="code-type">name</span>=<span className="code-string">"[PLACEHOLDER]"</span>
                </div>
                <div>
                  {"        "}<span className="code-type">role</span>=<span className="code-string">"Developer"</span>
                </div>
                <div>{"      "}<span className="code-tag">/&gt;</span></div>
                <div>{"      "}<span className="code-tag">&lt;</span><span className="code-type">TechStack</span> <span className="code-tag">/&gt;</span></div>
                <div>{"      "}<span className="code-tag">&lt;</span><span className="code-type">SelectedWork</span> <span className="code-tag">/&gt;</span></div>
                <div>{"    "}<span className="code-tag">&lt;/</span><span className="code-keyword">main</span><span className="code-tag">&gt;</span></div>
                <div>{"  "});</div>
                <div>{"}"}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Terminal */}
        <div className="ide-terminal">
          <div className="terminal-title">
            <span>Terminal</span>
            <span style={{ opacity: 0.3 }}>|</span>
            <span>node</span>
          </div>
          
          <div className="terminal-line visible">
            <span style={{ color: 'var(--accent)' }}>$</span>
            <span>{line1Visible ? 'npm run dev' : ''}{!line1Visible && <span className="terminal-cursor" />}</span>
          </div>

          {line1Visible && (
            <div className={`terminal-line ${line2Visible ? 'visible' : ''}`}>
              <span style={{ color: 'var(--text-muted)' }}>▲</span>
              <span>Next.js 15 · Turbopack</span>
            </div>
          )}

          {line2Visible && (
            <div className={`terminal-line ${line3Visible ? 'visible' : ''}`}>
              <span style={{ color: '#22c55e' }}>✓</span>
              <span>ready on http://localhost:3000</span>
            </div>
          )}

          {line3Visible && (
            <div className={`terminal-line ${line4Visible ? 'visible' : ''}`}>
              <span style={{ color: 'var(--text-muted)' }}>○</span>
              <span>compiling /app/page.tsx ...</span>
            </div>
          )}

          {line4Visible && (
            <div className={`terminal-line success ${line5Visible ? 'visible' : ''}`}>
              <span>✓ compiled successfully in 120ms</span>
            </div>
          )}
        </div>
      </div>

      {/* Scroll Prompt */}
      {promptOpacity > 0 && (
        <div className="scroll-prompt" style={{ opacity: promptOpacity }}>
          <span>SCROLL TO COMPILE</span>
          <span className="scroll-prompt-arrow">↓</span>
        </div>
      )}
    </div>
  );
};
