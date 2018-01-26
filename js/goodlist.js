(function($){
    $.noConflict();
    
    
    $(document).ready(function(){
        console.log(1)
        $.ajax({
            type:"get",
             url:"php/getGoodsList.php",
             success:function(data){
                showgoodsList(data);
                var oGoodsDiv = document.getElementsByClassName('goods-items');
                for(var i = 0;i < oGoodsDiv.length;i++){
                        oGoodsDiv[i].onclick = function(){
                            console.log(1)
                           
                            var iId = this.getAttribute('data-id');
                
                                var oGoods = {
                                    id : iId
                                }
                
                            setCookie('goods',JSON.stringify(oGoods),7,'/');
                            // console.log("getCookie(name)"+getCookie('goods'));

                        }
                    }

             },
             dataType:"json"
        });


        function showgoodsList(datas){
            let oUl_List = $('.lione');
            console.log(datas.length);
            for(let i = 0; i < datas.length; i++){
                let str = `
                    <li class="goods-items" data-id="${datas[i].goodsId}">
                    <div class="block lineblockone" id="item_1154336" data-sku="1154336" style="left: inherit; top: inherit;">
                      
                        <div class="mark_wrap_x46">
                            <span class="mark_item mark_dutyfree"></span>
                            <img class="lazyload" src="${datas[i].beiyong2}">
                        </div>
                       
                        <div class="mark_custom_120" data-url="https://file02.miyabaobei.com/">
                            <img class="lazyload" src="${datas[i].beiyong3}">
                        </div>
                       
                        <div class="icoAr" style="display: block;"></div>
                       
                        <div class="listsoldout pos"></div>
                        <span class="listsoldspan">${datas[i].beiyong4}</span>
                        
                        <a href="shoppingdetail.html" title="美赞臣 MeadJohnson 【官方授权旗舰店】安婴妈妈A+孕妇奶粉 900g*2罐" target="_blank">
                            <img src="${datas[i].goodsImg}" width="267" height="267" alt="【官方授权旗舰店】安婴妈妈A+孕妇奶粉 900g*2罐">
                        </a>
                             
                        <div class="bmfo rel" id="item_k_1154336">
                            <div class="saled">
                                <span class="r">
                                </span>
                                <div class="pricediv">
                                    <em class="pink l">¥</em>
                                    <span class="Tahoma f20 pink l blod" bid="1154336" id="sale_price_1154336">${datas[i].beiyong5}</span>
                                        <span class="originalPrice r">¥378</span>
                                        <div class="suit_tz_price l">单件<span>${datas[i].beiyong6}</span>元</div>
                                </div>
                            </div>
                            <p class="blockhover"> 
                                <span class="pink tahoma bold"><em>${datas[i].goodsCount}</em>件装/</span>
                                <a href="/item-1154336.html" target="_blank" title="美赞臣 MeadJohnson 【官方授权旗舰店】安婴妈妈A+孕妇奶粉 900g*2罐">
                                ${datas[i].goodsName}                                               
                                </a>
                            </p>
                            <div class="tahoma_active">
                                    <span>${datas[i].beiyong7}</span>${datas[i].goodsDesc}                                           
                            </div>
                        </div>
                    </div>
                </li>     
                `
                oUl_List.append(str);
            }
        }





   //购物车消失
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

    
    $('.smore').toggle(
        function () {
            $('.smore').html("收起");
            $('.Q2').css({'overflow':'auto','height':'80px'});
        },
        function () {
            $('.smore').html("更多"); 
            $('.Q2').css({'height':'24px','overflow':'hidden'});
        }
    );

   

    //桌面两边的移动出现框
    var navOffset=$(".header-nav").offset().top;
    $(window).scroll(function(){  
        scrollPos=$(window).scrollTop(); 
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

