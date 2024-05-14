const commentFormHandler = async function (event) {
  event.preventDefault();

  const postId = document.querySelector('input[name="post-id"]').value;
  const commentText = document.querySelector(
    'textarea[name="comment-body"]'
  ).value;

  if (!commentText) {
    // Handle empty comment: display error message
    console.error("Please enter a comment before submitting.");
    // You can also display an error message on the UI here
    return;
  }

  try {
    const response = await fetch("/api/comments", {
      method: "POST",
      body: JSON.stringify({
        post_id: postId,
        comment_text: commentText,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      // Handle successful submission: potentially update UI
      console.log("Comment submitted successfully!");
      // You can update the UI to show the newly added comment here (e.g., clear form, display success message)
    } else {
      // Handle unsuccessful submission: display error message
      const errorData = await response.json();
      console.error("Error submitting comment:", errorData);
      // You can display a specific error message based on the response data
    }
  } catch (error) {
    console.error("Error submitting comment:", error);
    // Handle errors during the fetch request (e.g., network issues)
  }
};
function submitCommentForm(postId) {
  const commentText = document.querySelector(
    `#comment-form-${postId} textarea[name="comment-body"]`
  ).value;
  if (!commentText.trim()) {
    console.error("Please enter a comment before submitting.");
    return;
  }

  fetch("/api/comments", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      post_id: postId,
      comment_text: commentText,
    }),
  })
    .then((response) => {
      if (response.ok) {
        console.log("Comment submitted successfully!");
        // You can perform any additional actions here (e.g., updating UI)
      } else {
        return response.json().then((errorData) => {
          console.error("Error submitting comment:", errorData);
          // You can handle specific error scenarios here
        });
      }
    })
    .catch((error) => {
      console.error("Error submitting comment:", error);
      // Handle other types of errors (e.g., network issues)
    });
}
document
  .querySelector("#new-comment-form")
  .addEventListener("submit", commentFormHandler);
