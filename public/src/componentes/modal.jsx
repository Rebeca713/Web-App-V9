import React from 'react';
import { Navigate, useNavigate } from 'react-router-dom'; 
 // Asegúrate de tener el archivo de estilos correspondiente

const VeterinarianModal = ({ show, message, onClose }) => {
    const navigate = useNavigate();  // Inicializamos el hook useNavigate

  // Si el modal no debe mostrarse, no renderiza nada
  if (!show) return null;

  const handleClose = () => {
    if(message==="Has iniciado Sesión"){
      navigate("/camilo");
    }else{
      navigate("/login");
    }
    };

// Si no debe mostrarse, no renderiza nada

  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <div className="modal-header justify-content-center">
          <h3>Mundo Camilo</h3>
        </div>
        <div className="modal-body">
          <p>{message}</p>
        </div>
        <div className="modal-footer  justify-content-center">
          <button className="close-modal-button" onClick={handleClose}>Cerrar</button>
        </div>
      </div>
    </div>
  );
};

export default VeterinarianModal;

