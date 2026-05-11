import './styles.css';
import { useForm } from 'react-hook-form';
import { Title } from '../../components/Title';
import { Label } from '../../components/Label';
import { Input } from '../../components/Input';
import { useNavigate } from 'react-router-dom';

type userType = {
    name: string;
    phone: string;
    birthDate: string;
    email: string;
    password: string;
};

export function Register({ onRegisterSubmit } : { onRegisterSubmit: (data: userType ) => void }) {
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<userType>();

    const onSubmit = (data: userType) => {
        onRegisterSubmit(data);
        navigate('/profile');
    };

    return (
        <div className="container-register">
            <Title title="Registrar" />
            <form className='form-data' onSubmit={handleSubmit(onSubmit)}>
                <Label htmlFor="name">Nome</Label>
                <Input 
                    type='text'
                    placeholder='Digite seu nome'
                    className={errors.password ? 'input-error' : ''}
                    {...register("name", { required: "O nome é obrigatório" })} 
                />
                {errors.name && <span className="error-message">{errors.name.message}</span>}

                <Label htmlFor="phone">Telefone</Label>
                <Input 
                    type='text'
                    placeholder='Digite seu telefone'
                    className={errors.password? 'input-error' : ''}
                    {...register("phone", { required: "O telefone é obrigatório" })} 
                />
                {errors.name && <span className="error-message">{errors.name.message}</span>}

                <Label htmlFor="birthDate">Data de Nascimento</Label>
                <Input 
                    type='date' 
                    className={errors.password ? 'input-error' : ''}
                    {...register("birthDate", { required: "A data de nascimento é obrigatória" })} 
                />

                <Label htmlFor="email">Email</Label>
                <Input 
                    type='email' 
                    placeholder='Digite seu email'
                    className={errors.password ? 'input-error' : ''}
                    {...register("email", { 
                        required: "O email é obrigatório",
                        pattern: {
                            value: /\S+@\S+\.\S+/,
                            message: "Formato de email inválido"
                        }
                    })} 
                />
                {errors.email && <span className="error-message">{errors.email.message}</span>}

                <Label htmlFor="password">Senha</Label>
                <Input 
                    type='password' 
                    placeholder='Digite sua senha'
                    className={errors.password ? 'input-error' : ''}
                    {...register("password", { 
                        required: "A senha é obrigatória",
                        minLength: {
                            value: 8,
                            message: "A senha deve ter pelo menos 8 caracteres"
                        }
                    })}
                />
                {errors.password && <span className="error-message">{errors.password.message}</span>}

                <button type="submit" className='register-btn'>Registrar</button>
            </form>
        </div>
    );
};