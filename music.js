const btnPause = document.getElementById("btn-pause");
const btnPlay = document.getElementById("btn-play");
const song = document.getElementById("song-info");
const artists = document.getElementById("artists");
const playingTime = document.getElementById("playing-time");
const playingBar = document.getElementById("playing-bar");
const avt = document.getElementById("avt")

var listMusic = [
    {
        song: "1000X",
        artist: "AMEE, Lou Hoàng, Rhymastic",
        url: "1000x.mp3"
    },
    {
        song: "Đường Một Chiều",
        artist: "Huỳnh Tú, Magazine",
        url: "DuongMotChieu.mp3"
    },
    {
        song: "Hai Phút Hơn",
        artist: "Pháo, CM1X",
        url: "HaiPhutHon.mp3"
    },
    {
        song: "Yêu Em Dại Khờ",
        artist: "Lou Hoàng",
        url: "YeuEmDaiKho.mp3"
    },
    {
        song: "Hành Lang Cũ",
        artist: "Long Nón Lá, Masew",
        url: "HanhLangCu.mp3"
    },
    {
        song: "Khóc Cùng Em",
        artist: "Mr.Siro",
        url: "KhocCungEm.mp3"
    },
    {
        song: "Tình Sầu Thiên Thu Muôn Lối",
        artist: "Doãn Hiếu",
        url: "TinhSauThienThuMuonLoi.mp3"
    },
    {
        song: "Yêu Từ Đâu Mà Ra",
        artist: "Lil Zpoet",
        url: "YeuTuDauMaRa.mp3"
    },  
];
listMusic.sort(function () {
     return 0.5 - Math.random() });
var i = Math.floor(Math.random() * listMusic.length);
song.innerHTML = listMusic[i].song;
artists.innerHTML = listMusic[i].artist;
var music = new Audio();
var a = 0;



function previousMusic() {
    if (i == 0) {
        i = listMusic.length - 1;
    } else {
        i--;
    }
    a = 0;
    playMusic();
}

function playMusic() {
    avt.style.animation = "animate 5s linear infinite";
    song.innerHTML = listMusic[i].song;
    artists.innerHTML = listMusic[i].artist;
    btnPause.style.display = "block";
    btnPlay.style.display = "none";

    if (a == 0) {
        music.src = listMusic[i].url;
        a = 1;
    }
    music.play();
    setInterval(function () {
        if (music.currentTime == music.duration) {
            nextMusic();
        }
        timeMusic();
    }, 1000);

}

function pauseMusic() {
    avt.style.animationPlayState = "paused";
    btnPause.style.display = "none";
    btnPlay.style.display = "block";
    music.pause();
}

function nextMusic() {
    if (i == listMusic.length - 1) {
        i = 0;
    } else {
        i++;
    }
    a = 0;
    playMusic();
}

function timeMusic() {
    secondsCurrent = Math.round(music.currentTime) % 60;
    minuteCurrent = Math.floor(Math.round(music.currentTime) / 60);
    if (secondsCurrent < 10) {
        secondsCurrent = "0" + secondsCurrent;
    }
    currentTime = minuteCurrent + ":" + secondsCurrent;


    secondsDuration = Math.round(music.duration) % 60;
    minuteDuration = Math.floor(Math.round(music.duration) / 60);
    if (secondsDuration < 10) {
        secondsDuration = "0" + secondsDuration;
    }
    durationTimes = minuteDuration + ":" + secondsDuration;


    playingBar.style.width = Math.round(music.currentTime) / Math.round(music.duration) * 235 + 5 + "px";
    playingTime.innerHTML = currentTime + " / " + durationTimes;
}
