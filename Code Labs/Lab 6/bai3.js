fetch("https://reqres.in/api/users?page=1&per_page=10")
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        console.log("Response data:", data);
    })
    .catch(error => {
        console.error("Fetch error:", error);
    });