import  { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


const SignupForm = () => {
    const [formData, setFormData] = useState({
      nom: '',
      prenom: '',
      email: '',
      password: '',
      confirmPassword: ''
    });
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: value
      }));
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      console.log(formData);
      ;
      
  
      // Validation des mots de passe
      if (formData.password !== formData.confirmPassword) {
        alert('Les mots de passe ne correspondent pas');
        return;
      }
  
      // Soumission des données du formulaire
      try {
        const response = await axios.post('http://localhost:3006/api/admins',formData);
        alert('Compte admin créé avec succès');
        console.log(response.data);
      } catch (error) {
        alert('Erreur lors de la création du compte');
        console.error(error);
      }
    };
  return (
    <main>
      <div className="container">
        <section className="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center">
                <div className="d-flex justify-content-center py-4">
                  <a href="/" className="logo d-flex align-items-center w-auto">
                    <img src="/LOGO 1.png" alt="Logo" />
                    <span className="d-none d-lg-block">CASA Perfect</span>
                  </a>
                </div>
                <div className="card mb-3">
                  <div className="card-body">
                    <div className="pt-4 pb-2">
                      <h5 className="card-title text-center pb-0 fs-4">Créer un compte</h5>
                      <p className="text-center small">Entrez vos informations personnelles pour créer un compte</p>
                    </div>
                    <form className="row g-3 needs-validation" onSubmit={handleSubmit}>
                      <div className="col-12">
                        <label htmlFor="nom" className="form-label">Votre Nom</label>
                        <input
                          type="text"
                          name="nom"
                          className="form-control"
                          id="nom"
                          value={formData.nom}
                          onChange={handleChange}
                          required
                        />
                        <div className="invalid-feedback">Please entrez votre nom!</div>
                      </div>
                      <div className="col-12">
                        <label htmlFor="prenom" className="form-label">Votre Prénom</label>
                        <input
                          type="text"
                          name="prenom"
                          className="form-control"
                          id="prenom"
                          value={formData.prenom}
                          onChange={handleChange}
                          required
                        />
                        <div className="invalid-feedback">Please entrez votre prénom!</div>
                      </div>
                      <div className="col-12">
                        <label htmlFor="email" className="form-label">Votre Email</label>
                        <div className="input-group has-validation">
                          <span className="input-group-text" id="inputGroupPrepend">@</span>
                          <input
                            type="email"
                            name="email"
                            className="form-control"
                            id="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                          />
                          <div className="invalid-feedback">Please entrez votre adresse Mail!</div>
                        </div>
                      </div>
                      <div className="col-12">
                        <label htmlFor="password" className="form-label">Mot de Passe</label>
                        <input
                          type="password"
                          name="password"
                          className="form-control"
                          id="password"
                          value={formData.password}
                          onChange={handleChange}
                          required
                        />
                        <div className="invalid-feedback">Veuillez saisir votre mot de passe</div>
                      </div>
                      <div className="col-12">
                        <label htmlFor="confirmPassword" className="form-label">Confirmer votre mot de passe</label>
                        <input
                          type="password"
                          name="confirmPassword"
                          className="form-control"
                          id="confirmPassword"
                          value={formData.confirmPassword}
                          onChange={handleChange}
                          required
                        />
                        <div className="invalid-feedback">Veuillez confirmer votre mot de passe</div>
                        
                        <label className="form-check-label" htmlFor="rememberMe">Je suis d&apos;accord et <a href="">j&apos;accepte les conditions !</a></label>
                      </div>
                    
                      <div className="col-12">
                        <button className="btn btn-primary w-100" type="submit">Créer un Compte</button>
                      </div>
                      <div className="col-12">
                        <p className="small mb-0">Vous avez déjà un compte? <Link to="/login"> S&apos;identifier</Link></p>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="credits">
                  conçu par <a href="https://bootstrapmade.com/">Casa Perfect</a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default SignupForm;
