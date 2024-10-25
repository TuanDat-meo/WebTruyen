/*------------Thành viên------ */
// Hiển thị hộp đăng nhập khi nhấn vào nút "Thành viên"
document.getElementById('memberButton').addEventListener('click', function() {
    const loginContainer = document.getElementById('loginContainer');
    loginContainer.style.display = 'flex'; // Hiển thị hộp đăng nhập
});

// Tắt hộp đăng nhập khi nhấn ra ngoài hộp đăng nhập
window.addEventListener('click', function(event) {
    const loginContainer = document.getElementById('loginContainer');
    if (event.target === loginContainer) {
        loginContainer.style.display = 'none'; // Ẩn hộp đăng nhập
    }
});

// Đóng hộp đăng nhập khi nhấn vào nút đóng (X)
document.querySelector('.close-btn').addEventListener('click', function() {
    document.getElementById('loginContainer').style.display = 'none'; // Ẩn hộp đăng nhập
});