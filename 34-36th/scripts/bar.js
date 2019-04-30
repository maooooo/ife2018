function createBarChart(obj){
    
    var canvas_w=500,canvas_h=300;
    var axis_w=canvas_w*0.95,axis_h=canvas_h*0.9;

    //创建画布
    var canvas=document.getElementById("bar-chart");
    canvas.innerHTML="";
    canvas.setAttribute("width",canvas_w);
    canvas.setAttribute("height",canvas_h);
    
    //创建坐标轴
    var h_axis = document.createElementNS('http://www.w3.org/2000/svg','line');
    var v_axis = document.createElementNS('http://www.w3.org/2000/svg','line');
    var h_arrow = document.createElementNS('http://www.w3.org/2000/svg','polygon');
    var v_arrow = document.createElementNS('http://www.w3.org/2000/svg','polygon');
    var g=document.createElementNS("http://www.w3.org/2000/svg","g");
    h_axis.setAttribute("x1",20);
    h_axis.setAttribute("x2",20);
    h_axis.setAttribute("y1",20);
    h_axis.setAttribute("y2",axis_h);

    v_axis.setAttribute("x1",20);
    v_axis.setAttribute("x2",axis_w+20);
    v_axis.setAttribute("y1",axis_h);
    v_axis.setAttribute("y2",axis_h);
    
    //创建坐标轴箭头
    h_arrow.setAttribute("points","20,12 17,20 23,20");
    v_arrow.setAttribute("points",(axis_w+20+8)+","+axis_h+" "+(axis_w+20)+","+(axis_h-3)+" "+(axis_w+20)+","+(axis_h+3));

    g.setAttribute("stroke-width",1);
    g.setAttribute("stroke","#aaa"); 
    
    g.appendChild(h_axis);
    g.appendChild(v_axis);
    g.appendChild(h_arrow);
    g.appendChild(v_arrow);
    canvas.appendChild(g);

    //创建柱子
    var barWidth=20;//柱子宽度
    var gapWidth=(axis_w-(12*barWidth)-15*2)/11;//柱子间隔，15*2表示第一个柱子的左间隔与最后一个柱子的右间隔
    var max=Math.max.apply(null,obj.sale);
    var unitLength=(axis_h*3/4)/max;//柱子的单位高度
    for(var i=0;i<obj.sale.length;i++){
        var rect = document.createElementNS('http://www.w3.org/2000/svg','rect');
        rect.setAttribute("width",barWidth);
        rect.setAttribute("height",unitLength*obj.sale[i]);
        rect.setAttribute("x",20+15+(gapWidth+barWidth)*i);
        rect.setAttribute("y",axis_h-unitLength*obj.sale[i]);
        rect.setAttribute("fill","grey");
        canvas.appendChild(rect);
    }

    console.log(unitLength);
}