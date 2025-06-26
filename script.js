// Catatan: Working on nyawa system
// last edited line: done!
// editing on: null

const buzzersfx = new Audio("buzzer.mp3")
const correctsfx = new Audio("correct.mp3")
const waterygraves = new Audio("watery_graves.mp3")
const wiishop = new Audio("wii_shop.mp3")
const badpiggies = new Audio("bad_piggies.mp3")
const slashinferno = new Audio("slash_inferno.mp3")
const roast = new Audio("roast.mp3")
const minecraftsong = new Audio("minecraft.mp3")

let difficulty
let imsure
let timecountdown = 0
let timecountdownintervalID
let timecountdownhapusskorintervalID

let answer = 0
//answer for question

let variablesoal1 = 0
let variablesoal2 = 0
let variablesoal3 = 0
let hasildarisoal = 0
// numbers to operate

let operasisoal1 = 0
let operasisoal2 = 0
let operasisoal3 = 0
// 0 = +, 1 = -, 2 = *, 3 = /, 4 = **

let nyawa = 0
let score = 0
let arraySkorpeaceful = JSON.parse(localStorage.getItem("arraySkorpeaceful")) || [];
let arraySkoreasy = JSON.parse(localStorage.getItem("arraySkoreasy")) || [];
let arraySkormedium = JSON.parse(localStorage.getItem("arraySkormedium")) || [];
let arraySkordemon = JSON.parse(localStorage.getItem("arraySkordemon")) || [];
let arraySkorhardcore = JSON.parse(localStorage.getItem("arraySkorhardcore")) || [];
let akuyakininginhapusskor = false
document.getElementById("lemparskorkealambarzah").textContent = "Hapus Semua Skor"

// NULL DIBELAKANGMU! //

let hapusskorcountdown = 0

// audio preload //
document.getElementById("difficulty_submit_button").addEventListener("click", () => {
  minecraftsong.play();
  minecraftsong.pause();
  minecraftsong.currentTime = 63;
})
document.getElementById("difficulty_submit_button").addEventListener("click", () => {
  buzzersfx.play();
  buzzersfx.pause();
  buzzersfx.currentTime = 0;
})
document.getElementById("difficulty_submit_button").addEventListener("click", () => {
  correctsfx.play();
  correctsfx.pause();
  correctsfx.currentTime = 0;
})

// Functions 🗣️🔥🔥 //

function difficulty_submit() {
  difficulty = document.getElementById("difficulty_input").value.toLowerCase();
  
  if(document.getElementById("imsure").checked) {
    imsure = true
  } else {
    imsure = false
  }
  
  switch (difficulty) {
  case "peaceful":
    popupareyousure()
    if(imsure) {
      imsureforsure()
      timecountdown = "Infinity"
      waterygraves.loop = true;
      setTimeout(() => {
      waterygraves.play();
      }, 4000)
      nyawa = 100
      //before: nyawa = ∞ SyntaxError!!
    }
    document.getElementById("timeleft").textContent = timecountdown
  break;
  case "easy":
    popupareyousure()
    if(imsure) {
      imsureforsure()
      timecountdown = 30
      setTimeout(startcountdown, 3000)
      wiishop.loop = true;
      wiishop.play();
      nyawa = 10
  }
  break;
  case "medium":
    popupareyousure()
    if(imsure) {
      imsureforsure()
      timecountdown = 20
      setTimeout(startcountdown, 3000)
      badpiggies.loop = true;
      badpiggies.play();
      nyawa = 5
      // nyawa
      document.getElementById("divnyawa").classList.add("yelloworangegradient")
      document.getElementById("divnyawa").classList.remove("greenbluegradient")
      // waktu
      document.getElementById("waktu").classList.add("yelloworangegradient")
      document.getElementById("waktu").classList.remove("greenbluegradient")
      // soaldanjawaban
      document.getElementById("soaldanjawaban").classList.add("yelloworangegradient")
      document.getElementById("soaldanjawaban").classList.remove("greenbluegradient")
      // Skor
      document.getElementById("skormanager").classList.add("yelloworangegradient")
      document.getElementById("skormanager").classList.remove("greenbluegradient")
      // save score
      document.getElementById("savescore").classList.add("yelloworangegradient")
      document.getElementById("savescore").classList.remove("greenbluegradient")
      // highScore
      document.getElementById("gethighscore").classList.add("yelloworangegradient")
      document.getElementById("gethighscore").classList.remove("greenbluegradient")
    }
  break;
  case "demon":
    popupareyousure()
    if(imsure) {
      imsureforsure()
      timecountdown = 15
      setTimeout(startcountdown, 3000)
      slashinferno.loop = true;
      setTimeout(() => {
      slashinferno.play();
      }, 1000)
      nyawa = 3
      // nyawa
      document.getElementById("divnyawa").classList.add("redorangegradient")
      document.getElementById("divnyawa").classList.remove("greenbluegradient")
      // waktu
      document.getElementById("waktu").classList.add("redorangegradient")
      document.getElementById("waktu").classList.remove("greenbluegradient")
      // soaldanjawaban
      document.getElementById("soaldanjawaban").classList.add("redorangegradient")
      document.getElementById("soaldanjawaban").classList.remove("greenbluegradient")
      // Skor
      document.getElementById("skormanager").classList.add("redorangegradient")
      document.getElementById("skormanager").classList.remove("greenbluegradient")
      // save score
      document.getElementById("savescore").classList.add("redorangegradient")
      document.getElementById("savescore").classList.remove("greenbluegradient")
      // save highScore
      document.getElementById("gethighscore").classList.add("redorangegradient")
      document.getElementById("gethighscore").classList.remove("greenbluegradient")
      // demon soaldanjawaban height
      document.getElementById("soaldanjawaban").classList.add("lengthextension")
    }
  break;
  case "hardcore":
    popupareyousure()
    if(imsure) {
      imsureforsure()
      timecountdown = 10
      setTimeout(startcountdown, 3000)
      roast.loop = true;
      setTimeout(() => {
      roast.play();
      }, 4000)
      nyawa = 1
      // nyawa
      document.getElementById("divnyawa").classList.add("darkredgradient")
      document.getElementById("divnyawa").classList.remove("greenbluegradient")
      // waktu
      document.getElementById("waktu").classList.add("darkredgradient")
      document.getElementById("waktu").classList.remove("greenbluegradient")
      // soaldanjawaban
      document.getElementById("soaldanjawaban").classList.add("darkredgradient")
      document.getElementById("soaldanjawaban").classList.remove("greenbluegradient")
      // Skor
      document.getElementById("skormanager").classList.add("darkredgradient")
      document.getElementById("skormanager").classList.remove("greenbluegradient")
      // save score
      document.getElementById("savescore").classList.add("darkredgradient")
      document.getElementById("savescore").classList.remove("greenbluegradient")
      // save highScore
      document.getElementById("gethighscore").classList.add("darkredgradient")
      document.getElementById("gethighscore").classList.remove("greenbluegradient")
      // demon soaldanjawaban height
      document.getElementById("soaldanjawaban").classList.add("lengthextension")
    }
  break;
  default: 
    alert("Maaf. Difficulty lain belum dibuat oleh developer, Atau ada kesalahan ketik. silahkan dicek!");
    return;
  }
  document.getElementById("nyawa").textContent = nyawa
}

