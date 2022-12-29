const formatTime = (date) => {
  if(!date){
    return ;
  }
  // 2022. 12. 27.
  let intl = new Intl.DateTimeFormat('ko', { dateStyle: 'medium' }).format(
    new Date(date),
  );
  // 2022.12.27
  intl = intl.replaceAll(' ', '').slice(0, -1);
  return intl;
};

const elapsedTime = (date) => {
  const start = new Date(date);
  const end = new Date();

  const diff = (end - start) / 1000;

  const formatter = new Intl.RelativeTimeFormat('ko', {
    numeric: 'auto',
  });

  const times = [
    { name: 'year', milliSeconds: 60 * 60 * 24 * 365 },
    { name: 'month', milliSeconds: 60 * 60 * 24 * 30 },
    { name: 'day', milliSeconds: 60 * 60 * 24 },
    { name: 'hour', milliSeconds: 60 * 60 },
    { name: 'minute', milliSeconds: 60 },
  ];

  for (const value of times) {
    const betweenTime = Math.floor(diff / value.milliSeconds);

    if (betweenTime > 0) {
      // 시간, 분 단위만 elapsedTime으로 보여줌
      if (value.name === 'hour' || value.name === 'minute') {
        return formatter.format(-betweenTime, value.name);
      }
      return formatTime(date);
    }
  }
  return '방금 전';
};

export { formatTime, elapsedTime };
