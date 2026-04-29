import './styles.css';
import { Title } from '../../components/Title';

export function Profile() {
    return (
        <div className="container-profile">
            <Title title="Perfil" />
            <div className="profile">
                WS
            </div>
            <div className="data">
                <p><strong>Nome:</strong> Wellington Silva</p>
                <p><strong>Email:</strong>
                    wellington.silva@example.com
                </p>
                <p><strong>Telefone:</strong> (11) 98765-4321</p>
                <p><strong>Documento:</strong> 123.456.789-00</p>
            </div>
        </div>
    );
};