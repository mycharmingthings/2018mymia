function $(id){
	return document.getElementById(id);
}

function $creatElement(tagname){
	return document.createElement(tagname);
}
window.onload=function(){
	// $('login_username').onblur=function(){
	// 	if($('login_username').value = ''){
	// 		show.innerHTML = '';
	// 	}
	// }
	// oBtn.onclick=function(){
	// 	var oReg = /^1\d{10}$/
	//     var str = $('login_username').value;
	//     if(!oReg.test(str)){
	// 		let show = $creatElement('p');
	// 		console.log(show);
	// 		show.innerHTML = "&times";
	// 		let divDom = $('sh_number');
	// 		divDom.style.cssText = "color:red; line-height:35px;font-size:20px;"
	// 		divDom.appendChild(show);
	// 		return;			
	// 	} 
	// } 
    $('btn').onclick = function (){
        
        //1.创建对象
        let xhr = new XMLHttpRequest();     
        //2.设置请求方式，地址，是否异步
        xhr.open('post',"php/load.php",true);
     
        //3.设置回调函数
        xhr.onreadystatechange = function (){     
            if(xhr.readyState==4 && xhr.status==200){
                console.log(xhr.readyState);
                //等于4说明与服务器交互完成 ，等于200并且服务器端正常响应；
                if(xhr.responseText == "1"){
                      location.href="http://www.mia.com";
                }else{
                    $('errMsg').innerHTML = "用户名或者密码错误";
                    $('errMsg').style.display="block";
                }
            }
        }             
        xhr.setRequestHeader('Content-type','application/x-www-form-urlencoded');
        //4.发出请求
        let postStr = "username="+$('login_username').value+"&userpass="+$('login_userpass').value;
        xhr.send(postStr);
    }
}