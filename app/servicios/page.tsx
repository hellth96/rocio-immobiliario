    import Header from '@/components/Header';
import Footer from '@/components/Footer';
import styles from './servicios.module.css';

export const metadata = {
  title: 'Servicios | Rocío Matamala',
  description: 'Servicios inmobiliarios: Asesoría, tasación, análisis de inversión, compra y venta.',
};

export default function Servicios() {
  const servicios = [
    {
      icon: '🏠',
      title: 'Venta de Propiedades',
      description: 'Asesoría completa para vender tu propiedad al mejor precio. Desde valuación hasta publicación en portales.',
      detalles: [
        'Evaluación profesional de la propiedad',
        'Publicación en múltiples portales',
        'Fotografía y descripción optimizada',
        'Acompañamiento en negociación',
        'Gestión documental y legal',
      ],
    },
    {
      icon: '🔍',
      title: 'Búsqueda y Compra',
      description: 'Te ayudamos a encontrar la propiedad que buscas y negociar las mejores condiciones.',
      detalles: [
        'Análisis de tus necesidades',
        'Búsqueda personalizada',
        'Evaluación de propiedades',
        'Negociación de precio',
        'Apoyo en financiamiento',
      ],
    },
    {
      icon: '💧',
      title: 'Especialidad: Derechos de Agua',
      description: 'Asesoría experta en propiedades con derechos de agua. Evaluación legal y documentación.',
      detalles: [
        'Análisis de derechos de agua',
        'Verificación de documentación',
        'Valuación considerando agua',
        'Asesoría legal especializada',
        'Trámites ante autoridades',
      ],
    },
    {
      icon: '📊',
      title: 'Análisis de Inversión',
      description: 'Evaluamos el potencial de inversión de una propiedad con datos del mercado.',
      detalles: [
        'Análisis de rentabilidad',
        'Proyección de plusvalía',
        'Comparativa con alternativas',
        'Reporte detallado',
        'Recomendaciones estratégicas',
      ],
    },
    {
      icon: '🏘️',
      title: 'Asesoría Inmobiliaria',
      description: 'Orientación profesional en temas de inversión y compra venta de propiedades.',
      detalles: [
        'Análisis del sector Pirque',
        'Tendencias de mercado',
        'Estrategia de inversión',
        'Gestión de portafolio',
        'Consultoría personalizada',
      ],
    },
    {
      icon: '📝',
      title: 'Acompañamiento Legal',
      description: 'Asesoría en documentación y gestión de trámites legales y notariales.',
      detalles: [
        'Revisión de documentos',
        'Gestión notarial',
        'Trámites SII',
        'Consulta con abogados',
        'Seguimiento hasta cierre',
      ],
    },
  ];

  return (
    <>
      <Header />

      <div className={styles.hero}>
        <div className="container">
          <h1>Servicios Inmobiliarios</h1>
          <p>Soluciones completas para compra, venta e inversión en Pirque</p>
        </div>
      </div>

      <div className={styles.container}>
        <div className={styles.grid}>
          {servicios.map((servicio, idx) => (
            <div key={idx} className={styles.card}>
              <div className={styles.icon}>{servicio.icon}</div>
              <h3>{servicio.title}</h3>
              <p className={styles.description}>{servicio.description}</p>

              <div className={styles.detalles}>
                <h4>Incluye:</h4>
                <ul>
                  {servicio.detalles.map((detalle, i) => (
                    <li key={i}>✓ {detalle}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.cta}>
        <div className="container">
          <h2>¿Necesitas uno de estos servicios?</h2>
          <p>Contacta con Rocío para una consulta gratuita</p>
          <a href="/contacto" className="btn btn-secondary">
            Solicitar Consulta
          </a>
        </div>
      </div>

      <Footer />
    </>
  );
}