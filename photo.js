var $wrapper = $('.wrapper');
// settimeout用于在指定的毫秒数后调用函数或表达式
var timer = setTimeout( function() {
    $wrapper.removeClass('init');
}, 200);
$('.item').on('click',function(){
    $(this).addClass('active');
    $wrapper.addClass('wrapper-active');
})
$('.tab').on('click',function(e){
    //不在派发事件，调用函数后事件不再分派到其他节点
    e.stopPropagation();
    $('.active').removeClass('active');
    $wrapper.removeClass('wrapper-active');

})
