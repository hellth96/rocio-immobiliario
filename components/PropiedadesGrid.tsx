'use client';

import Image from 'next/image';
import Link from 'next/link';
import styles from './PropiedadesGrid.module.css';
import { Propiedad } from '@/lib/notion';

interface PropiedadesGridProps {
  propiedades: Propiedad[];
  limit?: number;
}

export default function PropiedadesGrid({ propiedades, limit = 6 }: PropiedadesGridProps) {
  const mostradas = limit ? propiedades.slice(0, limit) : propiedades;

  if (mostradas.length === 0) {
    return (
      <section className={styles.section}>
        <div className="container">
          <h2 className={styles.title}>Propiedades Disponibles</h2>
          <p style={{ textAlign: 'center', color: '#666' }}>
            No hay propiedades disponibles en este momento.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className={styles.section}>
      <div className="container">
        <h2 className={styles.title}>Propiedades Disponibles</h2>
        
        <div className={styles.grid}>
          {mostradas.map((prop) => (
            <div key={prop.id} className={styles.card}>
              
              <div className={styles.imageWrapper}>
                <Image
                  src={prop.foto}
                  alt={prop.dirección}
                  fill
                  className={styles.image}
                  quality={80}
                  priority={false}
                />
                {prop.derechosAgua === "Sí" && (
                  <div className={styles.badge}>💧 Con agua</div>
                )}
              </div>

              <div className={styles.content}>
                <h3>{prop.dirección}</h3>
                <p className={styles.tipo}>{prop.tipo}</p>
                
                <div className={styles.specs}>
                  {prop.m2Terreno > 0 && (
                    <span>🌳 {prop.m2Terreno.toLocaleString('es-CL')}m² terreno</span>
                  )}
                  {prop.m2Construcción > 0 && (
                    <span>🏠 {prop.m2Construcción.toLocaleString('es-CL')}m² construidos</span>
                  )}
                  {prop.dormitorios > 0 && (
                    <span>🛏️ {prop.dormitorios}D/{prop.baños}B</span>
                  )}
                </div>

                <div className={styles.price}>
                   ${(prop.precio / 1000000).toFixed(0)}M
                </div>

                <Link href={`/propiedades/${prop.id}`} className="btn">
                  Ver detalles
                </Link>
              </div>

            </div>
          ))}
        </div>

        {propiedades.length > limit && (
          <div className={styles.verMas}>
            <Link href="/propiedades" className="btn">
              Ver todas las propiedades ({propiedades.length})
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}