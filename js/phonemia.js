(function($){
    $.noConflict();
    
    //购物车消失
    $(document).ready(function(){
        $('.func-cart').bind('mouseover', function(){
            $('.cart-more').css('display','block');
            $('.emptybox').css('display','block');
            $('.emempoty').css('display','block');
       });
    $('.func-cart').bind('mouseleave', function(){
            $('.cart-more').css('display','none');
            $('.emptybox').css('display','none');
            $('.emempoty').css('display','block');
    })

    
    //正品保证clearInterval(iTimer);
    $('.promise').bind('mouseenter',function(){             
            $('.choice').css('display','block');           
    }) 
    $('.promise').bind('mouseleave',function(){
        var iTimer=setInterval(function(){ 
            $('.choice').css('display','none');
      },3000)  
    })
   


   //侧边栏选项卡
   $(function(){
    $(".product_sort .hd .bd .item").hover(function(){
        console.log(1);
        $(this).addClass("layer");
    },function(){
        $(this).removeClass("layer");
    });
})
$('.hd').mouseover(function(){
    $('.bd').show();
})
$('.hd').mouseout(function(){
    $('.bd').hide();
})

$('.item').hover(function(){
    var index = $('.item').index($(this));
    $('.subitem').eq(index).show();
    $(this).addClass("layer");
},function(){
    var index = $('.item').index($(this));
    $('.subitem').eq(index).hide();
    $(this).removeClass("layer");
})

   


 
    //桌面两边的移动出现框
    var navOffset=$(".header-nav").offset().top;
    $(window).scroll(function(){  
        scrollPos=$(window).scrollTop(); 
        // console.log(navOffset); 
        if(scrollPos >=navOffset){  
            $('.sidebar').css('display', 'block'); 
        }else{  
            $('.sidebar').css('display', 'none');  
        }  
    });
    
    //吸顶效果

    var oMtit=$(".appdown .m2").offset().top;
    $(window).scroll(function(){  
        scrolloMtit=$(window).scrollTop(); 
        // console.log(navOffset); 
        if(scrolloMtit >=oMtit){  
            $('#mtit').css({'display':'block','z-index':15000}).animate({
                width: "100%",
                height: "100%", 
            },3000); 
        }else{  
            $('#mtit').css('display', 'none');  
        }  
    });


    // $("#go").click(function(){
    //     $("#block").animate({ 
    //       width: "90%",
    //       height: "100%", 
    //       fontSize: "10em", 
    //       borderWidth: 10
    //     }, 1000 );
    //   });


// 淘宝源
        var oSearchList = document.getElementById('search-list');//获取要显示的盒子
        var oSearchForm = document.forms['search-form'];
        var oSearchContent = oSearchForm.elements['search-contentN'];
        oSearchContent.oninput = oSearchContent.onpropertychange = function () {
            var sVal = this.value;
            oSearchList.innerHTML = '';
            if(sVal !== '') {
                var oScript = document.createElement('script');
                oScript.src = 'https://suggest.taobao.com/sug?code=utf-8&q=' + sVal + '&_ksTS=1515120676355_323&callback=callback&area=c2c&bucketid=15'; 
                document.body.appendChild(oScript);
                oSearchList.style.display = 'block';
            };
        };    
  })

})(jQuery);
//淘宝源声明的
 function callback(data) {
            console.log(data) //打印数据获取到了是对象
            // console.log(data.result[0][0]);
            var oSearchList = document.getElementById('search-list');//获取要显示的盒子
            data.result.forEach((v) => {
                var oLi = document.createElement('li');
                oLi.innerHTML = v[0];
                // oLi.onclick=function(){
                //      var oSearchForm = document.forms['search-form'];
                //      var oSearchContent = oSearchForm.elements['search-contentN'];
                //      oSearchContent.value = this.innerHTML;
                // }
                oLi.addEventListener('click',function(){
                     var oSearchList = document.getElementById('search-list');
                     var oSearchForm = document.forms['search-form'];
                     var oSearchContent = oSearchForm.elements['search-contentN'];
                     oSearchContent.value = this.innerHTML;
                     oSearchList.style.display = "none";
                })
                oSearchList.appendChild(oLi);
            });
 }

function $(id){
    return document.getElementById(id);
}
