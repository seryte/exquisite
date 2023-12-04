var body = $response.body;
var obj = JSON.parse(body);
console.log(body);
console.log(123444);
console.log(obj);


obj['inlotTime']['data'] = "2023-12-04 12:39:34";
body = JSON.stringify(obj);


$done(body);
