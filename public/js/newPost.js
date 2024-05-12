const newPost = await Post.create({
  title: "Example Title",
  content: "Example Content",
  user_id: userId, // Assuming you have the user ID available
  date_created: new Date(), // Ensure you populate the date_created field with the current timestamp
});
