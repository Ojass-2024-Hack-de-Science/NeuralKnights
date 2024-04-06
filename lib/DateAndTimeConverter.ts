export const FormatDate = (createdAt:Date)=>{
    const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ];
    
      const created = new Date(createdAt);
      const date = created.getDate();
      const monthName = months[created.getMonth()];
      const year = created.getFullYear();
      return {date,monthName,year}
      
}


export const Time = (createdAt: Date) => {
  // Get the current time
  const currentTime = new Date();

  // Calculate the time difference in milliseconds
  const timeDifference = currentTime.getTime() - createdAt.getTime();

  // Define time conversion values
  const minuteInMilliseconds = 60 * 1000;
  const hourInMilliseconds = 60 * minuteInMilliseconds;
  const dayInMilliseconds = 24 * hourInMilliseconds;
  const yearInMilliseconds = 365 * dayInMilliseconds;

  // Convert time difference to appropriate units
  if (timeDifference < minuteInMilliseconds) {
      // Less than a minute ago
      return "Just now";
  } else if (timeDifference < hourInMilliseconds) {
      // Less than an hour ago
      const minutesAgo = Math.floor(timeDifference / minuteInMilliseconds);
      return `${minutesAgo} min ago`;
  } else if (timeDifference < dayInMilliseconds) {
      // Less than a day ago
      const hoursAgo = Math.floor(timeDifference / hourInMilliseconds);
      return `${hoursAgo} hour${hoursAgo > 1 ? 's' : ''} ago`;
  } else if (timeDifference < yearInMilliseconds) {
      // Less than a year ago
      const daysAgo = Math.floor(timeDifference / dayInMilliseconds);
      return `${daysAgo} day${daysAgo > 1 ? 's' : ''} ago`;
  } else {
      // More than a year ago
      const yearsAgo = Math.floor(timeDifference / yearInMilliseconds);
      return `${yearsAgo} year${yearsAgo > 1 ? 's' : ''} ago`;
  }
};

  