import './App.css';
import { useState } from 'react';
import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { Profile } from './pages/Profile';
import { apiFetch } from './services/api';
import { Register } from './pages/Register';
import { Footer } from './components/Footer';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function App() {
    const [user, setUser] = useState<any>(null);

    const handleLoginUser = async (loginData: { email: string; password: string }) => {
        try {
            const response = await apiFetch<any>('/auth/login', {
                method: 'POST',
                body: JSON.stringify(loginData)
            });

            if (response && !response.error) {
                localStorage.setItem('user_session', JSON.stringify(response));
                setUser(response);
                return true;
            }
        } catch (error) {
            alert("E-mail ou senha incorretos!");
        }
        return false;
    };

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
                        <Route path="/" element={<Login onLoginSubmit={handleLoginUser} />} />
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