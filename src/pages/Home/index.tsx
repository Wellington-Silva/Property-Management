import './styles.css';
import { Card } from '../../components/Card';
import { Title } from '../../components/Title';

export function Home() {
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
            </div>
        </div>
    );
};