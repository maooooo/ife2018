var radios=document.getElementById("input-radio");
var tableWrapper=document.getElementById("table-wrapper");

function showAreaData(){
    var arearads=radios.querySelectorAll("input[name=area]");
    var productrads=radios.querySelectorAll("input[name=product]");
    var area,product;
    for(var i=0;i<arearads.length;i++){
        if(arearads[i].checked===true){
            area=arearads[i].value;
            break;
        }
    }
    for(var i=0;i<productrads.length;i++){
        if(productrads[i].checked===true){
            product=productrads[i].value;
            break;
        }
    }
    var tableData=getData(area,product);
    tableWrapper.innerHTML="";
    tableWrapper.appendChild(createTable(tableData));
}

function getData(area,product){//根据选择结果获取指定数据
    var tableData=new Array();
    var areaData=new Array();
    var productData=new Array();
    for(var i=0;i<sourceData.length;i++){
        if(sourceData[i].region===area){
            areaData.push(sourceData[i]);
        }
    }
    for(var i=0;i<sourceData.length;i++){
        if(sourceData[i].product===product){
            productData.push(sourceData[i]);
        }
    }
    if(!area){
        tableData=productData.slice();
    }else if(!product){
        tableData=areaData.slice();
    }else{
        for(var i=0;i<productData.length;i++){
            for(var j=0;j<areaData.length;j++){
                if(productData[i]===areaData[j]){
                    tableData.push(areaData[j]);
                }
            }
        }
    }
    return tableData;
}

function createTable(tableData){//创建表格
    var arr=["商品","地区","1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"];//表头
    var table=document.createElement("table");
    var thead=document.createElement("tr");
    for(var i=0;i<arr.length;i++){
        var th=document.createElement("th");
        th.textContent=arr[i];
        thead.appendChild(th);
    }
    table.appendChild(thead);

    for(var i=0;i<tableData.length;i++){//表格内容
        var data=new Array();
        data=data.concat(tableData[i].sale);
        data.unshift(tableData[i].region);
        data.unshift(tableData[i].product);
        var tbody=document.createElement("tr");
            for(var j=0;j<data.length;j++){
                var td=document.createElement("td");
                td.textContent=data[j];
                tbody.appendChild(td);
            }
        table.appendChild(tbody);
    }

    return table;
}

window.onload=function(){ 
    radios.addEventListener("click",showAreaData,false);
}


