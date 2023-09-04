function solve(s) {
  const arr = s.split(/[aeiou]+/).map(segment => {
    return segment.split('').reduce((sum, c) => sum + c.charCodeAt(0) - 96, 0);
  });

  return Math.max(...arr);
}


console.log(solve('chruschtschov'))