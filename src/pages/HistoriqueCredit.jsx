

const HistoriqueCredit = () => {
  return (
    <main id="main" className="main">
      <div className="container mt-4">
        <h2 className="mb-4">Suivi des Historiques de Prêts et Remboursements</h2>

        <div className="search-box mb-3">
          <input
            type="text"
            id="searchInput"
            className="form-control"
            placeholder="Rechercher un client..."
          />
        </div>

        <table className="table table-striped table-responsive">
          <thead className="table-dark">
            <tr>
              <th scope="col">Nom du Client</th>
              <th scope="col">Numéro de Compte</th>
              <th scope="col">Montant du Prêt</th>
              <th scope="col">Montant Remboursé</th>
              <th scope="col">Reste à Rembourser</th>
              <th scope="col">Date du Prêt</th>
              <th scope="col">Date de Remboursement</th>
            </tr>
          </thead>
          <tbody id="loanTableBody">
            {/* Les lignes du tableau seront ajoutées dynamiquement ici */}
          </tbody>
        </table>
      </div>
    </main>
  );
};

export default HistoriqueCredit;
