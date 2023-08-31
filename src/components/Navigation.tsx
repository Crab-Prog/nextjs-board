import React from 'react';
import Link from 'next/link';

const Navigation = () => {
  return (
    <ul className="flex justify-center gap-8 py-3 bg-amber-100">
        <Link href="/">Créer une question</Link>
        <Link href="/about">A propos</Link>
        <Link href="/contact">Contact</Link>
    </ul>
  );
}
export default Navigation;