function moreinfo() {
  alert("\n \nMather Game adalah permainan yang melibatkan aritmatika. Game ini akan memberikan kalian soal yang harus kalian jawab.\n\n>> kalian memiliki waktu untuk menjawab sebuah soal! kalian juga memiliki nyawa! jika kalian salah menjawab soal, maka kalian akan kehilangan 1 nyawa dan beberapa skor (tergantung difficulty).\nDisini ada 5 difficulty. Kalian bisa memilih difficulty di layar awal.")
}

function popupareyousure() {
      if(imsure) {
      console.log(`user choose the Difficulty ${difficulty}`)
    } else {
      alert("Apakah Kamu yakin ingin pilih mode ini? Centang Box Aku yakin untuk melanjutkan!")
      return;
    }
}

function imsureforsure() {
  const difficultyinputdiv = document.getElementById("difficulty_input_div");
  difficultyinputdiv.classList.add("throwtoright")
  setTimeout(countdown321, 1000)
  setTimeout(soalnaik290px, 500)
}

function soalnaik290px() {
  document.getElementById("soaljawabanwaktudanskor").classList.add("go-up290px")
}

function countdownevery1sec() {
  timecountdown = timecountdown - 1
  console.log("timer tick!")
  document.getElementById("timeleft").textContent = timecountdown
  checkcountdown()
}

function startcountdown() {
  timecountdownintervalID = setInterval(countdownevery1sec, 1000);
}

function pausecountdown() {
  clearInterval(timecountdownintervalID);
}

function countdown321() {
  const countdown3 = document.getElementById("countdown3");
  const countdown2 = document.getElementById("countdown2");
  const countdown1 = document.getElementById("countdown1");
  setTimeout(()=> {
    countdown3.classList.add("popscale")
    countdown3.classList.remove("hide")
    setTimeout(()=> {
      countdown2.classList.add("popscale")
      countdown2.classList.remove("hide")
      setTimeout(()=> {
        countdown1.classList.add("popscale")
        countdown1.classList.remove("hide")
        setTimeout(()=> {
          buatsoal()
          unhide()
        },1000)
      },1000)
    },1000)
  }, 0)
}

function buatsoal() {
  if(difficulty === "peaceful") {
    //di peaceful, hanya ada 1 kali operasi 2 tipe (tambah & kurang) dan 2 angka.
    variablesoal1 = Math.floor(Math.random() * 11)
    variablesoal2 = Math.floor(Math.random() * 11)
    operasisoal1 = Math.round(Math.random())
    carihasil()
    displayhasil()
  } else if(difficulty === "easy") {
    //di easy, ada 2 kali operasi 3 tipe (tambah, kurang & kali) dan 3 angka.
    variablesoal1 = Math.floor(Math.random() * 11)
    variablesoal2 = Math.floor(Math.random() * 11)
    variablesoal3 = Math.floor(Math.random() * 11)
    // operasi soal //
    operasisoal1 = Math.round(Math.random())
    operasisoal2 = Math.round(Math.random())
    carihasil()
    displayhasil()
  } else if(difficulty === "medium") {
    variablesoal1 = Math.floor(Math.random() * 21) + 3
    variablesoal2 = Math.floor(Math.random() * 21) + 6
    variablesoal3 = Math.floor(Math.random() * 21) + 4
    // operasi soal //
    operasisoal1 = Math.round(Math.random() * 2)
    operasisoal2 = Math.round(Math.random() * 2)
    carihasil()
    displayhasil()
  } else if(difficulty === "demon") {
    variablesoal1 = Math.floor(Math.random() * 36) + 1
    variablesoal2 = Math.floor(Math.random() * 36) + 3
    variablesoal3 = Math.floor(Math.random() * 36) + 4
    // operasi soal //
    operasisoal1 = Math.round(Math.random() * 3)
    operasisoal2 = Math.round(Math.random() * 3)
    carihasil()
    displayhasil()
  } else if(difficulty === "hardcore") {
    // operasi soal //
    operasisoal1 = Math.round(Math.random() * 4)
    operasisoal2 = Math.round(Math.random() * 4)
    if(operasisoal1 !== 4 && operasisoal2 !== 4) {
    variablesoal1 = Math.floor(Math.random() * 101) + 1
    variablesoal2 = Math.floor(Math.random() * 101) + 3
    variablesoal3 = Math.floor(Math.random() * 101) + 4
    } else if(operasisoal1 === 4 && operasisoal2 !== 4) {
      variablesoal1 = Math.floor(Math.random() * 15) + 1
      variablesoal2 = Math.floor(Math.random() * 2) + 1
      variablesoal3 = Math.floor(Math.random() * 101) + 4
      
    } else if(operasisoal1 !== 4 && operasisoal2 === 4) {
      variablesoal1 = Math.floor(Math.random() * 101) + 1
      variablesoal2 = Math.floor(Math.random() * 15) + 1
      variablesoal3 = Math.floor(Math.random() * 2) + 1
    } else if(operasisoal1 === 4 && operasisoal2 === 4) {
      variablesoal1 = Math.floor(Math.random() * 15) + 1
      variablesoal2 = Math.floor(Math.random() * 2) + 1
      variablesoal3 = Math.floor(Math.random() * 2) + 1
    }
    carihasil()
    displayhasil()
  }
}

