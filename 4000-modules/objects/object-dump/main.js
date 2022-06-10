var obj = {a:1, b:2, c:3, d:4, e:5, f:6, g:7, h:8, i:9}
var result = Object.keys(obj).map((key) => [key, obj[key]]);

console.log(result);