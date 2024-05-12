module.exports = {
  formatDate: (date) => {
    console.log("Date:", date);

    if (!date) return ""; // Handle case where date is undefined

    // Convert date string to Date object
    const formattedDate = new Date(date);

    // Format date as MM/DD/YYYY
    const formattedDateString = formattedDate.toLocaleDateString("en-US", {
      month: "2-digit",
      day: "2-digit",
      year: "numeric",
    });

    return formattedDateString;
  },
};
