import './styles.css';

export function Label({ htmlFor, children }: { htmlFor: string, children: React.ReactNode }) {
    return (
        <label className='label' htmlFor={htmlFor}>
            {children}
        </label>
    );
};