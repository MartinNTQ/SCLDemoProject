/* eslint-disable no-unused-vars */
import {encode} from 'base-64';
async function Checklogin(user_name, password, errtimelitmit) {
  try {
    const response = await fetch(
      `http://116.97.244.58:8080/user/${user_name}`,
      {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: 'Basic ' + encode('admin:P@ssw0rd1'),
        },
      },
    );
    const result = await response.json();
    if (!result || !result.length) {
      return 'invalid_usr';
    } else {
      if (
        user_name.toUpperCase() === result[0].username.toUpperCase() &&
        password === result[0].pwd
      ) {
        if (result[0].errtime < errtimelitmit) {
          if (result[0].errtime > 0) {
            return 'reset_errtime';
          } else {
            return 'noreset_errtime';
          }
        } else {
          return 'blocked';
        }
      } else {
        return 'invalid_pwd';
      }
    }
  } catch (error) {
    return 'fail_connect';
  }
}

async function Updateerrtime(user_name) {
  try {
    const response = await fetch(
      `http://116.97.244.58:8080/updateerrtime/${user_name}`,
      {
        method: 'PUT',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: 'Basic ' + encode('admin:P@ssw0rd1'),
        },
      },
    );
  } catch (error) {}
}
async function Reseterrtime(user_name) {
  try {
    const response = await fetch(
      `http://116.97.244.58:8080/reseterrtime/${user_name}`,
      {
        method: 'PUT',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: 'Basic ' + encode('admin:P@ssw0rd1'),
        },
      },
    );
  } catch (error) {}
}
async function Resetpassword(user_name, oldpwd, newpwd) {
  try {
    const response = await fetch(
      `http://116.97.244.58:8080/resetpassword/${user_name}/${oldpwd}/${newpwd}`,
      {
        method: 'PUT',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: 'Basic ' + encode('admin:P@ssw0rd1'),
        },
      },
    );
  } catch (error) {}
}
function ConvertDate(yyyymmdd) {
  var ipdat = yyyymmdd;
  var year = ipdat.substr(0, 4);
  var months = [
    'JAN',
    'FEB',
    'MAR',
    'APR',
    'MAY',
    'JUN',
    'JUL',
    'AUG',
    'SEP',
    'OCT',
    'NOV',
    'DEC',
  ];
  var month = months[Number(ipdat.substr(4, 2)) - 1];
  var day = ipdat.substr(6, 2);
  return year + ' ' + month + ' ' + day;
}
function ConvertDay(yyyymmdd) {
  var ipdat = yyyymmdd;
  var month = ipdat.substr(4, 2);
  var day = ipdat.substr(6, 2);
  return month + '/' + day;
}
function currencyFormat(num) {
  return num.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '1,');
}
function last_number_Month(numbermonth) {
  var today = new Date();
  var lastmonth = new Date(today.setMonth(today.getMonth() - numbermonth));
  return lastmonth.getMonth();
}
function monthName(num, lang) {
  var monthcn = [
    '一月',
    '二月',
    '三月',
    '四月',
    '五月',
    '六月',
    '七月',
    '八月',
    '九月',
    '十月',
    '十一月',
    '十二月',
  ];
  var monthen = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  var monthvn = [
    'Tháng 1',
    'Tháng 2',
    'Tháng 3',
    'Tháng 4',
    'Tháng 5',
    'Tháng 6',
    'Tháng 7',
    'Tháng 8',
    'Tháng 9',
    'Tháng 10',
    'Tháng 11',
    'Tháng 12',
  ];
  return lang === 'EN'
    ? monthen[num]
    : lang === 'CN'
    ? monthcn[num]
    : monthvn[num];
}
async function checkImage(eeno) {
  try {
    const res = await fetch(
      `http://116.97.244.58:8080/photos/${eeno}` + '.jpg',
      {
        method: 'GET',
        headers: {
          Authorization: 'Basic ' + encode('admin:P@ssw0rd1'),
        },
      },
    );
    if (res.status === 404) {
      return false;
    } else {
      return true;
    }
  } catch (err) {
    return false;
  }
}
export {
  Checklogin,
  Updateerrtime,
  Reseterrtime,
  Resetpassword,
  ConvertDate,
  checkImage,
  ConvertDay,
  currencyFormat,
  monthName,
  last_number_Month,
};
