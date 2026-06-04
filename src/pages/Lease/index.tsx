import './styles.css';
import { Title } from '../../components/Title';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { apiFetch } from '../../services/api';
import { useState } from 'react';

interface LeaseProps {
    id: string;
    propertyId: string;
    rentAmount: number;
    startDate: string;
    endDate: string;
    tenantName: string;
    tenantContact: string;
}

export function Lease() {
    const { id } = useParams<{ id: string }>();
    const [lease, setLease] = useState<any>(null);

    useEffect(() => {
        async function loadLease() {
            try {
                const response = await apiFetch(`/lease/${id}`);

                setLease(response);
            } catch (error) {
                console.error('Erro ao buscar imóvel');
            }

        }
        
        if (id) {
            loadLease();
        }
    }, [id]);

    return (
        <div className="container-lease">
            <Title title="Aluguel" />

            <div className="info-lease">
                <h3><strong>Código do aluguel:</strong> {id}</h3>
                <h3><strong>Código do imóvel:</strong> {lease?.propertyId}</h3>
                <h3><strong>Valor do aluguel:</strong> R$ {lease?.rentAmount.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</h3>
                <h3><strong>Data de início do contrato:</strong> {lease?.startDate}</h3>
                <h3><strong>Data de término do contrato:</strong> {lease?.endDate}</h3>
                <h3><strong>Inquilino:</strong> {lease?.tenantName}</h3>
                <h3><strong>Contato do inquilino:</strong> {lease?.tenantContact}</h3>
            </div>

        </div>
    );
};