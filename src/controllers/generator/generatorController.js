import GeneratorService from "../../services/generator/generatorService";

class GeneratorController {
    static async generateBookBarCode(bookId, accessToken) {
        try {
            return await GeneratorService.generateBookBarCode(bookId, accessToken);
        } catch (error) {
            console.error('Error generating book barcode:', error.message);
            throw error;
        }
    }

    static async generateUserQrCode(adherentId, accessToken) {
        try {
            return await GeneratorService.generateUserQrCode(adherentId, accessToken);
        } catch (error) {
            console.error('Error generating user QR code:', error.message);
            throw error;
        }
    }
}

export default GeneratorController;
