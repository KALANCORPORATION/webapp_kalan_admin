export default function HistoryItem({ bookTitle, userName, date, status }) {
    return (
        <div className="history-item">
            {/* Ajouter des images et des icônes selon le statut */}
            <div className="book-image"></div>
            <div className="book-info">
                <h3>{bookTitle}</h3>
                <p>User : {userName}</p>
                <p>{date}</p>
                <p>Status: {status}</p>
            </div>
        </div>
    );
}
