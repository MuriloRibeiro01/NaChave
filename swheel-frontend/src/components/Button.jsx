// Um compomente é uma função js que retorna um markup

export function Botao({ children, onClick }) {
    return (
        <button
        onClick={onClick}>
            {children}

        </button>
    )
}