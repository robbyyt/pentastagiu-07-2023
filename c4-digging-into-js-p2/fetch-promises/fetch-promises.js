// A function that returns a Promise
function getRandomNumber() {
    return new Promise((resolve, reject) => {
      // Simulating an asynchronous operation that resolves after a short delay
      setTimeout(() => {
        const randomNumber = Math.floor(Math.random() * 100) + 1;
        resolve(randomNumber);
        // reject(new Error("Failed to get a random number."));
      }, 1000); // Wait for 1 second before resolving the Promise
    });
}
// Using the Promise
getRandomNumber()
  .then((number) => {
    console.log("Random number:", number);
  })
  .catch((error) => {
    console.log("Error:", error.message);
  })
  .finally(() => {
    console.log("Async operation completed.");
  });



// Fetching data from the "https://api.punkapi.com/v2/beers" API 
// Method 1 - Fetching data from the API using fetch and Promises
function fetchBeers() {
    const apiUrl = "https://api.punkapi.com/v2/beers";
  
    return fetch(apiUrl)
    .then((response) => {
        if (!response.ok) {
            throw new Error("Network request failed.");
        }
        return response.json();
    })
    .then((data) => {
        console.log("Beers data:", data);
        return data;
    })
    .catch((error) => {
        console.log("Error fetching data:", error.message);
    });
}

fetchBeers();


// Method 2 - Fetching data with async/await
async function fetchBeersAsync() {
    const apiUrl = "https://api.punkapi.com/v2/beers";
    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
        throw new Error("Network request failed.");
        }
        const data = await response.json();
        console.log("Beers data (async):", data);
        return data;
    } catch (error) {
        console.log("Error fetching data (async):", error.message);
    }
}

fetchBeersAsync();


// Promises methods
// Fetching the beers and handling the results using Promise methods
function fetchBeersPromisesMethods() {
    const apiUrl = "https://api.punkapi.com/v2/beers";
    // Using the fetch function to make the API call and return a Promise
    return fetch(apiUrl)
      .then((response) => {
        // Check if the response status is not ok (e.g., 404 or 500) and reject the Promise with an error
        if (!response.ok) {
          throw new Error("Network request failed.");
        }
        // Parse the JSON data and return it as a Promise
        return response.json();
      });
}

fetchBeersPromisesMethods()
  .then((data) => {
    console.log("[Promises methods] Beers data:", data);
    // You can perform additional operations with the data here
    if (data.length > 0) {
        // Display the first beer name:
        console.log("[Promises methods] First beer name:", data[0].name);
    }
  })
  .catch((error) => {
        console.log("[Promises methods] Error fetching data:", error.message);
  })
  .finally(() => {
        console.log("[Promises methods] API request completed.");
        // Perform any cleanup or final actions here
  });


