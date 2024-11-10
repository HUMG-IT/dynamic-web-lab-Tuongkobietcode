const express = require('express');
const path = require('path');
const apiRoutes = require('./routes/api');  // Đảm bảo rằng đường dẫn đến file api.js đúng

const app = express();
const port = 3000;

// Middleware để xử lý JSON và URL-encoded form data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Middleware để phục vụ các tệp tĩnh (HTML, CSS, JS) từ thư mục 'public'
app.use(express.static(path.join(__dirname, '../public')));

// Import các route từ api.js
app.use('/api/v1', apiRoutes);

// Xử lý lỗi 404 cho các route không tồn tại
app.use((req, res, next) => {
  res.status(404).json({ message: 'Không tìm thấy trang yêu cầu' });
});

// Middleware xử lý lỗi chung
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Đã xảy ra lỗi trong server' });
});

// Khởi động server và lắng nghe trên cổng 3000
app.listen(port, () => {
  console.log(`Server đang chạy ở cổng ${port}`);
  console.log(`Truy cập vào http://localhost:${port} để xem ứng dụng`);
});
