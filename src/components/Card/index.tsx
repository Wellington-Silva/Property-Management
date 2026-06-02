import './styles.css';
import Modal from 'react-modal';
import { useState } from 'react';
import { Label } from '../Label';
import { Input } from '../Input';

interface CardProps {
    imagesUrl?: string[];
    title: string;
    description: string;
    value: number;
};

Modal.setAppElement('#root');

export function Card({ imagesUrl, title, description, value }: CardProps) {
    const [isDetailsOpen, setIsDetailsOpen] = useState(false);
    const [isTenantOpen, setIsTenantOpen] = useState(false);

    function handleOpenDetails() {
        setIsDetailsOpen(true);
    }

    function handleCloseDetails() {
        setIsDetailsOpen(false);
    }

    function handleOpenTenant() {
        setIsDetailsOpen(false);
        setIsTenantOpen(true);
    }

    function handleCloseTenant() {
        setIsTenantOpen(false);
    }

    return (
        <div className="card">
            <div className="card-images">
                {imagesUrl?.map((url, index) => (
                    <img key={index} src={url} alt={title} />
                ))}
            </div>
            <h3>{title}</h3>
            <p>{description}</p>
            <p className="value">
                R$ {value.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
            </p>

            <button className='btn-details' onClick={handleOpenDetails}>
                Ver detalhes
            </button>
            <Modal
                isOpen={isDetailsOpen}
                onRequestClose={() => setIsDetailsOpen(false)}
                className="modal-details"
                contentLabel="Detalhes do imóvel"
                overlayClassName="overlay"
            >
                <button className='closeModal' onClick={handleCloseDetails}>X</button>

                <div className="card-images">
                    {imagesUrl?.map((url, index) => (
                        <img key={index} src={url} alt={title} />
                    ))}
                </div>
                <h3>{title}</h3>
                <p>{description}</p>
                <p className="value">
                    R$ {value.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                </p>
                <button
                    className='btn-add-tenant'
                    onClick={handleOpenTenant}
                >
                    Adicionar inquilino
                </button>
            </Modal>

            <Modal
                isOpen={isTenantOpen}
                onRequestClose={() => setIsTenantOpen(false)}
                className="modal-add-tenant"
                contentLabel="Adicionar inquilino"
                overlayClassName="overlay"
            >
                <button className='closeModal' onClick={handleCloseTenant}>X</button>
                <h2>Adicionar Inquilino</h2>
                <form className='form-add-tenant'>
                    <Label htmlFor='tenantName'>Nome</Label>
                    <Input type='text' id='tenantName' placeholder='Digite o nome do inquilino' />

                    <Label htmlFor='tenantEmail'>Documento</Label>
                    <Input type='email' id='tenantEmail' placeholder='Digite o documento do inquilino' />

                    <Label htmlFor='birthDate'>Data de nascimento</Label>
                    <Input type='date' id='birthDate' placeholder='Digite a data de nascimento do inquilino' />

                    <Label htmlFor='phone'>Telefone</Label>
                    <Input type='text' id='phone' placeholder='Digite o telefone do inquilino' />

                    <button type='submit' className='btn-add-tenant'>Adicionar</button>
                </form>
            </Modal>
        </div>
    );
};