function carihasil() {
  if(difficulty === "peaceful") {
    if(operasisoal1 === 0) {
      hasildarisoal = variablesoal1 + variablesoal2
    } else if(operasisoal1 === 1) {
      hasildarisoal = variablesoal1 - variablesoal2
    } //else if bracket
  } // if dif peaceful bracket
  if(difficulty === "easy") {
    if(operasisoal1 === 0 && operasisoal2 === 0) {
      hasildarisoal = variablesoal1 + variablesoal2 + variablesoal3
    } else if(operasisoal1 === 0 && operasisoal2 === 1) {
      hasildarisoal = variablesoal1 + variablesoal2 - variablesoal3
    } else if(operasisoal1 === 1 && operasisoal2 === 0) {
      hasildarisoal = variablesoal1 - variablesoal2 + variablesoal3
    } else if(operasisoal1 === 1 && operasisoal2 === 1) {
      hasildarisoal = variablesoal1 - variablesoal2 - variablesoal3
    } // else if bracket
  } // if dif easy bracket
  if(difficulty === "medium") {
    switch (true) {
    case operasisoal1 === 0 && operasisoal2 === 0:
    hasildarisoal = variablesoal1 + variablesoal2 + variablesoal3
    break;
    case operasisoal1 === 0 && operasisoal2 === 1:
    hasildarisoal = variablesoal1 + variablesoal2 - variablesoal3
    break;
    case operasisoal1 === 0 && operasisoal2 === 2:
    hasildarisoal = variablesoal1 + variablesoal2 * variablesoal3
    break;
    case operasisoal1 === 1 && operasisoal2 === 0:
    hasildarisoal = variablesoal1 - variablesoal2 + variablesoal3
    break;
    case operasisoal1 === 1 && operasisoal2 === 1:
    hasildarisoal = variablesoal1 - variablesoal2 - variablesoal3
    break;
    case operasisoal1 === 1 && operasisoal2 === 2:
    hasildarisoal = variablesoal1 - variablesoal2 * variablesoal3
    break;
    case operasisoal1 === 2 && operasisoal2 === 0:
    hasildarisoal = variablesoal1 * variablesoal2 + variablesoal3
    break;
    case operasisoal1 === 2 && operasisoal2 === 1:
    hasildarisoal = variablesoal1 * variablesoal2 - variablesoal3
    break;
    case operasisoal1 === 2 && operasisoal2 === 2:
    hasildarisoal = variablesoal1 * variablesoal2 * variablesoal3
    break;
    } // switch bracket
  } // if dif medium bracket
  if(difficulty === "demon") {
    switch (true) {
    case operasisoal1 === 0 && operasisoal2 === 0:
    hasildarisoal = variablesoal1 + variablesoal2 + variablesoal3
    break;
    case operasisoal1 === 0 && operasisoal2 === 1:
    hasildarisoal = variablesoal1 + variablesoal2 - variablesoal3
    break;
    case operasisoal1 === 0 && operasisoal2 === 2:
    hasildarisoal = variablesoal1 + variablesoal2 * variablesoal3
    break;
    case operasisoal1 === 0 && operasisoal2 === 3:
    hasildarisoal = Number((variablesoal1 + variablesoal2 / variablesoal3).toFixed(2))
    break;
    case operasisoal1 === 1 && operasisoal2 === 0:
    hasildarisoal = variablesoal1 - variablesoal2 + variablesoal3
    break;
    case operasisoal1 === 1 && operasisoal2 === 1:
    hasildarisoal = variablesoal1 - variablesoal2 - variablesoal3
    break;
    case operasisoal1 === 1 && operasisoal2 === 2:
    hasildarisoal = variablesoal1 - variablesoal2 * variablesoal3
    break;
    case operasisoal1 === 1 && operasisoal2 === 3:
    hasildarisoal = Number((variablesoal1 - variablesoal2 / variablesoal3).toFixed(2))
    break;
    case operasisoal1 === 2 && operasisoal2 === 0:
    hasildarisoal = variablesoal1 * variablesoal2 + variablesoal3
    break;
    case operasisoal1 === 2 && operasisoal2 === 1:
    hasildarisoal = variablesoal1 * variablesoal2 - variablesoal3
    break;
    case operasisoal1 === 2 && operasisoal2 === 2:
    hasildarisoal = variablesoal1 * variablesoal2 * variablesoal3
    break;
    case operasisoal1 === 2 && operasisoal2 === 3:
    hasildarisoal = Number((variablesoal1 * variablesoal2 / variablesoal3).toFixed(2))
    break;
    case operasisoal1 === 3 && operasisoal2 === 0:
    hasildarisoal = Number((variablesoal1 / variablesoal2 + variablesoal3).toFixed(2));
    break;
    case operasisoal1 === 3 && operasisoal2 === 1:
    hasildarisoal = Number((variablesoal1 / variablesoal2 - variablesoal3).toFixed(2))
    break;
    case operasisoal1 === 3 && operasisoal2 === 2:
    hasildarisoal = Number((variablesoal1 / variablesoal2 * variablesoal3).toFixed(2))
    break;
    case operasisoal1 === 3 && operasisoal2 === 3:
    hasildarisoal = Number((variablesoal1 / variablesoal2 / variablesoal3).toFixed(2))
    break;
    } // switch bracket
  } // if dif demon bracket
  if(difficulty === "hardcore") {
    switch (true) {
    case operasisoal1 === 0 && operasisoal2 === 0:
    hasildarisoal = variablesoal1 + variablesoal2 + variablesoal3
    break;
    case operasisoal1 === 0 && operasisoal2 === 1:
    hasildarisoal = variablesoal1 + variablesoal2 - variablesoal3
    break;
    case operasisoal1 === 0 && operasisoal2 === 2:
    hasildarisoal = variablesoal1 + variablesoal2 * variablesoal3
    break;
    case operasisoal1 === 0 && operasisoal2 === 3:
    hasildarisoal = Number((variablesoal1 + variablesoal2 / variablesoal3).toFixed(2))
    break;
    case operasisoal1 === 0 && operasisoal2 === 4:
    hasildarisoal = variablesoal1 + variablesoal2 ** variablesoal3
    break;
    case operasisoal1 === 1 && operasisoal2 === 0:
    hasildarisoal = variablesoal1 - variablesoal2 + variablesoal3
    break;
    case operasisoal1 === 1 && operasisoal2 === 1:
    hasildarisoal = variablesoal1 - variablesoal2 - variablesoal3
    break;
    case operasisoal1 === 1 && operasisoal2 === 2:
    hasildarisoal = variablesoal1 - variablesoal2 * variablesoal3
    break;
    case operasisoal1 === 1 && operasisoal2 === 3:
    hasildarisoal = Number((variablesoal1 - variablesoal2 / variablesoal3).toFixed(2))
    break;
    case operasisoal1 === 1 && operasisoal2 === 4:
    hardcore = variablesoal1 - variablesoal2 ** variablesoal3
    break;
    case operasisoal1 === 2 && operasisoal2 === 0:
    hasildarisoal = variablesoal1 * variablesoal2 + variablesoal3
    break;
    case operasisoal1 === 2 && operasisoal2 === 1:
    hasildarisoal = variablesoal1 * variablesoal2 - variablesoal3
    break;
    case operasisoal1 === 2 && operasisoal2 === 2:
    hasildarisoal = variablesoal1 * variablesoal2 * variablesoal3
    break;
    case operasisoal1 === 2 && operasisoal2 === 3:
    hasildarisoal = Number((variablesoal1 * variablesoal2 / variablesoal3).toFixed(2))
    break;
    case operasisoal1 === 2 && operasisoal2 === 4:
    hasildarisoal = variablesoal1 * variablesoal2 ** variablesoal3
    break;
    case operasisoal1 === 3 && operasisoal2 === 0:
    hasildarisoal = Number((variablesoal1 / variablesoal2 + variablesoal3).toFixed(2));
    break;
    case operasisoal1 === 3 && operasisoal2 === 1:
    hasildarisoal = Number((variablesoal1 / variablesoal2 - variablesoal3).toFixed(2))
    break;
    case operasisoal1 === 3 && operasisoal2 === 2:
    hasildarisoal = Number((variablesoal1 / variablesoal2 * variablesoal3).toFixed(2))
    break;
    case operasisoal1 === 3 && operasisoal2 === 3:
    hasildarisoal = Number((variablesoal1 / variablesoal2 / variablesoal3).toFixed(2))
    break;
    case operasisoal1 === 3 && operasisoal2 === 4:
    hasildarisoal = Number((variablesoal1 / variablesoal2 ** variablesoal3).toFixed(2))
    break;
    case operasisoal1 === 4 && operasisoal2 === 0:
    hasildarisoal = variablesoal1 ** variablesoal2 + variablesoal3
    break;
    case operasisoal1 === 4 && operasisoal2 === 1:
    hasildarisoal = variablesoal1 ** variablesoal2 - variablesoal3
    break;
    case operasisoal1 === 4 && operasisoal2 === 2:
    hasildarisoal = variablesoal1 ** variablesoal2 * variablesoal3
    break;
    case operasisoal1 === 4 && operasisoal2 === 3:
    hasildarisoal = variablesoal1 ** variablesoal2 / variablesoal3
    break;
    case operasisoal1 === 4 && operasisoal2 === 4:
    hasildarisoal = variablesoal1 ** variablesoal2 ** variablesoal3
    break;
    } // switch bracket
  } // if dif hardcore bracket
} // function bracket

