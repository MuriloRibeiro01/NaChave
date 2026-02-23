// Um compomente é uma função js que retorna um markup

export function MainButton(props) {
    return (
        <button className="main-button">
            {props.children}
        </button>
    );
}

export function SecondaryButton() {
    return (
        <button className="secondary-button"></button>
    );    
}

export function Botao({ children, variant = 'primario', onClick }) {
    return (
        <button
        className={'botao botao-${variant}'}
        onClick={onClick}>
            {children}

        </button>
    )
}