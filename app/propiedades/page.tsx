import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PropiedadesGrid from '@/components/PropiedadesGrid';
import { getPropiedadesDisponibles } from '@/lib/notion';

export const revalidate = 3600; // Revalidar cada hora

export const metadata = {
  title: 'Propiedades en venta Pirque | Rocío Matamala',
  description: '20+ propiedades disponibles en Pirque. Casa, departamento, terreno, parcela.',
};

export default async function Propiedades() {
  const propiedades = await getPropiedadesDisponibles();

  return (
    <>
      <Header />
      
      <div className="container" style={{ paddingTop: '80px', marginBottom: '40px' }}>
        <h1 style={{ fontSize: '36px', marginBottom: '10px' }}>
          Propiedades Disponibles
        </h1>
        <p style={{ fontSize: '16px', color: '#666' }}>
          Revisa nuestras {propiedades.length} propiedades en venta
        </p>
      </div>

      <PropiedadesGrid propiedades={propiedades} />
      
      <Footer />
    </>
  );
}