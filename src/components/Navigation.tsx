'use client'
import React from 'react';
import Link from 'next/link';
import {
  useSidebarContext,
} from '~/app/context/Sidebar';

const Navigation = () => {
  const { isOpen, setIsOpen } = useSidebarContext();

  return (
    <ul className={`flex justify-center gap-8 py-3 ${isOpen ? 'bg-amber-100' : 'bg-green-100'}`}>
      <Link href="/">Créer une question</Link>
      <Link href="/about">A propos</Link>
      <Link href="/contact">Contact</Link>
      <button onClick={() => setIsOpen(!isOpen)}>Changer la couleur</button>
    </ul>
  );
}
export default Navigation;