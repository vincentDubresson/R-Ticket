import "./NotFound.scss";

import { useNavigate } from "react-router-dom";
import { HOME_PATH } from "../paths";
import SVGLogo from "../../components/SVGLogo/SVGLogo";

const NotFound = () => {
  const navigate = useNavigate();
  const logoSize = "500";

  const handleRedirect = () => {
    navigate(HOME_PATH);
  };

  return (
    <div className="NotFoundMain">
      <div className="NotFoundContent">
      <SVGLogo logoWidth={logoSize} logoHeight={logoSize} />
        <p className="NotFound404Text">404</p>
        <p className="NotFoundText">La page recherchée n'existe pas.</p>
        <button className="NotFoundButton" onClick={handleRedirect}>
          Retour à l'accueil
        </button>
      </div>
    </div>
  );
};

export default NotFound;
