// newPost.js

const newPostFormHandler = async (event) => {
  event.preventDefault();

  const title = document.querySelector("#post-title").value.trim();
  const content = document.querySelector("#post-content").value.trim();

  // Check if title and content are not empty
  if (title && content) {
    // Send a POST request to the server
    const response = await fetch("/api/posts", {
      method: "POST",
      body: JSON.stringify({ title, content }),
      headers: { "Content-Type": "application/json" },
    });

    // Check if the request was successful
    if (response.ok) {
      // Redirect to the dashboard or any other page
      document.location.replace("/dashboard");
      console.log("Post created successfully");
    } else {
      // Display an alert if there was an error
      alert("Failed to create post.");
    }
  } else {
    // Display an alert if title or content is empty
    alert("Please fill in both title and content.");
  }
};

// Add event listener to the form
document
  .querySelector("#new-post-form")
  .addEventListener("submit", newPostFormHandler);