function displayhasil() {
  if(difficulty === "peaceful") {
    if(operasisoal1 === 0) {
      document.getElementById("soal").textContent = `${variablesoal1} + ${variablesoal2}=?`
    } else if(operasisoal1 === 1) {
      document.getElementById("soal").textContent = `${variablesoal1} - ${variablesoal2}=?`
    } // else if bracket
  } // peaceful dif bracket
  if(difficulty === "easy") {
    if(operasisoal1 === 0 && operasisoal2 === 0) {
      document.getElementById("soal").textContent = `${variablesoal1} + ${variablesoal2} + ${variablesoal3}=?`
    } else if(operasisoal1 === 0 && operasisoal2 === 1) {
      document.getElementById("soal").textContent = `${variablesoal1} + ${variablesoal2} - ${variablesoal3}=?`
    } else if(operasisoal1 === 1 && operasisoal2 === 0) {
      document.getElementById("soal").textContent = `${variablesoal1} - ${variablesoal2} + ${variablesoal3}=?`
    } else if(operasisoal1 === 1 && operasisoal2 === 1) {
      document.getElementById("soal").textContent = `${variablesoal1} - ${variablesoal2} - ${variablesoal3}=?`
    } // else if bracket
  } // if dif easy
  if(difficulty === "medium") {
    switch (true) {
      case operasisoal1 === 0 && operasisoal2 === 0:
      document.getElementById("soal").textContent = `${variablesoal1} + ${variablesoal2} + ${variablesoal3}=?`
      break;
      case operasisoal1 === 0 && operasisoal2 === 1:
      document.getElementById("soal").textContent = `${variablesoal1} + ${variablesoal2} - ${variablesoal3}=?`
      break;
      case operasisoal1 === 0 && operasisoal2 === 2:
      document.getElementById("soal").textContent = `${variablesoal1} + ${variablesoal2} X ${variablesoal3}=?`
      break;
      case operasisoal1 === 1 && operasisoal2 === 0:
      document.getElementById("soal").textContent = `${variablesoal1} - ${variablesoal2} + ${variablesoal3}=?`
      break;
      case operasisoal1 === 1 && operasisoal2 === 1:
      document.getElementById("soal").textContent = `${variablesoal1} - ${variablesoal2} - ${variablesoal3}=?`
      break;
      case operasisoal1 === 1 && operasisoal2 === 2:
      document.getElementById("soal").textContent = `${variablesoal1} - ${variablesoal2} X ${variablesoal3}=?`
      break;
      case operasisoal1 === 2 && operasisoal2 === 0:
      document.getElementById("soal").textContent = `${variablesoal1} X ${variablesoal2} + ${variablesoal3}=?`
      break;
      case operasisoal1 === 2 && operasisoal2 === 1:
      document.getElementById("soal").textContent = `${variablesoal1} X ${variablesoal2} - ${variablesoal3}=?`
      break;
      case operasisoal1 === 2 && operasisoal2 === 2:
      document.getElementById("soal").textContent = `${variablesoal1} X ${variablesoal2} X ${variablesoal3}=?`
      break;
    } // switch bracket
  } // if dif medium bracket
  if(difficulty === "demon") {
    switch (true) {
      case operasisoal1 === 0 && operasisoal2 === 0:
      document.getElementById("soal").textContent = `${variablesoal1} + ${variablesoal2} + ${variablesoal3}=?`
      break;
      case operasisoal1 === 0 && operasisoal2 === 1:
      document.getElementById("soal").textContent = `${variablesoal1} + ${variablesoal2} - ${variablesoal3}=?`
      break;
      case operasisoal1 === 0 && operasisoal2 === 2:
      document.getElementById("soal").textContent = `${variablesoal1} + ${variablesoal2} X ${variablesoal3}=?`
      break;
      case operasisoal1 === 0 && operasisoal2 === 3:
      document.getElementById("soal").textContent = `${variablesoal1} + ${variablesoal2} ÷ ${variablesoal3}=? (Bulatkan ke 2 angka desimal, WAJIB.)`
      break;
      case operasisoal1 === 1 && operasisoal2 === 0:
      document.getElementById("soal").textContent = `${variablesoal1} - ${variablesoal2} + ${variablesoal3}=?`
      break;
      case operasisoal1 === 1 && operasisoal2 === 1:
      document.getElementById("soal").textContent = `${variablesoal1} - ${variablesoal2} - ${variablesoal3}=?`
      break;
      case operasisoal1 === 1 && operasisoal2 === 2:
      document.getElementById("soal").textContent = `${variablesoal1} - ${variablesoal2} X ${variablesoal3}=?`
      break;
      case operasisoal1 === 1 && operasisoal2 === 3:
      document.getElementById("soal").textContent = `${variablesoal1} - ${variablesoal2} ÷ ${variablesoal3}=? (Bulatkan ke 2 angka desimal, WAJIB.)`
      case operasisoal1 === 2 && operasisoal2 === 0:
      document.getElementById("soal").textContent = `${variablesoal1} X ${variablesoal2} + ${variablesoal3}=?`
      break;
      case operasisoal1 === 2 && operasisoal2 === 1:
      document.getElementById("soal").textContent = `${variablesoal1} X ${variablesoal2} - ${variablesoal3}=?`
      break;
      case operasisoal1 === 2 && operasisoal2 === 2:
      document.getElementById("soal").textContent = `${variablesoal1} X ${variablesoal2} X ${variablesoal3}=?`
      break;
      case operasisoal1 === 2 && operasisoal2 === 3:
      document.getElementById("soal").textContent = `${variablesoal1} X ${variablesoal2} ÷ ${variablesoal3}=? (Bulatkan ke 2 angka desimal, WAJIB.)`
      break;
      case operasisoal1 === 3 && operasisoal2 === 0:
      document.getElementById("soal").textContent = `${variablesoal1} ÷ ${variablesoal2} + ${variablesoal3}=? (Bulatkan ke 2 angka desimal, WAJIB.)`
      break;
      case operasisoal1 === 3 && operasisoal2 === 1:
      document.getElementById("soal").textContent = `${variablesoal1} ÷ ${variablesoal2} - ${variablesoal3}=? (Bulatkan ke 2 angka desimal, WAJIB.)`
      break;
      case operasisoal1 === 3 && operasisoal2 === 2:
      document.getElementById("soal").textContent = `${variablesoal1} ÷ ${variablesoal2} X ${variablesoal3}=? (Bulatkan ke 2 angka desimal, WAJIB.)`
      break;
      case operasisoal1 === 3 && operasisoal2 === 3:
      document.getElementById("soal").textContent = `${variablesoal1} ÷ ${variablesoal2} ÷ ${variablesoal3}=? (Bulatkan ke 2 angka desimal, WAJIB.)`
      break;
    } // switch bracket
  } // if dif demon bracket
  if(difficulty === "hardcore") {
    switch (true) {
      case operasisoal1 === 0 && operasisoal2 === 0:
      document.getElementById("soal").textContent = `${variablesoal1} + ${variablesoal2} + ${variablesoal3}=?`
      break;
      case operasisoal1 === 0 && operasisoal2 === 1:
      document.getElementById("soal").textContent = `${variablesoal1} + ${variablesoal2} - ${variablesoal3}=?`
      break;
      case operasisoal1 === 0 && operasisoal2 === 2:
      document.getElementById("soal").textContent = `${variablesoal1} + ${variablesoal2} X ${variablesoal3}=?`
      break;
      case operasisoal1 === 0 && operasisoal2 === 3:
      document.getElementById("soal").textContent = `${variablesoal1} + ${variablesoal2} ÷ ${variablesoal3}=? (Bulatkan ke 2 angka desimal, WAJIB.)`
      break;
      case operasisoal1 === 0 && operasisoal2 === 4:
      document.getElementById("soal").textContent = `${variablesoal1} + ${variablesoal2}^${variablesoal3}=?`
      break;
      case operasisoal1 === 1 && operasisoal2 === 0:
      document.getElementById("soal").textContent = `${variablesoal1} - ${variablesoal2} + ${variablesoal3}=?`
      break;
      case operasisoal1 === 1 && operasisoal2 === 1:
      document.getElementById("soal").textContent = `${variablesoal1} - ${variablesoal2} - ${variablesoal3}=?`
      break;
      case operasisoal1 === 1 && operasisoal2 === 2:
      document.getElementById("soal").textContent = `${variablesoal1} - ${variablesoal2} X ${variablesoal3}=?`
      break;
      case operasisoal1 === 1 && operasisoal2 === 3:
      document.getElementById("soal").textContent = `${variablesoal1} - ${variablesoal2} ÷ ${variablesoal3}=? (Bulatkan ke 2 angka desimal, WAJIB.)`
      break;
      case operasisoal1 === 1 && operasisoal2 === 4:
      document.getElementById("soal").textContent = `${variablesoal1} - ${variablesoal2}^${variablesoal3}=?`
      break;
      case operasisoal1 === 2 && operasisoal2 === 0:
      document.getElementById("soal").textContent = `${variablesoal1} X ${variablesoal2} + ${variablesoal3}=?`
      break;
      case operasisoal1 === 2 && operasisoal2 === 1:
      document.getElementById("soal").textContent = `${variablesoal1} X ${variablesoal2} - ${variablesoal3}=?`
      break;
      case operasisoal1 === 2 && operasisoal2 === 2:
      document.getElementById("soal").textContent = `${variablesoal1} X ${variablesoal2} X ${variablesoal3}=?`
      break;
      case operasisoal1 === 2 && operasisoal2 === 3:
      document.getElementById("soal").textContent = `${variablesoal1} X ${variablesoal2} ÷ ${variablesoal3}=? (Bulatkan ke 2 angka desimal, WAJIB.)`
      break;
      case operasisoal1 === 2 && operasisoal2 === 4:
      document.getElementById("soal").textContent = `${variablesoal1} X ${variablesoal2}^${variablesoal3}=?`
      break;
      case operasisoal1 === 3 && operasisoal2 === 0:
      document.getElementById("soal").textContent = `${variablesoal1} ÷ ${variablesoal2} + ${variablesoal3}=? (Bulatkan ke 2 angka desimal, WAJIB.)`
      break;
      case operasisoal1 === 3 && operasisoal2 === 1:
      document.getElementById("soal").textContent = `${variablesoal1} ÷ ${variablesoal2} - ${variablesoal3}=? (Bulatkan ke 2 angka desimal, WAJIB.)`
      break;
      case operasisoal1 === 3 && operasisoal2 === 2:
      document.getElementById("soal").textContent = `${variablesoal1} ÷ ${variablesoal2} X ${variablesoal3}=? (Bulatkan ke 2 angka desimal, WAJIB.)`
      break;
      case operasisoal1 === 3 && operasisoal2 === 3:
      document.getElementById("soal").textContent = `${variablesoal1} ÷ ${variablesoal2} ÷ ${variablesoal3}=? (Bulatkan ke 2 angka desimal, WAJIB.)`
      break;
      case operasisoal1 === 3 && operasisoal2 === 4:
      document.getElementById("soal").textContent = `${variablesoal1} ÷ ${variablesoal2}^${variablesoal3}=?`
      break;
      case operasisoal1 === 4 && operasisoal2 === 0:
      document.getElementById("soal").textContent = `${variablesoal1}^${variablesoal2} + ${variablesoal3}=?`
      break;
      case operasisoal1 === 4 && operasisoal2 === 1:
      document.getElementById("soal").textContent = `${variablesoal1}^${variablesoal2} - ${variablesoal3}=?`
      break;
      case operasisoal1 === 4 && operasisoal2 === 2:
      document.getElementById("soal").textContent = `${variablesoal1}^${variablesoal2} X ${variablesoal3}=?`
      break;
      case operasisoal1 === 4 && operasisoal2 === 3:
      document.getElementById("soal").textContent = `${variablesoal1}^${variablesoal2} ÷ ${variablesoal3}=? (Bulatkan 2 angka desimal, WAJIB.)`
      break;
      case operasisoal1 === 4 && operasisoal2 === 4:
      document.getElementById("soal").textContent = `${variablesoal1}^${variablesoal2}^${variablesoal3}=?`
      break;
    } // switch bracket
  } // if dif hardcore bracket
} // function bracket

