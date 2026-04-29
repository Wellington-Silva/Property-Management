import './styles.css';

interface CardProps {
    imagesUrl?: string[];
    title: string;
    description: string;
    value: number;
};

export function Card({ imagesUrl, title, description, value }: CardProps) {
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
        </div>
    );
};