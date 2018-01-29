jQuery.fn.extend({
    "checkAll":function (isChecked) {
        //this是jQuery对象 指调用这个函数的对象
        this.each(function () {//循环他里面的每一个checkbox
            this.checked = isChecked;
        })
    },
    "uncheck":function () {
        //this是jQuery对象 指调用这个函数的对象
        this.each(function () {//循环他里面的每一个checkbox
            this.checked = !this.checked;
        })
    },
      //全选的复选框和子复选框的关联
      "checkRelation":function ($sub) {//指的是每一个单选框，也就是每一个子复选框
         $parent = this;

         //全选的工作 （父控制子）
         this.click(function () {//extend指的是下面主函数调用它的对象$("#checkedAllId")             
            $sub.checkAll($parent[0].checked); //模仿$(".c_list :checkbox").checkAll(this.checked);
            console.log($parent[0].checked);
         });
         //联动（子控制父：子复选框有改变，那么父复选框也要有对应的改变）
         $sub.click(function(){
             //1.便利所有的子复选框
             let isChecked = true;
             $sub.each(function () {
                if(this.checked==false){
                    isChecked = false;
                }
            })
             //2.改变复选框的状态
             $parent[0].checked = isChecked;
         })
    }


});

//主函数
$(function(){
     //这个函数的作用是把一个复选框和很多复选框关联起来了。
    // $("#checkedAllId").click(function () {
    //      $(".c_list :checkbox").checkAll(this.checked);
    // });
   
    //这个函数的作用是把一个复选框和很多复选框关联起来了。
    $("#checkedAllId").checkRelation($(".c_list :checkbox"));//每一个子选框



    $("#btnUnCheckId").click(function () {
        $(".c_list :checkbox").uncheck();
   });
});


