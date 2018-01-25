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
    let sideAllGood = $(".htmleaf-container .product_sort .hd");
    let sideDispear = $(".htmleaf-container .product_sort .bd");
    let sideFather = $(".htmleaf-container .product_sort");
    
    sideAllGood.bind('mouseenter',function(){             
        sideDispear.css('display','block');  
        sideFather.css('background','white');       
    }) 

    sideAllGood.bind('mouseleave',function(){
            sideDispear.css('display','none');
            sideFather.css('background','none');  
            sideFather.css({overflow:"hidden",height:"50px"});
       
    })


    $(function(){
        $(".product_sort .hd .bd .item").hover(function(){
            console.log(1);
            $(this).addClass("layer");
        },function(){
            $(this).removeClass("layer");
        });
    })

   //树形菜单
       $('.clix').click(function(){
           var $this = $(this);
           var zt = $this.children("span").attr('class');
           if(zt == "fold"){
               $this.children("span").addClass('unfold');
               $this.children("a").addClass('blod');
           }else{
               $this.children("span").removeClass('unfold');
               $this.children("a").removeClass('blod');
           }
           $this.next("ul").slideToggle();
       });

 
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
