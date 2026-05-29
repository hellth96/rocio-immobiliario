'use client';


import styles from './Diferenciadores.module.css';

export default function Diferenciadores() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>

        {/* HEADER */}
        <div className={styles.header}>
          <h2>¿Por qué elegir a Rocío?</h2>
          <p>
            Especialista inmobiliaria con experiencia probada en Pirque y la Región Metropolitana
          </p>
        </div>

        {/* GRID */}
        <div className={styles.grid}>

          <div className={styles.card}>
            <div className={styles.icon}>📍</div>
            <h3>Especialista en Pirque</h3>
            <p>Conocimiento profundo de sectores, plusvalía y oportunidades reales de inversión.</p>
          </div>

          <div className={styles.card}>
            <div className={styles.icon}>💧</div>
            <h3>Terrenos y derechos de agua</h3>
            <p>Experiencia en parcelas agrícolas y propiedades con documentación compleja.</p>
          </div>

          <div className={styles.card}>
            <div className={styles.icon}>📊</div>
            <h3>Análisis de mercado real</h3>
            <p>Valoraciones basadas en comparables y datos, no en estimaciones subjetivas.</p>
          </div>

          <div className={styles.card}>
            <div className={styles.icon}>🤝</div>
            <h3>Acompañamiento completo</h3>
            <p>Desde la búsqueda hasta la firma en notaría, con seguimiento continuo.</p>
          </div>

          <div className={styles.card}>
            <div className={styles.icon}>⚡</div>
            <h3>Procesos eficientes</h3>
            <p>Gestión ordenada para cerrar operaciones sin fricción ni pérdida de tiempo.</p>
          </div>

          <div className={styles.card}>
            <div className={styles.icon}>🏆</div>
            <h3>Confianza y reputación</h3>
            <p>Relaciones de largo plazo basadas en resultados y transparencia.</p>
          </div>

        </div>

        {/* CTA */}
        <div className={styles.cta}>
          <div>
            <h3>¿Buscas comprar o vender una propiedad?</h3>
            <p>Revisemos tu caso y encuentra oportunidades reales de mercado.</p>
          </div>

          <a
            href="https://wa.me/56995665120?text=Hola Rocío, quiero asesoría inmobiliaria"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.button}
          >
            Hablar por WhatsApp
          </a>
        </div>

      </div>
    </section>
  );
}