const deletePostHandler = async (postId) => {
  const response = await fetch(`/api/posts/${postId}`, {
    method: "DELETE",
  });

  if (response.ok) {
    // Reload the dashboard after deleting the post
    document.location.reload();
  } else {
    alert("Failed to delete post.");
  }
};
const updatePostHandler = async (postId) => {
  try {
    const updatedTitle = prompt("Enter the updated title:");
    const updatedContent = prompt("Enter the updated content:");

    if (!updatedTitle || !updatedContent) {
      // Handle empty input values
      alert("Title and content cannot be empty.");
      return;
    }

    const response = await fetch(`/api/posts/${postId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: updatedTitle,
        content: updatedContent,
      }),
    });

    if (response.ok) {
      // Reload the dashboard after updating the post
      document.location.reload();
    } else {
      // Handle error if updating the post fails
      alert("Failed to update post.");
    }
  } catch (err) {
    // Handle any unexpected errors
    console.error("Error updating post:", err);
    alert("An unexpected error occurred.");
  }
};
// Event listener for delete button click
document.querySelectorAll(".delete-post").forEach((button) => {
  button.addEventListener("click", function () {
    const postId = this.getAttribute("data-post-id");
    deletePostHandler(postId);
  });
});

// Event listener for update button click
document.querySelectorAll(".update-post").forEach((button) => {
  button.addEventListener("click", function () {
    const postId = this.getAttribute("data-post-id");
    // Get the post content from the DOM and populate the edit form or modal
    const postTitle = document.querySelector(`#post-title-${postId}`).innerText;
    const postContent = document.querySelector(
      `#post-content-${postId}`
    ).innerText;
    // Populate the edit form or modal with the post data
    document.querySelector("#edit-post-title").value = postTitle;
    document.querySelector("#edit-post-content").value = postContent;
    // Show the edit form or modal
    // Example: document.querySelector("#edit-modal").style.display = "block";
  });
});
