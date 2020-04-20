//获取当前时间

// var use24Hours = true;
// var colunms = Array.from(document.getElementsByClassName('colunm'));

// function Index(dom, use24Hours) {
//     // this.colunm = Array.from(dom);
//     // this.use24Hours = true;
//     this.classlist = ['visible', 'close', 'far', 'distance'];
//     this.creatDom();
//     this.start();
// }
// Index.prototype.start = function() {
//     var self = this;
//     setInterval(function() {
//         var c = self.getColock();
//         console.log(c);


//         colunms.forEach(function(ele, index) {
//             var n = +c[index];
//             var offset = -n * 86;
//             $(ele).css({
//                 'transform': 'translateY(calc(50vh -' + offset + 'px - 43px))'
//             });
//             Array.from(ele.children).forEach(function(ele2, index2) {
//                 var className = self.getClass(n, index2);
//                 $(ele2).attr('class', className);
//             });
//         });

//         // columns.forEach(function(ele, i) {
//         //     var n = +c[i];
//         //     var offset = -n * size;
//         //     ele.style.transform = 'translateY(calc(50vh + ' + offset + 'px - ' + size / 2 + 'px))';
//         //     Array.from(ele.children).forEach(function(ele2, i2) {
//         //         ele2.className = 'num ' + getClass(n, i2);
//         //     });
//         // });
//     }, 500);
// };


// Index.prototype.getClass = function(n, i) {
//     var className = this.classlist.find(function(ele, index) {
//         return i - index === n || i + index === n;
//     });
//     return className || '';
// };
// //获得当前时间并处理时间格式  字符串
// Index.prototype.getColock = function() {
//     // var date = new Date();
//     // //数组调用，把时间拼成字符串
//     // return [this.use24Hours ? date.getHours() : date.getHours() % 12 || 12, date.getMinutes(), date.getSeconds()].reduce(function(p, n) {
//     //     return p + ('0' + n).slice(-2); //截取后两位

//     // }, '');
//     var d = new Date();
//     return [use24Hours ? d.getHours() : d.getHours() % 12 || 12, d.getMinutes(), d.getSeconds()].reduce(function(p, n) {
//         return p + ('0' + n).slice(-2); //截取后两位

//     }, '');

// };
// //动态生成结构,用原型链
// Index.prototype.creatDom = function() {
//     for (var i = 0; i < 6; i++) {
//         var oDiv = '<div>' + i + '</div>';
//         $('.six').append(oDiv);
//     }
//     for (var j = 0; j < 10; j++) {
//         var iDiv = '<div>' + j + '</div>';
//         $('.ten').append(iDiv);
//     }
// };


// new Index($('.colunm'), true);




var size = 86;
var columns = Array.from(document.getElementsByClassName('column'));
var d = undefined,
    c = undefined;
var classList = ['visible', 'close', 'far', 'far', 'distant', 'distant'];
var use24HourClock = true;

// function padClock(p, n) {
//     return p + ('0' + n).slice(-2);
// }

function getClock() {
    d = new Date();
    return [use24HourClock ? d.getHours() : d.getHours() % 12 || 12, d.getMinutes(), d.getSeconds()].reduce(function(p, n) {
        return p + ('0' + n).slice(-2); //截取后两位

    }, '');
}

function getClass(n, i2) {
    return classList.find(function(class_, classIndex) {
        return i2 - classIndex === n || i2 + classIndex === n;
    }) || '';
}

var loop = setInterval(function() {
    c = getClock();

    columns.forEach(function(ele, i) {
        var n = +c[i];
        var offset = -n * size;
        ele.style.transform = 'translateY(calc(50vh + ' + offset + 'px - ' + size / 2 + 'px))';
        Array.from(ele.children).forEach(function(ele2, i2) {
            ele2.className = 'num ' + getClass(n, i2);
        });
    });
}, 200 + Math.E * 10);

// //动态生成结构,用原型链
// function creatDom() {
//     for (var i = 0; i < 6; i++) {
//         var oDiv = '<div>' + i + '</div>';
//         $('.six').append(oDiv);
//     }
//     for (var j = 0; j < 10; j++) {
//         var iDiv = '<div>' + j + '</div>';
//         $('.ten').append(iDiv);
//     }
// }
// creatDom();