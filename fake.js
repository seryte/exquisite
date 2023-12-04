var body = $response.body;
var obj = JSON.parse(body);

obj['inlotTime'] = "2023-12-04 10:39:34";
body = JSON.stringify(obj);

console.log(body);

$done(body);
