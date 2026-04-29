import './styles.css';

export function Footer() {
    return (
        <footer className="footer">
            <p>&copy; {new Date().getFullYear()} Gestão de Imóveis. Todos os direitos reservados.</p>
        </footer>
    );
};