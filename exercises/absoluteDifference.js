'use strict'

function absolute(num) {
  const firstDif = num - 13;
  if (firstDif > 13) {
    console.log(2 * Math.abs(firstDif));
  } else {
    console.log(firstDif);
  }
}

absolute(30);
absolute(20);
