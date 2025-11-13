import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/common/Header';
import { Footer } from './components/common/Footer';
import SEO from './components/common/SEO';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Services } from './pages/Services';
import { Contact } from './pages/Contact';
import { RequestStaff } from './pages/RequestStaff';
import { Login } from './pages/Login';
import { Admin } from './pages/Admin';
import AuthGuard from './components/common/AuthGuard';

function App() {
  return (
    <Router>
      <SEO />
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/request-staff" element={<RequestStaff />} />
            <Route path="/login" element={<Login />} />
            <Route
              path="/admin"
              element={
                <AuthGuard>
                  <Admin />
                </AuthGuard>
              }
            />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

