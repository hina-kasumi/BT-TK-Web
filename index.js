// Lấy đường dẫn hiện tại của trang
let currentPath = window.location.pathname;

// Tách đường dẫn thành các phần tử
let pathParts = currentPath.split('/');

// Lấy tên thư mục cùng cấp với file .html
let directoryName = pathParts[pathParts.length - 1];

console.log('Tên thư mục:', directoryName.length);

for (let i = 0; i < directoryName.length; i++) {
    console.log(directoryName[i]);
    
}
