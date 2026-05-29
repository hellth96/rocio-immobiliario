import Image from 'next/image';
import Link from 'next/link';
import { getPropiedadPorId, getPropiedadesDisponibles } from '@/lib/notion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import styles from './propiedad.module.css';

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: Props) {
  const { id } = await params;

  const propiedad = await getPropiedadPorId(id);
  
  return {
    title: `${propiedad?.dirección} - ${propiedad?.tipo} en Pirque | Rocío Matamala`,
    description: propiedad?.descripción.substring(0, 150) || 'Propiedad en Pirque',
  };
}

export async function generateStaticParams() {
  const propiedades = await getPropiedadesDisponibles();
  return propiedades.map((prop) => ({
    id: prop.id,
  }));
}

export default async function PaginaPropiedad({ params }: Props) {
  const { id } = await params;

  const propiedad = await getPropiedadPorId(id);

  if (!propiedad) {
    return (
      <>
        <Header />
        <div className="container" style={{ padding: '60px 20px', textAlign: 'center' }}>
          <h1>Propiedad no encontrada</h1>
          <Link href="/propiedades">Volver a propiedades</Link>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      
      <div className={styles.container}>
        <Link href="/propiedades" className={styles.back}>
          ← Volver a propiedades
        </Link>

        <div className={styles.grid}>
          {/* GALERÍA */}
          <div className={styles.galeria}>
            <Image
              src={propiedad.foto}
              alt={propiedad.dirección}
              width={800}
              height={500}
              className={styles.imagen}
              quality={90}
              priority
            />
          </div>

          {/* INFORMACIÓN */}
          <div className={styles.info}>
            <h1>{propiedad.dirección}</h1>
            <p className={styles.tipo}>{propiedad.tipo} en Pirque</p>

            {/* PRECIO */}
            <div className={styles.precio}>
              ${propiedad.precio.toLocaleString("es-CL")}
            </div>

            {/* CARACTERÍSTICAS */}
            <div className={styles.specs}>
              <div className={styles.spec}>
                <span className={styles.icon}>🌳</span>
                <div>
                  <p className={styles.label}>Terreno</p>
                  <p className={styles.value}>{propiedad.m2Terreno.toLocaleString()} m²</p>
                </div>
              </div>

              {propiedad.m2Construcción > 0 && (
                <div className={styles.spec}>
                  <span className={styles.icon}>🏠</span>
                  <div>
                    <p className={styles.label}>Construcción</p>
                    <p className={styles.value}>{propiedad.m2Construcción} m²</p>
                  </div>
                </div>
              )}

              {propiedad.dormitorios > 0 && (
                <div className={styles.spec}>
                  <span className={styles.icon}>🛏️</span>
                  <div>
                    <p className={styles.label}>Dormitorios</p>
                    <p className={styles.value}>{propiedad.dormitorios}</p>
                  </div>
                </div>
              )}

              {propiedad.baños > 0 && (
                <div className={styles.spec}>
                  <span className={styles.icon}>🚿</span>
                  <div>
                    <p className={styles.label}>Baños</p>
                    <p className={styles.value}>{propiedad.baños}</p>
                  </div>
                </div>
              )}

              {propiedad.estacionamientos > 0 && (
                <div className={styles.spec}>
                  <span className={styles.icon}>🅿️</span>
                  <div>
                    <p className={styles.label}>Estacionamientos</p>
                    <p className={styles.value}>{propiedad.estacionamientos}</p>
                  </div>
                </div>
              )}

              {propiedad.derechosAgua !== "No" && (
                <div className={styles.spec}>
                  <span className={styles.icon}>💧</span>
                  <div>
                    <p className={styles.label}>Derechos de agua</p>
                    <p className={styles.value}>{propiedad.derechosAgua}</p>
                  </div>
                </div>
              )}
            </div>

            {/* ESPECIALIDADES */}
            {propiedad.especialidades.length > 0 && (
              <div className={styles.especialidades}>
                {propiedad.especialidades.map((esp) => (
                  <span key={esp} className={styles.badge}>
                    {esp}
                  </span>
                ))}
              </div>
            )}

            {/* CTA */}
            <a
              href={`https://wa.me/56995665120?text=Me interesa la propiedad: ${propiedad.dirección}`}
              className="btn"
              style={{ marginTop: '30px', display: 'block', textAlign: 'center' }}
              target="_blank"
              rel="noopener noreferrer"
            >
              Contactar por WhatsApp
            </a>
          </div>
        </div>

        {/* DESCRIPCIÓN LARGA */}
        <div className={styles.descripcion}>
          <h2>Sobre la propiedad</h2>
          <p>{propiedad.descripción}</p>
        </div>

        {/* ANÁLISIS DE ZONA */}
        {propiedad.notasZona && (
          <div className={styles.zona}>
            <h2>Sobre la zona</h2>
            <p>{propiedad.notasZona}</p>
          </div>
        )}
      </div>

      <Footer />
    </>
  );
}