function submitanswer() {
  document.getElementById("answer").disabled = true;
  document.getElementById("kirim").disabled = true;
  pausecountdown()
  setTimeout(() => {
    document.getElementById("soaldanjawaban").classList.add("throwtoright")
    if(nyawa > 0) {
    setTimeout(() => {
      document.getElementById("soaldanjawaban").classList.remove("throwtoright");
      document.getElementById("soaldanjawaban").classList.add("getfromleft");
      document.getElementById("message").textContent = "";
      document.getElementById("answer").value = null;
      buatsoal()
      setTimeout(() => {
        document.getElementById("soaldanjawaban").classList.remove("getfromleft")
        document.getElementById("answer").disabled = false;
        document.getElementById("kirim").disabled = false;
        startcountdown()
        resetcountdown()
      }, 1000)
    }, 1000)
    } else {
      document.getElementById("waktu").classList.remove("floating")
      document.getElementById("waktu").classList.add("throwtoright")
      document.getElementById("divnyawa").classList.add("throwtoright")
    }
  }, 1000)
  if(difficulty === "peaceful" || difficulty === "easy" || difficulty === "medium" || difficulty === "demon" || difficulty === "hardcore") {
    answer = Number(document.getElementById("answer").value)
    if(answer === hasildarisoal) {
      score = score + 1
      document.getElementById("message").textContent = "Jawaban Benar! lanjut!"
      correctsfx.play();
      document.getElementById("soaldanjawaban").classList.add("jump")
      document.body.classList.add("blinkgreen")
      setTimeout(() => {
        document.getElementById("soaldanjawaban").classList.remove("jump")
        document.body.classList.remove("blinkgreen")
      }, 1000)
    } else {
      score = score - 0.5
      if(nyawa <= 1) {
      document.getElementById("message").textContent = "Kamu salah dan nyawamu habis. jadi kamu mati💀"
      } else {
      document.getElementById("message").textContent = "Yahh..Jawaban Salah. lanjut!"
      }
      nyawa = nyawa - 1
      document.getElementById("soaldanjawaban").classList.add("shakex")
      document.body.classList.add("blinkred")
      buzzersfx.play();
      setTimeout(() => {
        document.getElementById("soaldanjawaban").classList.remove("shakex")
        document.body.classList.remove("blinkred")
      }, 1000)
    }
  } // this bracket pisses me off
  document.getElementById("score").textContent = score
  ceknyawa()
  document.getElementById("nyawa").textContent = nyawa
} // function bracket

