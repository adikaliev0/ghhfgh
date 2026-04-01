import { BrowserRouter as Router, Routes, Route, Link, Outlet } from 'react-router-dom';
import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { Register } from './pages/Register';
import { Dashboard } from './pages/Dashboard';
import { Pricing } from './pages/Pricing';
import { Checkout } from './pages/Checkout';
import { Blocked } from './pages/Blocked';
import { Banned } from './pages/Banned';
import { Settings } from './pages/Settings';
import { History } from './pages/History';
import { Terms } from './pages/Terms';
import { Privacy } from './pages/Privacy';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';

function MainLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground font-sans selection:bg-primary/30">
      <Navbar />
      <main className="flex-1 flex flex-col">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

function FocusLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground font-sans selection:bg-primary/30">
      <Navbar />
      <main className="flex-1 flex flex-col">
        <Outlet />
      </main>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/history" element={<History />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />
        </Route>
        <Route element={<FocusLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/checkout/:plan" element={<Checkout />} />
          <Route path="/blocked" element={<Blocked />} />
          <Route path="/banned" element={<Banned />} />
        </Route>
      </Routes>
    </Router>
  );
}
