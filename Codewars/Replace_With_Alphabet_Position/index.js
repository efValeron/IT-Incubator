const alphabetPosition = str => (str.match(/[a-z]/gi) || []).map(c => c.toLowerCase().charCodeAt() - 96).join(' ')

console.log(alphabetPosition("The sunset sets at twelve o' clock."))