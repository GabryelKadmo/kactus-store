// App.js
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './Routes/routes';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

export default function App() {
  return (
    <Router>
      <div className="bg-zinc-100">
        <Header />
        <AppRoutes />
        <Footer />
      </div>
    </Router>
  );
}
