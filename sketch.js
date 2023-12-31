// Modelaremos una particula, luego un conjunto de partículas, utilizando el concepto de clases
// CLASES: Nos permitirá modelar un objeto o algún modelado de objeto, que luego podremos duplicar en instancias de esta clase

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  // circle(mouseX, mouseY, 20);
  // - Programaremos una partícula, un elemento grafico quien va a tener un punesto X y una posicion Y.
  // Vamos a agregar una velocidad a esta particula, determinando una posicon atraves de un vector que determinaramos con variables de vx y vy (propiedades de nuestro objeto de particulas)
  // Representan la velocidad de movimiento horizontal y vertical, que se expresan inicialmente en pixeles por cuadrado ejemplo: si vx=2 significa que cada fotograma el circula se desplazara 2 pixeles
}

// let drops = [];
// let thunderChance = 0.01; // Probabilidad de que ocurra un trueno en cada fotograma
// let thundering = false;
// let flashDuration = 50; // Duración del destello en milisegundos
// let flashEnd = 0;

// function setup() {
//   createCanvas(600, 400);
//   for (let i = 0; i < 100; i++) {
//     drops.push(new Drop());
//   }
// }

// function draw() {
//   background(0, 0, 20); // Fondo oscuro para simular la noche

//   // Actualiza y muestra cada gota de lluvia
//   for (let drop of drops) {
//     drop.fall();
//     drop.show();
//   }

//   // Simula truenos
//   if (!thundering && random() < thunderChance) {
//     thundering = true;
//     flashEnd = millis() + flashDuration;
//   }

//   if (thundering) {
//     flash(); // Muestra un destello de luz
//     if (millis() > flashEnd) {
//       thundering = false;
//     }
//   }
// }

// function flash() {
//   fill(255, 255, 255, 255); // Color blanco para el destello de luz
//   rect(0, 0, width, height); // Rectángulo que cubre toda la pantalla
// }

// class Drop {
//   constructor() {
//     this.x = random(width);
//     this.y = random(-500, -50);
//     this.z = random(0, 20);
//     this.len = map(this.z, 0, 20, 10, 20);
//     this.yspeed = map(this.z, 0, 20, 1, 20);
//   }

//   fall() {
//     this.y += this.yspeed;
//     let gravity = map(this.z, 0, 20, 0, 0.2);
//     this.yspeed += gravity;

//     if (this.y > height) {
//       this.y = random(-200, -100);
//       this.x = random(width);
//       this.yspeed = map(this.z, 0, 20, 4, 10);
//     }
//   }

//   show() {
//     let thick = map(this.z, 0, 20, 1, 3);
//     stroke(138, 43, 226);
//     strokeWeight(thick);
//     line(this.x, this.y, this.x, this.y + this.len);
//   }
// }

// let drops = [];
// let thunderChance = 0.01; // Probabilidad de que ocurra un trueno en cada fotograma
// let thunderSound;

// function preload() {
//   // Carga un sonido de trueno (reemplaza con tu propio archivo de sonido)
//   thunderSound = loadSound('trueno.mp3');
// }

// function setup() {
//   createCanvas(600, 400);
//   for (let i = 0; i < 100; i++) {
//     drops.push(new Drop());
//   }
// }

// function draw() {
//   background(0, 0, 20); // Fondo oscuro para simular la noche

//   // Actualiza y muestra cada gota de lluvia
//   for (let drop of drops) {
//     drop.fall();
//     drop.show();
//   }

//   // Simula truenos
//   if (random() < thunderChance) {
//     thunderSound.play();
//     flash(); // Muestra un destello de luz
//   }
// }

// function flash() {
//   fill(255, 255, 255, 255); // Color blanco para el destello de luz
//   rect(0, 0, width, height); // Rectángulo que cubre toda la pantalla
//   setTimeout(() => {
//     background(0, 0, 20); // Restaura el fondo después de un breve periodo
//   }, 50);
// }

// class Drop {
//   constructor() {
//     this.x = random(width);
//     this.y = random(-500, -50);
//     this.z = random(0, 20);
//     this.len = map(this.z, 0, 20, 10, 20);
//     this.yspeed = map(this.z, 0, 20, 1, 20);
//   }

//   fall() {
//     this.y += this.yspeed;
//     let gravity = map(this.z, 0, 20, 0, 0.2);
//     this.yspeed += gravity;

//     if (this.y > height) {
//       this.y = random(-200, -100);
//       this.x = random(width);
//       this.yspeed = map(this.z, 0, 20, 4, 10);
//     }
//   }

//   show() {
//     let thick = map(this.z, 0, 20, 1, 3);
//     stroke(138, 43, 226);
//     strokeWeight(thick);
//     line(this.x, this.y, this.x, this.y + this.len);
//   }
// }

// let sun;

// function setup() {
//   createCanvas(600, 400);
//   sun = new Sun(width / 2, height / 2, 50);
// }

// function draw() {
//   // Interpolación de color entre el atardecer y la noche
//   let lerpColorValue = map(mouseX, 0, width, 0, 1);

//   // Colores difuminados para el atardecer y la noche
//   let sunsetColor = color(255, 165, 0); // Amarillo difuminado con rojo
//   let nightColor = color(0, 0, 255); // Azul difuminado con negro

//   let currentColor = lerpColor(sunsetColor, nightColor, lerpColorValue);
//   background(currentColor);

//   // Dibuja el sol
//   sun.display();
// }

// class Sun {
//   constructor(x, y, size) {
//     this.x = x;
//     this.y = y;
//     this.size = size;
//   }

//   display() {
//     fill(255, 255, 0);
//     ellipse(this.x, this.y, this.size, this.size);
//   }
// }

// atardecer
// function setup() {
//   createCanvas(400, 400);
// }

// function draw() {
//   background(255);

//   // Definir dos colores cálidos para el atardecer
//   let sunsetColor1 = color(255, 165, 0); // Amarillo difuminado con rojo
//   let sunsetColor2 = color(255, 87, 34); // Naranja difuminado con rojo oscuro

//   // Dibujar un degradado horizontal simulando un atardecer
//   for (let i = 0; i < width; i++) {
//     // Calcular el porcentaje de posición a través del ancho del lienzo
//     let inter = map(i, 0, width, 0, 1);

//     // Usar lerpColor para interpolar entre los dos colores cálidos
//     let c = lerpColor(sunsetColor1, sunsetColor2, inter);

//     // Configurar el color de la línea
//     stroke(c);
//     line(i, 0, i, height);
//   }
// }

// estrellas
// let particles = [];

// function setup() {
//   createCanvas(400, 400);
//   for (let i = 0; i < 100; i++) {
//     particles.push(new Particle());
//   }
// }

// function draw() {
//   background(0);

//   for (let particle of particles) {
//     particle.update();
//     particle.show();
//   }
// }

// class Particle {
//   constructor() {
//     this.x = random(width);
//     this.y = random(height);
//     this.size = random(1, 4);
//     this.alpha = random(50, 255); // Transparencia inicial
//     this.alphaChange = random(0.5, 2); // Cambio de transparencia más lento
//     this.speed = random(0.1, 1); // Movimiento más lento
//   }

//   update() {
//     // Cambia la posición de la partícula
//     this.x += this.speed;
//     this.y += this.speed;

//     // Reinicia la posición al llegar al borde sin cambiar la transparencia
//     if (this.x > width) {
//       this.x = 0;
//     }
//     if (this.y > height) {
//       this.y = 0;
//     }
//   }

//   show() {
//     noStroke();
//     fill(255, this.alpha);
//     ellipse(this.x, this.y, this.size, this.size);
//   }
// }
