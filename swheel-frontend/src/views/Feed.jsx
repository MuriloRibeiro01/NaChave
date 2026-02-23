import { Botao } from "../components/Button";

// Aqui irá ficar a visualização padrão do app
export function Feed() {
    return (
        <div>
            <div className="feed-vehicle-data">
                <div className="feed-vehicle-group">
                    <div className="feed-vehicle-image">
                        <img src="" alt="" />
                    </div>
                    <div className="feed-vehicle-description">
                        <p>bla bla bla</p>
                    </div>
                </div>
                
            </div>
            <div className="interactive-feed-buttons">
                <BotaoFeed cor="bg-blue" texto="Like" />
                <BotaoFeed cor="bg-red" texto="Dislike" />
            </div>
        </div>
        
    );
}

export function BotaoFeed({ cor, texto }) {
    return (
        <button className={`btn-wheel ${cor}`}>
            {texto}
        </button>
    );
}