'use client';

import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.grid}>
          
          <div className={styles.column}>
            <h4>Rocío Matamala</h4>
            <p>Especialista en Pirque</p>
            <p>Derechos de agua • Terrenos</p>
          </div>

          <div className={styles.column}>
            <h4>Links rápidos</h4>
            <ul>
              <li><a href="/">Inicio</a></li>
              <li><a href="/propiedades">Propiedades</a></li>
              <li><a href="/servicios">Servicios</a></li>
              <li><a href="/contacto">Contacto</a></li>
            </ul>
          </div>

          <div className={styles.column}>
            <h4>Contacto</h4>
            <p>📱 +56 9 XXXX XXXX</p>
            <p>📧 rocio@immobiliario.cl</p>
            <p>🌐 rocioimmobiliario.cl</p>
          </div>

          <div className={styles.column}>
            <h4>Sígueme</h4>
            <ul>
              <li><a href="https://instagram.com/rocioimmobiliario" target="_blank">Instagram</a></li>
              <li><a href="https://wa.me/56912345678" target="_blank">WhatsApp</a></li>
              <li><a href="https://facebook.com" target="_blank">Facebook</a></li>
            </ul>
          </div>

        </div>

        <div className={styles.bottom}>
          <p>&copy; 2026 Rocío Matamala. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}