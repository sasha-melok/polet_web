// app/api/send-email/route.ts
import { NextRequest } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
    try {
        const { email, message } = await request.json();

        if (!email || !message) {
            return Response.json({ error: 'Все поля обязательны' }, { status: 400 });
        }

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.GMAIL_USER,
                pass: process.env.GMAIL_PASSWORD,
            },
        });

        await transporter.sendMail({
            from: email,
            to: process.env.GMAIL_USER,
            subject: `Вопрос с сайта`,
            text: `От: ${email}\n\n${message}`,
            html: `<p>От: ${email}</p><p>${message}</p>`,
        });

        return Response.json({ success: true });
    } catch (error) {
        console.error('Ошибка отправки email:', error);
        return Response.json({ error: 'Ошибка сервера' }, { status: 500 });
    }
}