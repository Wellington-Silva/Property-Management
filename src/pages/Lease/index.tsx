import './styles.css';
import { Title } from '../../components/Title';

interface LeaseProps {
    propertyId: string;
    rentAmount: number;
    startDate: string;
    endDate: string;
    tenantName: string;
    tenantContact: string;
}

export function Lease({ propertyId, rentAmount, startDate, endDate, tenantName, tenantContact }: LeaseProps) {
    return (
        <div className="container-lease">
            <Title title="Aluguel" />

            <div className="info-lease">
                <h3><strong>Código do imóvel:</strong> {propertyId}</h3>
                <h3><strong>Valor do aluguel:</strong> R$ {rentAmount.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</h3>
                <h3><strong>Data de início do contrato:</strong> {startDate}</h3>
                <h3><strong>Data de término do contrato:</strong> {endDate}</h3>
                <h3><strong>Inquilino:</strong> {tenantName}</h3>
                <h3><strong>Contato do inquilino:</strong> {tenantContact}</h3>
            </div>

        </div>
    );
};