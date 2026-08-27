const projects = [
  { name: 'Nexum Graph', class: 'Developer tool', accent: '#60a5fa', copy: 'Semantic diff, intent coordination, and merge safety for multi-agent software work.', href: 'https://github.com/NexumCorpus/Nexum-Graph', action: 'Install the gate' },
  { name: 'Atlas Station', class: 'Operator surface', accent: '#22d3ee', copy: 'A visible desktop organism for tools, memory, autonomy, receipts, and model execution.', href: 'https://github.com/NexumCorpus/atlas-station', action: 'Enter the station' },
  { name: 'Station', class: 'Continuity spine', accent: '#34d399', copy: 'Loss-aware context, exact recovery, wake digests, cursors, and append-only evidence.', href: 'https://github.com/NexumCorpus/station', action: 'Inspect the spine' },
  { name: 'Director 2', class: 'Command system', accent: '#fbbf24', copy: 'Event-sourced orchestration with independent grading and recursive discovery.', href: 'https://github.com/NexumCorpus/director2', action: 'Run the command loop' },
  { name: 'Boundary', class: 'Research program', accent: '#f472b6', copy: 'Preregistered experiments on capability, performance, and measurement pressure.', href: 'https://github.com/NexumCorpus/boundary', action: 'Read the program' },
  { name: 'OnPar', class: 'Operating product', accent: '#fb923c', copy: 'Calm inventory, purchasing, recipe costing, and waste control for independent restaurants.', href: 'https://github.com/NexumCorpus/OnParV2', action: 'See the product' },
  { name: 'Demiurge', class: 'RSI experiment', accent: '#fb7185', copy: 'Recursive self-improvement whose proposed organs remain inert until independently certified.', href: 'https://github.com/NexumCorpus/Demiurge', action: 'Open the case record' },
  { name: 'Emergent Geometry', class: 'Scientific instrument', accent: '#818cf8', copy: 'Graph curvature as an instrument for integration, fragmentation, and phase change.', href: 'https://github.com/NexumCorpus/emergent-geometry-engine', action: 'Measure the geometry' },
  { name: 'Recursive Discovery', class: 'Research engine', accent: '#a3e635', copy: 'A builder–adversary–synthesizer loop that publishes overfit instead of hiding it.', href: 'https://github.com/NexumCorpus/recursive-discovery-engine', action: 'Examine the null' },
];

const rules = [
  ['01', 'Freeze the claim', 'State the prediction, boundary, and failure condition before the result exists.'],
  ['02', 'Separate maker from judge', 'Generators propose. Independent code, holdouts, and graders decide what survives.'],
  ['03', 'Preserve the rejection', 'Nulls, overfit, and failed interventions remain part of the public instrument record.'],
];

export default function Home() {
  return (
    <main>
      <nav className="nav shell" aria-label="Primary navigation">
        <a className="wordmark" href="#top"><span className="mark">N</span><span>NEXUM CORPUS</span></a>
        <div className="navLinks"><a href="#estate">Estate</a><a href="#method">Method</a><a href="https://github.com/NexumCorpus">GitHub ↗</a></div>
      </nav>

      <section className="hero shell" id="top">
        <div className="heroCopy">
          <p className="eyebrow"><span className="pulse" /> INDEPENDENT MACHINE-WORK ESTATE</p>
          <h1>Machines that can<br /><em>survive inspection.</em></h1>
          <p className="lede">Agent infrastructure, research instruments, developer tools, and products organized around one refusal: eloquence is not evidence.</p>
          <div className="actions">
            <a className="primary" href="https://github.com/NexumCorpus/Nexum-Graph">Start with Nexum Graph <span>↗</span></a>
            <a className="secondary" href="#estate">Survey the estate ↓</a>
          </div>
        </div>
        <div className="instrument" aria-label="A visual instrument representing claims passing through independent evidence gates">
          <div className="orbit orbitOne"><i /></div><div className="orbit orbitTwo"><i /></div><div className="orbit orbitThree"><i /></div>
          <div className="core"><span>CLAIM</span><b>≠</b><span>PROOF</span></div>
          <p>INSTRUMENT 00 / EVIDENCE LATTICE</p>
        </div>
      </section>

      <section className="manifesto"><div className="shell manifestoInner"><p className="index">WHY THIS EXISTS / 001</p><p className="statement">Most AI systems optimize the answer.<br />We build the machinery that can <em>reject it.</em></p></div></section>

      <section className="section shell" id="estate">
        <div className="sectionHead"><div><p className="eyebrow">THE ESTATE / NINE ACTIVE INSTRUMENTS</p><h2>One corpus.<br />Many organs.</h2></div><p>Each system stands alone. Together they form a stack for commanding work, preserving exact context, testing discoveries, and publishing only what the evidence permits.</p></div>
        <div className="projectGrid">
          {projects.map((project, index) => (
            <a className="project" href={project.href} key={project.name} style={{ '--accent': project.accent } as React.CSSProperties}>
              <div className="projectMeta"><span>{String(index + 1).padStart(2, '0')}</span><span>{project.class}</span></div>
              <div className="projectGlyph"><span /><span /><i /></div>
              <h3>{project.name}</h3><p>{project.copy}</p><div className="projectAction">{project.action} <span>↗</span></div>
            </a>
          ))}
        </div>
      </section>

      <section className="method" id="method"><div className="shell methodInner">
        <div className="sectionHead light"><div><p className="eyebrow">OPERATING CONSTITUTION</p><h2>Proof before<br />persuasion.</h2></div><p>The aesthetic is severe because the method is. Every durable claim needs provenance, a falsifier, and a route another process can walk.</p></div>
        <div className="rules">{rules.map(([n, title, copy]) => <article key={n}><span>{n}</span><h3>{title}</h3><p>{copy}</p></article>)}</div>
        <div className="terminal"><div className="terminalBar"><span /><span /><span /><b>release.receipt</b></div><pre><code><i>$</i> nex release verify{`\n`}✓ source state pinned{`\n`}✓ independent gates passed{`\n`}✓ claim ceiling bound{`\n`}✓ remote artifact exact{`\n\n`}<strong>VERDICT: ADMISSIBLE</strong></code></pre></div>
      </div></section>

      <section className="closing shell"><p className="eyebrow">THE LONG EXPERIMENT</p><h2>Build stranger things.<br /><em>Leave better evidence.</em></h2><p>Nexum Corpus is an ongoing attempt to discover what becomes possible when autonomous systems inherit memory, tools, adversaries, and the obligation to show their work.</p><div className="actions"><a className="primary" href="https://github.com/NexumCorpus">Explore on GitHub <span>↗</span></a><a className="secondary" href="https://github.com/NexumCorpus/NexumCorpus/blob/master/BRAND.md">Read the field manual ↗</a></div></section>

      <footer className="shell"><div className="wordmark"><span className="mark">N</span><span>NEXUM CORPUS</span></div><p>INSTRUMENTS FOR VERIFIABLE MACHINE WORK</p><p>2026 / PUBLIC RECORD</p></footer>
    </main>
  );
}
