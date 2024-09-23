
// src/components/Sidebar.jsx
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <aside id="sidebar" className="sidebar">
      <ul className="sidebar-nav" id="sidebar-nav">
        <li className="nav-item">
          <Link className="nav-link" to="/">
            <i className="bi bi-grid"></i>
            <span>Tableau de bord</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link collapsed" to="#">
            <i className="bi bi-credit-card"></i>
            <span>Carte Virtuelles <img src="/VISA FIN.png" alt="Carte Virtuelle" /></span>
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link collapsed" to= "/recharge-clients">
            <i className="bi bi-person-vcard"></i>
            <span>Recharge Clients</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link collapsed" to="/compte-epargne">
            <i className="bi bi-piggy-bank"></i>
            <span>Compte Epargne</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link collapsed" to="/recharge-agents">
            <i className="bi bi-person-video3"></i>
            <span>Recharge Agents</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link collapsed" to="/historique-remboursement">
            <i className="bi bi-clock"></i>
            <span>Historique Remboursement</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link collapsed" to="/historique-crédit">
            <i className="bi bi-journal-arrow-down"></i>
            <span>Historique Crédit</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link collapsed" to="/evaluation-client">
            <i className="bi bi-bar-chart-steps"></i>
            <span>Evaluation Clients</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link collapsed" to="/gestion-agents">
            <i className="bi bi-people"></i>
            <span>Gestion Agents</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link collapsed" to="/paiement-agent">
            <i className="bi bi-cash-coin"></i>
            <span>Paiement Agents</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link collapsed" to="/tableau-financier">
            <i className="bi bi-kanban"></i>
            <span>Tableau Financier</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link collapsed" to="/rapport-analyse">
            <i className="bi bi-clipboard-pulse"></i>
            <span>Rapports et analyses</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link collapsed" to="/gestion-utilisateurs">
            <i className="bi bi-person-gear"></i>
            <span>Gestion d&apos;utilisateur</span>
          </Link>
        </li>
        <li className="nav-heading">Pages</li>
        <li className="nav-item">
          <Link className="nav-link collapsed" to="/profile">
            <i className="bi bi-person"></i>
            <span>Profile</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link collapsed" href="pages-faq.html">
            <i className="bi bi-question-circle"></i>
            <span>F.A.Q</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link collapsed" to="/contact">
            <i className="bi bi-envelope"></i>
            <span>Contact</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link collapsed" to="/signup">
            <i className="bi bi-box-arrow-in-right"></i>
            <span>Se déconnecté</span>
          </Link>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
