const withAuth = (req, res, next) => {
  // TODO: If the user is not logged in, redirect the user to the login page
  // TODO: If the user is logged in, allow them to view the paintings
  if (!req.session.loggedIn) {
    res.redirect("/login"); // Redirect if user is not logged in
  } else {
    //If the user is logged in, allow them to view the paintings
    next();
  }
};

module.exports = withAuth;
