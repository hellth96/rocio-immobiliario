'use client';

import Image from 'next/image';
import Link from 'next/link';
import styles from './PropiedadesGrid.module.css';

interface Propiedad {
  id: string;
  dirección: string;
  precio: number;
  tipo: string;
  m2Construcción: number;
  m2Terreno: number;
  foto: string;
  descripción: string;
}

interface PropiedadesGridProps {
  propiedades: Propiedad[];
  limit?: number;
}

export default function PropiedadesGrid({ propiedades, limit = 6 }: PropiedadesGridProps) {
  const mostradas = limit ? propiedades.slice(0, limit) : propiedades;

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
                />
              </div>

              <div className={styles.content}>
                <h3>{prop.dirección}</h3>
                <p className={styles.tipo}>{prop.tipo}</p>
                
                <div className={styles.specs}>
                  <span>📍 {prop.m2Terreno}m² terreno</span>
                  <span>🏠 {prop.m2Construcción}m² construcción</span>
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
              Ver todas las propiedades
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}