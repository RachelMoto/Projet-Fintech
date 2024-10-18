// import { useState } from 'react';
import Historique from './Historique';
import ReportsCard from './ReportsCard';
import TopSelling from './TopSelling';
import WebsiteTraffic from './WebsiteTraffic';


const DashboardPage = () => {


  return (
    <>
      <div className="container">
        
      </div>
      <main id="main" className="main">
        <div className="pagetitle">
          <h1>Tableau de bord</h1>
          <nav>
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><a href="index.html">Accueil</a></li>
              <li className="breadcrumb-item active">Tableau de bord</li>
            </ol>
            <h1>Compte Courant : <a href="#">L2546852</a></h1>
          </nav>
        </div>

        <section className="section dashboard">
        
        <div style= {{width: '100%'}} className="container-fluid">
          <div className="row">
            {/* Left side */}
            <div className="col-lg-8 col-md-12">
              <div className="row">
                {/* Sales Card */}
                {/* <div className="section-card"> */}
                
                <div style= {{width: '50%'}} className="col-xxl-4 col-md-6">
                  <div className="card info-card sales-card">
                    <div className="filter">
                      <a className="icon" href="#" data-bs-toggle="dropdown">
                        <i className="bi bi-three-dots"></i>
                      </a>
                      <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                        <li className="dropdown-header text-start"><h6>Filtrer</h6></li>
                        <li><a className="dropdown-item" href="#">Aujourd&apos;hui</a></li>
                        <li><a className="dropdown-item" href="#">Ce mois-ci</a></li>
                        <li><a className="dropdown-item" href="#">Cette année</a></li>
                      </ul>
                    </div>
                    <div className="card-body">
                      <h5 className="card-title">Solde <br /><span>Total de votre solde</span></h5>
                      <div className="d-flex align-items-center">
                        <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                          <i className="bi bi-currency-dollar"></i>
                        </div>
                        <div className="ps-3">
                          <h6>$0.00</h6>
                          <span className="text-success small pt-1 fw-bold">0%</span>
                          <span className="text-muted small pt-2 ps-1">Votre solde est vide !</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Revenue Card */}
                <div style= {{width: '50%'}} className="col-xxl-4 col-md-6">
                  <div className="card info-card revenue-card">
                    <div className="filter">
                      <a className="icon" href="#" data-bs-toggle="dropdown">
                        <i className="bi bi-three-dots"></i>
                      </a>
                      <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                        <li className="dropdown-header text-start"><h6>Filtrer</h6></li>
                        <li><a className="dropdown-item" href="#">Aujourd&apos;hui</a></li>
                        <li><a className="dropdown-item" href="#">Ce mois-ci</a></li>
                        <li><a className="dropdown-item" href="#">Cette année</a></li>
                      </ul>
                    </div>
                    <div className="card-body">
                      <h5 className="card-title">Montant envoyé <br /><span>Montant total envoyé</span></h5>
                      <div className="d-flex align-items-center">
                        <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                          <i className="bi bi-currency-dollar"></i>
                        </div>
                        <div className="ps-3">
                          <h6>$0.00</h6>
                          <span className="text-success small pt-1 fw-bold">0%</span>
                          <span className="text-muted small pt-2 ps-1">Pas de montant envoyé</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
              
                

                {/* Customers Card */}
                <div style= {{width: '100%'}} className="col-xxl-4 col-xl-12">
                  <div className="card info-card customers-card">
                    <div className="filter">
                      <a className="icon" href="#" data-bs-toggle="dropdown">
                        <i className="bi bi-three-dots"></i>
                      </a>
                      <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                        <li className="dropdown-header text-start"><h6>Filtrer</h6></li>
                        <li><a className="dropdown-item" href="#">Aujourd&apos;hui</a></li>
                        <li><a className="dropdown-item" href="#">Ce mois-ci</a></li>
                        <li><a className="dropdown-item" href="#">Cette année</a></li>
                      </ul>
                    </div>
                    <div className="card-body">
                      <h5 className="card-title">Montant reçu <br /><span>Montant total reçu</span></h5>
                      <div className="d-flex align-items-center">
                        <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                          <i className="bi bi-currency-dollar"></i>
                        </div>
                        <div className="ps-3">
                          <h6>$0.00</h6>
                          <span className="text-danger small pt-1 fw-bold">0%</span>
                          <span className="text-muted small pt-2 ps-1">Aucun montant reçu</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
              {/* </div> */}

                {/* Reports */}
                <div className="col-12 col-md-12">
                  <div className="card">
                    <div className="filter">
                      <a className="icon" href="#" data-bs-toggle="dropdown">
                        <i className="bi bi-three-dots"></i>
                      </a>
                      <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                        <li className="dropdown-header text-start"><h6>Filtrer</h6></li>
                        <li><a className="dropdown-item" href="#">Aujourd&apos;hui</a></li>
                        <li><a className="dropdown-item" href="#">Ce mois-ci</a></li>
                        <li><a className="dropdown-item" href="#">Cette année</a></li>
                      </ul>
                    </div>
                    <ReportsCard />
                  </div>
                </div>

              </div>
            </div>
            {/* Right side */}
        <div className="col-lg-4 col-md-12">
         <WebsiteTraffic />
        </div>
            <div className="row">
      {/* Colonne avec l'historique */}
      <div className="col-lg-12 col-md-12">
          <Historique />
      </div>
    </div>
    </div>
     
          
    </div>

            {/* Right side */}
            <div className="col-lg-4">
              <div className="card">
                <TopSelling />
              </div>
            </div>
          
          
        </section>
      </main>
    </>
  );
};

export default DashboardPage;



