$(function(){
    $("#tab-btns>a").click(function(){
        $("#part_action,#detail_action,#sponsor,.hintLayer").hide();
        var index = $(this).index();
        $("#tab-btns>a").removeClass("curTab");
        $(this).addClass("curTab");
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
    $("#file").on("change",function(){
       var files =  $("#file").get(0).files;
        for(var i=0;i<files.length;i++){
           if(files[0].type != "image/jpeg" && files[0].type != "image/png"){
               alert("您上传的"+files[i].name+"文件格式不对！");
           }else{
               var fileReader  = new FileReader();
               fileReader.readAsDataURL(files[0]);
               fileReader.onloadend = function(event){
                   var oImg = document.createElement("img");
                    oImg.src = event.target.result;
                    $("#upload_imgs").append(oImg);
                   oImg.onload=function(){
                      alert($(this).width());
                       alert($(this).height());
                       alert($(this).width()/$(this).height());
                   }
               }
           }
        }

    });
})