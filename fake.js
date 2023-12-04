var body = $response.body;
var obj = JSON.parse(body);

obj['data']['inlotTime'] = "2023-12-04 12:39:34";
body = JSON.stringify(obj);


$done(body);
