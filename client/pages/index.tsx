import React from 'react';
import Link from 'next/link';

export default function Home() {
  return (
    <div style={{ padding: 20 }}>
      <h1>LLM Comparison Platform</h1>
      <nav>
        <ul>
          <li><Link href="/models">Models</Link></li>
          <li><Link href="/experiments">Experiments</Link></li>
          <li><Link href="/test-cases">Test Cases</Link></li>
          <li><Link href="/compare">Compare Experiments</Link></li>
        </ul>
      </nav>
    </div>
  );
}
