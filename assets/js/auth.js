        const accessToken = localStorage.getItem('token');

        // Check if access token exists
        if (!accessToken) {
            window.location.href = '/login.html'; // Redirect to login page
        } else {
            console.log('Access token:', accessToken);
        }