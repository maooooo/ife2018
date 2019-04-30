function draw(){
    var canvas = document.getElementById("canvas1");
    canvas.height=600;
    var ctx = canvas.getContext('2d');
    ctx.beginPath();
    ctx.moveTo(5,5);
    
    ctx.lineTo(50,50);
    ctx.closePath();
    

    ctx.strokeStyle = "green";
    ctx.lineWidth="5";
    
    ctx.stroke();

    ctx.fillRect(5,55,200,130);

    ctx.beginPath();
    ctx.arc(55,250,50,0,Math.PI*2);
    ctx.stroke();

    ctx.fillText("今天状态不好。",120,300);

    

}
window.onload=function(){
    draw();
}