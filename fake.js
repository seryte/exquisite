var body = $response.body;
var obj = JSON.parse(body);
var currentDate = new Date();

var year = currentDate.getFullYear();
var month = ('0' + (currentDate.getMonth() + 1)).slice(-2);
var day = ('0' + currentDate.getDate()).slice(-2);
var hours = ('0' + currentDate.getHours()).slice(-2);
var minutes = ('0' + currentDate.getMinutes()).slice(-2);
var seconds = ('0' + currentDate.getSeconds()).slice(-2);

var formattedDate = year + '-' + month + '-' + day + ' ' + hours + ':' + minutes + ':' + seconds;

console.log(formattedDate);
obj['data']['inlotTime'] = formattedDate;
obj['data']['timeLengthStr'] = "0天1小时51分";
obj['data']['preCash'] = 0;
obj['data']['preCash'] = 0;
obj['data']['cashStartTime'] = formattedDate;
obj['data']['cashEndTime'] = formattedDate;
obj['data']['cash'] = 0;
obj['data']['inTime'] = formattedDate;
obj['data']['outTime'] = formattedDate;




body = JSON.stringify(obj);


$done(body);
