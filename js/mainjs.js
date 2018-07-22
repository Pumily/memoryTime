/*首页内容框架调整*/
$(document).ready(function() {
    var heightWin = $(window).height();
    var widthWin = $(window).width();
    var logoWid = (widthWin - 158) / 2;


    $('.logo').css({ 'margin-left': logoWid + 'px' });
})

/*首页动画特效*/