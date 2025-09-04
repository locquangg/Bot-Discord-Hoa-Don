// index.js - Discord Invoice Bot (Deploy Ready)
import 'dotenv/config';
import { Client, GatewayIntentBits, SlashCommandBuilder, Routes, EmbedBuilder } from 'discord.js';
import { REST } from '@discordjs/rest';
import express from 'express';

const TOKEN = process.env.DISCORD_TOKEN;
const CLIENT_ID = process.env.CLIENT_ID;
const GUILD_ID = process.env.GUILD_ID;
const CURRENCY = process.env.CURRENCY || "VND";
const BRAND_NAME = process.env.BRAND_NAME || "Minecraft Studio";
const BRAND_COLOR = process.env.BRAND_COLOR || "#00B894";
const PORT = process.env.PORT || 3000;

// Tạo client Discord
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

// Web server giữ bot online
const app = express();
app.get("/", (req, res) => res.send("Bot Discord đang chạy!"));
app.listen(PORT, () => console.log(`Web server online tại cổng ${PORT}`));

// Slash command /hoadon
const commands = [
  new SlashCommandBuilder()
    .setName("hoadon")
    .setDescription("Tạo hóa đơn dịch vụ Minecraft Studio")
    .addStringOption(opt => opt.setName("dichvu").setDescription("Tên dịch vụ").setRequired(true))
    .addIntegerOption(opt => opt.setName("gia").setDescription("Giá tiền").setRequired(true))
    .addStringOption(opt => opt.setName("khachhang").setDescription("Tên khách hàng").setRequired(true))
    .toJSON()
];

const rest = new REST({ version: '10' }).setToken(TOKEN);
(async () => {
  try {
    console.log("Đang đăng lệnh slash...");
    await rest.put(Routes.applicationGuildCommands(CLIENT_ID, GUILD_ID), { body: commands });
    console.log("Đăng lệnh slash thành công!");
  } catch (err) {
    console.error("Lỗi khi đăng lệnh:", err);
  }
})();

// Xử lý lệnh /hoadon
client.on("interactionCreate", async interaction => {
  if (!interaction.isChatInputCommand()) return;
  if (interaction.commandName === "hoadon") {
    const dichvu = interaction.options.getString("dichvu");
    const gia = interaction.options.getInteger("gia");
    const khachhang = interaction.options.getString("khachhang");

    const embed = new EmbedBuilder()
      .setTitle(`🧾 Hóa Đơn Dịch Vụ - ${BRAND_NAME}`)
      .setColor(BRAND_COLOR)
      .addFields(
        { name: "Dịch vụ", value: dichvu, inline: true },
        { name: "Khách hàng", value: khachhang, inline: true },
        { name: "Giá", value: `${gia.toLocaleString()} ${CURRENCY}`, inline: true }
      )
      .setFooter({ text: "Cảm ơn quý khách đã sử dụng dịch vụ!" })
      .setTimestamp();

    await interaction.reply({ embeds: [embed] });
  }
});

client.once("ready", () => {
  console.log(`Bot đã đăng nhập thành công với tên: ${client.user.tag}`);
});

client.login(TOKEN);
