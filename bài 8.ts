// Khai báo 2 biến firstName và lastName có kiểu dữ liệu string và gán giá trị
let firstName: string = "Hien";
let lastName: string = "Nguyen";

// Chuyển đổi chữ cái đầu của firstName và lastName thành chữ hoa nếu cần
if (firstName.length > 0) {
    firstName = firstName.charAt(0).toUpperCase() + firstName.slice(1);
}

if (lastName.length > 0) {
    lastName = lastName.charAt(0).toUpperCase() + lastName.slice(1);
}

// Ghép 2 chuỗi lại với dấu cách ở giữa và gán giá trị đã được ghép cho biến fullName
let fullName: string = firstName + " " + lastName;

// In kết quả ra màn hình để kiểm tra
console.log("Full Name:", fullName);
