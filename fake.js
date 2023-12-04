var body = $response.body;
var obj = JSON.parse(body);

obj['inlotTime']['data'] = "2023-12-04 12:39:34";
body = JSON.stringify(obj);

console.log(body);

$done(body);
