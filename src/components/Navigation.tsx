'use client'
import React, { useContext } from 'react';
import Link from 'next/link';
import {
  useSidebarContext,
} from '~/app/context/Sidebar';

const Navigation = () => {
  const { isOpen} = useSidebarContext();
  console.log(isOpen)
  return (
    <ul className="flex justify-center gap-8 py-3 bg-amber-100">
        <Link href="/">Créer une question</Link>
        <Link href="/about">A propos</Link>
        <Link href="/contact">Contact</Link>
      {isOpen ? <Link href="">Context isOpen = true</Link>: <Link href="">Context isOpen = false</Link>}
    </ul>
  );
}
export default Navigation;