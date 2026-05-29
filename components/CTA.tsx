'use client';

import Link from 'next/link';
import styles from './CTA.module.css';

export default function CTA() {
  return (
    <section className={styles.section}>
      <div className={styles.background} />
      
      <div className="container">
        <div className={styles.content}>
          <h2>¿Listo para encontrar tu propiedad?</h2>
          <p>
            Rocío está disponible para brindarte asesoría profesional en compra, 
            venta o inversión inmobiliaria en Pirque.
          </p>

          <div className={styles.buttons}>
            <a 
              href="https://wa.me/56995665120?text=Hola Rocío, quiero asesoría inmobiliaria"
              className={styles.btnPrimary}
              target="_blank"
              rel="noopener noreferrer"
            >
              💬 Hablar por WhatsApp
            </a>
            <Link href="/contacto" className={styles.btnSecondary}>
              Contactar por Email
            </Link>
          </div>

          <p className={styles.extra}>
            Consulta gratuita • Sin compromiso • Respuesta en 24 horas
          </p>
        </div>
      </div>
    </section>
  );
}