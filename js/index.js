

(function($){
    $.noConflict();
    // //模态窗口 jQuery有问题，底下用原声做出来了
    // var  oRegistA = $('registA');
    // var  oRegistB = $('registB');
    // var  oMask    = $('mask');
    // var  oRegisterCimg    = document.getElementsByClassName('registerCimg');
    // var  oImmidate_register    = $('immidate_register');
    //    oRegistB.on('click', function () {
    //    console.log(1);
    //    oMask.style.display = 'none';
    //    oRegisterCimg.style.display = 'none';
    //    oImmidate_register.style.display = 'none';     		
    // });
    
    
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
   
    //选项卡
    // $('.header .header-nav .nav .menus .dlsone .dl').bind('mouseenter',function(){
    //     let iIndex = $(this).index();
    //      $('.header .header-nav .nav .menus .gooddds').css('display', 'block');
    // })
    // $('.dlsone .dl').bind('mouseleave',function(){
    //     let iIndex = $(this).index();
    //     $('.header .header-nav .nav .menus .gooddds').css('display', 'none');       
    // })


    //按照小米方式做选项卡

        let 
        oMenuHover = $('.header .header-nav .nav .menus .dlsone .dl'),
        oGoods     = $('.header .header-nav .nav .menus .gooddds'),
        aGoodsdd   = $('.gooddds .dd');
      
        let iTimer = null;
        oMenuHover.on('mouseenter',function(){
            // clearTimeout(iTimer);
            oGoods.css('display', 'block');
            let iIndex = oMenuHover.index($(this));
            aGoodsdd.css('display', 'none').eq(iIndex).css('display', 'block');
        });
        oMenuHover.on('mouseleave',function(){
            iTimer = setTimeout(function(){
                 oGoods.animate({ height: 0 }, 120, function () {
                                 $(this).css('display', 'none');
                    });                    
                //  oGoods.style.position ='15 0';
           },4000)
        });
        // oGoods.hover(function () {
        //        clearTimeout(iTimer);
        //      }, function () {
        //                oGoods.stop(true).animate({ height: 0 }, 120, function () {
        //                $(this).css('display', 'none');
        //          });
        //  });




    //轮播图
    function lunbotu(){  
        $(".picBox").animate({margintop:"-600px" },4000,"linear",function(){  
            $(this).css({margintop:"0px"});  
            $(this).children("li").first().remove().clone(true).appendTo(".picBox");  
        });  
    }  
    var startRollOne=setInterval(lunbotu,3000);  
    $(".carousel").hover(function () {  
        clearInterval(startRollOne);  
    }, function () {  
        startRollOne=setInterval(lunbotu,3000);  
    });


    //侧边栏

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

//...................................判断吸顶效果........................
// var navOffset=$(".selection-five").offset().top; 
// $(window).scroll(function(){  
//     scrollPos=$(window).scrollTop(); 
//     // console.log(navOffset); 
//     if(scrollPos >=navOffset){  
//         oSelefive.addClass('fixed'); 
//     }else{  
//         oSelefive.removeClass('fixed'); 
//     }  
// });


    // 百度源
    // var oSearchList = document.getElementById('search-list');
    //     var oSearchForm = document.forms['search-form'];
    //     var oSearchContent = oSearchForm.elements['search-contentN'];

    //     oSearchContent.oninput = oSearchContent.onpropertychange = function () {
    //         var sVal = this.value;
    //         oSearchList.innerHTML = '';
    //         if(sVal !== '') {
    //             var oScript = document.createElement('script');
    //             oScript.src = 'https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd=' + sVal + '&json=1&p=3&sid=1438_24869_21080_18560_17001_25177_22160&req=2&bs=1%2B&pbs=1%2B&csor=2&pwd=1%3D&cb=callback&_=1511334117083';
    //             document.body.appendChild(oScript);
    //         }
    //     };
    //     // 声明回调函数
    //     function callback(data) {
    //         data.s.forEach((v) => {
    //             var oLi = document.createElement('li');
    //             oLi.innerHTML = v;
    //             oSearchList.appendChild(oLi);
    //         });
    //     }


//pengpeng  淘宝源
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
//模态窗口
window.onload = function(){
    var  oRegistA = $('registA');
    var  oRegistB = $('registB');
    var  oRegisterCimg  = $('registerCimg');
    var  oMask    = $('mask');
    var  oImmidate_register = $('immidate_register');
    var  oFixed_img = $('fixed_img');
    var  oClose_fixed_btn = $('close_fixed_btn');
    
    oRegistB.addEventListener('click', function () {
        oMask.style.display = 'none';
        oFixed_img.style.display = 'block';
        oRegistA.style.display = 'none';
        oImmidate_register.style.display = 'none';	
    });
    oClose_fixed_btn.addEventListener('click', function () {
        console.log(2);
        oFixed_img.style.display = 'none';
        oRegisterCimg.style.display = 'none';	
    });
}