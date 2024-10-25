let currentSlideIndex = 0; // Biến theo dõi chỉ số của slider hiện tại
let totalSlides = document.querySelectorAll('.slider-item').length; // Tổng số slide (cả hai slider có cùng số lượng item)

// Hàm chuyển đến slide kế tiếp
function showNext() {
    if (currentSlideIndex < totalSlides - 1) {
        currentSlideIndex++;
    } else {
        currentSlideIndex = 0;
    }
    updateSlider(); // Cập nhật vị trí của cả hai sliders
}

// Hàm chuyển đến slide trước đó
function showPrevious() {
    if (currentSlideIndex > 0) {
        currentSlideIndex--;
    } else {
        currentSlideIndex = totalSlides - 1;
    }
    updateSlider(); // Cập nhật vị trí của cả hai sliders
}

// Hàm cập nhật vị trí của sliders
function updateSlider() {
    let translateValue = -currentSlideIndex * 100; // Giá trị dịch chuyển theo phần trăm

    // Dịch chuyển slider 1
    document.querySelector('.slider-top-show').style.transform = `translateX(${translateValue}%)`;

    // Dịch chuyển slider 2
    document.querySelector('.slider-bottom-show').style.transform = `translateX(${translateValue}%)`;
}
// lượt xem
// Lấy phần tử p có class "viewed"
const viewedElement = document.querySelector('.viewed');

// Lấy số lượt xem từ nội dung bên trong phần tử
const viewedCount = viewedElement.textContent.trim();

console.log(viewedCount); // In ra số lượt xem
