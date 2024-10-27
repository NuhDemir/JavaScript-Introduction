document.getElementById('userForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    if (username === '' || password === '' || confirmPassword === '') {
        alert('Lütfen tüm alanları doldurun.');
        return;
    }

    if (password !== confirmPassword) {
        alert('Şifreler eşleşmiyor!');
        return;
    }

    alert('Kullanıcı başarıyla oluşturuldu!');
    // Here you can add further processing (e.g., sending data to the server)
});