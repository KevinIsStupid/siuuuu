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
let partisss=[];
let ii=0;
image.src = "heart2.png";

class parti{
    constructor() {
        this.x=mouse.x;
        this.y=mouse.y;
        this.bro=0;
        this.angle = 0;
        this.img = image;
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
    requestAnimationFrame(animate);
}
animate();