function checkcountdown() {
  if(timecountdown === 0) {
    submitanswer()
    if(answer === hasildarisoal) {
    document.getElementById("message").textContent = "Waktu Habis, tapi jawaban benar! lanjut!"
    } else {
      document.getElementById("message").textContent = "Maaf, Tapi waktumu habis! lanjut.."
      if(nyawa <= 1) {
        document.getElementById("message").textContent = "Kamu Mati karna waktu dan nyawamu habis💀"
      }
      nyawa = nyawa - 1
    }
  }
}

function resetcountdown() {
  if(difficulty === "peaceful") {
    timecountdown = Infinity
  } else if(difficulty === "easy") {
    timecountdown = 30
  } else if(difficulty === "medium") {
    timecountdown = 20
  } else if(difficulty === "demon") {
    timecountdown = 15
  } else if(difficulty === "hardcore") {
    timecountdown = 10
  }
}

function simpanskor() {
  if(difficulty === "peaceful") {
    console.log("player simpan skor")
    arraySkorpeaceful.push(score);
    localStorage.setItem("arraySkorpeaceful", JSON.stringify(arraySkorpeaceful));
    console.log(`score ${score} telah ditambahkan di array ${arraySkorpeaceful} (arraySkorpeaceful)`)
    alert(`Skor ${score} telah ditambahkan di list skor mode peaceful`)
  } else if(difficulty === "easy") {
    console.log("player simpan skor")
    arraySkoreasy.push(score);
    localStorage.setItem("arraySkoreasy", JSON.stringify(arraySkoreasy));
    console.log(`score ${score} telah ditambahkan di array ${arraySkoreasy} (arraySkoreasy)`)
    alert(`Skor ${score} telah ditambahkan di list skor mode easy`)
  } else if(difficulty === "medium") {
    console.log("player simpan skor")
    arraySkormedium.push(score);
    localStorage.setItem("arraySkormedium", JSON.stringify(arraySkormedium));
    console.log(`score ${score} telah ditambahkan di array ${arraySkormedium} (arraySkormedium)`)
    alert(`Skor ${score} telah ditambahkan di list skor mode medium`)
  } else if(difficulty === "demon") {
    console.log("player simpan skor")
    arraySkordemon.push(score);
    localStorage.setItem("arraySkordemon", JSON.stringify(arraySkordemon));
    console.log(`score ${score} telah ditambahkan di array ${arraySkordemon} (arraySkordemon)`)
    alert(`Skor ${score} telah ditambahkan di list skor mode demon`)
  } else if(difficulty === "hardcore") {
    console.log("player simpan skor")
    arraySkorhardcore.push(score);
    localStorage.setItem("arraySkorhardcore", JSON.stringify(arraySkorhardcore));
    console.log(`score ${score} telah ditambahkan di array ${arraySkorhardcore} (arraySkorhardcore)`)
    alert(`Skor ${score} telah ditambahkan di list skor mode hardcore`)
  }
}

