import './styles.css';
import Modal from 'react-modal';
import { useNavigate } from 'react-router-dom';

interface CardProps {
    id: string;
    imagesUrl?: string[];
    title: string;
    description: string;
    shortAddress?: string;
    value: number;
};

Modal.setAppElement('#root');

export function Card({ id, imagesUrl, title, description, shortAddress, value }: CardProps) {
    const navigate = useNavigate();

    const goPropertyDetails = () => {
        navigate(`/property-details/${id}`);
    };

    return (
        <div className="card">
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

            <button className='btn-details' onClick={goPropertyDetails}>
                Ver detalhes
            </button>
        </div>
    );
};