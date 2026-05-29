export default function Diferenciadores() {
  return (
    <section className={styles.section}>
      <div className="container">
        <h2>¿Por qué elegir a Rocío?</h2>
        
        <div className={styles.grid}>
          <div className={styles.card}>
            <span className={styles.icon}>🎯</span>
            <h3>Especialista en Pirque</h3>
            <p>Conocimiento profundo del sector, tendencias de precios y potencial de inversión.</p>
          </div>

          <div className={styles.card}>
            <span className={styles.icon}>💧</span>
            <h3>Experta en Derechos de Agua</h3>
            <p>Especialización única en propiedades con derechos de agua regularizados y documentación completa.</p>
          </div>

          <div className={styles.card}>
            <span className={styles.icon}>🤝</span>
            <h3>Acompañamiento Total</h3>
            <p>Desde la búsqueda inicial hasta la firma notarial. Rocío te acompaña en cada etapa.</p>
          </div>

          <div className={styles.card}>
            <span className={styles.icon}>⚡</span>
            <h3>Procesos Ágiles</h3>
            <p>Cierres rápidos y eficientes. Tiempo promedio: 45-60 días desde oferta a escritura.</p>
          </div>

          <div className={styles.card}>
            <span className={styles.icon}>📊</span>
            <h3>Análisis de Mercado</h3>
            <p>Evaluaciones profesionales de propiedades, comparables y tendencias locales.</p>
          </div>

          <div className={styles.card}>
            <span className={styles.icon}>🏆</span>
            <h3>Resultados Comprobados</h3>
            <p>Clientes satisfechos y referencias disponibles. Tu confianza es nuestro activo.</p>
          </div>
        </div>
      </div>
    </section>
  );
}