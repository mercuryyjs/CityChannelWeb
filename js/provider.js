/**
 * Created by yukang on 2016/6/13.
 */
$(function(){
    $("#tab-btns>a").tap(function(){
        $("#provide_content,#myProvide_content,#i_want_provide,#iwantprovide_content").hide();
        var index = $(this).index();
        $("#tab-btns>a").removeClass("curTab");
        $(this).addClass("curTab");
        if(index == 0){
            $("#provide_content,#i_want_provide").show(200);
            $("#i_want_provide").parent("a").show(200);
        }else if(index == 1){
            $("#myProvide_content").show(200);
        }
    });
    $("#i_want_provide").tap(function(){
        $("#provide_content,#myProvide_content,#i_want_provide").hide();
        $("#iwantprovide_content").show();
    });
});