function gethighscore() {
  document.getElementById("youdiedtext").classList.add("youdiedupifhighscore")
  if(difficulty === "peaceful") {
    if(arraySkorpeaceful.length === 0) {
    document.getElementById("highscoredisplay").textContent = "Belum Ada Skor Yang Tersimpan di mode peaceful 😅"
    } else {
    let highScore = Math.max(...arraySkorpeaceful);
    document.getElementById("highscoredisplay").textContent = highScore + " (Peaceful)"
    }
  } else if(difficulty === "easy") {
    if(arraySkoreasy.length === 0) {
    document.getElementById("highscoredisplay").textContent = "Belum Ada Skor Yang Tersimpan di mode easy😅"
    } else {
    let highScore = Math.max(...arraySkoreasy);
    document.getElementById("highscoredisplay").textContent = highScore + " (Easy)"
    }
  } else if(difficulty === "medium") {
    if(arraySkormedium.length === 0) {
    document.getElementById("highscoredisplay").textContent = "Belum Ada Skor Yang Tersimpan di mode medium😅"
    } else {
    let highScore = Math.max(...arraySkormedium);
    document.getElementById("highscoredisplay").textContent = highScore + " (Medium)"
    }
  } else if(difficulty === "demon") {
    if(arraySkordemon.length === 0) {
    document.getElementById("highscoredisplay").textContent = "Belum Ada Skor Yang Tersimpan di mode demon😅"
    } else {
    let highScore = Math.max(...arraySkordemon);
    document.getElementById("highscoredisplay").textContent = highScore + " (demon)"
    }
  } else if(difficulty === "hardcore") {
    if(arraySkorhardcore.length === 0) {
    document.getElementById("highscoredisplay").textContent = "Belum Ada Skor Yang Tersimpan di mode Hardcore😅"
    } else {
    let highScore = Math.max(...arraySkorhardcore);
    document.getElementById("highscoredisplay").textContent = highScore + " (Hardcore)"
    }
  }
  document.getElementById("opensesame!").classList.remove("hide")
}

