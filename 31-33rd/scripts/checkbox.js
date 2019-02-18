function createCheckBox(wrapper,name,arr) {
    //生成全选checkbox的html，给一个自定义属性表示为全选checkbox，比如checkboxType="all"
    var allitem=document.createElement("input");
    allitem.setAttribute("type","checkbox");
    allitem.setAttribute("checked",true);
    allitem.setAttribute("name",name);
    allitem.setAttribute("checkboxtype","all");
    var a_label=document.createElement("label");
    var txt=document.createTextNode("全选");
    a_label.appendChild(txt);
    a_label.appendChild(allitem);
    a_label.className="selected";

    var form=document.createElement("form");
    form.appendChild(a_label);
    for(var i=0;i<arr.length;i++) {
        //生成各个子选项checkbox的html，给一个自定义属性表示为子选项
        var box=document.createElement("input");
        box.type="checkbox";
        box.setAttribute("checkboxtype","single");
        box.setAttribute("name",name);
        box.setAttribute("checked",true);
        box.setAttribute("value",arr[i].value);
        
        var label=document.createElement("label");
        var txt=document.createTextNode(arr[i].value);
        label.appendChild(txt);
        label.appendChild(box);
        label.className="selected";
        form.appendChild(label);
    }

    wrapper.appendChild(form);


    /* 给容器做一个事件委托 = function() {
        if 是checkbox
            读取自定义属性
            if 全选
                做全选对应的逻辑
            else
                做子选项对应的逻辑
    } */
    wrapper.onclick=function(e){
        var event=e||window.event;
        var target=event.target||event.srcElement;

        if(target.type==="checkbox"){
            var custom_type=target.getAttribute("checkboxtype");
            var boxs=this.firstElementChild.elements;

            if(custom_type==="all"){
                /* var bool=target.checked?true:false;   */
                for(var i=0;i<boxs.length;i++){
                    if(boxs[i].type==="checkbox"){
                        /* boxs[i].checked=bool; */
                        boxs[i].checked=true;
                    }
                }
            }else{
                var allitem=this.querySelector("input");
                var num=0;
                for(var i=0;i<boxs.length;i++){
                    custom_type=boxs[i].getAttribute("checkboxtype");
                    if(custom_type==="single"&&boxs[i].checked){
                        num++;
                    }
                }
                allitem.checked=(num===3)?true:false;
                if(num===0)target.checked=true;
                
            }
            for(var i=0;i<boxs.length;i++){
                boxs[i].parentNode.className=boxs[i].checked?"selected":"";//为label添加类名，帮助设置样式；
            }
        }
    }
}

var arr1=[{
    value:"手机",
    id:"phone"
},{
    value:"笔记本",
    id:"laptop"
},{
    value:"智能音箱",
    id:"smartspeaker"
}];
var arr2=[{
    value:"华南",
    id:"south"
},{
    value:"华北",
    id:"north"
},{
    value:"华东",
    id:"east"
}];

var product=document.getElementById("product-radio-wrapper");
var region=document.getElementById("region-radio-wrapper");
createCheckBox(product,"product",arr1);
createCheckBox(region,"region",arr2);

// 对象或数组自己根据喜好实现均可
/* 生成一组CheckBox(容器1, [{
    value: 1,
    text: "XXXX"
}, {
    value: 2,
    text: "YYYY"
}]);

生成一组CheckBox(容器2, [{
    value: 1,
    text: "AAAA"
}, {
    value: 2,
    text: "BBBB"
}]); */

// 生成一组CheckBox({
//    1: "XXXX",
//    2: "YYYY"
// });