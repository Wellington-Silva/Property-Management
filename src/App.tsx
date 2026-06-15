import './App.css';
import { useState } from 'react';
import { useEffect } from 'react';
import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { Lease } from './pages/Lease';
import { Profile } from './pages/Profile';
import { apiFetch } from './services/api';
import { Register } from './pages/Register';
import { Footer } from './components/Footer';
import { PropertyDetails } from './pages/PropertyDetails';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function App() {
    const [user, setUser] = useState<any>(null);
    const [properties, setProperties] = useState<any[]>([]);

    // Load user session from localStorage on app initialization
    useEffect(() => {
        const session = localStorage.getItem('user_session');
        if (session) {
            const userData = JSON.parse(session);
            if (userData && (userData.id || userData.user?.id)) {
                setUser(userData);
            }
        }
    }, []);

    useEffect(() => {
        const loadProperties = async () => {
            const userId = user?.user?.id || user?.id;
            const token = user?.token;

            if (!userId || !token) return;

            try {
                const response = await apiFetch<any>(`/properties?userId=${userId}`);
                const propertiesList = Array.isArray(response) ? response : (response.properties || []);
                setProperties(propertiesList);
            } catch (err) {
                console.error("Erro ao buscar imóveis");
                setProperties([]);
            }
        };

        loadProperties();
    }, [user]);


    // AUTHENTICATION HANDLERS
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

    const handleLogout = async () => {
        try {
            localStorage.removeItem("user_session");
            setUser(null);
        } catch (error) {
            alert("Não foi possível fazer o logout");
        }
    };

    // USER MANAGEMENT HANDLERS
    const handleRegisterUser = async (userRegistered: any) => {
        try {
            const response = await apiFetch<any>("/auth/register", {
                method: "POST",
                body: JSON.stringify(userRegistered)
            });

            if (response && !response.error) {
                localStorage.setItem('user_session', JSON.stringify(response));
                setUser(response);
                return true;
            }
            return false;
        } catch (error) {
            console.error("Erro ao cadastrar usuário!", error);
            alert("Erro ao cadastrar usuário!");
        }
    };

    const handleUpdateUser = async (userData: any) => {
        try {
            const response = await apiFetch<any>(`/users/${userData.id}`, {
                method: "PUT",
                body: JSON.stringify(userData)
            });
            setUser(response.user || response);

            const session = JSON.parse(localStorage.getItem('user_session') || '{}');
            const newSession = {
                ...session,
                user: response.user || response
            };

            localStorage.setItem('user_session', JSON.stringify(newSession));
            alert("Perfil atualizado!");
        } catch (error) {
            alert("Não foi possível editar dados do usuário logado");
        }
    };

    // PROPERTY MANAGEMENT HANDLERS
    const handleDeleteProperty = async (id: string) => {
        if (!window.confirm("Tem certeza que deseja excluir este imóvel?")) return;

        try {
            await apiFetch(`/properties/${id}`, {
                method: "DELETE"
            });

            // Atualiza o estado local removendo o imóvel da lista
            setProperties(prevProperties => prevProperties.filter(property => (property.id || property._id) !== id));

        } catch (error) {
            console.error("Erro ao deletar imóvel:", error);
            alert("Não foi possível excluir o imóvel no servidor.");
        }
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
                        <Route path="/register" element={<Register onRegisterSubmit={handleRegisterUser} />} />
                        <Route path="/home" element={<Home onDelete={handleDeleteProperty} />} />
                        <Route path="/profile" element={<Profile user={user} onLogout={handleLogout} onUpdate={handleUpdateUser} />} />
                        <Route path="/property-details/:id" element={<PropertyDetails />} />
                        <Route path="/lease/:id" element={<Lease />} />
                    </Routes>
                </main>
            </BrowserRouter>
            <Footer />
        </div>
    );
};

export default App;