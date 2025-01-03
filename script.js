function kontrolEt() {
    var sifre = document.getElementById("sifre").value;  // Kullanıcının girdiği şifreyi al
    var dogruSifre = "514";  // Doğru şifre

    // Şifreyi kontrol et
    if (sifre === dogruSifre) {
        // Şifre doğruysa, kutuyu animasyonlu şekilde göster
        var kutu = document.getElementById("kutular");

        // Kutu başlangıçta gizli, önce display: block yapıyoruz
        kutu.style.display = "block";  // Kutu görünür hale gelir

        // Kutu animasyonu başlat
        kutu.style.animation = "kutuGoster 0.5s ease forwards"; // Animasyonu tetikle

        // Uyarıyı gizle
        document.getElementById("uyari").style.display = "none";
        
        // "Devam Et" butonunu göster
        document.getElementById("devamButonu").style.display = "inline-block"; // Butonu görünür yap
    } else {
        // Şifre yanlışsa, kutuyu gizle
        document.getElementById("kutular").style.display = "none";

        // Uyarıyı göster
        document.getElementById("uyari").style.display = "block";
        
        // "Devam Et" butonunu gizle
        document.getElementById("devamButonu").style.display = "none";
    }
}

// "Devam Et" butonuna tıklanınca yapılacak işlem
function devamEt() {
    alert("Devam Etmek İçin Tıkla");
    window.location.href = "bul.html";
}
