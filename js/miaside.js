function $(id){
    return document.getElementById(id);
}

(function($){
    $.noConflict();
    $(function(){
        $(".product_sort .bd .item").hover(function(){
            $(this).addClass("layer");
            // $(".htmleaf-container .product_sort .bd .item .lineleft").css({display:"none"});
            // $(".htmleaf-container .product_sort .bd .item .arrow").css({display:"none"});

        },function(){
            $(this).removeClass("layer");
        });
     })

        
})(jQuery);
