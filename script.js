// 🌟 Validasi Formulir
document.getElementById("form-kontak").addEventListener("submit", function(event) {
    event.preventDefault();
    
    let nama = document.getElementById("nama").value;
    let email = document.getElementById("email").value;
    let pesan = document.getElementById("pesan").value;

    if (nama === "" || email === "" || pesan === "") {
        alert("Harap isi semua bidang.");
        return;
    }

    alert("Pesan berhasil dikirim!");
    this.reset();
});
    