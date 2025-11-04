'use server';
import axios from 'axios';

const telegramBotToken = process.env.TELEGRAM_BOT_TOKEN;
const chatId = process.env.TELEGRAM_CHAT_ID;
const BASE_URL = `https://api.telegram.org/bot${telegramBotToken}/sendMessage`;

export async function sendOrderMessage(data: any): Promise<any> {
    const {
        name,
        phone,
        email = '',
        comment,
    } = data;
    const message = `
    📝 Новый заказ:\n
    👤 Имя: ${name}
    📱 Телефон: ${phone}
    📧 Email: ${email}
    📝 Комментарий: ${comment || 'Нет комментариев'}
    `;

    return await axios
        .post(BASE_URL, {
            chat_id: chatId,
            text: message,
        })
        .then((response) => {
            console.log('Message sent to Telegram:', response.data);
            return response.data;
        })
        .catch((error) => {
            console.error('Error sending message to Telegram:', error);
            throw error;
        });
}