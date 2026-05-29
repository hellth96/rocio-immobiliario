import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PropiedadesGrid from '@/components/PropiedadesGrid';
import { getPropiedadesDisponibles } from '@/lib/notion';

export default async function Propiedades() {
  const propiedades = await getPropiedadesDisponibles();

  return (
    <>
      <Header />

      

      <PropiedadesGrid propiedades={propiedades} />

      <Footer />
    </>
  );
}