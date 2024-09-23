

const GestionAgents = () => {
  return (
    <main id="main" className="main">
      <div className="container">
        <h2 className="text-center">Gestion des Agents</h2>

        {/* Zone de recherche */}
        <div className="search-box">
          <input
            type="text"
            id="search"
            className="form-control"
            placeholder="Recherche de clients..."
          />
        </div>

        {/* Tableau Bootstrap */}
        <div className="table-responsive">
          <table className="table table-bordered table-striped">
            <thead className="thead-dark">
              <tr>
                <th style={{ backgroundColor: '#484848', color: 'white' }}>Nom de l&apos;Agent</th>
                <th style={{ backgroundColor: '#484848', color: 'white' }}>Nombre de Prêts Accordés</th>
                <th style={{ backgroundColor: '#484848', color: 'white' }}>Taux de Remboursement (%)</th>
                <th style={{ backgroundColor: '#484848', color: 'white' }}>Commission ($)</th>
                <th style={{ backgroundColor: '#484848', color: 'white' }}>Statut du Paiement</th>
              </tr>
            </thead>
            <tbody id="agentTable">
              {/* Exemple de données */}
              <tr>
                <td>Emmanuel</td>
                <td>15</td>
                <td>90%</td>
                <td>1,500 $</td>
                <td>Payé</td>
              </tr>
              <tr>
                <td>Don Kabuya</td>
                <td>10</td>
                <td>85%</td>
                <td>1,000 $</td>
                <td>En attente</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
};

export default GestionAgents;
