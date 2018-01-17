function callback(data) {
        alert("data="+data);
}

window.onload = function () {
    document.getElementById("btnTest").onclick=function() {
        var oScript = document.createElement('script');
            oScript.src = 'https://suggest.taobao.com/sug?code=utf-8&q=你&_ksTS=1515120676355_323&callback=callback&area=c2c&bucketid=15'; 
            document.body.appendChild(oScript);
    };
    // 声明回调函数
  
}