function hapussemuaskor() {
  if(akuyakininginhapusskor && difficulty === "peaceful" && hapusskorcountdown > 0) {
    localStorage.removeItem("arraySkorpeaceful");
    arraySkorpeaceful = [];
    alert("Sukses Menghapus Semua Skor Mode Peaceful!")
    document.getElementById("pesan").textContent = "Berhasil Menghapus Semua Skor Mode Peaceful"
    hapusskorcountdown = 0
    akuyakininginhapusskor = false
  } else if(akuyakininginhapusskor === false && difficulty === "peaceful") {
    alert("Kamu yakin ingin HAPUS SEMUA SKOR? (di mode peaceful) Tekan hapus lagi dalam 5 detik kalau yakin");
    akuyakininginhapusskor = true;
    startcountdownhapusskor()
  }
  if(akuyakininginhapusskor && difficulty === "easy" && hapusskorcountdown > 0) {
    localStorage.removeItem("arraySkoreasy");
    arraySkoreasy = [];
    alert("Sukses Menghapus Semua Skor Mode Easy!")
    document.getElementById("pesan").textContent = "Berhasil Menghapus Semua Skor Mode Easy"
    hapusskorcountdown = 0
    akuyakininginhapusskor = false
  } else if(akuyakininginhapusskor === false && difficulty === "easy") {
    alert("Kamu yakin ingin HAPUS SEMUA SKOR? (di mode easy) Tekan hapus lagi dalam 5 detik kalau yakin");
    akuyakininginhapusskor = true;
    startcountdownhapusskor()
  }
  if(akuyakininginhapusskor && difficulty === "medium" && hapusskorcountdown > 0) {
    localStorage.removeItem("arraySkormedium");
    arraySkormedium = [];
    alert("Sukses Menghapus Semua Skor Mode Medium!")
    document.getElementById("pesan").textContent = "Berhasil Menghapus Semua Skor Mode Medium"
    hapusskorcountdown = 0
    akuyakininginhapusskor = false
  } else if(akuyakininginhapusskor === false && difficulty === "medium") {
    alert("Kamu yakin ingin HAPUS SEMUA SKOR? (di mode medium) Tekan hapus lagi dalam 5 detik kalau yakin");
    akuyakininginhapusskor = true;
    startcountdownhapusskor()
  }
  if(akuyakininginhapusskor && difficulty === "demon" && hapusskorcountdown > 0) {
    localStorage.removeItem("arraySkordemon");
    arraySkordemon = [];
    alert("Sukses Menghapus Semua Skor Mode demon!")
    document.getElementById("pesan").textContent = "Berhasil Menghapus Semua Skor Mode demon"
    hapusskorcountdown = 0
    akuyakininginhapusskor = false
  } else if(akuyakininginhapusskor === false && difficulty === "demon") {
    alert("Kamu yakin ingin HAPUS SEMUA SKOR? (di mode demon) Tekan hapus lagi dalam 5 detik kalau yakin");
    akuyakininginhapusskor = true;
    startcountdownhapusskor()
  }
  if(akuyakininginhapusskor && difficulty === "hardcore" && hapusskorcountdown > 0) {
    localStorage.removeItem("arraySkorhardcore");
    arraySkordemon = [];
    alert("Sukses Menghapus Semua Skor Mode hardcore!")
    document.getElementById("pesan").textContent = "Berhasil Menghapus Semua Skor Mode hardcore!"
    hapusskorcountdown = 0
    akuyakininginhapusskor = false
  } else if(akuyakininginhapusskor === false && difficulty === "hardcore") {
    alert("Kamu yakin ingin HAPUS SEMUA SKOR? (di mode hardcore) Tekan hapus lagi dalam 5 detik kalau yakin");
    akuyakininginhapusskor = true;
    startcountdownhapusskor()
  }
}
 
function startcountdownhapusskor() {
  timecountdownhapusskorintervalID = setInterval(countdownhapusskorminessatudetikuntuktombol, 1000)
  hapusskorcountdown = 6
}

function countdownhapusskorminessatudetikuntuktombol() {
  hapusskorcountdown = hapusskorcountdown - 1
  document.getElementById("lemparskorkealambarzah").textContent = `Tekan Lagi Untuk Hapus Skor (${hapusskorcountdown}s)`
  if(hapusskorcountdown < 1) {
    clearInterval(timecountdownhapusskorintervalID);
      document.getElementById("lemparskorkealambarzah").textContent = "Hapus Semua Skor"
      akuyakininginhapusskor = false;
  }
}

function unhide() {
  document.getElementById("skormanager").classList.remove("out")
  document.getElementById("skormanager").classList.add("in")
  document.getElementById("divnyawa").classList.remove("out")
  document.getElementById("divnyawa").classList.add("in")
  document.getElementById("waktu").classList.remove("out")
  document.getElementById("waktu").classList.add("in")
  document.getElementById("soaldanjawaban").classList.remove("out")
  document.getElementById("soaldanjawaban").classList.add("in")
  document.getElementById("soaljawabanwaktudanskor").style.pointerEvents = "auto";
}

function ohnoimdead() {
  document.getElementById("youdiedtext").classList.add("youdiedcauseyouhittheceiling")
  document.getElementById("scoredisplay").textContent = score
  pausecountdown()
  waterygraves.pause();
  waterygraves.currentTime = 0;
  wiishop.pause();
  wiishop.currentTime = 0;
  badpiggies.pause();
  badpiggies.currentTime = 0;
  slashinferno.pause();
  slashinferno.currentTime = 0;
  roast.pause();
  roast.currentTime = 0;
  minecraftsong.currentTime = 63;
  setTimeout(() => {
  minecraftsong.play();
    document.body.classList.add("slightlyredbackground")
    document.getElementById("youdiedtext").classList.remove("hide")
  }, 3000)
  setTimeout(() => {
  document.getElementById("skormanager").classList.add("goodnowtelleveryoneyourscore")
  }, 2000)
}

function ceknyawa() {
  if(nyawa <= 0) {
    ohnoimdead()
  }
}