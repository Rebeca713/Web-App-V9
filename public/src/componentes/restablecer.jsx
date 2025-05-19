import React, { useState } from 'react';
import 'firebase/auth';
import './restablecer.css';
import { auth, sendPasswordResetEmail } from '../service/firebase';


const RestablecerContrasena = () => {
  const [email, setEmail] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [error, setError] = useState("");

  const manejarEnvio = async (event) => {
    event.preventDefault();

    // Limpiar los posibles mensajes previos
    setMensaje("");
    setError("");

    // Validación del correo
    if (!email) {
      setError("Por favor ingresa tu correo electrónico.");
      return;
    }

    try {
      // Enviar el correo de restablecimiento
      await sendPasswordResetEmail(auth,email);
      setMensaje("Se ha enviado un correo para restablecer tu contraseña.");
    } catch (err) {
      console.error("Error al enviar el correo:", err);
      setError("Hubo un error al enviar el correo. Intenta nuevamente.");
    }
  };

  return (
    <div className="restablecer-contrasena p-4">
      <h2>Restablecer Contraseña</h2>
      <form onSubmit={manejarEnvio}>
        <div>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)
            }
            placeholder='Correo Electrónico'
            required
          />
        </div>

        {mensaje && <p className="mensaje-exito">{mensaje}</p>}
        {error && <p className="mensaje-error">{error}</p>}

        <button type="submit">Enviar Correo de Restablecimiento</button>
        <div className="footer-links" style={{ marginTop: '25px' }}>
          <a href="/login" className="back-link">🡐 Iniciar Sesion</a>
        </div>
      </form>
    </div>
  );
};

export default RestablecerContrasena;