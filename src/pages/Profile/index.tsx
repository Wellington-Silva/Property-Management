import './styles.css';
import { Title } from '../../components/Title';

export function Profile() {
    return (
        <div className="container-profile">
            <Title title="Perfil" />
            <div className="profile">
                WC
            </div>
            <div className="data-profile">
                <p><strong>Nome:</strong> <span>Wellington Silva</span></p>
                <p><strong>Email:</strong> <span>wellington.silva@example.com</span></p>
                <p><strong>Telefone:</strong> <span>(11) 98765-4321</span></p>
                <p><strong>Nascimento:</strong> <span>12/07/2000</span></p>
                <button className='button-edit' type='submit'>Editar Perfil</button>
                <button className='button-logout' type='submit'>Sair da conta</button>
            </div>
        </div>
    );
};