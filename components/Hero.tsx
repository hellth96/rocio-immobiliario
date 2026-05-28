'use client';

import Link from 'next/link';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className="container">
        <div className={styles.content}>
          
          <h1 className={styles.title}>
            Especialista en Pirque
          </h1>
          
          <p className={styles.subtitle}>
            Derechos de agua • Terrenos • Propiedades premium
          </p>
          
          <p className={styles.description}>
            Acompañamiento total en tu proceso de compra o venta.
            Desde la primera visita hasta la escritura.
          </p>

          <div className={styles.cta}>
            <Link href="/propiedades" className="btn">
              Ver Propiedades
            </Link>
            <a 
              href="https://wa.me/56912345678" 
              className="btn btn-secondary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Contactar por WhatsApp
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}