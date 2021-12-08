'use strict'

function CtF(cel) {
  let celsiusTemp = cel;
  let ctf = celsiusTemp * 9 / 5 + 32;
  const message = celsiusTemp + " celsius is " + ctf + " fahrenheit.";
  console.log(message);
}

function FtC(fahr) {
  let fahrTemp = fahr;
  let ftc = (fahrTemp - 32) * 5 / 9;
  const message = fahrTemp + " fahrenheit is " + ftc + " celsius.";
  console.log(message);
}

CtF(90);
FtC(150);
