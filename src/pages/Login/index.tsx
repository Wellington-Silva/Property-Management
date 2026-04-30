import './styles.css';
import { useForm } from 'react-hook-form';
import { Title } from '../../components/Title';
import { Input } from '../../components/Input';
import { Label } from '../../components/Label';
import { Button } from '../../components/Button';

export function Login() {

    type LoginTypes = {
        email: string;
        password: string;
    };

    const {
        register,
        formState: { errors }
    } = useForm<LoginTypes>();

    return (
        <div className='container-login'>
            <Title title='Login' />
            <form className='login-form'>
                <Label htmlFor='email'>E-mail</Label>
                <Input
                    type='email'
                    id='email'
                    placeholder='Digite seu email'
                    className={errors.email ? 'input-error' : ''}
                    {...register("email", {
                        required: "O e-mail é obrigatório",
                        pattern: {
                            value: /\S+@\S+\.\S+/,
                            message: "Digite um e-mail válido"
                        }
                    })}
                />
                {errors.email && <span className="error-message">{errors.email.message}</span>}

                < Label htmlFor='password' > Senha</Label>
                <Input 
                    type='password' 
                    id='password' 
                    placeholder='Digite sua senha' 
                     className={errors.password ? 'input-error' : ''}
                    {...register("password", { 
                        required: "A senha é obrigatória",
                        minLength: {
                            value: 8,
                            message: "A senha deve ter no mínimo 8 caracteres"
                        }
                    })} 
                />
                {errors.password && <span className="error-message">{errors.password.message}</span>}

                <Button name='Entrar' type='submit' />
            </form>
        </div >
    );
};