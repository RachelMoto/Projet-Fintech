
import { useState } from 'react';

const ClientManagement = () => {
  // État pour la recherche et la gestion des clients
  const [searchInput, setSearchInput] = useState('');
  const [clients, setClients] = useState([]); // Tableau des clients
  const [nom, setNom] = useState('');
  const [postnom, setPostnom] = useState('');
  const [prenom, setPrenom] = useState('');
  const [sexe, setSexe] = useState('M');
  const [numeroCompte, setNumeroCompte] = useState('');
  const [solde, setSolde] = useState('');
  const [statut, setStatut] = useState('actif');

  // Gestion de la soumission du formulaire d'ajout de client
  const handleAddClient = (e) => {
    e.preventDefault();
    const newClient = { nom, postnom, prenom, sexe, numeroCompte, solde, statut };
    setClients([...clients, newClient]);
    // Réinitialiser les champs
    setNom('');
    setPostnom('');
    setPrenom('');
    setNumeroCompte('');
    setSolde('');
    setStatut('actif');
  };

  // Gestion de la recherche de client
  const handleSearchInputChange = (e) => {
    setSearchInput(e.target.value);
  };

  // Filtrer les clients par recherche
  const filteredClients = clients.filter(client =>
    client.nom.toLowerCase().includes(searchInput.toLowerCase())
  );

  return (
    <main id="main" className="main">
      <div className="container mt-5">
        <h2 className="mb-4">Recharge Clients</h2>

        {/* Zone de recherche pour le tableau */}
        <input
          type="text"
          id="searchInput" style={{ width: '150%' }} 
          className="form-control mb-3"
          placeholder="Rechercher un client"
          value={searchInput}
          onChange={handleSearchInputChange}
        />

        {/* Tableau des clients */}
        <div style={{ width: '150%' }} className="table-responsive">
          <table className="table table-bordered table-hover">
            <thead>
              <tr>
                <th style={{ backgroundColor: '#484848', color: 'white' }}>Nom</th>
                <th style={{ backgroundColor: '#484848', color: 'white' }}>Post-nom</th>
                <th style={{ backgroundColor: '#484848', color: 'white' }}>Prénom</th>
                <th style={{ backgroundColor: '#484848', color: 'white' }}>Sexe</th>
                <th style={{ backgroundColor: '#484848', color: 'white' }}>Numéro Compte</th>
                <th style={{ backgroundColor: '#484848', color: 'white' }}>Solde</th>
                <th style={{ backgroundColor: '#484848', color: 'white' }}>Statut</th>
                <th style={{ backgroundColor: '#484848', color: 'white' }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredClients.map((client, index) => (
                <tr key={index}>
                  <td>{client.nom}</td>
                  <td>{client.postnom}</td>
                  <td>{client.prenom}</td>
                  <td>{client.sexe}</td>
                  <td>{client.numeroCompte}</td>
                  <td>{client.solde}</td>
                  <td>{client.statut}</td>
                  <td>
                    <button className="btn btn-warning">Recharger</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Boutons d'action */}
        
        <button style={{ marginRight: '15px', width: '170px' }} className="btn btn-success mb-3" data-bs-toggle="modal" data-bs-target="#addClientModal">
          Ajouter un client
        </button>
        <button className="btn btn-warning mb-3" data-bs-toggle="modal" data-bs-target="#rechargeModal">
          Recharger un compte
        </button>
        
      </div>

      {/* Modale d'ajout de client */}
      <div className="modal fade" id="addClientModal" tabIndex="-1" aria-labelledby="addClientModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="addClientModalLabel">Ajouter un client</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form onSubmit={handleAddClient}>
                <div className="mb-3">
                  <label htmlFor="nom" className="form-label">Nom</label>
                  <input
                    type="text"
                    className="form-control"
                    id="nom"
                    value={nom}
                    onChange={(e) => setNom(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="postnom" className="form-label">Post-nom</label>
                  <input
                    type="text"
                    className="form-control"
                    id="postnom"
                    value={postnom}
                    onChange={(e) => setPostnom(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="prenom" className="form-label">Prénom</label>
                  <input
                    type="text"
                    className="form-control"
                    id="prenom"
                    value={prenom}
                    onChange={(e) => setPrenom(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="sexe" className="form-label">Sexe</label>
                  <select
                    id="sexe"
                    className="form-select"
                    value={sexe}
                    onChange={(e) => setSexe(e.target.value)}
                    required
                  >
                    <option value="M">Masculin</option>
                    <option value="F">Féminin</option>
                  </select>
                </div>
                <div className="mb-3">
                  <label htmlFor="numeroCompte" className="form-label">Numéro Compte</label>
                  <input
                    type="text"
                    className="form-control"
                    id="numeroCompte"
                    value={numeroCompte}
                    onChange={(e) => setNumeroCompte(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="solde" className="form-label">Solde Initial</label>
                  <input
                    type="number"
                    className="form-control"
                    id="solde"
                    value={solde}
                    onChange={(e) => setSolde(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="statut" className="form-label">Statut</label>
                  <select
                    id="statut"
                    className="form-select"
                    value={statut}
                    onChange={(e) => setStatut(e.target.value)}
                    required
                  >
                    <option value="actif">Actif</option>
                    <option value="inactif">Inactif</option>
                  </select>
                </div>
                <button type="submit" className="btn btn-primary">Ajouter</button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Modale de recharge */}
      <div className="modal fade" id="rechargeModal" tabIndex="-1" aria-labelledby="rechargeModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="rechargeModalLabel">Recharger un compte</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form>
                <div className="mb-3">
                  <label htmlFor="searchRecharge" className="form-label">Rechercher un client</label>
                  <input type="text" id="searchRecharge" className="form-control mb-3" placeholder="Rechercher un client" />
                </div>
                <div className="mb-3">
                  <label htmlFor="rechargeNumeroCompte" className="form-label">Sélectionner un client</label>
                  <select id="rechargeNumeroCompte" className="form-select" required>
                    {/* Les options seront ajoutées dynamiquement */}
                  </select>
                </div>
                <div className="mb-3">
                  <label htmlFor="rechargeMontant" className="form-label">Montant</label>
                  <input type="number" className="form-control" id="rechargeMontant" required />
                </div>
                <button type="submit" className="btn btn-primary">Recharger</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ClientManagement;
