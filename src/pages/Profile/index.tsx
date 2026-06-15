import './styles.css';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { Title } from '../../components/Title';
import { Label } from '../../components/Label';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

type userType = {
    id: string;
    name: string;
    phone: string;
    birthDate: string;
    email: string;
};

type LoginResponse = {
    token: string;
    user: userType;
    message?: string;
    error?: boolean;
};

interface ProfileProps {
    user: userType | LoginResponse | any;
    onLogout: () => void;
    onUpdate: (updatedUser: userType) => void;
}

export function Profile({ user, onLogout, onUpdate }: ProfileProps) {
    const navigate = useNavigate();
    const [isEditing, setIsEditing] = useState(false);

    const userData: userType = user?.user || user;

    const { register, handleSubmit, formState: { errors } } = useForm<userType>({
        defaultValues: userData
    });

    const handleInternalLogout = () => {
        onLogout();
        navigate('/');
    };

    const onSubmit = (data: userType) => {
        onUpdate({ ...data, id: userData.id });
        setIsEditing(false);
    };

    return (
        <div className="container-profile">
            <Title title="Perfil" />
            <div className="profile">
                WC
            </div>
            <div className="data-profile">
                {
                    isEditing ? (
                        <form className="data-profile-form" onSubmit={handleSubmit(onSubmit)}>
                            <Label htmlFor="name">Nome</Label>
                            <Input
                                {...register("name", { required: "Nome é obrigatório" })}
                                defaultValue={userData.name}
                            />
                            {errors.name && <span className="error">{errors.name.message}</span>}

                            <Label htmlFor="email">Email</Label>
                            <Input
                                {...register("email", { required: "Email é obrigatório" })}
                                defaultValue={userData.email}
                            />
                            {errors.email && <span className="error">{errors.email.message}</span>}

                            <Label htmlFor="phone">Telefone</Label>
                            <Input
                                {...register("phone", { required: "Telefone é obrigatório" })}
                                defaultValue={userData.phone}
                            />
                            {errors.phone && <span className="error">{errors.phone.message}</span>}

                            <Label htmlFor="birthDate">Nascimento</Label>
                            <Input
                                {...register("birthDate", { required: "Nascimento é obrigatório" })}
                                defaultValue={userData.birthDate}
                            />
                            {errors.birthDate && <span className="error">{errors.birthDate.message}</span>}

                            <div style={{ display: 'flex', gap: '10px', marginTop: '20px' }}>
                                <Button name="Salvar Alterações" type="submit" />
                                <button type="button" onClick={() => setIsEditing(false)} className="button-cancel">
                                    Cancelar
                                </button>
                            </div>
                        </form>
                    ) : (
                        <>
                            <div className="data-profile-view">
                                <p><strong>Nome:</strong> <span>Wellington Silva</span></p>
                                <p><strong>Email:</strong> <span>wellington.silva@example.com</span></p>
                                <p><strong>Telefone:</strong> <span>(11) 98765-4321</span></p>
                                <p><strong>Nascimento:</strong> <span>12/07/2000</span></p>
                                <button onClick={() => setIsEditing(true)} className='button-edit' type='submit'>Editar Perfil</button>
                                <button onClick={handleInternalLogout} className='button-logout' type='submit'>Sair da conta</button>
                            </div >
                        </>
                    )
                }
            </div >
        </div >
    );
};