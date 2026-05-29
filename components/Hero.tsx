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
            Compra • Venta • Asesoría de propiedades
          </p>
          
          <p className={styles.description}>
            Rocío Matamala es especialista en compra y venta de propiedades en zonas rurales.
            Con expertise en derechos de agua y terrenos rurales de alto valor.
            <br/><br/>
            Acompañamiento total en tu proceso:
            desde la primera visita hasta la firma de la escritura y traspaso de la propiedad.
          </p>

          <div className={styles.cta}>
            <Link href="/propiedades" className="btn">
              Ver 20+ Propiedades Disponibles
            </Link>
            <a 
              href="https://wa.me/56995665120?text=Hola Rocío, encontré tu página web y me gustaría hacer una consulta."
              className="btn btn-secondary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Hablar por WhatsApp
            </a>
          </div>

          <p className={styles.social}>
            Sígueme en <a href="https://instagram.com/rmm.propiedades" target="_blank">Instagram</a>
          </p>
        </div>
      </div>
    </section>
  );
}