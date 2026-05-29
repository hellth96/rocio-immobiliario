import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Diferenciadores from '@/components/Diferenciadores';
import PropiedadesGrid from '@/components/PropiedadesGrid';
import Proceso from '@/components/Proceso';
import Testimonios from '@/components/Testimonios';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';
import { getPropiedadesDisponibles } from '@/lib/notion';

export const revalidate = 3600;

export const metadata = {
  title: 'Rocío Matamala | Especialista Inmobiliaria Pirque',
  description: 'Compra y venta de propiedades en Pirque. Especialista en derechos de agua y terrenos. Acompañamiento profesional en todo el proceso.',
  keywords: 'casa Pirque, propiedades Pirque, derechos agua, terrenos, comprar Pirque',
};

export default async function Home() {
  const propiedades = await getPropiedadesDisponibles();

  return (
    <>
      <Header />
      <Hero />
      <Diferenciadores />
      <PropiedadesGrid propiedades={propiedades} limit={6} />
      <Proceso />
      <Testimonios />
      <CTA />
      <Footer />
    </>
  );
}