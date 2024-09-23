
import { useState } from 'react';

const RechargePage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [agentName, setAgentName] = useState('');
  const [rechargeAmount, setRechargeAmount] = useState('');
  const [showRechargeForm, setShowRechargeForm] = useState(false);
  const [showConfirmationMessage, setShowConfirmationMessage] = useState(false);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleAgentNameChange = (e) => {
    setAgentName(e.target.value);
  };

  const handleRechargeAmountChange = (e) => {
    setRechargeAmount(e.target.value);
  };

  const openRechargeForm = () => {
    setShowRechargeForm(true);
    setShowConfirmationMessage(false);
  };

  const confirmRecharge = () => {
    setShowRechargeForm(false);
    setShowConfirmationMessage(true);
    // Logique pour ajouter l'agent rechargé à la liste
  };

  const cancelRecharge = () => {
    setShowRechargeForm(false);
    setAgentName('');
    setRechargeAmount('');
  };

  return (
    <main id="main" className="main">
      <div className="container mt-5">
        <h2>Recharge d&apos;Argent Virtuel</h2>

        {/* Solde de l'administration */}
        <div className="alert alert-primary">
          Solde de l&apos;administration : <span id="admin-balance">900,000 $</span>
        </div>

        {/* Zone de recherche d'agent */}
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            id="search-agent"
            placeholder="Rechercher un agent..."
            value={searchTerm}
            onChange={handleSearchChange}
          />
        </div>

        {/* Bouton pour ouvrir le formulaire de recharge */}
        <button className="btn btn-success mb-3" onClick={openRechargeForm}>
          Recharger un agent
        </button>

        {/* Formulaire de recharge */}
        {showRechargeForm && (
          <div id="recharge-form" className="card p-3 mb-3">
            <h5>Formulaire de Recharge</h5>
            <div className="mb-3">
              <label htmlFor="agent-name" className="form-label">Nom de l&apos;agent</label>
              <input
                type="text"
                className="form-control"
                id="agent-name"
                placeholder="Sélectionnez un agent"
                value={agentName}
                onChange={handleAgentNameChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="recharge-amount" className="form-label">Montant à recharger</label>
              <input
                type="number"
                className="form-control"
                id="recharge-amount"
                placeholder="Montant"
                value={rechargeAmount}
                onChange={handleRechargeAmountChange}
              />
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', width: 'fit-content', marginTop: '10px', gap: '10px' }}>
            <button style={{ width: 'auto', display: 'inline-block', padding: '5px 10px !important' }} className="btn btn-primary" onClick={confirmRecharge}>
              Confirmer la recharge
            </button>
            <button style={{ width: 'auto', display: 'inline-block', padding: '5px 10px !important' }} className="btn btn-secondary" onClick={cancelRecharge}>
              Annuler
            </button>
            </div>
          </div>
        )}

        {/* Message de confirmation */}
        {showConfirmationMessage && (
          <div id="confirmation-message" className="alert alert-success">
            Recharge réussie !
          </div>
        )}

        {/* Tableau des agents rechargés */}
        <table className="table table-bordered table-striped">
          <thead>
            <tr>
              <th>Nom</th>
              <th>Numéro de compte</th>
              <th>Montant rechargé</th>
              <th>Date de recharge</th>
              <th>Heure de recharge</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody id="recharged-agents-table">
            {/* Les lignes des agents rechargés seront ajoutées ici dynamiquement */}
          </tbody>
        </table>
      </div>
    </main>
  );
};

export default RechargePage;
