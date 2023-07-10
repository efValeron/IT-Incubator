function humanReadable(seconds) {
  if (seconds === 0) {
    return "now";
  }

  const timeUnits = [
    { unit: "year", duration: 365 * 24 * 60 * 60 },
    { unit: "day", duration: 24 * 60 * 60 },
    { unit: "hour", duration: 60 * 60 },
    { unit: "minute", duration: 60 },
    { unit: "second", duration: 1 }
  ];

  let remainingSeconds = seconds;
  const result = [];

  for (const { unit, duration } of timeUnits) {
    if (remainingSeconds >= duration) {
      const count = Math.floor(remainingSeconds / duration);
      remainingSeconds %= duration;
      result.push(count === 1 ? `${count} ${unit}` : `${count} ${unit}s`);
    }
  }

  return result.join(", ").replace(/,([^,]*)$/, " and$1");
}

console.log(humanReadable(31536121)) // "99:59:59"