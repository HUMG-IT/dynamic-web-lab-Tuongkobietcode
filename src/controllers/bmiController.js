// Import các hàm calculateBMI và classifyBMI từ bmi.js

// Hàm getBMI xử lý yêu cầu từ client
// Trả về JSON chứa bmi và classification

// Xuất hàm getBMI

// Lưu ý: Tham khảo mã trong tệp nameController.js
// src/controllers/bmiController.js

// controllers/bmiController.js

/**
 * Hàm tính BMI và phân loại
 * 
 * @param {Object} req - Dữ liệu yêu cầu từ client
 * @param {Object} res - Dữ liệu phản hồi cho client
 */
// Hàm tính toán BMI và phân loại
const { calculateBMI, classifyBMI } = require('../models/bmi');  // Đảm bảo đã import chính xác các hàm tính toán

// Hàm xử lý BMI và phân loại
const getBMI = (req, res) => {
  const { weight, height } = req.body;
  
  if (!weight || !height || weight <= 0 || height <= 0) {
    return res.status(400).json({ message: 'Cần cung cấp cân nặng và chiều cao hợp lệ!' });
  }

  try {
    const bmi = calculateBMI(weight, height);
    const classification = classifyBMI(bmi);

    res.status(200).json({
      bmi: bmi.toFixed(2),
      classification: classification,
    });
  } catch (error) {
    console.error('Error in BMI calculation:', error);
    res.status(500).json({ message: 'Đã xảy ra lỗi khi tính toán BMI!' });
  }
};

module.exports = { getBMI };
