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
            <p>📱 +56 9 9566 5120</p>
            <p>📧 rosio.matamala.m@gmail.com</p>
            <p>🌐 rmmpropiedades.cl</p>
          </div>

        </div>

        <div className={styles.bottom}>
          <p>© RMM propiedades Desde 2021</p>
        </div>
      </div>
    </footer>
  );
}