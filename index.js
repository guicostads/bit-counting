var countBits = function(n) {
 let binary = n.toString(2).split('')
 return binary.map((n) => Number(n)).reduce((a,b) => a + b)
};