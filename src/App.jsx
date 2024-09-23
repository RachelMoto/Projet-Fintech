
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header'
import Sidebar from './components/Sidebar';
import DashboardPage from './components/DashboardPage';
import Footer from './components/Footer ';
import ClientManagement from './pages/ClientManagement';
import GestionComptesEpargne from './pages/GestionComptesEpargne';
import RechargePage from './pages/RechargePage';
import HistoriqueRemboursement from './pages/HistoriqueRemboursement';
import HistoriqueCredit from './pages/HistoriqueCredit';
import EvaluationClient from './pages/EvaluationClient';
import GestionAgents from './pages/GestionAgents';
import PaiementAgents from './pages/PaiementAgents';
import TableauDeBordFinancier from './pages/TableauFinancier';
import RapportsEtAnalyses from './pages/RapportsEtAnalyses';
import GestionRolesUtilisateurs from './pages/GestionRolesUtilisateurs';
import Profile from './pages/Profile';
import ContactPage from './pages/ContactPage';
import SignupForm from './components/SignupForm';
import LoginPage from './components/LoginPage';



function App() {
  

  return (
    <>
    <Router>
      <div>
      <Header />
      <Sidebar />
      
      <Routes>
      <Route path="/" element={<DashboardPage />} />
      <Route path="/recharge-clients" element={<ClientManagement />} />
      <Route path="/compte-epargne" element={<GestionComptesEpargne />} />
      <Route path="/recharge-agents" element={<RechargePage />} />
      <Route path="/historique-remboursement" element={<HistoriqueRemboursement />} />
      <Route path="/historique-crédit" element={<HistoriqueCredit />} />
      <Route path="/evaluation-client" element={<EvaluationClient />} />
      <Route path="/gestion-agents" element={<GestionAgents />} />
      <Route path="/paiement-agent" element={<PaiementAgents />} />
      <Route path="/tableau-financier" element={<TableauDeBordFinancier />} />
      <Route path="/rapport-analyse" element={<RapportsEtAnalyses />} />
      <Route path="/gestion-utilisateurs" element={<GestionRolesUtilisateurs />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/signup" element={<SignupForm />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/mon-profile" element={<Profile />} />
      <Route path="/deconnexion" element={<SignupForm />} />

      </Routes>
      </div>
      </Router>
      <Footer />
      
    </>
  )
}

export default App;
