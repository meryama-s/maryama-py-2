// data/dataService.js
const axios = require("axios");

//function to fetch posts from JSONPlaceholder
async function fetchPosts() {
  try {
    const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
    return response.data; // Return array of posts
  } catch (error) {
    console.error("Error fetching posts:", error.message);
    throw new Error("Failed to fetch posts from JSONPlaceholder");
  }
}

module.exports = { fetchPosts };
