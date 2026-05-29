'use client';

import styles from './Proceso.module.css';

export default function Proceso() {
  const etapas = [
    {
      numero: 1,
      titulo: 'Consulta Inicial',
      descripción: 'Entendemos qué buscas y evaluamos tu situación.',
      detalles: ['20-30 min', 'Sin costo', 'Online o presencial'],
    },
    {
      numero: 2,
      titulo: 'Búsqueda & Visitas',
      descripción: 'Te presentamos opciones y acompañamos las visitas.',
      detalles: ['Selección personalizada', 'Evaluación de propiedades', 'Análisis detallado'],
    },
    {
      numero: 3,
      titulo: 'Oferta & Negociación',
      descripción: 'Preparamos la oferta y negociamos las mejores condiciones.',
      detalles: ['Estrategia de oferta', 'Negociación profesional', 'Documentación inicial'],
    },
    {
      numero: 4,
      titulo: 'Documentación Legal',
      descripción: 'Gestionamos todos los documentos y trámites legales.',
      detalles: ['Revisión de documentos', 'Trámites SII', 'Coordinación con notaría'],
    },
    {
      numero: 5,
      titulo: 'Cierre & Escritura',
      descripción: 'Firmamos la escritura y cierras tu inversión.',
      detalles: ['Firma notarial', 'Entrega de escritura', 'Asesoría post-venta'],
    },
  ];

  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <h2>Nuestro Proceso</h2>
          <p>5 etapas claras desde consulta hasta cierre</p>
        </div>

        <div className={styles.timeline}>
          {etapas.map((etapa, idx) => (
            <div key={idx} className={styles.etapa}>
              <div className={styles.circulo}>
                <span className={styles.numero}>{etapa.numero}</span>
              </div>

              <div className={styles.contenido}>
                <h3>{etapa.titulo}</h3>
                <p>{etapa.descripción}</p>
                <ul className={styles.detalles}>
                  {etapa.detalles.map((detalle, i) => (
                    <li key={i}>{detalle}</li>
                  ))}
                </ul>
              </div>

              {idx < etapas.length - 1 && <div className={styles.linea} />}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}