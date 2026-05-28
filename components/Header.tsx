'use client';

import Link from 'next/link';
import Image from 'next/image';
import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.wrapper}>
          
          {/* Logo */}
          <Link href="/" className={styles.logo}>
  <Image
    src="/logo-rmmV2.png"
    alt="RMM Propiedades"
    width={180}
    height={80}
    priority
    className={styles.logoImage}
  />
</Link>

          {/* Navegación */}
          <nav className={styles.nav}>
            <Link href="/">Inicio</Link>
            <Link href="/propiedades">Propiedades</Link>
            <Link href="/servicios">Servicios</Link>
            <Link href="/contacto">Contacto</Link>
          </nav>

          {/* WhatsApp CTA */}
          <a 
            href="https://wa.me/56995665120" 
            className="btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            📱 WhatsApp
          </a>
        </div>
      </div>
    </header>
  );
}