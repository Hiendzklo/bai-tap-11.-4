// Khai báo biến name1 có kiểu dữ liệu string
let name1: string = "Jinx";

// Khai báo biến age có kiểu dữ liệu number
let age: number = 23;

// Khai báo biến job có kiểu dữ liệu string
let job: string = "Doctor";

// Hàm nhận vào 3 tham số và in ra màn hình
function printDetails(name: string, age: number, job: string): void {
    console.log("Name: " + name);
    console.log("Age: " + age);
    console.log("Job: " + job);
}

// Gọi hàm và truyền các biến vào
printDetails(name1, age, job);
