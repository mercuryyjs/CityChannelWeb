/**
 * Created by yukang on 2016/6/13.
 */
/*(function ($) {
    $.fn.slideDown = function (duration) {
        // get old position to restore it then
        var position = this.css('position');

        // show element if it is hidden (it is needed if display is none)
        this.show();

        // place it so it displays as usually but hidden
        this.css({
            position: 'absolute',
            visibility: 'hidden'
        });

        // get naturally height
        var height = this.height();

        // set initial css for animation
        this.css({
            position: position,
            visibility: 'visible',
            overflow: 'hidden',
            height: 0
        });

        // animate to gotten height
        this.animate({
            height: height
        }, duration);
    };
})(Zepto);*/
$(function(){
    $("#tab-btns>a").click(function(){
        $("#provide_content,#myProvide_content,#i_want_provide,#iwantprovide_content").hide();
        var index = $(this).index();
        $("#tab-btns>a").removeClass("curTab");
        $(this).addClass("curTab");
        if(index == 0){
            $("#provide_content,#i_want_provide").show();
            $("#i_want_provide").parent("a").show();
        }else if(index == 1){
            $("#myProvide_content").show();
        }
    });
    $("#i_want_provide").click(function(){
        $("#provide_content,#myProvide_content,#i_want_provide").hide();
        $("#iwantprovide_content").show();
    });
    $(".checkout_result_wrap dt").click(function(){
        $(this).siblings("dd").slideToggle(300);
    });
});
