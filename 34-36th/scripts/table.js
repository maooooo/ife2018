function createTable(tableData,al,pl){//创建表格
    if(!tableData)return false;
    var bool=(al===1&&pl>1)?true:false;//判断商品和地区的表格位置
    var arr=["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"];//表头
    if(bool){
        arr.unshift("商品");
        arr.unshift("地区");
    }else{
        arr.unshift("地区");
        arr.unshift("商品");
    }

    var table=document.createElement("table");
    var thead=document.createElement("tr");
    for(var i=0;i<arr.length;i++){
        var th=document.createElement("th");
        th.textContent=arr[i];
        thead.appendChild(th);
    }
    table.appendChild(thead);
    

    for(var i=0;i<tableData.length;i++){//生成表格内容
        var data=new Array();
        data=data.concat(tableData[i].sale);
        if(bool){
            data.unshift(tableData[i].product);
            data.unshift(tableData[i].region);
        }else{
            data.unshift(tableData[i].region);
            data.unshift(tableData[i].product);
        }
        var tbody=document.createElement("tr");
            for(var j=0;j<data.length;j++){
                var td=document.createElement("td");
                td.textContent=data[j];
                tbody.appendChild(td);
            }
        table.appendChild(tbody);
    }

    /* 添加rowspan思路：将所以行提取出来，创建新数组将它们的第一列内容储存起来；
    遍历新数组，如果当前元素与前一个元素不相同，则为该元素对应的DOM元素设置rowspan，
    rowspan的大小为(arr.lastIndexOf[item]-arr.indexOf[item]+1);如果当前元素与
    前一个元素相同，则移去对应的DOM元素。
    */
    var trows=table.querySelectorAll("tr");
    var contents=new Array();
    for(var i=0;i<trows.length;i++){
        var a=trows[i].firstElementChild.textContent;
        contents.push(a);
    }

    for(var i=0;i<contents.length;i++){
        if(contents[i]!==contents[i-1]){
            var size=contents.lastIndexOf(contents[i])-i+1;
            trows[i].firstElementChild.setAttribute("rowspan",size);
        }else{
            trows[i].firstElementChild.remove();
        }
    }

    return table;
}