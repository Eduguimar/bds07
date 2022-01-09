import './styles.css';

type Props = {
  title: string;
  description: string;
};

const ResultCard = ({ title, description }: Props) => {
  return (
    <div className="container result-container">
      <div className="image-section"></div>
      <div className="information-section">
        <h3 className="result-title">Informações</h3>
        <p className="result-description">
          <span className="profile-data">Perfil:</span> {title}
        </p>
        <p className="result-description">
          <span className="profile-data">Seguidores:</span> {description}
        </p>
        <p className="result-description">
          <span className="profile-data">Localidade:</span> {description}
        </p>
        <p className="result-description">
          <span className="profile-data">Nome:</span> {description}
        </p>
      </div>
    </div>
  );
};

export default ResultCard;
