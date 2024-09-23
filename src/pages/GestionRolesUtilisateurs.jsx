import { useState } from 'react';

const GestionRolesUtilisateurs = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [users, setUsers] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [newUser, setNewUser] = useState({
    fullName: '',
    gender: 'Male',
    accountNumber: '',
    roles: [],
    permissions: [],
    photo: ''
  });

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setNewUser((prev) => ({ ...prev, [id]: value }));
  };

  const handleCheckboxChange = (e) => {
    const { id, checked, value } = e.target;
    if (id.includes('role')) {
      setNewUser((prev) => ({
        ...prev,
        roles: checked
          ? [...prev.roles, value]
          : prev.roles.filter(role => role !== value)
      }));
    } else if (id.includes('perm')) {
      setNewUser((prev) => ({
        ...prev,
        permissions: checked
          ? [...prev.permissions, value]
          : prev.permissions.filter(perm => perm !== value)
      }));
    }
  };

  const handleModalOpen = () => {
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Ajouter un utilisateur à la liste ou envoyer les données à une API
    setUsers([...users, newUser]);
    handleModalClose();
  };

  const handleSelectAllPermissions = () => {
    // Sélectionner tous les permissions
    setNewUser((prev) => ({
      ...prev,
      permissions: ['Supprimer', 'Modifier', 'Ajouter', 'Enregistrer']
    }));
  };

  return (
    <main id="main" className="main">
      <div className="container">
        <h2 className="my-4 text-center">Gestion des Rôles Utilisateurs</h2>

        {/* Zone de recherche active */}
        <input
          type="text"
          id="searchUser"
          className="form-control"
          placeholder="Rechercher un utilisateur..."
          value={searchTerm}
          onChange={handleSearchChange}
        />

        {/* Tableau responsive */}
        <div className="table-responsive">
          <table className="table table-bordered table-striped">
            <thead className="thead-dark">
              <tr>
                <th style={{ backgroundColor: '#484848', color: 'white' }}>Nom complet</th>
                <th style={{ backgroundColor: '#484848', color: 'white' }}>Sexe</th>
                <th style={{ backgroundColor: '#484848', color: 'white' }}>Numéro de compte</th>
                <th style={{ backgroundColor: '#484848', color: 'white' }}>Rôle</th>
                <th style={{ backgroundColor: '#484848', color: 'white' }}>Permission</th>
                <th style={{ backgroundColor: '#484848', color: 'white' }}>Photo</th>
                <th style={{ backgroundColor: '#484848', color: 'white' }}>Actions</th>
              </tr>
            </thead>
            <tbody id="userTableBody">
              {users.filter(user =>
                user.fullName.toLowerCase().includes(searchTerm.toLowerCase())
              ).map((user, index) => (
                <tr key={index}>
                  <td>{user.fullName}</td>
                  <td>{user.gender}</td>
                  <td>{user.accountNumber}</td>
                  <td>{user.roles.join(', ')}</td>
                  <td>{user.permissions.join(', ')}</td>
                  <td><img src={user.photo} alt="User" style={{ width: '50px', height: '50px' }} /></td>
                  <td>
                    {/* Ajoutez ici des actions pour chaque utilisateur, par exemple modifier ou supprimer */}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Bouton pour ajouter un utilisateur */}
        <button className="btn btn-primary" onClick={handleModalOpen}>
          Ajouter un utilisateur
        </button>

        {/* Modal pour Ajouter/Modifier un utilisateur */}
        {modalOpen && (
          <div className="modal fade show d-block" id="userModal" tabIndex="-1" aria-labelledby="userModalLabel" aria-hidden="true">
            <div className="modal-dialog">
              <div className="modal-content">
                <div style={{ backgroundColor: '#0080ff', color: 'white' }} className="modal-header">
                  <h5 className="modal-title" id="userModalLabel">Ajouter un utilisateur</h5>
                  <button type="button" className="btn-close" onClick={handleModalClose} aria-label="Close"></button>
                </div>
                <div className="modal-body">
                  <form id="userForm" onSubmit={handleFormSubmit}>
                    <div className="form-group">
                      <label htmlFor="fullName">Nom complet</label>
                      <input
                        type="text"
                        className="form-control"
                        id="fullName"
                        value={newUser.fullName}
                        onChange={handleInputChange}
                        required
                      />
                    </div><br />
                    <div className="form-group">
                      <label htmlFor="gender">Sexe</label>
                      <select
                        className="form-control"
                        id="gender"
                        value={newUser.gender}
                        onChange={handleInputChange}
                        required
                      >
                        <option value="Male">Masculin</option>
                        <option value="Female">Féminin</option>
                      </select>
                    </div><br />
                    <div className="form-group">
                      <label htmlFor="accountNumber">Numéro de compte</label>
                      <input
                        type="text"
                        className="form-control"
                        id="accountNumber"
                        value={newUser.accountNumber}
                        onChange={handleInputChange}
                        required
                      />
                    </div><br />
                    <div className="form-group">
                      <label>Rôles</label><br />
                      <div className="form-check form-check-inline">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="roleClient"
                          value="Client"
                          checked={newUser.roles.includes('Client')}
                          onChange={handleCheckboxChange}
                        />
                        <label className="form-check-label" htmlFor="roleClient">Client</label>
                      </div>
                      <div className="form-check form-check-inline">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="roleAgent"
                          value="Agent"
                          checked={newUser.roles.includes('Agent')}
                          onChange={handleCheckboxChange}
                        />
                        <label className="form-check-label" htmlFor="roleAgent">Agent</label>
                      </div>
                      <div className="form-check form-check-inline">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="roleAdmin"
                          value="Administrateur"
                          checked={newUser.roles.includes('Administrateur')}
                          onChange={handleCheckboxChange}
                        />
                        <label className="form-check-label" htmlFor="roleAdmin">Administrateur</label>
                      </div>
                    </div><br />
                    <div className="form-group">
                      <label>Permissions</label><br />
                      <div className="form-check form-check-inline">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="permDelete"
                          value="Supprimer"
                          checked={newUser.permissions.includes('Supprimer')}
                          onChange={handleCheckboxChange}
                        />
                        <label className="form-check-label" htmlFor="permDelete">Supprimer</label>
                      </div><br />
                      <div className="form-check form-check-inline">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="permEdit"
                          value="Modifier"
                          checked={newUser.permissions.includes('Modifier')}
                          onChange={handleCheckboxChange}
                        />
                        <label className="form-check-label" htmlFor="permEdit">Modifier</label>
                      </div><br />
                      <div className="form-check form-check-inline">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="permAdd"
                          value="Ajouter"
                          checked={newUser.permissions.includes('Ajouter')}
                          onChange={handleCheckboxChange}
                        />
                        <label className="form-check-label" htmlFor="permAdd">Ajouter</label>
                      </div><br />
                      <div className="form-check form-check-inline">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="permSave"
                          value="Enregistrer"
                          checked={newUser.permissions.includes('Enregistrer')}
                          onChange={handleCheckboxChange}
                        />
                        <label className="form-check-label" htmlFor="permSave">Enregistrer</label>
                      </div><br />
                      <div className="form-check form-check-inline">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="selectAllPermissions"
                          onChange={handleSelectAllPermissions}
                        />
                        <label className="form-check-label" htmlFor="selectAllPermissions">Sélectionner tous</label>
                      </div>
                    </div><br />
                    <div className="form-group">
                      <label htmlFor="photo">Photo</label><br />
                      <input
                        type="text"
                        className="form-control"
                        id="photo"
                        value={newUser.photo}
                        onChange={handleInputChange}
                        placeholder="Lien de la photo"
                      />
                    </div><br />
                    <button type="submit" className="btn btn-primary" id="saveUserButton">
                      Enregistrer
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
};

export default GestionRolesUtilisateurs;
