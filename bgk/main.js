var tanya = true;
while (tanya) {
  // menangkap pilihan player
  var p = prompt(
    "selamat datang di game buatan poetra \n sekarang kita akan main suwit \n silahkan masukan gajah, semut, ataupun orang ya!!!"
  );
  // menangkap pilihan com
  // membangkitkan bilangan random
  var com = Math.random();

  if (com < 0.34) {
    com = `gajah`;
  } else if (com > 0.34 && com < 0.67) {
    com = `semut`;
  } else {
    com = `orang`;
  }
  // menghentikan rules
  var hasil = "";
  if (p == com) {
    hasil = `SERI`;
  } else if (p == `gajah`) {
    //   if (com == orang) {
    //     hasil = "menang";
    //   } else {
    //     hasil = "kalah";
    //   }
    hasil = com == `orang` ? `MENANG` : `KALAH`;
  } else if (p == `orang`) {
    hasil = com == `semut` ? `MENANG` : `KALAH`;
  } else if (p == `semut`) {
    hasil = com == `gajah` ? `MENANG` : `KALAH`;
  } else {
    hasil = `anda memasukan pilihan yang salah`;
  }
  // tampilkan hasil
  alert(`kamu memilih ${p} dan computer memilih ${com} dan hasilnya: ${hasil}`);
  tanya = confirm(`lagi nggak ?`);
}
var nama = prompt(`masukan nama kamu`);
alert(`terima kasih ${nama} telah bermain dengan saya`);
