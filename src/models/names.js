/**
 * Module quản lý danh sách tên
 * 
 * Module này lưu trữ danh sách tên và cung cấp các phương thức để:
 * - Thêm tên mới vào danh sách.
 * - Lấy danh sách tên hiện có.
 */

const names = []; // Mảng lưu trữ các tên được thêm vào

/**
 * Hàm `addName`
 * 
 * Hàm này thêm một tên mới vào danh sách tên.
 * 
 * @function addName
 * @param {string} name - Tên cần thêm vào danh sách.
 * 
 * @example
 * addName("John");
 * // Sau khi thêm, mảng names sẽ là ["John"]
 */
const addName = (name) => {
    if (name && typeof name === 'string' && name.trim() !== '') {
        names.push(name); // Thêm tên vào cuối mảng names
    }
};

/**
 * Hàm `getNames`
 * 
 * Hàm này trả về danh sách tên hiện có.
 * 
 * @function getNames
 * @returns {string[]} - Mảng chứa tất cả các tên đã được thêm.
 * 
 * @example
 * getNames();
 * // Kết quả: ["John", "Jane"]
 */
const getNames = () => {
    return names; // Trả về mảng names chứa danh sách tên
};

module.exports = { addName, getNames };
