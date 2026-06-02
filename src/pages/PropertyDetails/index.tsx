import './styles.css';
import Modal from 'react-modal';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { apiFetch } from '../../services/api';
import { Label } from '../../components/Label';
import { Input } from '../../components/Input';
import { Title } from '../../components/Title';

Modal.setAppElement('#root');

export function PropertyDetails() {
    const { id } = useParams();
    const [property, setProperty] = useState<any>(null);
    const [isTenantOpen, setIsTenantOpen] = useState(false);

    function handleOpenTenant() {
        setIsTenantOpen(true);
    }

    function handleCloseTenant() {
        setIsTenantOpen(false);
    }

    useEffect(() => {
        async function loadProperty() {
            try {
                const response = await apiFetch(`/properties/${id}`);

                setProperty(response);
            } catch (error) {
                console.error('Erro ao buscar imóvel');
            }
        }

        if (id) {
            loadProperty();
        }
    }, [id]);

    return (
        <div className="property-details-container">
            <Title title={`Detalhes do Imóvel`} />
            <div className="property-details-content">
                <div className="property-image">
                    <img src={property?.imagesUrl?.[0]} alt="Imagem do Imóvel" />
                </div>
                <div className="property-info">
                    <div className="card-images">
                        {property?.imagesUrl?.map((url: string, index: number) => (
                            <img key={index} src={url} alt={property?.title} />
                        ))}
                    </div>
                    <h3>{property?.title}</h3>
                    <p>{property?.description}</p>
                    <p>{property?.shortAddress}</p>
                    <p className="value">
                        R$ {property?.value.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                    </p>
                    <button
                        className='btn-add-tenant'
                        onClick={handleOpenTenant}
                    >
                        Adicionar inquilino
                    </button>

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
            </div>
        </div>
    );
};