---

# 📜 Minecraft Studio Invoice Bot

Bot Discord giúp **tạo hóa đơn dịch vụ** (Plugin, Map, Model, …) bằng slash command.
Hóa đơn hiển thị dưới dạng **embed đẹp mắt** và được **lưu lại trong file `invoices.yml`** để quản lý.

---

## ✨ Tính năng

* Slash command `/hoadon` để tạo hóa đơn.
* Hóa đơn tự động lưu vào `invoices.yml` (định dạng YAML, dễ chỉnh sửa).
* Hoạt động tốt trên các hosting Node.js (Heroku, Railway, Replit, Render, …).
* Có web server mini để hosting không bị “ngủ”.

---

## ⚙️ Cấu hình `.env`

Tạo file `.env` trong thư mục bot với nội dung:

```env
DISCORD_TOKEN=your_discord_bot_token_here
DISCORD_CLIENT_ID=your_discord_client_id_here
PORT=3000
```

🔑 Giải thích:

* **DISCORD\_TOKEN** → Token bot từ [Discord Developer Portal](https://discord.com/developers/applications).
* **DISCORD\_CLIENT\_ID** → Application ID (dùng để đăng ký slash commands).
* **PORT** → Hosting sẽ tự cung cấp. Nếu chạy local thì để `3000`.

---

## 💡 Sử dụng

### Lệnh `/hoadon`

Tạo hóa đơn mới:

```
/hoadon khachhang:Noob dichvu:"Plugin Minecraft" gia:200000
```

Bot sẽ gửi embed như sau:

```
📜 HÓA ĐƠN DỊCH VỤ
Khách hàng: Noob
Dịch vụ: Plugin Minecraft
Giá tiền: 200000 VNĐ
Ngày tạo: 04/09/2025, 23:00
```

---

## 🌐 Deploy lên hosting

* **Heroku**: add project, set biến môi trường từ `.env`.
* **Railway / Render / Replit**: upload code, chạy lệnh `npm install` → `npm start`.
* Bot sẽ tự hoạt động 24/7.

---

👉 Vậy là bạn đã có 1 bot Discord chuyên nghiệp để quản lý hóa đơn cho **Minecraft Studio** rồi!

---
