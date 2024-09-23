
import { useState } from 'react';

const Profile = () => {
  const [activeTab, setActiveTab] = useState('profile-overview');

  return (
    <main id="main" className="main">
      <div className="pagetitle">
        <h1>Profil</h1>
        <nav>
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><a href="index.html">Accueil</a></li>
            <li className="breadcrumb-item">Utilisateur</li>
            <li className="breadcrumb-item active">Profil</li>
          </ol>
        </nav>
      </div>

      <section className="section profile">
        <div className="row">
          <div className="col-xl-4">
            <div className="card">
              <div className="card-body profile-card pt-4 d-flex flex-column align-items-center">
                <img src="/photo.jpg" alt="Profile" className="rounded-circle" />
                <h2>Rachel Motolona</h2>
                <h3>C.E.O Founder Casa Perfect</h3>
                <div className="social-links mt-2">
                  <a href="#" className="twitter"><i className="bi bi-twitter"></i></a>
                  <a href="#" className="facebook"><i className="bi bi-facebook"></i></a>
                  <a href="#" className="instagram"><i className="bi bi-instagram"></i></a>
                  <a href="#" className="linkedin"><i className="bi bi-linkedin"></i></a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-xl-8">
            <div className="card">
              <div className="card-body pt-3">
                <ul className="nav nav-tabs nav-tabs-bordered">
                  <li className="nav-item">
                    <button 
                      className={`nav-link ${activeTab === 'profile-overview' ? 'active' : ''}`}
                      onClick={() => setActiveTab('profile-overview')}
                    >
                      Aperçu
                    </button>
                  </li>
                  <li className="nav-item">
                    <button 
                      className={`nav-link ${activeTab === 'profile-edit' ? 'active' : ''}`}
                      onClick={() => setActiveTab('profile-edit')}
                    >
                      Éditer le Profil
                    </button>
                  </li>
                  <li className="nav-item">
                    <button 
                      className={`nav-link ${activeTab === 'profile-settings' ? 'active' : ''}`}
                      onClick={() => setActiveTab('profile-settings')}
                    >
                      Paramètres
                    </button>
                  </li>
                  <li className="nav-item">
                    <button 
                      className={`nav-link ${activeTab === 'profile-change-password' ? 'active' : ''}`}
                      onClick={() => setActiveTab('profile-change-password')}
                    >
                      Changer le Mot de passe
                    </button>
                  </li>
                </ul>
                <div className="tab-content pt-2">
                  {activeTab === 'profile-overview' && (
                    <div className="tab-pane fade show active profile-overview">
                      <h5 className="card-title">À Propos</h5>
                      <p className="small fst-italic">
                        Sunt est soluta temporibus accusantium neque nam maiores cumque temporibus.
                        Tempora libero non est unde veniam est qui dolor. Ut sunt iure rerum quae quisquam 
                        autem eveniet perspiciatis odit. Fuga sequi sed ea saepe at unde.
                      </p>
                      <h5 className="card-title">Détails du Profil</h5>
                      <div className="row">
                        <div className="col-lg-3 col-md-4 label">Nom et Prénom</div>
                        <div className="col-lg-9 col-md-8">Rachel Motolona</div>
                      </div>
                      <div className="row">
                        <div className="col-lg-3 col-md-4 label">Entreprise</div>
                        <div className="col-lg-9 col-md-8">CASA Perfect</div>
                      </div>
                      <div className="row">
                        <div className="col-lg-3 col-md-4 label">Emploi</div>
                        <div className="col-lg-9 col-md-8">C.E.O Founder Casa Perfect</div>
                      </div>
                      <div className="row">
                        <div className="col-lg-3 col-md-4 label">Pays</div>
                        <div className="col-lg-9 col-md-8">RDC</div>
                      </div>
                      <div className="row">
                        <div className="col-lg-3 col-md-4 label">Adresse</div>
                        <div className="col-lg-9 col-md-8">Kinshasa, Ngaliema, 5b av Marie-josée</div>
                      </div>
                      <div className="row">
                        <div className="col-lg-3 col-md-4 label">Téléphone</div>
                        <div className="col-lg-9 col-md-8">+243 815050752</div>
                      </div>
                      <div className="row">
                        <div className="col-lg-3 col-md-4 label">E-mail</div>
                        <div className="col-lg-9 col-md-8">rachelmoto02@gmail.com</div>
                      </div>
                    </div>
                  )}
                  {activeTab === 'profile-edit' && (
                    <div className="tab-pane fade show active" id="profile-edit">
                      <form>
                        <div className="row mb-3">
                          <label htmlFor="profileImage" className="col-md-4 col-lg-3 col-form-label">Image de Profil</label>
                          <div className="col-md-8 col-lg-9">
                            <img src="/photo.jpg" style={{ fontSize: '100px', width: '150px', height: '170px' }} alt="Profile" />
                            <div className="pt-2">
                              <a href="#" className="btn btn-primary btn-sm" title="Upload new profile image">
                                <i className="bi bi-upload"></i>
                              </a>
                              <a href="#" className="btn btn-danger btn-sm" title="Remove my profile image">
                                <i className="bi bi-trash"></i>
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="row mb-3">
                          <label htmlFor="fullName" className="col-md-4 col-lg-3 col-form-label">Nom et Prénom</label>
                          <div className="col-md-8 col-lg-9">
                            <input name="fullName" type="text" className="form-control" id="fullName" value="Rachel Motolona" />
                          </div>
                        </div>
                        <div className="row mb-3">
                          <label htmlFor="about" className="col-md-4 col-lg-3 col-form-label">À Propos</label>
                          <div className="col-md-8 col-lg-9">
                            <textarea name="about" className="form-control" id="about" style={{ height: '100px' }}>
                              Sunt est soluta temporibus accusantium neque nam maiores cumque temporibus.
                              Tempora libero non est unde veniam est qui dolor. Ut sunt iure rerum quae quisquam 
                              autem eveniet perspiciatis odit. Fuga sequi sed ea saepe at unde.
                            </textarea>
                          </div>
                        </div>
                        <div className="row mb-3">
                          <label htmlFor="company" className="col-md-4 col-lg-3 col-form-label">Entreprise</label>
                          <div className="col-md-8 col-lg-9">
                            <input name="company" type="text" className="form-control" id="company" value="Casa Perfect" />
                          </div>
                        </div>
                        <div className="row mb-3">
                          <label htmlFor="job" className="col-md-4 col-lg-3 col-form-label">Emploi</label>
                          <div className="col-md-8 col-lg-9">
                            <input name="job" type="text" className="form-control" id="job" value="Web Developper" />
                          </div>
                        </div>
                        <div className="row mb-3">
                          <label htmlFor="country" className="col-md-4 col-lg-3 col-form-label">Pays</label>
                          <div className="col-md-8 col-lg-9">
                            <input name="country" type="text" className="form-control" id="country" value="RDC" />
                          </div>
                        </div>
                        <div className="row mb-3">
                          <label htmlFor="address" className="col-md-4 col-lg-3 col-form-label">Adresse</label>
                          <div className="col-md-8 col-lg-9">
                            <input name="address" type="text" className="form-control" id="address" value="5b, av Mari-josée, Ngaliema" />
                          </div>
                        </div>
                        <div className="row mb-3">
                          <label htmlFor="phone" className="col-md-4 col-lg-3 col-form-label">Téléphone</label>
                          <div className="col-md-8 col-lg-9">
                            <input name="phone" type="text" className="form-control" id="phone" value="+243 815050752" />
                          </div>
                        </div>
                        <div className="row mb-3">
                          <label htmlFor="email" className="col-md-4 col-lg-3 col-form-label">E-mail</label>
                          <div className="col-md-8 col-lg-9">
                            <input name="email" type="email" className="form-control" id="email" value="rachelmoto02@gmail.com" />
                          </div>
                        </div>
                        <div className="text-center">
                          <button type="submit" className="btn btn-primary">Enregistrer les Modifications</button>
                        </div>
                      </form>
                    </div>
                  )}
                  {activeTab === 'profile-settings' && (
                    <div className="tab-pane fade show active" id="profile-settings">
                      <form>
                      <div className="row mb-3">
                       <label htmlFor="emailNotifications" className="col-md-4 col-lg-3 col-form-label">Notifications par email</label>
                       <div className="col-md-8 col-lg-9">
                       <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="changesMade" defaultChecked />
                         <label className="form-check-label" htmlFor="changesMade">
                            Modifications apportées à votre compte
                           </label>
                            </div>
                             <div className="form-check">
                             <input className="form-check-input" type="checkbox" id="newProducts" defaultChecked />
                               <label className="form-check-label" htmlFor="newProducts">
                                   Informations sur les nouveaux produits et services
                               </label>
                       </div>
                      <div className="form-check">
                      <input className="form-check-input" type="checkbox" id="proOffers" />
                      <label className="form-check-label" htmlFor="proOffers">
                      Offres marketing et promotionnelles
                      </label>
                     </div>
                      <div className="form-check">
                      <input className="form-check-input" type="checkbox" id="securityNotify" defaultChecked disabled />
                      <label className="form-check-label" htmlFor="securityNotify">
                       Alertes de sécurité
                       </label>
                        </div>
                       </div>
                      </div>
                        <div className="text-center">
                          <button type="submit" className="btn btn-primary">Enregistrer les Paramètres</button>
                        </div>
                      </form>
                    </div>
                  )}
                  {activeTab === 'profile-change-password' && (
                    <div className="tab-pane fade show active" id="profile-change-password">
                      <form>
                        <div className="row mb-3">
                          <label htmlFor="currentPassword" className="col-md-4 col-lg-3 col-form-label">Mot de passe actuel</label>
                          <div className="col-md-8 col-lg-9">
                            <input name="currentPassword" type="password" className="form-control" id="currentPassword" />
                          </div>
                        </div>
                        <div className="row mb-3">
                          <label htmlFor="newPassword" className="col-md-4 col-lg-3 col-form-label">Nouveau mot de passe</label>
                          <div className="col-md-8 col-lg-9">
                            <input name="newPassword" type="password" className="form-control" id="newPassword" />
                          </div>
                        </div>
                        <div className="row mb-3">
                          <label htmlFor="confirmPassword" className="col-md-4 col-lg-3 col-form-label">Confirmer le nouveau mot de passe</label>
                          <div className="col-md-8 col-lg-9">
                            <input name="confirmPassword" type="password" className="form-control" id="confirmPassword" />
                          </div>
                        </div>
                        <div className="text-center">
                          <button type="submit" className="btn btn-primary">Changer le Mot de Passe</button>
                        </div>
                      </form>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Profile;
