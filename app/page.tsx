import Header from '@/components/Header';
import Hero from '@/components/Hero';
import PropiedadesGrid from '@/components/PropiedadesGrid';
import Footer from '@/components/Footer';

// Datos de ejemplo (después los traerás de Notion)
const propiedadesEjemplo = [
  {
    id: '1',
    dirección: 'Avenida Principal 123, Pirque',
    precio: 580000000,
    tipo: 'Casa',
    m2Construcción: 280,
    m2Terreno: 650,
    foto: '/placeholder-1.jpg',
    descripción: 'Casa amplia con derechos de agua'
  },
  {
    id: '2',
    dirección: 'Edificio Las Coníferas, Piso 8, Pirque',
    precio: 350000000,
    tipo: 'Departamento',
    m2Construcción: 85,
    m2Terreno: 0,
    foto: '/placeholder-2.jpg',
    descripción: 'Departamento con piscina y gym'
  },
  {
    id: '3',
    dirección: 'Camino Privado Los Robles, Pirque',
    precio: 1200000000,
    tipo: 'Parcela',
    m2Construcción: 0,
    m2Terreno: 25000,
    foto: '/placeholder-3.jpg',
    descripción: 'Parcela 2.5 hectáreas con agua'
  },
];

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <PropiedadesGrid propiedades={propiedadesEjemplo} limit={6} />
      <Footer />
    </>
  );
}
