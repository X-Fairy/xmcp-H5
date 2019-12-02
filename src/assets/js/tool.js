// 得到网址上面的参数名及参数值
function getUrlParams () {
    let index = decodeURI(window.location.href).indexOf('?');
    let url = decodeURI(window.location.href).substr(index+1);
    let arr = url.split('&');
    let obj = {};
    for(var i=0; i< arr.length; i++) {
        obj[arr[i].split("=")[0]]=unescape(arr[i].split("=")[1]);
    };
    return obj
}
// 把getUrlParams封装好的给导入出去
export {getUrlParams}



/**
 * 把时间转化成2017-05-28类似这样的时间格式
 */
function changeday(num) {
    let date = new Date(num);
    let z = date.getFullYear() + '-',
        b = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1)  : date.getMonth() + 1) + '-',
        n = (date.getDate() < 10 ? '0' + (date.getDate()) : date.getDate()) ;
    return z+b+n;
}
export {changeday}


/**
 * 把时间转化成2017-05-28 00:00:00 类似这样的时间格式
 */
function changeTime(time){
    let date = new Date(time);
    let z = date.getFullYear() + '-',
    b = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-',
    n = (date.getDate() < 10 ? '0' + (date.getDate()) : date.getDate()) + " " ,
    h = (date.getHours() < 10 ? '0'+ (date.getHours()) : date.getHours()) + ":",
    m = (date.getMinutes() < 10 ? '0' + (date.getMinutes()) : date.getMinutes()) + ":",
    s = (date.getSeconds() < 10 ? '0' + (date.getSeconds()) : date.getSeconds());
    return z+b+n+h+m+s;
}
export {changeTime}



/**
 * 判断一个数是不是6的倍数
 */
function demo(val) {
    if(val % 6 === 0) {
        console.log(this)
    } else {
        console.log('不是6的倍数')
    }
}
export {demo}





/**
 * 数组求和函数
 */
function getNumBox(arr) {
    var a = 0;
    for(var i = 0;i < arr.length; i++){
        a += arr[i];
    }
    return a;
}
export {getNumBox}


// 设置cookie
function setCookie (name,value){
    var Days = 30;
    var exp = new Date();
    exp.setTime(exp.getTime() + Days*24*60*60*1000);
    document.cookie = name + "="+ escape (value) + ";expires=" + exp.toGMTString();
}
export{setCookie}




// 读取cookie
function getCookie(name){
    var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");
    if(arr=document.cookie.match(reg)) {
        return unescape(arr[2]);

    } else {
        return null;
    }
}
export{getCookie}




// 删除cookie
function delCookie(name){
    var exp = new Date();
    exp.setTime(exp.getTime() - 1);
    var cval=getCookie(name);
    if(cval!=null)
    document.cookie= name + "="+cval+";expires="+exp.toGMTString();
}
export{delCookie}





function getCookieLan(name,defaultValue) {      //
    var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
    if (arr = document.cookie.match(reg))
      return unescape(arr[2]);
    else
      return defaultValue;
  }
  
  export {
    getCookieLan
  }