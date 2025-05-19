import { useNavigate } from 'react-router-dom';
import Logo from '../assets/logo.png';
import camiloImagen from '../assets/camilo.gif';
import '../App.css';

function Botones() {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/login');
  };

  const handleRegister = () => {
    navigate('/register');
  };

  return (
    <div className="container-sm text-center">
      <img src={Logo} alt="Logo" className="logo-creativo" />
      <div>
        <img src={camiloImagen} className="text-center camilo-imagen" alt="Camilo" />
      </div>

      <div className="row text-center justify-content-center">
        <div className="col-sm-6 col-md-3">
          <button className="btns" onClick={handleLogin}>
            Iniciar Sesion
          </button>
        </div>
        <div className="col-sm-6 col-md-3">
          <button className="btns" onClick={handleRegister}>
            Registrarse
          </button>
        </div>
      </div>
    </div>
  );
}

export default Botones;
