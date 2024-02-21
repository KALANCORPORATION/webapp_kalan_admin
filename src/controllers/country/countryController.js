import CountryService from "../../services/country/countryService";

class CountryController {
    static async getAllCountries(accessToken) {
        try {
            return await CountryService.getAllCountries(accessToken);
        } catch (error) {
            console.error('Error fetching all countries:', error);
            throw error;
        }
    }

    static async getCountryById(countryId, accessToken) {
        try {
            return await CountryService.getCountryById(countryId, accessToken);
        } catch (error) {
            console.error('Error fetching country by ID:', error);
            throw error;
        }
    }

    static async createCountry(countryData, accessToken) {
        try {
            return await CountryService.createCountry(countryData, accessToken);
        } catch (error) {
            console.error('Error creating country:', error);
            throw error;
        }
    }

    static async removeCountry(countryId, accessToken) {
        try {
            return await CountryService.removeCountry(countryId, accessToken);
        } catch (error) {
            console.error('Error removing country:', error);
            throw error;
        }
    }
}

export default CountryController;
