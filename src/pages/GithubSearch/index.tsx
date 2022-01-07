import './styles.css';

import ResultCard from 'components/ResultCard';

const GithubSearch = () => {
  return (
    <div className="github-search-container">
      <h1>Encontre um perfil Github</h1>
      <div className="container search-container">
        <form>
          <div className="form-container">
            <input
              type="text"
              className="search-input"
              placeholder="CEP (somente números)"
              onChange={() => {}}
            />
            <button type="submit" className="btn btn-primary search-button">
              Buscar
            </button>
          </div>
        </form>

        <ResultCard title="Logradouro" description="Lalala" />
        <ResultCard title="Número" description="234" />
      </div>
    </div>
  );
};

export default GithubSearch;
