import  { useState } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

const TableauDeBordFinancier = () => {
  const [totalLoans, setTotalLoans] = useState(500000);
  const [defaultRate, setDefaultRate] = useState(5);
  const [clientSearch, setClientSearch] = useState('');
  const [clientList, setClientList] = useState([]);

  const handleTotalLoansChange = (e) => {
    setTotalLoans(e.target.value);
    updateDashboard();
  };

  const handleDefaultRateChange = (e) => {
    setDefaultRate(e.target.value);
    updateDashboard();
  };

  const handleClientSearchChange = (e) => {
    setClientSearch(e.target.value);
    searchClient(e.target.value);
  };

  const updateDashboard = () => {
    console.log('Tableau de bord mis à jour:', { totalLoans, defaultRate });
  };

  const searchClient = (searchTerm) => {
    console.log('Recherche de clients pour:', searchTerm);
    const exampleClients = ['John Doe', 'Jane Doe', 'Alex Smith'];
    const filteredClients = exampleClients.filter(client =>
      client.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setClientList(filteredClients);
  };

  // Exemple de données pour le graphique
  const data = {
    labels: ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin'],
    datasets: [
      {
        label: 'Montant des Prêts en Cours ($)',
        data: [400000, 450000, 470000, 480000, 500000, 520000], // Exemple de valeurs
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        fill: true,
        tension: 0.4,
      },
    ],
  };

  return (
    <main id="main" className="main">
      <div className="container mt-4">
        <h2 className="text-center">Tableau de Bord Financier</h2>

        {/* KPI Cards */}
        <div className="row">
          <div className="col-md-6">
            <div className="card dashboard-card">
              <div className="card-body">
                <h5 className="card-title">Montant Total des Prêts en Cours</h5>
                <input
                  type="number"
                  className="form-control"
                  value={totalLoans}
                  onChange={handleTotalLoansChange}
                />
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card dashboard-card">
              <div className="card-body">
                <h5 className="card-title">Taux de Défaut (%)</h5>
                <input
                  type="number"
                  className="form-control"
                  value={defaultRate}
                  onChange={handleDefaultRateChange}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Trend Analysis */}
        <div className="card dashboard-card">
          <div className="card-body">
            <h5 className="card-title">Analyse des Tendances Financières</h5>
            <Line data={data} />
          </div>
        </div>

        {/* Client Search */}
        <div className="card dashboard-card">
          <div className="card-body">
            <h5 className="card-title">Recherche de Clients</h5>
            <input
              type="text"
              className="form-control"
              placeholder="Rechercher un client..."
              value={clientSearch}
              onChange={handleClientSearchChange}
            />
            <ul id="clientList" className="list-group mt-2">
              {clientList.map((client, index) => (
                <li key={index} className="list-group-item">
                  {client}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
};

export default TableauDeBordFinancier;
