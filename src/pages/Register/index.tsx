import './styles.css';
import { Title } from '../../components/Title';
import { Label } from '../../components/Label';
import { Input } from '../../components/Input';

export function Register() {
    return (
        <div className="container-register">
            <Title title="Registrar" />
            <form className='form-data'>
                <Label htmlFor="name">Nome</Label>
                <Input type="text" id="name" name="name" placeholder="Digite seu nome completo" />

                <Label htmlFor="email">Email</Label>
                <Input type="email" id="email" name="email" placeholder="Digite seu email" />

                <Label htmlFor="password">Senha</Label>
                <Input type="password" id="password" name="password" placeholder="Digite sua senha" />

                <button type="submit" className='register-btn'>Registrar</button>
            </form>
        </div>
    );
};