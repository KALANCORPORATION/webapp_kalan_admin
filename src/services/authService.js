class AuthService {
    static async signIn(user) {
        try {
            const response = await fetch('http://localhost:3001/api/auth/signin?type=referent', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(user),
            });

            if (response.ok) {
                const data = await response.json();
                return data.accessToken;
            } else {
                const errorData = await response.json();
                throw new Error(errorData.message);
            }
        } catch (error) {
            throw new Error(error.message);
        }
    }
}

export default AuthService;
