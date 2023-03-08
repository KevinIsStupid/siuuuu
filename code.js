const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
console.log(canvas);
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
window.addEventListener("resize", function(){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
})
const mouse = {
    x: 0,
    y: 0,
}

let image = new Image();
let xs=[0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 22, 20 ,18, 16, 14, 12, 10, 8, 6, 4, 2, 0, 22.6, 24, 23.6, 22];
let ys=[20, 22, 23.7, 24, 24.4, 24.6, 24.4, 24, 23.7, 22, 20, 16, 4, 0, -4, -6, -8, -10, -12, -14, -16, -18, -20, -22, 8, 10, 12, 14];
console.log(xs.length);
console.log(ys.length);
let partisss=[];
let midheart=[];
let ii=0;
image.src = "heart2.png";

class parti{
    constructor() {
        this.x=mouse.x;
        this.y=mouse.y;
        this.bro=0;
        this.angle = 0;
        this.size = Math.random()*20+5;
        this.velx = Math.random()*4-2;
        this.vely = Math.random()*4-2;
        this.spin = Math.random()/100+0.1;
    }
    update(){
        this.x+=this.velx;
        this.y+=this.vely;
        this.angle=(this.angle+this.spin)%360;
        if(this.size>=1){
            this.size-=0.2;
        }
    }
    draw(){
        ctx.save();
        ctx.translate(this.x, this.y);
        this.bro=(this.bro+0.05)%360;
        ctx.rotate(this.bro);
        ctx.drawImage(image, -this.size/2, -this.size/2, this.size, this.size);
        ctx.restore();
    }
}
class parti2{
    constructor(x, y) {
        this.x=x*10+500+Math.random()*30;
        this.y=y*10+300+Math.random()*30;
        this.bro=0;
        this.angle = 0;
        this.size = Math.random()*10+3;
        this.velx = (500-this.x)/100;
        this.vely = (300-this.y)/100;
        this.spin = Math.random()/100+0.1;
    }
    update(){
        this.x+=this.velx;
        this.y+=this.vely;
        //this.angle=(this.angle+this.spin)%360;
    }
    draw(){
        ctx.save();
        ctx.translate(this.x, this.y);
        this.bro=(this.bro+0.05)%360;
        ctx.rotate(this.bro);
        ctx.drawImage(image, -this.size/2, -this.size/2, this.size, this.size);
        ctx.restore();
    }
}
canvas.addEventListener("mousemove", (event) => {
    mouse.x = event.x;
    mouse.y = event.y;
    for(var i=0; i<3; i++){
        partisss.push(new parti());
    }
    console.log("mmb");
});
function animate(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for(var i=0; i<partisss.length; i++){
        partisss[i].update();
        partisss[i].draw();
        if(partisss[i].size<=2){
            partisss.splice(i, 1);
            i--;
        }
    }
    // for(var x=-4; x<=4; x+=0.2){
    //     for(var y=-4; y<4; y+=0.2){

    //     }
    // }
    for(var i=0; i<34; i++){
        if(Math.random()<=0.3){
            if(Math.random()<=0.5){
                midheart.push(new parti2(xs[i], ys[i]));
            }else{
                midheart.push(new parti2(-xs[i], ys[i]));
            }
        }
    }
    for(var i=0; i<midheart.length; i++){
        midheart[i].update();
        midheart[i].draw();
        if(Math.abs(midheart[i].x-500)<=3 && Math.abs(midheart[i].y-300)<=3){
            midheart.splice(i, 1);
            i--;
        }
    }
    requestAnimationFrame(animate);
}
animate();
