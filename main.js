//a coded poem - also on medium(unmetered): //https://medium.com/@sophiawood/to-remind-ourselves-b7d66da90ca4
function setup() {
    //we make these spaces for creation
      createCanvas(window.innerWidth, window.innerHeight);
    }
    function draw() {
    //in which notions of time repeat
      let aNotionofTime = abs(sin(frameCount / 500));
    //in which notions of time cease
      let aNotionofUnTime = abs(cos(frameCount / 500));
    //where magnitudes of color are relative
      let aMagnitudeofColor = random(240 - 200 * aNotionofTime);
    //we loop in the finite and infinite
      for (let i = 0; i < 500; i++) {
    //finding points to touch
        let verticalExistence = random(0, height);
    //with creative contrasts of thought
        let bandsOfContrast =(verticalExistence * abs(sin(verticalExistence / 100))) / 3;
        strokeWeight(random(0.5, 5));
        stroke(50 + aMagnitudeofColor - bandsOfContrast + 30 * aNotionofTime,50 + aMagnitudeofColor - bandsOfContrast - 30 * aNotionofTime,50 + aMagnitudeofColor * 2 - bandsOfContrast - 30 * aNotionofTime,10);
    //linear footprints in a euclidean space
        line(randomGaussian(0, width),verticalExistence,randomGaussian(0, width),verticalExistence);
      }
    //beneath clouds of light
      for (let i = 0; i < 5; i++) {
        push();
        translate(0, (-width / 2) * aNotionofUnTime);
        rock();
        pop();
      }
    }
    setup();
    //to remind ourselves
    function rock() {
      fill(50 + 205 * aNotionofUnTime,50 + 205 * aNotionofUnTime,50 + 205 * aNotionofUnTime,2);
      noStroke();
      let ephemeris = createVector(random(width / 2 - 20, width / 2),random(height / 2 - 20, height / 2 + 20));
      let aVolumeofSelf = randomGaussian(100, 400);
      circle(ephemeris.x, ephemeris.y, aVolumeofSelf);
    }
    //to breathe