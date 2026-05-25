import './styles.css';
import Modal from 'react-modal';
import { useState } from 'react';

interface CardProps {
    imagesUrl?: string[];
    title: string;
    description: string;
    value: number;
};

Modal.setAppElement('#root');

export function Card({ imagesUrl, title, description, value }: CardProps) {
    const [isOpenModal, setIsOpenModal] = useState(false);

    function handleOpenModal() {
        setIsOpenModal(true);
    }

    function handleCloseModal() {
        setIsOpenModal(false);
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

            <button className='btn-details' onClick={handleOpenModal}>
                Ver detalhes
            </button>
            <Modal
                isOpen={isOpenModal}
                onRequestClose={handleCloseModal}
                className="modal-details"
                contentLabel="Detalhes do imóvel"
                overlayClassName="overlay"
            >
                <button className='closeModal' onClick={handleCloseModal}>X</button>

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
            </Modal>
        </div>
    );
};