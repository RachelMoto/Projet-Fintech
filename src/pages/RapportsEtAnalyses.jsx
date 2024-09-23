import React, { useState } from 'react';

const RapportsEtAnalyses = () => {
  // Initialise l'état avec un tableau vide
  const [clients, setClients] = useState([]);

  const [searchInput, setSearchInput] = useState('');

  // Exemple de données pour le développement (à remplacer par une API ou une autre source de données)
  const exampleClients = [
    {
      nom: 'Honoré Tshibangu',
      compte: '123456',
      montantPrets: 10000,
      remboursements: 5000,
      resteARembourser: 5000,
      performanceAgent: 'Bonne',
      agent: 'Agent A'
    },
    {
      nom: 'Rachel Motolona',
      compte: '654321',
      montantPrets: 8000,
      remboursements: 3000,
      resteARembourser: 5000,
      performanceAgent: 'Excellente',
      agent: 'Agent B'
    },
  ];

  // Exemple de fonction pour initialiser les données
  const loadClients = () => {
    setClients(exampleClients); // Remplacez par une récupération dynamique des données
  };

  // Appel de la fonction pour charger les données lors du premier rendu du composant
  React.useEffect(() => {
    loadClients();
  }, []);

  const handleSearchInputChange = (e) => {
    setSearchInput(e.target.value);
  };

  const filteredClients = clients.filter(client =>
    client.nom.toLowerCase().includes(searchInput.toLowerCase())
  );

  return (
    <main id="main" className="main">
      <div className="container my-4">
        <h2 className="text-center">Rapports et Analyses</h2>

        <div className="row mb-3">
          <div className="col-md-6">
            <input
              type="text"
              className="form-control search-input"
              placeholder="Rechercher un client..."
              value={searchInput}
              onChange={handleSearchInputChange}
            />
          </div>
        </div>

        <table className="table table-striped table-bordered">
          <thead className="table-dark">
            <tr>
              <th>Nom du Client</th>
              <th>Numéro de Compte</th>
              <th>Montant des Prêts</th>
              <th>Montant des Remboursements</th>
              <th>Reste à Rembourser</th>
              <th>Performance de l&apos;Agent</th>
              <th>Identité de l&apos;Agent</th>
            </tr>
          </thead>
          <tbody id="reportTableBody">
            {filteredClients.length > 0 ? (
              filteredClients.map((client, index) => (
                <tr key={index}>
                  <td>{client.nom}</td>
                  <td>{client.compte}</td>
                  <td>{client.montantPrets}</td>
                  <td>{client.remboursements}</td>
                  <td>{client.resteARembourser}</td>
                  <td>{client.performanceAgent}</td>
                  <td>{client.agent}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="7" className="text-center">Aucun client trouvé</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </main>
  );
};

export default RapportsEtAnalyses;
