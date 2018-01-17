var DATES = [[{"d":"01-01","l":"元旦","r":true},{"d":"01-02","l":"十六","r":false},{"d":"01-03","l":"十七","r":false},{"d":"01-04","l":"十八","r":false},{"d":"01-05","l":"小寒","r":true},{"d":"01-06","l":"二十","r":false},{"d":"01-07","l":"廿一","r":false}],[{"d":"01-08","l":"廿二","r":false},{"d":"01-09","l":"廿三","r":false},{"d":"01-10","l":"廿四","r":false},{"d":"01-11","l":"廿五","r":false},{"d":"01-12","l":"廿六","r":false},{"d":"01-13","l":"廿七","r":false},{"d":"01-14","l":"廿八","r":false}],[{"d":"01-15","l":"廿九","r":false},{"d":"01-16","l":"三十","r":false},{"d":"01-17","l":"腊月","r":false},{"d":"01-18","l":"初二","r":false},{"d":"01-19","l":"初三","r":false},{"d":"01-20","l":"大寒","r":true},{"d":"01-21","l":"初五","r":false}],[{"d":"01-22","l":"初六","r":false},{"d":"01-23","l":"初七","r":false},{"d":"01-24","l":"腊八节","r":true},{"d":"01-25","l":"初九","r":false},{"d":"01-26","l":"初十","r":false},{"d":"01-27","l":"十一","r":false},{"d":"01-28","l":"十二","r":false}],[{"d":"01-29","l":"十三","r":false},{"d":"01-30","l":"十四","r":false},{"d":"01-31","l":"十五","r":false},{"d":"02-01","l":"十六","r":false},{"d":"02-02","l":"十七","r":false},{"d":"02-03","l":"十八","r":false},{"d":"02-04","l":"立春","r":true}],[{"d":"02-05","l":"二十","r":false},{"d":"02-06","l":"廿一","r":false},{"d":"02-07","l":"廿二","r":false},{"d":"02-08","l":"小年","r":true},{"d":"02-09","l":"廿四","r":false},{"d":"02-10","l":"廿五","r":false},{"d":"02-11","l":"廿六","r":false}],[{"d":"02-12","l":"廿七","r":false},{"d":"02-13","l":"廿八","r":false},{"d":"02-14","l":"情人节","r":true},{"d":"02-15","l":"除夕","r":true},{"d":"02-16","l":"春节","r":true},{"d":"02-17","l":"初二","r":false},{"d":"02-18","l":"初三","r":false}],[{"d":"02-19","l":"雨水","r":true},{"d":"02-20","l":"初五","r":false},{"d":"02-21","l":"初六","r":false},{"d":"02-22","l":"初七","r":false},{"d":"02-23","l":"初八","r":false},{"d":"02-24","l":"初九","r":false},{"d":"02-25","l":"初十","r":false}],[{"d":"02-26","l":"十一","r":false},{"d":"02-27","l":"十二","r":false},{"d":"02-28","l":"十三","r":false},{"d":"03-01","l":"十四","r":false},{"d":"03-02","l":"元宵节","r":true},{"d":"03-03","l":"十六","r":false},{"d":"03-04","l":"十七","r":false}],[{"d":"03-05","l":"惊蛰","r":true},{"d":"03-06","l":"十九","r":false},{"d":"03-07","l":"二十","r":false},{"d":"03-08","l":"妇女节","r":true},{"d":"03-09","l":"廿二","r":false},{"d":"03-10","l":"廿三","r":false},{"d":"03-11","l":"廿四","r":false}],[{"d":"03-12","l":"廿五","r":false},{"d":"03-13","l":"廿六","r":false},{"d":"03-14","l":"廿七","r":false},{"d":"03-15","l":"廿八","r":false},{"d":"03-16","l":"廿九","r":false},{"d":"03-17","l":"二月","r":false},{"d":"03-18","l":"初二","r":false}],[{"d":"03-19","l":"初三","r":false},{"d":"03-20","l":"初四","r":false},{"d":"03-21","l":"春分","r":true},{"d":"03-22","l":"初六","r":false},{"d":"03-23","l":"初七","r":false},{"d":"03-24","l":"初八","r":false},{"d":"03-25","l":"初九","r":false}],[{"d":"03-26","l":"初十","r":false},{"d":"03-27","l":"十一","r":false},{"d":"03-28","l":"十二","r":false},{"d":"03-29","l":"十三","r":false},{"d":"03-30","l":"十四","r":false},{"d":"03-31","l":"十五","r":false},{"d":"04-01","l":"愚人节","r":true}],[{"d":"04-02","l":"十七","r":false},{"d":"04-03","l":"十八","r":false},{"d":"04-04","l":"十九","r":false},{"d":"04-05","l":"清明","r":true},{"d":"04-06","l":"廿一","r":false},{"d":"04-07","l":"廿二","r":false},{"d":"04-08","l":"廿三","r":false}],[{"d":"04-09","l":"廿四","r":false},{"d":"04-10","l":"廿五","r":false},{"d":"04-11","l":"廿六","r":false},{"d":"04-12","l":"廿七","r":false},{"d":"04-13","l":"廿八","r":false},{"d":"04-14","l":"廿九","r":false},{"d":"04-15","l":"三十","r":false}],[{"d":"04-16","l":"三月","r":false},{"d":"04-17","l":"初二","r":false},{"d":"04-18","l":"初三","r":false},{"d":"04-19","l":"初四","r":false},{"d":"04-20","l":"谷雨","r":true},{"d":"04-21","l":"初六","r":false},{"d":"04-22","l":"地球日","r":true}],[{"d":"04-23","l":"初八","r":false},{"d":"04-24","l":"初九","r":false},{"d":"04-25","l":"初十","r":false},{"d":"04-26","l":"十一","r":false},{"d":"04-27","l":"十二","r":false},{"d":"04-28","l":"十三","r":false},{"d":"04-29","l":"十四","r":false}],[{"d":"04-30","l":"十五","r":false},{"d":"05-01","l":"劳动节","r":true},{"d":"05-02","l":"十七","r":false},{"d":"05-03","l":"十八","r":false},{"d":"05-04","l":"青年节","r":true},{"d":"05-05","l":"立夏","r":true},{"d":"05-06","l":"廿一","r":false}],[{"d":"05-07","l":"廿二","r":false},{"d":"05-08","l":"廿三","r":false},{"d":"05-09","l":"廿四","r":false},{"d":"05-10","l":"廿五","r":false},{"d":"05-11","l":"廿六","r":false},{"d":"05-12","l":"廿七","r":false},{"d":"05-13","l":"母亲节","r":true}],[{"d":"05-14","l":"廿九","r":false},{"d":"05-15","l":"四月","r":false},{"d":"05-16","l":"初二","r":false},{"d":"05-17","l":"初三","r":false},{"d":"05-18","l":"初四","r":false},{"d":"05-19","l":"初五","r":false},{"d":"05-20","l":"初六","r":false}],[{"d":"05-21","l":"小满","r":true},{"d":"05-22","l":"初八","r":false},{"d":"05-23","l":"初九","r":false},{"d":"05-24","l":"初十","r":false},{"d":"05-25","l":"十一","r":false},{"d":"05-26","l":"十二","r":false},{"d":"05-27","l":"十三","r":false}],[{"d":"05-28","l":"十四","r":false},{"d":"05-29","l":"十五","r":false},{"d":"05-30","l":"十六","r":false},{"d":"05-31","l":"十七","r":false},{"d":"06-01","l":"儿童节","r":true},{"d":"06-02","l":"十九","r":false},{"d":"06-03","l":"二十","r":false}],[{"d":"06-04","l":"廿一","r":false},{"d":"06-05","l":"廿二","r":false},{"d":"06-06","l":"芒种","r":true},{"d":"06-07","l":"廿四","r":false},{"d":"06-08","l":"廿五","r":false},{"d":"06-09","l":"廿六","r":false},{"d":"06-10","l":"廿七","r":false}],[{"d":"06-11","l":"廿八","r":false},{"d":"06-12","l":"廿九","r":false},{"d":"06-13","l":"三十","r":false},{"d":"06-14","l":"五月","r":false},{"d":"06-15","l":"初二","r":false},{"d":"06-16","l":"初三","r":false},{"d":"06-17","l":"父亲节","r":true}],[{"d":"06-18","l":"端午节","r":true},{"d":"06-19","l":"初六","r":false},{"d":"06-20","l":"初七","r":false},{"d":"06-21","l":"夏至","r":true},{"d":"06-22","l":"初九","r":false},{"d":"06-23","l":"初十","r":false},{"d":"06-24","l":"十一","r":false}],[{"d":"06-25","l":"十二","r":false},{"d":"06-26","l":"十三","r":false},{"d":"06-27","l":"十四","r":false},{"d":"06-28","l":"十五","r":false},{"d":"06-29","l":"十六","r":false},{"d":"06-30","l":"十七","r":false},{"d":"07-01","l":"十八","r":false}],[{"d":"07-02","l":"十九","r":false},{"d":"07-03","l":"二十","r":false},{"d":"07-04","l":"廿一","r":false},{"d":"07-05","l":"廿二","r":false},{"d":"07-06","l":"廿三","r":false},{"d":"07-07","l":"小暑","r":true},{"d":"07-08","l":"廿五","r":false}],[{"d":"07-09","l":"廿六","r":false},{"d":"07-10","l":"廿七","r":false},{"d":"07-11","l":"廿八","r":false},{"d":"07-12","l":"廿九","r":false},{"d":"07-13","l":"六月","r":false},{"d":"07-14","l":"初二","r":false},{"d":"07-15","l":"初三","r":false}],[{"d":"07-16","l":"初四","r":false},{"d":"07-17","l":"初五","r":false},{"d":"07-18","l":"初六","r":false},{"d":"07-19","l":"初七","r":false},{"d":"07-20","l":"初八","r":false},{"d":"07-21","l":"初九","r":false},{"d":"07-22","l":"初十","r":false}],[{"d":"07-23","l":"大暑","r":true},{"d":"07-24","l":"十二","r":false},{"d":"07-25","l":"十三","r":false},{"d":"07-26","l":"十四","r":false},{"d":"07-27","l":"十五","r":false},{"d":"07-28","l":"十六","r":false},{"d":"07-29","l":"十七","r":false}],[{"d":"07-30","l":"十八","r":false},{"d":"07-31","l":"十九","r":false},{"d":"08-01","l":"建军节","r":true},{"d":"08-02","l":"廿一","r":false},{"d":"08-03","l":"廿二","r":false},{"d":"08-04","l":"廿三","r":false},{"d":"08-05","l":"廿四","r":false}],[{"d":"08-06","l":"廿五","r":false},{"d":"08-07","l":"立秋","r":true},{"d":"08-08","l":"廿七","r":false},{"d":"08-09","l":"廿八","r":false},{"d":"08-10","l":"廿九","r":false},{"d":"08-11","l":"七月","r":false},{"d":"08-12","l":"初二","r":false}],[{"d":"08-13","l":"初三","r":false},{"d":"08-14","l":"初四","r":false},{"d":"08-15","l":"初五","r":false},{"d":"08-16","l":"初六","r":false},{"d":"08-17","l":"七夕","r":true},{"d":"08-18","l":"初八","r":false},{"d":"08-19","l":"初九","r":false}],[{"d":"08-20","l":"初十","r":false},{"d":"08-21","l":"十一","r":false},{"d":"08-22","l":"十二","r":false},{"d":"08-23","l":"处暑","r":true},{"d":"08-24","l":"十四","r":false},{"d":"08-25","l":"中元节","r":true},{"d":"08-26","l":"十六","r":false}],[{"d":"08-27","l":"十七","r":false},{"d":"08-28","l":"十八","r":false},{"d":"08-29","l":"十九","r":false},{"d":"08-30","l":"二十","r":false},{"d":"08-31","l":"廿一","r":false},{"d":"09-01","l":"廿二","r":false},{"d":"09-02","l":"廿三","r":false}],[{"d":"09-03","l":"廿四","r":false},{"d":"09-04","l":"廿五","r":false},{"d":"09-05","l":"廿六","r":false},{"d":"09-06","l":"廿七","r":false},{"d":"09-07","l":"廿八","r":false},{"d":"09-08","l":"白露","r":true},{"d":"09-09","l":"三十","r":false}],[{"d":"09-10","l":"教师节","r":true},{"d":"09-11","l":"初二","r":false},{"d":"09-12","l":"初三","r":false},{"d":"09-13","l":"初四","r":false},{"d":"09-14","l":"初五","r":false},{"d":"09-15","l":"初六","r":false},{"d":"09-16","l":"初七","r":false}],[{"d":"09-17","l":"初八","r":false},{"d":"09-18","l":"初九","r":false},{"d":"09-19","l":"初十","r":false},{"d":"09-20","l":"十一","r":false},{"d":"09-21","l":"十二","r":false},{"d":"09-22","l":"十三","r":false},{"d":"09-23","l":"秋分","r":true}],[{"d":"09-24","l":"中秋节","r":true},{"d":"09-25","l":"十六","r":false},{"d":"09-26","l":"十七","r":false},{"d":"09-27","l":"十八","r":false},{"d":"09-28","l":"十九","r":false},{"d":"09-29","l":"二十","r":false},{"d":"09-30","l":"廿一","r":false}],[{"d":"10-01","l":"国庆节","r":true},{"d":"10-02","l":"廿三","r":false},{"d":"10-03","l":"廿四","r":false},{"d":"10-04","l":"廿五","r":false},{"d":"10-05","l":"廿六","r":false},{"d":"10-06","l":"老人节","r":true},{"d":"10-07","l":"廿八","r":false}],[{"d":"10-08","l":"寒露","r":true},{"d":"10-09","l":"九月","r":false},{"d":"10-10","l":"初二","r":false},{"d":"10-11","l":"初三","r":false},{"d":"10-12","l":"初四","r":false},{"d":"10-13","l":"初五","r":false},{"d":"10-14","l":"初六","r":false}],[{"d":"10-15","l":"初七","r":false},{"d":"10-16","l":"初八","r":false},{"d":"10-17","l":"重阳节","r":true},{"d":"10-18","l":"初十","r":false},{"d":"10-19","l":"十一","r":false},{"d":"10-20","l":"十二","r":false},{"d":"10-21","l":"十三","r":false}],[{"d":"10-22","l":"十四","r":false},{"d":"10-23","l":"霜降","r":true},{"d":"10-24","l":"程序员节","r":true},{"d":"10-25","l":"十七","r":false},{"d":"10-26","l":"十八","r":false},{"d":"10-27","l":"十九","r":false},{"d":"10-28","l":"二十","r":false}],[{"d":"10-29","l":"廿一","r":false},{"d":"10-30","l":"廿二","r":false},{"d":"10-31","l":"廿三","r":false},{"d":"11-01","l":"廿四","r":false},{"d":"11-02","l":"廿五","r":false},{"d":"11-03","l":"廿六","r":false},{"d":"11-04","l":"廿七","r":false}],[{"d":"11-05","l":"廿八","r":false},{"d":"11-06","l":"廿九","r":false},{"d":"11-07","l":"立冬","r":true},{"d":"11-08","l":"十月","r":false},{"d":"11-09","l":"初二","r":false},{"d":"11-10","l":"初三","r":false},{"d":"11-11","l":"光棍节","r":true}],[{"d":"11-12","l":"初五","r":false},{"d":"11-13","l":"初六","r":false},{"d":"11-14","l":"初七","r":false},{"d":"11-15","l":"初八","r":false},{"d":"11-16","l":"初九","r":false},{"d":"11-17","l":"初十","r":false},{"d":"11-18","l":"十一","r":false}],[{"d":"11-19","l":"十二","r":false},{"d":"11-20","l":"十三","r":false},{"d":"11-21","l":"十四","r":false},{"d":"11-22","l":"下元节","r":true},{"d":"11-23","l":"十六","r":false},{"d":"11-24","l":"十七","r":false},{"d":"11-25","l":"十八","r":false}],[{"d":"11-26","l":"十九","r":false},{"d":"11-27","l":"二十","r":false},{"d":"11-28","l":"廿一","r":false},{"d":"11-29","l":"感恩节","r":true},{"d":"11-30","l":"廿三","r":false},{"d":"12-01","l":"廿四","r":false},{"d":"12-02","l":"廿五","r":false}],[{"d":"12-03","l":"廿六","r":false},{"d":"12-04","l":"廿七","r":false},{"d":"12-05","l":"廿八","r":false},{"d":"12-06","l":"廿九","r":false},{"d":"12-07","l":"大雪","r":true},{"d":"12-08","l":"初二","r":false},{"d":"12-09","l":"初三","r":false}],[{"d":"12-10","l":"初四","r":false},{"d":"12-11","l":"初五","r":false},{"d":"12-12","l":"初六","r":false},{"d":"12-13","l":"初七","r":false},{"d":"12-14","l":"初八","r":false},{"d":"12-15","l":"初九","r":false},{"d":"12-16","l":"初十","r":false}],[{"d":"12-17","l":"十一","r":false},{"d":"12-18","l":"十二","r":false},{"d":"12-19","l":"十三","r":false},{"d":"12-20","l":"十四","r":false},{"d":"12-21","l":"十五","r":false},{"d":"12-22","l":"冬至","r":true},{"d":"12-23","l":"十七","r":false}],[{"d":"12-24","l":"平安夜","r":true},{"d":"12-25","l":"圣诞节","r":true},{"d":"12-26","l":"二十","r":false},{"d":"12-27","l":"廿一","r":false},{"d":"12-28","l":"廿二","r":false},{"d":"12-29","l":"廿三","r":false},{"d":"12-30","l":"廿四","r":false}],[{"d":"12-31","l":"廿五","r":false},{"d":"01-01","l":"元旦","r":true},{"d":"01-02","l":"廿七","r":false},{"d":"01-03","l":"廿八","r":false},{"d":"01-04","l":"廿九","r":false},{"d":"01-05","l":"小寒","r":true},{"d":"01-06","l":"腊月","r":false}]];

var M = new Date().getMonth() + 1;
var D = new Date().getDate();
var I = -1;

for (var wi = 0; wi < DATES.length; wi++) {
    var _date = DATES[wi][0].d.split('-');
    var m = Number(_date[0]);
    var d = Number(_date[1]);
    if (m >= M && d > D) {
        I = wi - 1;
        break;
    }
}

if (I === -1) {
    I = DATES.length - 1;
}