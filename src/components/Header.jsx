
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header fixed-top d-flex align-items-center justify-content-between">

      <div className="d-flex align-items-center justify-content-between">
        <Link to="/" className="logo d-flex align-items-center">
          <img src="/LOGO 1.png" alt="Logo" />
          <span className="d-none d-lg-block">CASA Perfect</span>
        </Link>
        <button style={{ backgroundColor: 'white', color: 'black', fontSize: '30px', border: 'none' }} className="btn btn-primary " type="button" data-bs-toggle="collapse" data-bs-target="#sidebar">
          <i className="bi bi-list"></i>
        </button>
      </div>
      

      <div className="search-bar position-relative">
        <form className="d-flex align-items-center">
        <div className="input-group">
          <input type="text" style= {{ fontSize: '18px', color: '#484848', backgroundColor: 'white',width: '20px' }}className="form-control me-2" placeholder="Search" aria-label="Search" />
          <button style= {{ fontSize: '18px', border: 'none', color: '#484848', backgroundColor: 'white' }}className="btn btn-outline-primary" type="submit">
            <i className="bi bi-search"></i>
          </button>
          <li className="nav-item d-block d-lg-none">
            <a className="nav-link" href="#" data-bs-toggle="collapse" data-bs-target="#search-bar">
              <i className="bi bi-search"></i>
            </a>
          </li>
          </div>
        </form>
      </div>

      <nav className="header-nav ms-auto">
        <ul className="navbar-nav d-flex align-items-center">


          

          <div style= {{display: 'flex'}}>
          <li className="nav-item dropdown">
            <a className="nav-link nav-icon" href="#" data-bs-toggle="dropdown">
              <i className="bi bi-bell"></i>
              <span style= {{ fontSize: '10px'}} className="badge bg-primary">4</span>
            </a>
            <ul className="dropdown-menu dropdown-menu-end">
              <li className="dropdown-header">
                Vous avez 4 Notifications
                <a href="#" className="btn btn-primary btn-sm ms-2">Voir</a>
              </li>
              <li><hr className="dropdown-divider" /></li>
              <li className="notification-item">
                <i className="bi bi-exclamation-circle text-warning"></i>
                <div>
                  <h6>Agent Elysée</h6>
                  <p>Connectée</p>
                  <p>30 min.Passer !</p>
                </div>
              </li>
              <li><hr className="dropdown-divider" /></li>
              <li className="notification-item">
                <i className="bi bi-x-circle text-danger"></i>
                <div>
                  <h6>Cliente Aimerance</h6>
                  <p>Vient d&apos;être supprimé par l&apos;Administrateur</p>
                  <p>1 hr. Passer !</p>
                </div>
              </li>
              <li><hr className="dropdown-divider" /></li>
              <li className="notification-item">
                <i className="bi bi-check-circle text-success"></i>
                <div>
                  <h6>Agent Rachel</h6>
                  <p>Enregistrement Client</p>
                  <p>2 hrs. Passer !</p>
                </div>
              </li>
              <li><hr className="dropdown-divider" /></li>
              <li className="notification-item">
                <i className="bi bi-info-circle text-primary"></i>
                <div>
                  <h6>Agent Rachel</h6>
                  <p>Envoi de rapport journalier</p>
                  <p>4 hrs.</p>
                </div>
              </li>
              <li><hr className="dropdown-divider" /></li>
              <li className="dropdown-footer">
                <a href="#">Voir Plus des Notifications</a>
              </li>
            </ul>
          </li> 

          <li className="nav-item dropdown">
            <a className="nav-link nav-icon" href="#" data-bs-toggle="dropdown">
              <i className="bi bi-chat-left-text"></i>
              <span style= {{ fontSize: '10px'}}className="badge bg-success">3</span>
            </a>
            <ul className="dropdown-menu dropdown-menu-end">
              <li className="dropdown-header">
                Vous avez 3 Messages non lus
                <a href="#" className="btn btn-primary btn-sm ms-2">Voir</a>
              </li>
              <li><hr className="dropdown-divider" /></li>
              <li className="message-item">
                <a href="#">
                  <img src="/messages-1.jpg" alt="" style= {{ fontSize: '10px'}} className="rounded-circle" />
                  <div>
                    <h6>Cliente Narcisse Mbali</h6>
                    <p>Salut Casa perfect je suis désolé pour le retard !!!</p>
                    <p>1 hrs.</p>
                  </div>
                </a>
              </li>
              <li><hr className="dropdown-divider" /></li>
              <li className="message-item">
                <a href="#">
                  <img src="/messages-2.jpg" alt="" style= {{ fontSize: '10px'}} className="rounded-circle" />
                  <div>
                    <h6>Client Kevin Delmote</h6>
                    <p>Vient d&apos;être supprimé par l&apos;Administrateur</p>
                    <p>6 hrs.</p>
                  </div>
                </a>
              </li>
              <li><hr className="dropdown-divider" /></li>
              <li className="message-item">
                <a href="#">
                  {/* <img src="/messages-3.jpg" alt="" style= {{ fontSize: '10px'}} className="rounded-circle" /> */}
                  <div>
                    <h6>Client Elie Mondonga</h6>
                    <p>Bonjour Casa perfect, j&apos;ai besoin d&apos;un rendez-vous avec le PDG.</p>
                    <p>8 hrs.</p>
                  </div>
                </a>
              </li>
              <li><hr className="dropdown-divider" /></li>
              <li className="dropdown-footer">
                <a href="#">Voir Plus de Message...</a>
              </li>
            </ul>
          </li> 

          <li className="nav-item dropdown">
            <a className="nav-link nav-icon" href="#" data-bs-toggle="dropdown">
              <i className="bi bi-journal-text"></i>
              <span style= {{ fontSize: '10px'}} className="badge bg-warning">3</span>
            </a>
            <ul className="dropdown-menu dropdown-menu-end">
              <li className="dropdown-header">
                Vous avez reçu 3 demandes de crédit non lus
                <a href="#" className="btn btn-primary btn-sm ms-2">Voir</a>
              </li>
              <li><hr className="dropdown-divider" /></li>
              <li className="message-item">
                <a href="#">
                  <img src="/messages-1.jpg" alt="" style= {{ fontSize: '10px'}} className="rounded-circle" />
                  <div>
                    <h6>Artemis Nunes</h6>
                    <p>Demande de crédit</p>
                    <p>4 hrs.</p>
                  </div>
                </a>
              </li>
              <li><hr className="dropdown-divider" /></li>
              <li className="message-item">
                <a href="#">
                  <img src="/messages-2.jpg" alt="photo" style= {{ fontSize: '10px'}} className="rounded-circle" />
                  <div>
                    <h6>Brigitte Etulu</h6>
                    <p>Demande de crédit</p>
                    <p>6 hrs.</p>
                  </div>
                </a>
              </li>
              <li><hr className="dropdown-divider" /></li>
              <li className="message-item">
                <a href="#">
                  {/* <img src="/messages-3.jpg" alt="" style= {{ fontSize: '10px'}} className="rounded-circle" /> */}
                  <div>
                    <h6>Jeremie Boalela</h6>
                    <p>Demande de Crédit</p>
                    <p>8 hrs.</p>
                  </div>
                </a>
              </li>
              <li><hr className="dropdown-divider" /></li>
              <li className="dropdown-footer">
                <a href="#">Voir Plus de demande...</a>
              </li>
            </ul>
          </li> 

          <li className="nav-item dropdown">
            <a className="nav-link nav-profile d-flex align-items-center pe-0" href="#" data-bs-toggle="dropdown">
              <img src="/photo.jpg" alt="Profile" style={{fontSize: '50px' }} className="rounded-circle" />
              <span className="d-none d-md-block dropdown-toggle ps-2">M. Rachel</span>
            </a>
            <ul className="dropdown-menu dropdown-menu-end">
            <li className="dropdown-header">
                <h6>Rachel Motolona</h6>
                <span>C.E.O Founder Casa Perfect</span>
              </li>
              <li>
                <Link className="dropdown-item d-flex align-items-center" to="/mon-profile">
                  <i className="bi bi-person"></i>
                  <span>Mon Profil</span>
                </Link>
              </li>
              <li>
                <Link className="dropdown-item d-flex align-items-center" to="#">
                  <i className="bi bi-gear"></i>
                  <span>Paramètres</span>
                </Link>
              </li>
              <li><hr className="dropdown-divider" /></li>
              <li>
                <Link className="dropdown-item d-flex align-items-center" to="/deconnexion">
                  <i className="bi bi-box-arrow-right"></i>
                  <span>Déconnexion</span>
                </Link>
              </li>
            </ul>
          </li>
          </div>

        </ul>
      </nav>

    </header>
  );
};

export default Header;