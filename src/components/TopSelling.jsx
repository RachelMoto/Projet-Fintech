
import PropTypes from 'prop-types';

const TopSelling = ({ setFilter }) => {
    return (
      <div className="col-12">
        <div className="card top-selling overflow-auto">
          <div className="filter">
            <a className="icon" href="#" data-bs-toggle="dropdown">
              <i className="bi bi-three-dots"></i>
            </a>
            <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
              <li className="dropdown-header text-start"><h6>Filtrer</h6></li>
              <li><a className="dropdown-item" href="#" onClick={() => setFilter('Aujourd/hui')}>Aujourd/hui</a></li>
              <li><a className="dropdown-item" href="#" onClick={() => setFilter('Ce mois-ci')}>Ce mois-ci</a></li>
              <li><a className="dropdown-item" href="#" onClick={() => setFilter('Cette année')}>Cette année</a></li>
            </ul>
          </div>
        </div>
      </div>
    );
  };
  TopSelling.propTypes = {
      setFilter: PropTypes.func.isRequired
  };
  export default TopSelling;