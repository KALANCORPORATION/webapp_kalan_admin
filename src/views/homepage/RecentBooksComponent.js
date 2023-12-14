import React from 'react';

const RecentBooksComponent = ({ recentBooks }) => {
    return (
        <div className="image-1-parent">
            {recentBooks.map((book, index) => (
                <img
                    key={index}
                    className={`recent-book-icon`}
                    alt=""
                    src={book.book.thumbnailPath || '/df7c680154c81ef43b4cc4f652a7d575-1@2x.png'}
                />
            ))}
        </div>
    );
};

export default RecentBooksComponent;
