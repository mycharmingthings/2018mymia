(function($){
    $.noConflict();
    
    //购物车消失
    $(document).ready(function(){
    //桌面两边的移动出现框
    // var navOffset=$(".header-nav").offset().top;
    $(window).scroll(function(){  
        scrollPos=$(window).scrollTop(); 
        // console.log(navOffset); 
        if(scrollPos >=800){  
            $('.sidebar').css('display', 'block'); 
        }else{  
            $('.sidebar').css('display', 'none');  
        }  
    });



 
  })

})(jQuery);


function $(id){
    return document.getElementById(id);
}
