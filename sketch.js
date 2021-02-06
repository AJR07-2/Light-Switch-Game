let switch1 = [], colors = [], diameter = 40, clicks = 0;
/*
 p5.js functions
 */

function setup() {
  createCanvas(400, 400);
  rectMode(CENTER);
  arraySetup();
  textSize(30);
  textAlign(CENTER)
}

function draw() {
  background(0);
  Switches();
  lightsOn();
  scoreCounter();
  checkWin();
  checkLose();
  revealSwitch();
}

/*
My own functions
*/

function ReloadPointer() {
  stroke("white")
  fill("black");
  triangle(70, 10, 20, 70, 120, 70);
  rect(70, height / 2 - 80, 60, 100)
}

function scoreCounter() {
  textSize(20)
  fill("blue")
  rect(width / 2, height / 2 - 20, width / 2 + 50, height / 8);
  fill("white")
  text("Current clicks left: " + clicks + "/10", width / 2, height / 2 - 20)
}

function Switches() {
  fill("white");
  text("LIGHT SWITCHES", width / 2, 40);
  fill("red")
  rect(width / 2 - 30, 100, width, diameter + 40, 70, 70, 70, 70);
  for (i = 0; i < 6; i++) {
    if (switch1[i]) {
      fill("yellow")
    } else {
      fill("white")
    }
    circle(20 + i * 50, 100, diameter);
  }
}

function lightsOn() {
  fill("green")
  rect(width / 2 - 30, 300, width, diameter + 40, 70, 70, 70, 70);
  fill("white");
  text("LIGHTS", width / 2, 250);
  for (i = 0; i < 6; i++) {
    fill(colors[i]);
    circle(20 + i * 50, 300, diameter);
  }
}

function checkLose() {
  if (clicks > 10) {
    fill("red")
    rect(width / 2, height / 2, width, height);
    fill("black");
    text("YOU LOSE :(", width / 2, height / 2);
    ReloadPointer();
  }
}

function checkWin() {
  if (colors[0] == "yellow" && colors[1] == "white" && colors[2] == "yellow" && colors[3] == "white" && colors[4] == "white" && colors[5] == "yellow") {
    fill("yellow")
    rect(width / 2, height / 2, width, height);
    fill("black");
    text("YOU WIN", width / 2, height / 2);
    ReloadPointer();

    text("Correct light arrangements: 5 4 0 3", width / 2, height / 2 + 50);
  }
}

function revealSwitch() {
  if (mouseButton == RIGHT && mouseIsPressed) {
    fill("blue");
    rect(width / 2, height / 2, width, height);
    fill("yellow")
    text("You have found the secret cheat sheet:\n (0-indexed)", width / 2, 30);
    text(`Switch 0: Turns on 3 and 5, turns off 1
  Switch 1: Turns off 0 and 2
  Switch 2: Turns on 3 and turns off 5
  Switch 3: Turns on 0 and turns off 3
  Switch 4: Turns on 5 and turns off 4
  Switch 5: Turns on 1 and 2`, width / 2, height / 2);
  }
}

function mouseClicked() {
  for (i = 0; i < 6; i++) {
    if (dist(mouseX, mouseY, 20 + i * 50, 100) <= diameter / 2) {
      switch1[i] = !switch1[i];
      console.log(switch1[i]);
      defineColours(i);
      clicks++;
    }
  }
}

function arraySetup() {
  for (i = 0; i < 6; i++) {
    switch1.push(false);
  }
  for (i = 0; i < 6; i++) {
    colors.push("white");
  }
}



function defineColours(i) {
  if (switch1[0] == true && i == 0) {
    colors[3] = "yellow";
    colors[5] = "yellow";
    colors[1] = "white";
  } else if (switch1[1] == true && i == 1) {
    colors[0] = "white";
    colors[2] = "white";
  } else if (switch1[2] == true && i == 2) {
    colors[3] = "yellow";
    colors[5] = "white";
  } else if (switch1[3] == true && i == 3) {
    colors[0] = "yellow";
    colors[3] = "white";
  } else if (switch1[4] == true && i == 4) {
    colors[5] = "yellow";
    colors[4] = "white";
  } else if (switch1[5] == true && i == 5) {
    colors[2] = "yellow";
    colors[1] = "yellow";
  }
}

//please view hack.txt for a guide on cheats of this game
