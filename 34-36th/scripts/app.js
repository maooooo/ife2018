var regionwrapper=document.getElementById("region-radio-wrapper");
var productwrapper=document.getElementById("product-radio-wrapper");
var tableWrapper=document.getElementById("table-wrapper");
window.onload=function(){
    showAreaData(); 
    regionwrapper.addEventListener("click",showAreaData,false);
    productwrapper.addEventListener("click",showAreaData,false);
    var phonedataE=new Object();
    for(var i=0;i<sourceData.length;i++){
        if(sourceData[i].region==="华东"&&sourceData[i].product==="手机"){
            phonedataE=sourceData[i];
            break;
        }
    }
    creatBarChart(phonedataE);

}

function showAreaData(){
    var regionboxs=regionwrapper.querySelectorAll("input");
    var productboxs=productwrapper.querySelectorAll("input");
    var area=[],product=[];
    for(var i=0;i<regionboxs.length;i++){
        if(regionboxs[i].checked===true&&regionboxs[i].getAttribute("checkboxtype")==="single"){
            area.push(regionboxs[i].value);
        }
    }
    for(var i=0;i<productboxs.length;i++){
        if(productboxs[i].checked===true&&productboxs[i].getAttribute("checkboxtype")==="single"){
            product.push(productboxs[i].value);
        }
    }

    var tableData=getData(area,product);
    tableWrapper.innerHTML="";
    tableWrapper.appendChild(createTable(tableData,area.length,product.length));
}

function getData(area,product){//根据选择结果获取指定数据
    if(area.length===0&&product.length===0)return false;
    var productData=new Array();
    var areaData=new Array();
    var compareData=sourceData.slice();
    
    if(area.length!==0){
        for(var i=0;i<compareData.length;i++){
            if(area.indexOf(compareData[i].region)!==-1){
                areaData.push(compareData[i]);
            }
        }
        compareData=areaData.slice();
    }
    if(product.length!==0){
        for(var i=0;i<compareData.length;i++){
            if(product.indexOf(compareData[i].product)!==-1){
                productData.push(compareData[i]);
            }
        }
        return productData;
    }else{
        return areaData;
    }
    /* if(!area){
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
    } */
    
}



