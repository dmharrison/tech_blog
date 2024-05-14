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

// Function to handle update post (redirect to update page)
const updatePostHandler = (postId) => {
  document.location.href = `/update-post/${postId}`;
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
    updatePostHandler(postId);
  });
});
