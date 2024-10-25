document.addEventListener('DOMContentLoaded', function() {
    // Lấy tất cả các phần tử có class 'page-link'
    const pageLinks = document.querySelectorAll('.page-link');
    // Duyệt qua tất cả các liên kết trang
    pageLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault(); // Ngăn việc tải lại trang

            // Xóa class 'active' khỏi tất cả các số trang khác
            pageLinks.forEach(link => link.parentElement.classList.remove('active'));

            // Thêm class 'active' cho số trang vừa được nhấn
            this.parentElement.classList.add('active');
        });
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const textarea = document.getElementById('comment-box');
    const charCount = document.getElementById('char-count');

    textarea.addEventListener('input', function() {
        charCount.textContent = textarea.value.length;
    });
});
const stars = document.querySelectorAll('.star');
const ratingValue = document.getElementById('rating-value');
let selectedRating = 0;

stars.forEach(star => {
    star.addEventListener('mouseover', handleMouseOver);
    star.addEventListener('mouseout', handleMouseOut);
    star.addEventListener('click', handleClick);
});

function handleMouseOver(e) {
    const value = e.target.getAttribute('data-value');
    highlightStars(value);
}

function handleMouseOut() {
    highlightStars(selectedRating);
}

function handleClick(e) {
    selectedRating = e.target.getAttribute('data-value');
    ratingValue.textContent = selectedRating;
    highlightStars(selectedRating);
}

function highlightStars(value) {
    stars.forEach(star => {
        // Compare the data-value of the star to the value being hovered
        if (parseInt(star.getAttribute('data-value')) <= parseInt(value)) {
            star.classList.add('hovered');
        } else {
            star.classList.remove('hovered');
        }
    });
}
document.addEventListener("DOMContentLoaded", function() {
    const readMoreBtn = document.querySelector(".read-more");
    const hiddenText = document.querySelector(".hidden-text");

    readMoreBtn.addEventListener("click", function(event) {
        event.preventDefault();
        if (hiddenText.style.display === "none" || hiddenText.style.display === "") {
            hiddenText.style.display = "inline";  // Hiển thị văn bản đầy đủ
            readMoreBtn.textContent = "Rút gọn";  // Đổi văn bản nút thành 'Rút gọn'
        } else {
            hiddenText.style.display = "none";  // Ẩn văn bản bổ sung
            readMoreBtn.textContent = "Xem thêm"; // Đổi văn bản nút lại thành 'Xem thêm'
        }
    });
});

