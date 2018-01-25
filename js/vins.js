$(function(){
    $.ajax({
        type:"get",
         url:"php/getGoodsList.php",
         success:function(data){
            showgoodsList(data);
         },
         dataType:'json'
    });

    function showgoodsList(datas){
        let oUl_List = $('.lione');
        console.log(datas.length);
        for(let i = 0; i < datas.length; i++){
            let str = `
                <li class="goods-items">
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
                    
                    <a href="/item-1154336.html" title="美赞臣 MeadJohnson 【官方授权旗舰店】安婴妈妈A+孕妇奶粉 900g*2罐" target="_blank">
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
})






















    // $.ajax({
        //     type:"get",
        //     url:"php/getGoodsList.php",
        //     success:function (data) {
        //         showgoodsList(data);
        //     },
        //     dataType:"json"
        // });
        
    
        // function showgoodsList(datas) {
        //     let $good_items = $("#good_items");
        //     for(let i=0;i<datas.length;i++){
        //         //1、创建li
        //         let str="<li><p>商品编号："+datas[i].goodsId+"</p>" +
        //             "<p>商品名称："+datas[i].goodsName+"</p>" +
        //             "<p>商品价格："+datas[i].goodsPrice+"</p>" +
        //             "<p>商品图片：<img style='width:100px' src='"+datas[i].goodsImg+"'/></p></li>";
        //         $ood_items.append(str);
        //     }
        // }

