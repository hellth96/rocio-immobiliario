'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import styles from './contacto.module.css';

export default function Contacto() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    teléfono: '',
    asunto: '',
    mensaje: '',
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e: any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSuccess(true);
        setFormData({ nombre: '', email: '', teléfono: '', asunto: '', mensaje: '' });
        setTimeout(() => setSuccess(false), 5000);
      }
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Header />
      
      <div className={styles.container}>
        <div className={styles.header}>
          <h1>Contacta con Rocío</h1>
          <p>¿Buscas comprar, vender o tienes alguna pregunta? Escríbenos y nos pondremos en contacto en 24 horas.</p>
        </div>

        <div className={styles.content}>
          <form onSubmit={handleSubmit} className={styles.form}>
            {success && (
              <div className={styles.success}>
                ✓ Tu mensaje fue enviado correctamente. Rocío se pondrá en contacto pronto.
              </div>
            )}

            <div className={styles.formGroup}>
              <label>Nombre completo</label>
              <input
                type="text"
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
                required
                placeholder="Tu nombre"
              />
            </div>

            <div className={styles.formGroup}>
              <label>Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="tu@email.com"
              />
            </div>

            <div className={styles.formGroup}>
              <label>Teléfono</label>
              <input
                type="tel"
                name="teléfono"
                value={formData.teléfono}
                onChange={handleChange}
                required
                placeholder="+56 9 XXXX XXXX"
              />
            </div>

            <div className={styles.formGroup}>
              <label>Asunto</label>
              <input
                type="text"
                name="asunto"
                value={formData.asunto}
                onChange={handleChange}
                required
                placeholder="Ej: Interesado en comprar/vender propiedad"
              />
            </div>

            <div className={styles.formGroup}>
              <label>Mensaje</label>
              <textarea
                name="mensaje"
                value={formData.mensaje}
                onChange={handleChange}
                required
                placeholder="Cuéntanos qué buscas..."
                rows={6}
              />
            </div>

            <button type="submit" className="btn" disabled={loading}>
              {loading ? 'Enviando...' : 'Enviar mensaje'}
            </button>
          </form>

          <div className={styles.info}>
            <h2>Información de contacto</h2>
            
            <div className={styles.infoItem}>
              <span className={styles.icon}>📱</span>
              <div>
                <h3>WhatsApp</h3>
                <a href="https://wa.me/56995665120?text=Hola Rocío, encontré tu página web y me gustaría hacer una consulta." target="_blank" rel="noopener noreferrer">
                  +56 9 95665120
                </a>
              </div>
            </div>

            <div className={styles.infoItem}>
              <span className={styles.icon}>📧</span>
              <div>
                <h3>Email</h3>
                <a href="mailto:rosio.matamala.m@gmail.com">
                  rosio.matamala.m@gmail.com
                </a>
              </div>
            </div>

            <div className={styles.infoItem}>
              <span className={styles.icon}>📍</span>
              <div>
                <h3>Ubicación</h3>
                <p>Pirque, Santiago</p>
              </div>
            </div>

            <div className={styles.infoItem}>
              <span className={styles.icon}>🕐</span>
              <div>
                <h3>Horarios</h3>
                <p>Lunes a viernes: 9:00 - 18:00</p>
                <p>Sábado: 10:00 - 14:00</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}