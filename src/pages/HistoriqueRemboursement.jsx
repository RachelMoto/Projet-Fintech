
import { useState } from 'react';

const HistoriqueRemboursement = () => {
  const [clients, setClients] = useState([]); // Stockage des clients
  const [searchTerm, setSearchTerm] = useState(''); // Terme de recherche
  const [modalVisible, setModalVisible] = useState(false); // Visibilité du modal
  const [clientFormData, setClientFormData] = useState({
    clientName: '',
    accountNumber: '',
    repaymentAmount: '',
    remainingAmount: '',
    repaymentDate: '',
    clientIndex: null,
  }); // Données du formulaire client

  // Fonction pour ouvrir le modal
  const openModal = () => {
    setModalVisible(true);
  };

  // Fonction pour fermer le modal
  const closeModal = () => {
    setModalVisible(false);
    clearForm();
  };

  // Fonction pour gérer la soumission du formulaire
  const handleFormSubmit = (event) => {
    event.preventDefault();

    if (clientFormData.clientIndex !== null) {
      // Mise à jour du client existant
      const updatedClients = [...clients];
      updatedClients[clientFormData.clientIndex] = clientFormData;
      setClients(updatedClients);
    } else {
      // Ajout d'un nouveau client
      setClients([...clients, clientFormData]);
    }
    closeModal();
  };

  // Fonction pour vider le formulaire
  const clearForm = () => {
    setClientFormData({
      clientName: '',
      accountNumber: '',
      repaymentAmount: '',
      remainingAmount: '',
      repaymentDate: '',
      clientIndex: null,
    });
  };

  // Fonction pour gérer les changements dans le formulaire
  const handleChange = (e) => {
    setClientFormData({ ...clientFormData, [e.target.id]: e.target.value });
  };

  return (
    <main id="main" className="main">
      <div className="container mt-5">
        <h2 className="mb-4">Historique Remboursement</h2>
        <div className="row mb-3">
          <div className="col-md-6">
            <input
              type="text"
              id="searchClient"
              className="form-control"
              placeholder="Rechercher un client..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="col-md-6 text-right">
            <button className="btn btn-success" onClick={openModal}>
              Ajouter un Client
            </button>
          </div>
        </div>
        <table className="table table-bordered table-striped">
          <thead className="thead-dark">
            <tr>
              <th style={{ backgroundColor: '#484848', color: 'white' }}>Nom du Client</th>
              <th style={{ backgroundColor: '#484848', color: 'white' }}>Numéro de Compte</th>
              <th style={{ backgroundColor: '#484848', color: 'white' }}>Montant de Remboursement</th>
              <th style={{ backgroundColor: '#484848', color: 'white' }}>Reste à Rembourser</th>
              <th style={{ backgroundColor: '#484848', color: 'white' }}>Date de Remboursement</th>
              <th style={{ backgroundColor: '#484848', color: 'white' }}>Actions</th>
            </tr>
          </thead>
          <tbody id="clientTable">
            {clients
              .filter((client) =>
                client.clientName.toLowerCase().includes(searchTerm.toLowerCase())
              )
              .map((client, index) => (
                <tr key={index}>
                  <td>{client.clientName}</td>
                  <td>{client.accountNumber}</td>
                  <td>{client.repaymentAmount}</td>
                  <td>{client.remainingAmount}</td>
                  <td>{client.repaymentDate}</td>
                  <td>
                    <button
                      className="btn btn-warning btn-sm"
                      onClick={() => {
                        setClientFormData({ ...client, clientIndex: index });
                        openModal();
                      }}
                    >
                      Modifier
                    </button>
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() =>
                        setClients(clients.filter((_, i) => i !== index))
                      }
                    >
                      Supprimer
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
        </div>

      {/* Modal pour Ajouter/Modifier un Client */}
      {modalVisible && (
        <div className="modal fade show" style={{ display: 'block' }} role="dialog">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div style={{ backgroundColor: '#53a0ec', color: 'white' }} className="modal-header">
                <h5 className="modal-title">Ajouter/Modifier un Client</h5>
                <button type="button" className="close" onClick={closeModal}>
                  <span>&times;</span>
                </button>
              </div><br />
              <div className="modal-body">
                <form id="clientForm" onSubmit={handleFormSubmit}>
                  <div className="form-group">
                    <label htmlFor="clientName">Nom du Client</label>
                    <input
                      type="text"
                      className="form-control"
                      id="clientName"
                      value={clientFormData.clientName}
                      onChange={handleChange}
                      required
                    />
                  </div><br />
                  <div className="form-group">
                    <label htmlFor="accountNumber">Numéro de Compte</label>
                    <input
                      type="text"
                      className="form-control"
                      id="accountNumber"
                      value={clientFormData.accountNumber}
                      onChange={handleChange}
                      required
                    />
                  </div><br />
                  <div className="form-group">
                    <label htmlFor="repaymentAmount">Montant de Remboursement</label>
                    <input
                      type="number"
                      className="form-control"
                      id="repaymentAmount"
                      value={clientFormData.repaymentAmount}
                      onChange={handleChange}
                      required
                    />
                  </div><br />
                  <div className="form-group">
                    <label htmlFor="remainingAmount">Reste à Rembourser</label>
                    <input
                      type="number"
                      className="form-control"
                      id="remainingAmount"
                      value={clientFormData.remainingAmount}
                      onChange={handleChange}
                      required
                    />
                  </div><br />
                  <div className="form-group">
                    <label htmlFor="repaymentDate">Date de Remboursement</label>
                    <input
                      type="date"
                      className="form-control"
                      id="repaymentDate"
                      value={clientFormData.repaymentDate}
                      onChange={handleChange}
                      required
                    />
                  </div><br />
                  <button type="submit" className="btn btn-primary">
                    Enregistrer
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
};

export default HistoriqueRemboursement;
