const getRandomElements = (arr, count) => {
  const result = [...arr];
  for (let i = arr.length - 1; i > arr.length - 1 - count; i--) {
    const j = Math.floor(Math.random() * (i + 1)); // Random index from 0 to i
    [result[i], result[j]] = [result[j], result[i]]; // Swap elements
  }

  return result.slice(-count);
};

export { getRandomElements };
