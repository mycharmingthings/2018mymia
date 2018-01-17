// (function ($) {
//     $.noConflict();
//     $(function () {
       
        
//     });
// })(jQuery);


(function($){
    $.noConflict();
    $(document).ready(function(){
        let  oGoodlisth3 = $('.header .header-nav .nav .menus .tit h3');
        let  oGoodlist_dlsone = $('.header .header-nav .nav .menus .dlsone');
        oGoodlisth3.bind('mouseenter',function(){
            // clearInterval(ite);
            oGoodlist_dlsone.css('display', 'block');
        });
        oGoodlisth3.bind('mouseleave',function(){  
         
           ite = setInterval(function(){
                oGoodlist_dlsone.css('display', 'none');
            },3000);
            // clearInterval(ite);  
        })
  })
})(jQuery);