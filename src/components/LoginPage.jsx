
import { useForm } from 'react-hook-form';
import axios from 'axios';

export default function LoginPage() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    try {
      // Remplace l'URL par celle de ton API backend
      await axios.post('http://localhost:3006/api/admin/login', data);
      alert('Connexion réussie');
    } catch (error) {
      console.error(error);
      alert('Erreur lors de la connexion');
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
                    <img src="/LOGO 1.png" alt="Lingomba S.A.S" />
                    <span className="d-none d-lg-block">Casa Perfect</span>
                  </a>
                </div>

                <div className="card mb-3">
                  <div className="card-body">
                    <div className="pt-4 pb-2">
                      <h5 className="card-title text-center pb-0 fs-4">Connectez-vous 👋🏾</h5>
                      <p className="text-center small">Entrer votre Mail & Mot de Passe Pour vous connectez!</p>
                    </div>

                    <form onSubmit={handleSubmit(onSubmit)} className="row g-3 needs-validation" noValidate>
                      <div className="col-12">
                        <label htmlFor="email" className="form-label">E-Mail</label>
                        <div className="input-group has-validation">
                          <span className="input-group-text" id="inputGroupPrepend">@</span>
                          <input
                            type="text"
                            className="form-control"
                            id="email"
                            {...register('email', { required: 'S\'il vous plaît Veuillez saisir votre Mail!' })}
                          />
                          {errors.email && <div className="invalid-feedback">{errors.email.message}</div>}
                        </div>
                      </div>

                      <div className="col-12">
                        <label htmlFor="password" className="form-label">Mot de Passe</label>
                        <input
                          type="password"
                          className="form-control"
                          id="password"
                          {...register('password', { required: 'S\'il vous plaît Veuillez saisir votre Mot de Passe!' })}
                        />
                        {errors.password && <div className="invalid-feedback">{errors.password.message}</div>}
                      </div>

                      <div className="col-12">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="rememberMe"
                            {...register('remember')}
                          />
                          <label className="form-check-label" htmlFor="rememberMe">Se Souvenir de moi</label>
                        </div>
                      </div>

                      <div className="col-12">
                        <button className="btn btn-primary w-100" type="submit">Se connecter</button>
                      </div>
                      <div className="col-12">
                        <p className="small mb-0">Vous avez déjà un compte? <a href="/signup">Créer un compte</a></p>
                      </div>
                    </form>
                  </div>
                </div>

                <div className="credits">
                  Conçu par <a href="https://bootstrapmade.com/">CASA Perfect</a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
