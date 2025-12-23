const convertData = (data, type) => {
  const convertedData = data[type].map((item) => {
    return {
      date: item[0],
      [type]: item[1],
    };
  });
  return convertedData;
};

const formatLargeNumber = (value) => {
  if (Math.abs(value) >= 1.0e9) {
    // مثلاً برای میلیارد و بالاتر
    return (value / 1.0e9).toFixed(2) + "B";
  }
};

export { convertData, formatLargeNumber };
