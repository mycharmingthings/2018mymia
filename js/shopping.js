//购物车消失
var goodsId = JSON.parse(getCookie('goods')).id;
// console.log("getCookie('goods')wei"+goodsId);
(function($){
    $.ajax({
        type:"get",
        url:"php/getGoodsInfo.php",
        data:{"goodsId":JSON.parse(getCookie('goods')).id},
        success:function(data){
            showgoodsInfo(data);
            console.log(data);
        },
        dataType:"json"
    });


    function showgoodsInfo(datas){
        let oShoppingWindow = $('#shoppingWindow');
            let str= `
                    <div class="show clearfix">
                        <div class="left l rel">
                            <div class="mark_wrap_x60">                             
                                <span class="mark_itemY">
                                    <img src="${datas.beiyong2}" style="width:100px; height:50px;"> 
                                </span>
                            </div>
                            <div class="mark_custom_160">
                                <!-- <img src="" alt=""> -->
                            </div>
                            <div class="big rel">
                                <img src="${datas.goodsImg}" width="400" height="400" alt="爱他美婴儿配方奶粉1+段12M+ 600g*6盒">
                            </div>              
                        </div>
                        <div class="right l">
                            <div class="M_productInfo">
                                <div class="country fz14 mb10 clearfix">
                                    <div class="l">
                                        <img src="https://img01.miyabaobei.com/d1/p2/2016/01/12/e9/11/e91156a566041019ba5661348b8bd97b.png" alt="" class="logo_cun">
                                        <span class="newWestb">${datas.beiyong8}</span> <i>|</i>                                   
                                        <span> 蜜芽保税仓发货 </span>
                                    </div>
                                    <input type="hidden" id="share_pic" value="https://img01.miyabaobei.com/d1/p5/item/10/1076/1076458_topic_1.jpg">
                                    <input type="hidden" id="share_name" value="刚刚在蜜芽宝贝上发现了这个#新西兰原装 a2 【品牌授权】PLATINUM婴儿奶粉3段12~36M 900g*2罐# 好喜欢，求特卖求好价!">
                                </div>
                                <div class="brand fz14 mb10">
                                    <span class="baoyou">[包邮]</span> <!--思源品牌，隐藏品牌-->
                                    <a href="https://www.mia.com/s/b192.html" target="_blank">
                                    ${datas.goodsName}                                 
                                    </a>
                                    <span>【品牌授权】PLATINUM婴儿奶粉3段12~36M 900g*2罐</span>
                                </div>                                   
                                <div class="titlecon clearfix mb10 fz14">
                                    <div class="left yahei l">
                                        <input type="hidden" name="item_id" id="item_id" value="1076458" readonly="readonly" />
                                        ${datas.beiyong9}                         
                                    </div>
                                </div>
                            
                                <div class="pi_price_box">
                                    <span class="tit_txt yahei">售价</span>
                                    <span class="pbox_price"> 
                                        <i class="pbox_yen">¥</i> 
                                        <em id="item_price">${datas.goodsPrice}</em>
                                    </span>
                                    <span class="pbox_market"></span>
                                        <span>¥</span> 
                                        <del id="mprice" class="fz14">1990.00</del>
                                    </span>
                                    <span class="jks">进口税
                                        <span class="layer_shui">如果产生税费，请于蜜芽联系，按照国家最新政策，对跨境商品征收相应进口税</span>
                                    </span>
                                    <div id="i_youhui" class="i_youhui clearfix" style="display:none;">
                                        <dt class="num_name tit_txt yahei" style="float:left;">优惠</dt>
                                        <dt class="num_txt" style="float:left;"></dt>
                                    </div>
                                    <div class="coupon-block clearfix" style="display:none;">
                                        <span class="kong"></span>
                                        <div class="coupon-list clearfix">
                                            <span class="coupon-mark">领券</span>
                                            <div class="coupon-item"><!--<a href="javascript:;" data-cup="code1">10元券</a><a href="javascript:;"  data-cup="code2">10元券</a><a class="long" href="javascript:;"  data-cup="code3">满199减100券</a><a href="javascript:;"  data-cup="code4">10元券</a><a href="javascript:;"  data-cup="code5">10元券</a>--></div>
                                            <span class="shrink up"></span>
                                        </div>
                                    </div>
                                    <div class="layer" style="display:none;">
                                        <div class="layer-tit"><h5>领取优惠券成功</h5><a class="close_mia_popup" href="javascript:;"><img src="https://img.miyabaobei.com/d1/p5/2016/12/15/5b/43/5b436eb7e8b9c6234f52ad8dd272cc6c940445561.jpg" alt=""></a></div>
                                        <div class="img"><img src="https://img.miyabaobei.com/d1/p5/2016/12/15/e2/ce/e2ce683f2fcebd40080f4399a29df4bd929226583.png" alt=""></div>
                                        <p>领取成功，尽情买买买吧</p>
                                        <a class="go-yhq" href="/my_coupon" target="_blank" title="">去我的优惠券查看&gt;</a>
                                        <a class="surebtn" href="javascript:;">确定</a>
                                    </div>
                                    <div class="popup_mask" style="display:none;"></div>
                                    <div id="midou_dikou" class="midou_dikou clearfix" style="display:none;">
                                        <dt class="num_name tit_txt yahei" style="float:left;">蜜豆抵扣</dt>
                                        <dt class="num_txt" style="float:left;"></dt>
                                    </div>
                                </div>    
                                <div class="pi_attr_box">
                                    <div class="clearfix discount_f" style="/* display: none; */"></div>
                                    <input type="hidden" value="add" name="act">
                                    <input type="hidden" value="" name="client_time">
                                    <dl class="color">
                                        <dt class="color_name tit_txt fz14">可选</dt>
                                        <dd class="color_list">
                                            <li class="color_list_item">
                                                <a class="" title="默认" href="javascript:show_normal_pic();">
                                                    <img width="42" height="43" alt="默认" src="${datas.beiyong10}" class="fl">
                                                    <span class="i_select"></span>
                                                </a>
                                            </li>
                                        </dd>
                                    </dl>
                                    <!-- 第五个dl dispay=none -->
                                    <dl id="detail_size" style="display:none;"></dl>
                                    <!-- 第六个dl dispay=none -->
                                    <input type="hidden" value="SINGLE" id="item_size" name="size" readonly="readonly">
                                    <!-- 第七个dl -->
                                    <dl id="J_num_select" class="i_num clearfix">
                                        <dt class="num_name tit_txt fz14">数量</dt>
                                        <dd class="i_notice_msg J_num_tips">
                                            <!-- 设了背景图，隐藏<img src="img/detail_imgs_png8.png"/>  -->
                                        </dd>
                                        <dd class="num_box">
                                            <span class="num_reduce num_reduce_disabled J_num_act_reduce"></span>
                                            <em class="num_input" id="buyAmount">1</em>
                                            <span class="num_add J_num_act_add"></span>
                                        </dd>
                                        <dd id="stockTips" class="num_msg f12">
                                            还剩<span id="stock"></span>件
                                        </dd>
                                    </dl>
                                    <!-- 第八个div 评分 星星 -->
                                    <div class="clearfix">
                                        <div class="review_f" style="margin-right:15px;">
                                            <span class="tit_txt fz14">评分</span>
                                            <div class="star2">
                                                <div class="value2" style="width:80px;"></div>
                                            </div>
                                        </div>
                                        <div class="review_f review_koubei_f">
                                            <span>
                                                <i>${datas.beiyong10}</i>
                                                位蜜粉推荐
                                            </span>
                                        </div>
                                    </div>
                                    <!-- 第九个预售商品信息 -->
                                    <div class="clearfix">
                                        <div class="button_f" id="itemProcess">
                                            <a href="shopCart.html" class="btn_07 fz14" id="J_cartAdd_submit" style="visibility: visible;">加入购物车</a>
                                            <p id="sepcailNotice"></p>
                                        </div>
                                        <div class="button_f" id="itemAttention">
                                            <a href="javascript:void(0)" class="btn_07_f fz14" id="attend_submit">
                                                <i class="mia_icons"></i>
                                                <span>收藏</span>
                                            </a>
                                            <p id="sepcailNotice1"></p>
                                        </div>
                                    </div>
                                    <!-- 第十个 编码 -->
                                    <dl class="other" style="padding-bottom:5px;">
                                        <dt class="other_name">编码：</dt>
                                        <dd class="other_box">2567444</dd>
                                    </dl>
                                    <!-- 第十一 自营 七天无理由退货 -->
                                    <div class="pbox_pms yahei clearfix mb10">
                                        <ul>
                                            <li>自营</li>  
                                            <li class="return-goods"><i></i>
                                                    不支持7天无理由退货<span>本商品不支持7天内无理由退货服务</span>
                                            </li>
                                            <li class="jiap"><i></i><span>假一赔十</span><span>蜜芽为您选购的每一件商品，都通过严格的品质把关，保证正品。特作出“假一赔十”的正品保证承诺，杜绝一切假货，请放心购买</span></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>           
                    </div>               
                    `
            oShoppingWindow.prepend(str);
    } 

     
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
        scrollshop=$(window).scrollTop(); 
        // console.log(navOffset); 
        if(scrollshop >=navOffset){  
            $('.sidebar').css('display', 'block'); 
        }else{  
            $('.sidebar').css('display', 'none');  
        }  
    });
    
      //商品详情吸顶效果
    $(window).scroll(function(){  
        scrollPosshop=$(window).scrollTop(); 
        if(scrollPosshop >=1100){  
            $('.fixone').css({ display: "block","z-index":100000000}); 
        }else{  
            $('.fixone').css('display', 'none');  
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
