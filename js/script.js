
console.log('javascript is Working!')


// konversi
function konversi () {
    let displayInput = document.getElementById("inputsuhu");
    console.log(displayInput.value);

    // validation
    if (displayInput.value == '') {
        alert('Harap Masukan Nilai Suhu')
    } else {
      let result = convertToFahrenheit(displayInput.value);
  
      let displayHasil = document.getElementById("hasilinputsuhu").value = result;
      let displayCara = document.getElementById("carahasilinputsuhu").value =
          displayInput.value + "°C" + " * 9 / 5 + 32";
    }
}

let convertToFahrenheit = (displayInput) => {
    return (displayInput * 9) / 5 + 32;
}

// fungsi reset
function reset() {
    // pemanggilan tag element kembali
    let displayInput = document.getElementById("inputsuhu");
    let displayHasil = document.getElementById("hasilinputsuhu");
    let displayCara = document.getElementById("carahasilinputsuhu");
    // reset
	displayInput.value = "";
	displayHasil.value = "";
	displayCara.value = "";
}

// reverse
function reverse() {
    let displayInput = document.getElementById("inputsuhu").value;
    let displayHasil = document.getElementById("hasilinputsuhu").value;
  
    document.getElementById("inputsuhu").value = displayHasil;
    document.getElementById("hasilinputsuhu").value = displayInput;
  }
