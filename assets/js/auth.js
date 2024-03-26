        const accessToken = localStorage.getItem('token');

        // Check if access token exists
        if (!accessToken) {
            window.location.href = 'http://127.0.0.1:5508/dist/login.html'; // Redirect to login page
        } else {
            console.log('Access token:', accessToken);
        }