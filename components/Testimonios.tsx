'use client';

import styles from './Testimonios.module.css';

export default function Testimonios() {
  const testimonios = [
    {
      nombre: 'Juan García López',
      rol: 'Comprador - Casa Familiar',
      texto: 'Rocío nos acompañó en todo el proceso. No solo encontramos la casa perfecta, sino que cuidó nuestros intereses en cada etapa. Muy profesional y cercana. ¡La recomendamos!',
      rating: 5,
      imagen: '👨‍💼',
    },
    {
      nombre: 'María Contreras Silva',
      rol: 'Inversora - Departamento',
      texto: 'Excelente gestión. El análisis de rentabilidad que me presentó fue muy completo. En 40 días cerré la compra. Ahora estoy arrendando y ganando 5.5% anual. Gracias Rocío.',
      rating: 5,
      imagen: '👩‍💼',
    },
    {
      nombre: 'Carlos Mendez',
      rol: 'Vendedor - Terreno',
      texto: 'Vendí mi parcela de 2.5 hectáreas en 2 meses. Rocío hizo un excelente trabajo destacando los derechos de agua. Obtuve mejor precio del esperado.',
      rating: 5,
      imagen: '👨‍💼',
    },
    {
      nombre: 'Sandra López González',
      rol: 'Inversora Profesional',
      texto: 'He trabajado con varias corredoras. Rocío destaca por su especialización en derechos de agua y su acompañamiento detallado. Es diferente. Es de confianza.',
      rating: 5,
      imagen: '👩‍💼',
    },
  ];

  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <h2>Testimonios de Clientes</h2>
          <p>Lo que dicen quienes han confiado en Rocío</p>
        </div>

        <div className={styles.grid}>
          {testimonios.map((test, idx) => (
            <div key={idx} className={styles.card}>
              <div className={styles.rating}>
                {'⭐'.repeat(test.rating)}
              </div>

              <p className={styles.texto}>"{test.texto}"</p>

              <div className={styles.footer}>
                <span className={styles.imagen}>{test.imagen}</span>
                <div className={styles.info}>
                  <p className={styles.nombre}>{test.nombre}</p>
                  <p className={styles.rol}>{test.rol}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}