function livetime() {
    var time = new Date();
    let waktu = ('0' + time.getHours()).slice(-2) + ":" + ('0' + time.getMinutes()).slice(-2);

    document.getElementById("waktu").innerHTML = waktu;

    var timeout = setTimeout(livetime, 1000);

}

function getnama () {
    var nama = prompt("Kalo Boleh Tau Nama Kamu Siapa Sih?");
    document.getElementById("username").innerHTML = nama;
}
