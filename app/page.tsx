import Header from '@/components/Header';
import Hero from '@/components/Hero';
import PropiedadesGrid from '@/components/PropiedadesGrid';
import Footer from '@/components/Footer';
import { getPropiedadesDisponibles } from '@/lib/notion';

export const revalidate = 3600; // Revalidar cada hora

export const metadata = {
  title: 'Rocío Matamala | Especialista Inmobiliaria en Pirque',
  description: 'Compra y venta de propiedades en Pirque. Especialista en derechos de agua y terrenos. Acompañamiento total en tu proceso.',
  keywords: 'casa Pirque, propiedades Pirque, derechos agua, terrenos, comprar Pirque',
};

export default async function Home() {
  const propiedades = await getPropiedadesDisponibles();

  return (
    <>
      <Header />
      <Hero />
      <PropiedadesGrid propiedades={propiedades} limit={6} />
      <Footer />
    </>
  );
}