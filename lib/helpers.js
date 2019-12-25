export const emailIsValid = email => !!/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(String(email).toLowerCase());

export const timeFromCreation = (creationDate) => {
  const timeDiff = Math.floor((new Date() - new Date(creationDate)) / 1000);
  let interval = Math.floor(timeDiff / 31536000);

  if (interval > 1) {
    return `${interval}y`;
  }
  interval = Math.floor(timeDiff / 2592000);
  if (interval > 1) {
    return `${interval}m`;
  }
  interval = Math.floor(timeDiff / 86400);
  if (interval > 1) {
    return `${interval}d`;
  }
  interval = Math.floor(timeDiff / 3600);
  if (interval > 1) {
    return `${interval}h`;
  }
  interval = Math.floor(timeDiff / 60);
  if (interval > 1) {
    return `${interval}m`;
  }
  return `${Math.floor(timeDiff)}s`;
};

export const getTime = (updatedAt) => {
  const updatedAtDate = new Date(updatedAt);
  const diff = new Date() - updatedAtDate;
  if (diff > 86400000) {
    const monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December',
    ];
    const month = monthNames[updatedAtDate.getMonth()];
    const day = updatedAtDate.getDate();
    if (diff > 31556952000) {
      const year = updatedAtDate.getFullYear();
      return `${day} ${month}, ${year}`;
    }
    return `${day} ${month}`;
  }

  return updatedAtDate.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
};