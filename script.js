const notesContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".btn");

// Hàm hiển thị ghi chú từ localStorage
function showNotes() {
    notesContainer.innerHTML = localStorage.getItem("notes") || ''; // Lấy ghi chú từ localStorage
}

// Hàm cập nhật ghi chú vào localStorage
function updateStorage() {
    localStorage.setItem("notes", notesContainer.innerHTML); // Lưu ghi chú hiện tại vào localStorage
}

// Tạo ghi chú mới khi nhấn nút
createBtn.addEventListener("click", () => {
    // Tạo phần tử ghi chú mới
    let inputBox = document.createElement("p");
    inputBox.className = "input-box"; // Thêm lớp cho ghi chú
    inputBox.setAttribute("contenteditable", "true"); // Cho phép chỉnh sửa

    // Tạo nút xóa
    let img = document.createElement("img");
    img.src = "./delete.png"; // Hình ảnh xóa
    img.alt = "Delete"; // Thêm alt cho hình ảnh

    // Thêm ghi chú và nút xóa vào container
    notesContainer.appendChild(inputBox);
    inputBox.appendChild(img);

    // Cập nhật storage sau khi thêm ghi chú
    updateStorage();
});

// Sự kiện khi nhấn vào ghi chú hoặc nút xóa
notesContainer.addEventListener("click", function (e) {
    // Nếu nhấn vào nút xóa
    if (e.target.tagName === "IMG") {
        e.target.parentElement.remove(); // Xóa ghi chú
        updateStorage(); // Cập nhật lưu trữ
    } 
    // Nếu nhấn vào ghi chú
    else if (e.target.tagName === "P") {
        // Cập nhật lưu trữ khi nhấn phím
        e.target.addEventListener("keyup", updateStorage);
    }
});

// Hiển thị ghi chú khi tải trang
showNotes();

// Ngăn không cho nhấn Enter tạo dòng mới trong ghi chú
document.addEventListener("keydown", event => {
    if (event.key === "Enter") {
        event.preventDefault(); // Ngăn chặn hành động mặc định
    }
});