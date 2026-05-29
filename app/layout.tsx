import './globals.css';

export const metadata = {
  title: 'Rocío Matamala | Especialista Inmobiliaria Pirque | Derechos de Agua',
  description:
    'Compra y venta de propiedades en Pirque, Santiago. Especialista en derechos de agua y terrenos de alto valor. Acompañamiento profesional en todo el proceso.',
  keywords:
    'casa Pirque, propiedades Pirque, derechos agua, terrenos Pirque, comprar Pirque, vender Pirque, especialista inmobiliario',
  openGraph: {
    title: 'Rocío Matamala | Especialista Pirque',
    description:
      '20+ propiedades disponibles. Especialista en derechos de agua y terrenos.',
    url: 'https://rocio-inmobiliario.vercel.app',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}