import './styles.css';
import Modal from 'react-modal';
import { Trash2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface CardProps {
    id: string;
    imagesUrl?: string[];
    title: string;
    description: string;
    shortAddress?: string;
    value: number;
    isRented?: boolean;
    onDelete: () => void;
};

Modal.setAppElement('#root');

export function Card({ id, imagesUrl, title, description, shortAddress, value, isRented, onDelete }: CardProps) {
    const navigate = useNavigate();

    const goPropertyDetails = () => {
        navigate(`/property-details/${id}`);
    };

    return (
        <div className="card">
            <button
                className="button-icon-delete"
                onClick={onDelete}
            >
                <Trash2 size={20} className="icon-trash" />
            </button>

            <div className="card-images">
                {imagesUrl?.map((url, index) => (
                    <img key={index} src={url} alt={title} />
                ))}
            </div>
            <h3>{title}</h3>
            <p>{description}</p>
            <p>{shortAddress}</p>
            <p className="value">
                R$ {value.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
            </p>
            <p className={isRented ? 'rented rented-true' : 'rented rented-false'}>
                {isRented ? 'Alugado' : 'Disponível'}
            </p>

            <button className='btn-details' onClick={goPropertyDetails}>
                Ver detalhes
            </button>
        </div>
    );
};