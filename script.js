const Iya = document.querySelector(".next");
const Text = document.getElementById("text");
const Image = document.querySelector("#image-gif");

Iya.addEventListener("click", function(){
    Iya.value = parseInt(Iya.value) + 1;
    Text.classList.remove('text-animate');

    if(Iya.value == 1){
        Text.classList.remove('text-animate');
        void Text.offsetWidth;
        Text.innerHTML = "Assalamu'alaikum...";
        Text.classList.add('text-animate');
    } else if(Iya.value == 2){
        Text.classList.remove('text-animate');
        void Text.offsetWidth;
        Text.innerHTML = " Saya Muhammad Andika Putra";
        Text.classList.add('text-animate');
    } else if(Iya.value == 3){
        Text.classList.remove('text-animate');
        void Text.offsetWidth;
        Text.innerHTML = "Mohon Maaf Lahir dan Batin :)";
        Image.setAttribute("src", "https://c.tenor.com/uygoMR-ATWgAAAAj/happy-ied-mubarak-ied-mubarak.gif");
        Text.classList.add('text-animate');
    } else if(Iya.value == 4){
        Text.classList.remove('text-animate');
        void Text.offsetWidth;
        Text.innerHTML = "Jika ada kesalahan maafkan saya :(";
        Text.classList.add('text-animate');
    } else if(Iya.value == 5){
        Text.classList.remove('text-animate');
        void Text.offsetWidth;
        Text.innerHTML = "Karena berbuat khilaf adalah sifat";
        Text.classList.add('text-animate');
    } else if(Iya.value == 6){
        Text.classList.remove('text-animate');
        void Text.offsetWidth;
        Text.innerHTML = "Meminta maaf adalah kewajiban";
        Text.classList.add('text-animate');
    } else if(Iya.value == 7){
        Text.classList.remove('text-animate');
        void Text.offsetWidth;
        Text.innerHTML = "Dan Kembalinya Fitrah adalah Tujuan";
        Text.classList.add('text-animate');
    } else if(Iya.value == 8){
        Image.setAttribute("src", "https://c.tenor.com/T_16HTs34x4AAAAj/taqabbal-allahu-minna-wa-minkum-accept-god-with-us-and-you.gif");
        Text.classList.remove('text-animate');
        void Text.offsetWidth;
        Text.innerHTML = "تَقَبَّلَ اللَّهُ مِنَّا وَمِنْكُمْ وَ تَقَبَّلْ ياَ كَرِيْمُ <br> Taqabbalallahu Minna Wa Minkum";
        Text.classList.add('text-animate');
    } else if (Iya.value == 9) {
        Image.setAttribute("src", "https://c.tenor.com/57JSPYRo0k8AAAAj/lebaran-selamat-lebaran.gif");
        Text.classList.remove('text-animate');
        void Text.offsetWidth; 
        Text.innerHTML = "Selamat hari raya Idul Fitri 1443 Hijriah :)";
        Text.classList.add('text-animate');
        Iya.remove();
    }
});