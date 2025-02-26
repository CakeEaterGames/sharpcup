<template>
  <h1>
    Рисуем Кан Вась
  </h1>
  <canvas id="c" width="150" height="150">
    sup
  </canvas>

</template>








<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import axios from '@/plugins/axios';


class circle {
  x: number = 0;
  y: number = 0;

  dx: number = 0;
  dy: number = 0;

  /**
   * draw
   */
  public draw(ctx: CanvasRenderingContext2D) {
    ctx.beginPath()
    ctx.arc(this.x, this.y, 3, 0, Math.PI * 2, false);
    ctx.fillStyle = 'blue'
    ctx.strokeStyle = 'blue'
    ctx.fill();
    ctx.stroke()
    ctx.closePath()
  }

  public update() {
    this.x += this.dx;
    this.y += this.dy;
  }

  public isInside(ctx: CanvasRenderingContext2D){
    if (this.x<0) return false
    if (this.y<0) return false
    if (this.x>ctx.canvas.width) return false
    if (this.y>ctx.canvas.height) return false
    return true;
  }

  public dist(c: circle){
    let a = Math.abs(this.x - c.x);
    let b = Math.abs(this.y - c.y);
    
    return Math.sqrt(a*a+b*b)
  }

  public attract(c: circle) {
    let d = this.dist(c)
    this.x += 0.01 * (c.x - this.x)
    this.y += 0.01 * (c.y - this.y)
  }

}

let circles: Array<circle> = []


function rng(a: number, b: number) {
  return Math.random()*(b-a)+a;
}

onUnmounted(async () => {
  console.log('ass');
  clearInterval(interval)
})

let interval = 0;

onMounted(async () => {
  console.log('sup');


  const canvas: HTMLCanvasElement = document.getElementById("c");
 
  if (!canvas) {
    console.log('canvas is broken');
    return;
  }

  // canvas.style.backgroundColor = 'gray'
  canvas.width = 1000
  canvas.height = 1000

  let ctx = canvas.getContext('2d');
  if (!ctx) {
    console.log('canvas is broken');
    return;
  }

 

  let frame = 0;

  interval = setInterval(() => {
    frame++;
    ctx.clearRect(0, 0, 1000, 1000)

    let speed = 5; 

    if (frame % 10 == 0) {
      let c = new circle()
      c.x = rng(0,canvas.width);
      c.y = rng(0,canvas.height);

      c.dx = rng(-speed,speed);
      c.dy = rng(-speed,speed); 
      circles.push(c);
    }

    // console.log(circles.length);
     
    for (const c of circles) {
      c.update(); 
      if(!c.isInside(ctx)){
        c.x = rng(0,canvas.width);
        c.y = rng(0,canvas.height);
        c.dx = rng(-speed,speed);
        c.dy = rng(-speed,speed); 
      }

      for (const c2 of circles) {
        if(c2.dist(c) < 50){

          ctx.beginPath()
          ctx.moveTo(c.x,c.y)
          ctx.lineTo(c2.x,c2.y)
          ctx.strokeStyle = 'gray'; 
          ctx.lineWidth = 1;     
          ctx.stroke();

          c.attract(c2)

        }
      }

      c.draw(ctx);
    }

  }, 16);

})


</script>