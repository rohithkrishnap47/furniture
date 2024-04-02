        const accessToken = localStorage.getItem('token');

        // Check if access token exists
        if (!accessToken) {
            window.location.href = 'https://furnitureemporium.shop/login.html'; // Redirect to login page
        } else {
            console.log('Access token:', accessToken);
        }