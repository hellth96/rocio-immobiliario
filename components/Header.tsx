'use client';

import Link from 'next/link';
import styles from './Header.module.css';
import Image from 'next/image';


export default function Header() {
  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.wrapper}>
          
          {/* Logo */}
          <Link href="/" className={styles.logo}>
            <Image
              src="/logo-rmm.png"
              alt="RMM Logo"
              width={100}
              height={100}
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
            href="https://wa.me/56995665120?text=Hola Rocío, quiero asesoría inmobiliaria"
            className={styles.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
          >
            💬 WhatsApp
          </a>
        </div>
      </div>
    </header>
  );
}