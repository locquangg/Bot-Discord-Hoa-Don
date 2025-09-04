---

# 📜 Bot Discord Hóa Đơn

Bot Discord giúp **tạo hóa đơn dịch vụ (Plugin, Map, Model, …)** bằng câu lệnh `/hoadon`.
* Được phát triển bởi - noob_plss `Discord`

---

## ✨ Tính năng

* Slash command `/hoadon` để tạo hóa đơn.
* Hoạt động tốt trên các hosting Node.js (Heroku, Railway, Replit, Render, …).

---

## ⚙️ Cấu hình `.env`

🔑 Giải thích:

* **DISCORD\_TOKEN**=`Token Bot` từ [Discord Developer Portal](https://discord.com/developers/applications).
* **CLIENT\_ID**=`Application ID` từ [Discord Developer Portal](https://discord.com/developers/applications).
* **GUILD\_ID**=`Id-Server`
* **CURRENCY**=`VND` → Loại tiền tệ
* **BRAND\_NAME**=`ABC Studio` → Tên dịch vụ
* **BRAND\_COLOR**=`#00B894` → Màu của tin nhắn embed.
* **PORT**=`3000` → Hosting sẽ tự cung cấp (Không khuyến nghị chỉnh sửa).

---

## 💡 Sử dụng

### Lệnh `/hoadon`

Tạo hóa đơn mới:

```
/hoadon khachhang:Noob dichvu:Plugin Minecraft gia:200000
```

Bot sẽ gửi embed như sau:

```
📜 HÓA ĐƠN DỊCH VỤ - ABC Studio

Dịch vụ
Plugin Minecraft

Khách hàng
Noob

Giá
200,000 VND
```

---

## 🌐 Cách chạy bot

* Tải về và thả toàn bộ 3 file lên Hosting Node.js
* Lưu ý - Sau khi thêm 3 file vào Hosting phải **ĐỔI TÊN FILE `.env.yml` thành `.env`**
* Điền đầy đủ thông tin vào `.env`
* Khởi động Hosting
* Bot sẽ tự hoạt động 24/7

---

* 👉 Vậy là bạn đã có 1 Bot Discord chuyên nghiệp để quản lý hóa đơn cho **Server Minecraft Studio** rồi!
* 🎐 Bạn hoàn toàn có thể code thêm tính năng nếu muốn! Chúc bạn thành công.

---
