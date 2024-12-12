// Dữ liệu mẫu về sinh viên
const studentData = [
    { id: "S001", name: "Alice Johnson", gender: "Computer Science", education: 3.8, status: "Active" },
    { id: "S002", name: "Bob Smith", gender: "Engineering", education: 3.5, status: "At Risk" },
    { id: "S003", name: "Catherine Lee", gender: "Business", education: 3.2, status: "Active" },
    { id: "S004", name: "David Brown", gender: "Arts & Sciences", education: 2.9, status: "Inactive" },
];

// Hàm render bảng sinh viên
function renderStudentTable(data) {
    const tbody = document.querySelector(".student-table tbody");
    tbody.innerHTML = ""; // Xóa dữ liệu cũ
    data.forEach((student) => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${student.id}</td>
            <td>${student.name}</td>
            <td>${student.gender}</td>
            <td>${student.education.toFixed(1)}</td>
            <td>${student.status}</td>
        `;
        tbody.appendChild(row);
    });
}

// Gọi hàm để hiển thị dữ liệu
renderStudentTable(studentData);
