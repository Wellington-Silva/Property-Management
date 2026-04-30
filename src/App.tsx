import './App.css';
import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { Profile } from './pages/Profile';
import { Register } from './pages/Register';
import { Footer } from './components/Footer';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function App() {
    return (
        <div className='app-layout'>
            <BrowserRouter>
                <header className='navbar'>
                    <div className="nav-container">
                        <div className="logo">Gestão de Imóveis</div>
                        <nav className='nav-links'>
                            <Link to="/" className="login-btn">Login</Link>
                            <Link to="/register" className="register-btn">Registrar</Link>
                            <Link to="/home">Home</Link>
                            <Link to="/profile">Perfil</Link>
                        </nav>
                    </div>
                </header>

                <main className='main-content'>
                    <Routes>
                        <Route path="/" element={<Login />} />
                        <Route path="/register" element={<Register />} />
                        <Route path="/home" element={<Home />} />
                        <Route path="/profile" element={<Profile />}/>
                    </Routes>
                </main>
            </BrowserRouter>
            <Footer />
        </div>
    );
};

export default App;