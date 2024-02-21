class CountryService {
    static async getAllCountries(accessToken) {
        const response = await fetch(`${process.env.REACT_APP_URL}/api/countries`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${accessToken}`,
            },
        });
        if (!response.ok) {
            throw new Error('Error fetching countries');
        }
        return await response.json();
    }

    static async getCountryById(countryId, accessToken) {
        const response = await fetch(`${process.env.REACT_APP_URL}/api/countries/${countryId}`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${accessToken}`,
            },
        });
        if (!response.ok) {
            throw new Error('Country not found');
        }
        return await response.json();
    }

    static async createCountry(countryData, accessToken) {
        const response = await fetch(`${process.env.REACT_APP_URL}/api/countries`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${accessToken}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(countryData),
        });
        if (!response.ok) {
            throw new Error('Error creating country');
        }
        return await response.json();
    }

    static async removeCountry(countryId, accessToken) {
        const response = await fetch(`${process.env.REACT_APP_URL}/api/countries/${countryId}`, {
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${accessToken}`,
            },
        });
        if (!response.ok) {
            throw new Error('Error deleting country');
        }
        return await response.json();
    }
}

export default CountryService;
