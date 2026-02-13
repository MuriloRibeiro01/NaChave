function MenuInput() {
    return (
        <div>
            <InputLogin />
            <div className="botao-login">
                <BotaoLogin />
            </div>
        </div>
                
    );
}

function BotaoLogin() {
    const EstiloBotao = {
        color: "green"
    };
    return (
        <button>Login</button>
    );
}

function InputLogin() {
    return (
        <input type="text" placeholder="Usuario" />
    );
}

export default MenuInput;