'use client';

import { useState } from 'react';

export default function ClientOne({ children }: { children: React.ReactNode }) {
  // const [name, setName] = useState('ossam');

  return (
    <div>
      <h2>ClientOne</h2>
      {children}
    </div>
  );
}
