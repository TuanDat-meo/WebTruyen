document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    var input = document.getElementById("name-Mail").value;
    var pass = document.getElementById("Password").value;

    var emailPattern = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    var isValid = true;
    document.getElementById("name-Mail").classList.remove("input-error");
    document.getElementById("Password").classList.remove("input-error");

    if (input === "") {
        alert("Tên hoặc email không được để trống!");
        document.getElementById("name-Mail").classList.add("input-error");
        isValid = false;
    } else if (!input.includes(" ") && !emailPattern.test(input)) {
        alert("Tên phải có dấu cách hoặc nhập email hợp lệ!");
        document.getElementById("name-Mail").classList.add("input-error");
        isValid = false;
    }
    if (pass === "") {
        alert("Password không được để trống!");
        document.getElementById("Password").classList.add("input-error");
        isValid = false;
    }
    if (isValid) {
        alert("Đăng ký thành công.");
    }
    var inputs = document.querySelectorAll('input');
    inputs.forEach(function(input) {
        input.addEventListener('focus', function() {
            this.classList.remove('input-error');
        });
    });
});