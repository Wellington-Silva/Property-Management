import './styles.css';
import { Title } from '../../components/Title';
import { Label } from '../../components/Label';
import { Input } from '../../components/Input';
import { Footer } from '../../components/Footer';
import { Button } from '../../components/Button';

export function Properties() {
    return (
        <div className="container-properties">
            <form className='form-register-properties'>
                <Title title="Imóveis" />

                <Label htmlFor="name">Nome</Label>
                <Input id="name" name="name" placeholder="Digite o nome do imóvel" />

                <Label htmlFor="description">Descrição</Label>
                <Input id="description" name="description" placeholder="Digite a descrição do imóvel" />

                <Label htmlFor="value">Valor</Label>
                <Input id="value" name="value" placeholder="Digite o valor do imóvel" />

                <Label htmlFor='photo'>Foto</Label>
                <Input id="photo" name="photo" type="file" />

                <Button type="submit" name="Cadastrar imóvel" />
            </form>
            <Footer />
        </div>
    );
};