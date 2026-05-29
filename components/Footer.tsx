'use client';

import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.grid}>
          
          <div className={styles.column}>
            <h4>Rocío Matamala</h4>
            <p>Especialista en Pirque</p>
            <p className={styles.small}>Derechos de agua • Terrenos • Propiedades</p>
          </div>

          <div className={styles.column}>
            <h4>Links rápidos</h4>
            <ul>
              <li><Link href="/">Inicio</Link></li>
              <li><Link href="/propiedades">Propiedades</Link></li>
              <li><Link href="/servicios">Servicios</Link></li>
              <li><Link href="/contacto">Contacto</Link></li>
            </ul>
          </div>

          <div className={styles.column}>
            <h4>Contacto</h4>
            <p>
              <a href="tel:+56995665120">📱 +56 9 9566 5120</a>
            </p>
            <p>
              <a href="mailto:rocio@rocioimmobiliario.cl">📧 rocio@rocioimmobiliario.cl</a>
            </p>
            <p className={styles.small}>📍 Pirque, Santiago</p>
          </div>

          <div className={styles.column}>
            <h4>Sígueme</h4>
            <ul>
              <li>
                <a href="https://instagram.com/rocioimmobiliario" target="_blank" rel="noopener noreferrer">
                  Instagram
                </a>
              </li>
              <li>
                <a href="https://wa.me/56995665120" target="_blank" rel="noopener noreferrer">
                  WhatsApp
                </a>
              </li>
              <li>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                  Facebook
                </a>
              </li>
            </ul>
          </div>

        </div>

        <div className={styles.bottom}>
          <p>&copy; {currentYear} Rocío Matamala. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}