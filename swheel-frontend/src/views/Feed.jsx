export function Feed() {
  return (
    <div className="feed-container">

      <div className="feed-card">

        <div className="feed-image">
          <img 
            src="https://imgs.search.brave.com/q2HXY0p0wpDsMaS4erUhiD0XkfpebyNTwaFU2DlXndQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90aGUt/Z2FyYWdlLnMzLnVz/LWVhc3QtMi5hbWF6/b25hd3MuY29tLzIw/MjUvMDQvMTk5Mi1H/TS1PcGFsYS1EaXBs/b21hdGEtU0UtYXV0/b21hdGljLTQuMS1h/LXZlbmRhLXRoZS1n/YXJhZ2UtMzUuanBn"
            alt="Opala Diplomata 92"
          />

          <div className="feed-overlay">
            <h2>Opala Diplomata 92</h2>
            <span className="price">R$ 85.000</span>
          </div>
        </div>

        <div className="feed-info">
          <p>6 cilindros, impecável, pneus novos.</p>
          <p className="location">📍 São Paulo - SP</p>
        </div>

        <div className="feed-actions">
          <BotaoFeed cor="btn-dislike" texto="❌" />
          <BotaoFeed cor="btn-like" texto="❤️" />
        </div>

      </div>

    </div>
  );
}

export function BotaoFeed({ cor, texto }) {
  return (
    <button className={`feed-button ${cor}`}>
      {texto}
    </button>
  );
}