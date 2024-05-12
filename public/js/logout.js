// logout.js

document.addEventListener("DOMContentLoaded", () => {
  const logoutButton = document.querySelector("#logout");

  if (logoutButton) {
    logoutButton.addEventListener("click", async () => {
      try {
        const response = await fetch("/api/users/logout", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
        });

        if (response.ok) {
          document.location.replace("/");
        } else {
          throw new Error(response.statusText);
        }
      } catch (error) {
        console.error("Logout failed:", error);
        // Handle error gracefully, such as displaying an alert to the user
        alert("Logout failed. Please try again.");
      }
    });
  }
});
