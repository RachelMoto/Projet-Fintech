
import { useState } from 'react';

const PaiementAgents = () => {
  const [showPayForm, setShowPayForm] = useState(false);

  const handleShowPayForm = () => {
    setShowPayForm(!showPayForm);
  };

  return (
    <main id="main" className="main">
      <div className="container mt-5">
        <h2>Gestion de Paiement des Agents</h2>
        <div className="mb-3">
          <input
            type="text"
            id="searchInput"
            className="form-control"
            placeholder="Rechercher un agent..."
          />
        </div>
        <table className="table table-striped">
          <thead>
            <tr>
              <th style={{ backgroundColor: '#484848', color: 'white' }}>Nom Agent</th>
              <th style={{ backgroundColor: '#484848', color: 'white' }}>Sexe</th>
              <th style={{ backgroundColor: '#484848', color: 'white' }}>Numéro de compte</th>
              <th style={{ backgroundColor: '#484848', color: 'white' }}>Statut</th>
              <th style={{ backgroundColor: '#484848', color: 'white' }}>Salaire</th>
              <th style={{ backgroundColor: '#484848', color: 'white' }}>Action</th>
            </tr>
          </thead>
          <tbody id="agentTable">
            {/* Les données des agents seront insérées ici dynamiquement */}
          </tbody>
        </table>

        {/* Bouton pour afficher le formulaire de paie */}
        <button
          className="btn btn-primary"
          onClick={handleShowPayForm}
        >
          Effectuer un Paiement
        </button>

        {/* Formulaire de paie */}
        {showPayForm && (
          <div id="payForm" className="mt-4">
            <h3>Formulaire de Paiement</h3>
            <form id="paymentForm">
              <div className="mb-3">
                <label htmlFor="agentName" className="form-label">
                  Nom Agent
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="agentName"
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="agentSex" className="form-label">
                  Sexe
                </label>
                <select
                  className="form-select"
                  id="agentSex"
                  required
                >
                  <option value="Masculin">Masculin</option>
                  <option value="Féminin">Féminin</option>
                </select>
              </div>
              <div className="mb-3">
                <label htmlFor="accountNumber" className="form-label">
                  Numéro de compte
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="accountNumber"
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="agentStatus" className="form-label">
                  Statut
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="agentStatus"
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="paymentDate" className="form-label">
                  Date de paiement
                </label>
                <input
                  type="date"
                  className="form-control"
                  id="paymentDate"
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="paymentAmount" className="form-label">
                  Montant
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="paymentAmount"
                  required
                />
              </div>
              <button type="submit" className="btn btn-success">
                Payer
              </button>
            </form>
          </div>
        )}
      </div>
    </main>
  );
};

export default PaiementAgents;
