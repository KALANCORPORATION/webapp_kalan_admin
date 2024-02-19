class ReservationService {
    static async createReservation(spaceBookId, reservationData, accessToken) {
        const response = await fetch(`${process.env.REACT_APP_URL}/api/space-books/${spaceBookId}/reservation`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${accessToken}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(reservationData),
        });
        if (!response.ok) {
            throw new Error('Erreur lors de la création de la réservation');
        }
        return response.json();
    }

    static async createBorrow(spaceBookId, borrowData, accessToken) {
        const response = await fetch(`${process.env.REACT_APP_URL}/api/space-books/${spaceBookId}/borrow`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${accessToken}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(borrowData),
        });
        if (!response.ok) {
            throw new Error('Erreur lors de la création de l\'emprunt');
        }
        return response.json();
    }

    static async endBorrow(spaceBookId, accessToken) {
        const response = await fetch(`${process.env.REACT_APP_URL}/api/space-books/${spaceBookId}/end`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${accessToken}`,
            },
        });
        if (!response.ok) {
            throw new Error('Erreur lors de la fin de l\'emprunt');
        }
        return response.json();
    }

    static async createBorrowWithReservation(reservationId, accessToken) {
        const response = await fetch(`${process.env.REACT_APP_URL}/api/reservations/${reservationId}/borrow`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${accessToken}`,
            },
        });
        if (!response.ok) {
            throw new Error('Erreur lors de la création de l\'emprunt avec la réservation');
        }
        return response.json();
    }

    static async endBorrowWithReservation(reservationId, accessToken) {
        const response = await fetch(`${process.env.REACT_APP_URL}/api/reservations/${reservationId}/end`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${accessToken}`,
            },
        });
        if (!response.ok) {
            throw new Error('Erreur lors de la fin de l\'emprunt avec la réservation');
        }
        return response.json();
    }
}

export default ReservationService;
