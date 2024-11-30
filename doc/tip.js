// lay cac danh muc con cua dich vu toan dien

function convertString(input) {
  const withoutDiacritics = input
    .normalize("NFD") // Loại bỏ dấu
    .replace(/[\u0300-\u036f]/g, "") // Xóa các ký tự dấu
    .split(" ") // Tách chuỗi thành mảng
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1)) // Chữ hoa đầu mỗi từ
    .join("_"); // Ghép lại bằng dấu gạch dưới

  return withoutDiacritics;
}
a = document.querySelectorAll(
  ".css-1jxf684.r-8akbws.r-krxsd3.r-dnmrzs.r-1udh08x.r-1udbk01"
);
b = [];
c = [];
d = [];

a.forEach((item) => b.push(item.textContent));
b.forEach((item) => c.push(convertString(item)));
c.forEach((item, index) => d.push({ [c[index]]: b[index] }));

copy(d);
