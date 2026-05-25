import './styles.css';
import Modal from 'react-modal';
import { useState } from 'react';
import { Card } from '../../components/Card';
import { Label } from '../../components/Label';
import { Input } from '../../components/Input';
import { Title } from '../../components/Title';
import { Button } from '../../components/Button';

Modal.setAppElement('#root');

export function Home() {
    const [isOpenModal, setIsOpenModal] = useState(false);

    function handleOpenModal() {
        setIsOpenModal(true);
    }

    function handleCloseModal() {
        setIsOpenModal(false);
    }

    return (
        <div className="container">
            <Title title='Meus Imóveis' />

            <div className="my-houses">
                <p className='description'>Aqui estão listados os imóveis que você possui.</p>
                <div className="houses-list">
                    <Card
                        imagesUrl={['/Casa-de-Praia-1.jpg', '/casa-de-praia-2.jpg']}
                        title="Casa na Praia"
                        description="Casa de 3 quartos localizada na praia, ideal para férias."
                        value={2158}
                    />
                    <Card
                        imagesUrl={['/Apartamento-1.jpg', '/Apartamento-2.jpg']}
                        title="Apartamento no Centro"
                        description="Apartamento moderno de 2 quartos no centro da cidade."
                        value={2158}
                    />
                    <Card
                        imagesUrl={['/Casa-Sitio.jpg']}
                        title="Sítio Rural"
                        description="Sítio com 5 hectares, perfeito para quem gosta de natureza."
                        value={2158}
                    />
                </div>
                <button className='btn-add' type="button" onClick={handleOpenModal}>
                    +
                </button>
                <Modal
                    isOpen={isOpenModal}
                    onRequestClose={handleCloseModal}
                    contentLabel="Adicionar Imóvel"
                    className="modal-add-property"
                    overlayClassName="overlay"
                >
                    <button className='closeModal' onClick={handleCloseModal}>X</button>

                    <Title title="Adicionar Imóvel" />

                    <Label htmlFor="name">Nome</Label>
                    <Input id="name" name="name" placeholder="Digite o nome do imóvel" />

                    <Label htmlFor="description">Descrição</Label>
                    <Input id="description" name="description" placeholder="Digite a descrição do imóvel" />

                    <Label htmlFor="value">Valor</Label>
                    <Input id="value" name="value" placeholder="Digite o valor do imóvel" />

                    <Label htmlFor='photo'>Foto</Label>
                    <Input id="photo" name="photo" type="file" />

                    <Button type="submit" name="Cadastrar imóvel" />
                </Modal>
            </div>
        </div>
    );
};