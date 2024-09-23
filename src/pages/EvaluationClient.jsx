

const EvaluationClient = () => {
  return (
    <main id="main" className="main">
      <div className="container mt-5">
        <h2 className="text-center mb-4">Évaluation de la Solvabilité des Clients</h2>

        {/* Zone de recherche active */}
        <input
          type="text"
          id="searchInput"
          className="form-control search-box"
          placeholder="Rechercher un client..."
        /> 
        <br />

        {/* Tableau Bootstrap */}
        <table className="table table-striped table-bordered table-responsive">
          <thead className="table-dark">
            <tr>
              <th>Nom</th>
              <th>Numéro de Compte</th>
              <th>Score de Solvabilité</th>
              <th>Montant Emprunté</th>
              <th>Remboursement en Cours</th>
              <th>Solde Restant</th>
              <th>Évaluation</th>
            </tr>
          </thead>
          <tbody id="clientTable">
            {/* Exemple de données */}
            <tr>
              <td>Rachel Motolona</td>
              <td>123456789</td>
              <td>750</td>
              <td>$10,000</td>
              <td>$2,000</td>
              <td>$8,000</td>
              <td>Bonne</td>
            </tr>
            <tr>
              <td>Benjamin Bukasa</td>
              <td>987654321</td>
              <td>680</td>
              <td>$5,000</td>
              <td>$1,500</td>
              <td>$3,500</td>
              <td>Moyenne</td>
            </tr>
            <tr>
              <td>Théodore Samba</td>
              <td>456123789</td>
              <td>800</td>
              <td>$15,000</td>
              <td>$5,000</td>
              <td>$10,000</td>
              <td>Excellent</td>
            </tr>
          </tbody>
        </table>
      </div>
    </main>
  );
};

export default EvaluationClient;
