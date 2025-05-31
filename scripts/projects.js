let btn = document.querySelector('.btn');
let condition = 1;

/*Появление*/
addEventListener('click',function(){
    if (condition == 1){
        $('.lost_testers').css({"display":"flex"})
        $('.btn').css({"display":"none"})
        $('.btn_2').css({"display":"flex"})
        condition = 1
    }

    if (condition == 0){
    $('.lost_testers').css({"display":"none"})
        condition = 0
    }

});



