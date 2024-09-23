
import { useState } from 'react';

const GestionComptesEpargne = () => {
  const [formData, setFormData] = useState({
    nomComplet: '',
    numeroCompte: '',
    montantOuverture: '',
    montantEpargne: '',
    statut: 'Actif',
    date: '',
    heure: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to handle form submission
    console.log(formData);
  };

  return (
    <main id="main" className="main">
      <div className="container">
        <h2 className="text-center my-4">Gestion des Comptes Épargne</h2>

        {/* Bouton pour ouvrir le formulaire de création de compte épargne */}
        <button className="btn btn-primary mb-3" data-bs-toggle="modal" data-bs-target="#epargneModal">
          Créer un Compte Épargne
        </button>

        {/* Modal pour création de compte épargne */}
        <div className="modal fade" id="epargneModal" tabIndex="-1" aria-labelledby="epargneModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="epargneModalLabel">Créer un Compte Épargne</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                <form id="epargneForm" onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="nomComplet">Nom Complet</label>
                    <input
                      type="text"
                      className="form-control"
                      id="nomComplet"
                      name="nomComplet"
                      value={formData.nomComplet}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="numeroCompte">Numéro de Compte Épargne</label>
                    <input
                      type="text"
                      className="form-control"
                      id="numeroCompte"
                      name="numeroCompte"
                      value={formData.numeroCompte}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="montantOuverture"> Montant à Épargner</label>
                    <input
                      type="number"
                      className="form-control"
                      id="montantOuverture"
                      name="montantOuverture"
                      value={formData.montantOuverture}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="montantEpargne">Montant d/Ouverture</label>
                    <input
                      type="number"
                      className="form-control"
                      id="montantEpargne"
                      name="montantEpargne"
                      value={formData.montantEpargne}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="statut">Statut</label>
                    <select
                      className="form-control"
                      id="statut"
                      name="statut"
                      value={formData.statut}
                      onChange={handleChange}
                      required
                    >
                      <option value="Actif">Actif</option>
                      <option value="Inactif">Inactif</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="date">Date</label>
                    <input
                      type="date"
                      className="form-control"
                      id="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="heure">Heure</label>
                    <input
                      type="time"
                      className="form-control"
                      id="heure"
                      name="heure"
                      value={formData.heure}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <button type="submit" className="btn btn-success">Enregistrer</button>
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* Zone de recherche active */}
        <input type="text" id="search" className="form-control mb-3" placeholder="Rechercher un client..." />

        {/* Tableau des comptes épargne */}
        <div className="table-container">
          <table className="table table-striped table-bordered">
            <thead className="thead-dark">
              <tr>
                <th style={{ backgroundColor: '#484848', color: 'white' }}>Nom</th>
                <th style={{ backgroundColor: '#484848', color: 'white' }}>Numéro de Compte</th>
                <th style={{ backgroundColor: '#484848', color: 'white' }}>Montant Epargne</th>
                <th style={{ backgroundColor: '#484848', color: 'white' }}>Statut</th>
                <th style={{ backgroundColor: '#484848', color: 'white' }}>Solde $</th>
                <th style={{ backgroundColor: '#484848', color: 'white' }}>Actions</th>
              </tr>
            </thead>
            <tbody id="epargneTableBody">
              {/* Les données des comptes épargne seront ajoutées ici dynamiquement */}
            </tbody>
          </table>
        </div>

        {/* Historique des clients avec compte épargne */}
        <div className="table-container">
          <h4>Historique des Comptes Épargne</h4>
          <table className="table table-striped table-bordered">
            <thead className="thead-dark">
              <tr>
                <th style={{ backgroundColor: '#484848', color: 'white' }}>Nom</th>
                <th style={{ backgroundColor: '#484848', color: 'white' }}>Numéro de Compte</th>
                <th style={{ backgroundColor: '#484848', color: 'white' }}> Montant Épargné</th>
                <th style={{ backgroundColor: '#484848', color: 'white' }}>Montant d/Ouverture</th>
                <th style={{ backgroundColor: '#484848', color: 'white' }}>Statut</th>
                <th style={{ backgroundColor: '#484848', color: 'white' }}>Date</th>
                <th style={{ backgroundColor: '#484848', color: 'white' }}>Heure</th>
              </tr>
            </thead>
            <tbody id="historiqueTableBody">
              {/* Les données historiques seront ajoutées ici dynamiquement */}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
};

export default GestionComptesEpargne;
