class GeneratorService {
    static async generateBookBarCode(bookId, accessToken) {
        try {
            const response = await fetch(`${process.env.REACT_APP_URL}/api/books/${bookId}/bar-code`, {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${accessToken}`,
                },
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message);
            }

            const { base64Image } = await response.json();
            return base64Image;
        } catch (error) {
            throw new Error(error.message);
        }
    }

    static async generateUserQrCode(adherentId, accessToken) {
        try {
            const queryParams = adherentId ? `?adherent_id=${adherentId}` : '';
            const response = await fetch(`${process.env.REACT_APP_URL}/api/qr-code${queryParams}`, {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${accessToken}`,
                },
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message);
            }

            const { base64Image } = await response.json();
            return base64Image;
        } catch (error) {
            throw new Error(error.message);
        }
    }
}

export default GeneratorService;
