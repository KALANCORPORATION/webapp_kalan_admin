import ReservationService from '../services/ReservationService';

class ReservationController {
    static async createReservation(spaceBookId, reservationData, accessToken) {
        try {
            return await ReservationService.createReservation(spaceBookId, reservationData, accessToken);
        } catch (error) {
            console.error('Erreur lors de la création de la réservation:', error);
            throw error;
        }
    }

    static async createBorrow(spaceBookId, borrowData, accessToken) {
        try {
            return await ReservationService.createBorrow(spaceBookId, borrowData, accessToken);
        } catch (error) {
            console.error('Erreur lors de la création de l\'emprunt:', error);
            throw error;
        }
    }

    static async endBorrow(spaceBookId, accessToken) {
        try {
            return await ReservationService.endBorrow(spaceBookId, accessToken);
        } catch (error) {
            console.error('Erreur lors de la fin de l\'emprunt:', error);
            throw error;
        }
    }

    static async createBorrowWithReservation(reservationId, accessToken) {
        try {
            return await ReservationService.createBorrowWithReservation(reservationId, accessToken);
        } catch (error) {
            console.error('Erreur lors de la création de l\'emprunt avec la réservation:', error);
            throw error;
        }
    }

    static async endBorrowWithReservation(reservationId, accessToken) {
        try {
            return await ReservationService.endBorrowWithReservation(reservationId, accessToken);
        } catch (error) {
            console.error('Erreur lors de la fin de l\'emprunt avec la réservation:', error);
            throw error;
        }
    }
}

export default ReservationController;
