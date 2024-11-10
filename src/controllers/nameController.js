/**
 * Module xử lý yêu cầu gửi tên từ client và trả lời với lời chào cùng danh sách tên hiện tại.
 * 
 * Các chức năng chính:
 * - Nhận tên từ client thông qua `req.body.name`.
 * - Thêm tên vào danh sách lưu trữ trong `names` model.
 * - Trả về phản hồi JSON chứa lời chào và danh sách tên cập nhật.
 */

// Hàm tính BMI
const names = [];

const submitName = (req, res) => {
  const name = req.body.name;
  names.push(name);
  res.json({ message: `Xin chào, ${name}!`, names });
};

module.exports = { submitName };
