$(function(){
    $("#tab-btns>a").click(function(){
        $("#part_action,#detail_action,#sponsor,.hintLayer").hide();
        var index = $(this).index();
        if(index == 0 ){
            $("#part_action").show();
        }else if(index == 1){
            $("#sponsor").show();
        }
    });
    $("#part_action .per").click(function(){
        $("#part_action,#detail_action,#sponsor,.hintLayer").hide();
        $("#detail_action").show();
    });
})