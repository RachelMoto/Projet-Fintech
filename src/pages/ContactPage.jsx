
const ContactPage = () => {
  return (
    <main id="main" className="main">
      <div className="pagetitle">
        <h1>Contact</h1>
        <nav>
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="index.html">Home</a>
            </li>
            <li className="breadcrumb-item">Pages</li>
            <li className="breadcrumb-item active">Contact</li>
          </ol>
        </nav>
      </div>

      <section className="section contact">
        <div className="row gy-4">
          <div className="col-xl-6">
            <div className="row">
              <div className="col-lg-6">
                <div className="info-box card">
                  <i className="bi bi-geo-alt"></i>
                  <h3>Adresse</h3>
                  <p>
                    Avenue/Marie-josée
                    <br />
                    Commune de Ngaliema
                  </p>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="info-box card">
                  <i className="bi bi-telephone"></i>
                  <h3>Appelez-nous</h3>
                  <p>
                    +243 815050752
                    <br />
                    +243 813401884
                  </p>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="info-box card">
                  <i className="bi bi-envelope"></i>
                  <h3>Envoyez-nous un e-mail</h3>
                  <p>rachelmoto02@gmail.com</p>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="info-box card">
                  <i className="bi bi-clock"></i>
                  <h3>Horaires d&apos;ouverture</h3>
                  <p>
                    Lundi - Vendredi
                    <br />
                    9:00 - 15h00
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-xl-6">
            <div className="card p-4">
              <form action="forms/contact.php" method="post" className="php-email-form">
                <div className="row gy-4">
                  <div className="col-md-6">
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      placeholder="Votre Nom"
                      required
                    />
                  </div>

                  <div className="col-md-6">
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      placeholder="Votre e-mail"
                      required
                    />
                  </div>

                  <div className="col-md-12">
                    <input
                      type="text"
                      className="form-control"
                      name="subject"
                      placeholder="Sujet"
                      required
                    />
                  </div>

                  <div className="col-md-12">
                    <textarea
                      className="form-control"
                      name="message"
                      rows="6"
                      placeholder="Message"
                      required
                    ></textarea>
                  </div>

                  <div className="col-md-12 text-center">
                    <div className="loading">Loading</div>
                    <div className="error-message"></div>
                    <div className="sent-message">
                      Your message has been sent. Thank you!
                    </div>

                    <button type="submit">Envoyer un message</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ContactPage;
