function createLineChart(obj){

    var salearr=obj.sale;
    /**@type {HTMLCanvasElement} */
    var canvas=document.getElementById("line-chart");
    var ctx=canvas.getContext("2d");
    //定义坐标轴宽高
    var axis_h=canvas.height*0.8;
    var axis_w=canvas.width*0.9;

    ctx.clearRect(0,0,500,300);
    ctx.save();

    //对图像x轴翻转并位移
    ctx.translate(0,270);
    ctx.scale(1,-1);
    
    //画坐标轴
    ctx.beginPath();
    ctx.moveTo(0,0);
    ctx.lineTo(0,axis_h);
    ctx.moveTo(0,0);
    ctx.lineTo(axis_w,0);
    ctx.strokeStyle="#aaa";
    ctx.lineWidth=1;
    ctx.stroke();

    //获取最大数值，确定绘制数据的单位高度    
    var max=Math.max.apply(null,salearr);
    var unitLength=(axis_h*0.85)/max;

    //间隔
    var interval=axis_w/(salearr.length);
    
    var xpos=interval/2;
    
    for(var i=0;i<salearr.length;i++){
        createArc(ctx,xpos,salearr[i]*unitLength,2.5,"#aaa");

        ctx.save();
        ctx.scale(1,-1);
        ctx.textAlign="center";
        ctx.fillText((i+1)+"月",xpos,10);
        ctx.restore();

        if(i>0){    
            ctx.beginPath();
            ctx.moveTo(xpos-interval,salearr[i-1]*unitLength);
            ctx.lineTo(xpos,salearr[i]*unitLength);
            ctx.stroke();
        }
        xpos=xpos+interval;   
    }    
    ctx.restore();
}

function createArc(ctx,xpos,ypos,rad,color){
    ctx.beginPath();
    ctx.arc(xpos,ypos,rad,0,Math.PI*2);
    ctx.fillStyle=color;
    ctx.fill();
}