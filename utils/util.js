function formatTime(date) {
  var year = date.getFullYear()
  var month = date.getMonth() + 1
  var day = date.getDate()

  var hour = date.getHours()
  var minute = date.getMinutes()
  var second = date.getSeconds()


  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

function formatNumber(n) {
  n = n.toString()
  return n[1] ? n : '0' + n
}

function getDateData(){
  var now = new Date();
  var year = now.getFullYear();
  var month = now.getMonth();
  
  switch (month)
   {
     case 0:
      month = '01';
     break;
     case 1:
      month = '02';
     break;
     case 2:
      month = '03';
     break;
     case 3:
      month = '04';
     break;
     case 4:
      month = '05';
     break;
     case 5:
      month = '06';
     break;
     case 6:
      month = '07';
     break;
     case 7:
      month = '08';
     break;
     case 8:
      month = '09';
     break;
     case 9:
      month = '10';
     break;
     case 10:
      month = '11';
     break;
     case 11:
      month = '12';
     break;
   }
  var year_month = (year + "年" + month + '月');

  var week = now.getDay();
  switch (week)
   {
     case 0:
      week = '星期日';
     break;
     case 1:
      week = '星期一';
     break;
     case 2:
      week = '星期二';
     break;
     case 3:
      week = '星期三';
     break;
     case 4:
      week = '星期四';
     break;
     case 5:
      week = '星期五';
     break;
     case 6:
      week = '星期六';
     break;
   }

   var day = now.getDate();

  return [year_month, week, day];
}

module.exports = {
  formatTime: formatTime
}

module.exports = {
  getDateData: getDateData
}


