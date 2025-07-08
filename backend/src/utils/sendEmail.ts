import * as nodemailer from "nodemailer";
import "dotenv/config";

// Создание транспортера
const transporter = nodemailer.createTransport({
  host: "smtp.yandex.ru",
  port: 465,
  secure: true,
  auth: {
    user: "mamaev@myservices.digital",
    pass: "jzrlteuvistdymhp",
  },
});

export const sendMailCertificate = (
  certificate: Buffer<ArrayBufferLike>,
  email: string,
) => {
  // Отправка письма
  transporter.sendMail(
    {
      from: "mamaev@myservices.digital",
      subject: "Конный клуб радуга - подарочный сертификат",
      to: email,
      attachments: certificate
        ? [
            {
              filename: "certificate.template.pdf",
              content: certificate,
            },
          ]
        : [],
    },
    (error, info) => {
      if (error) {
        return console.log("Ошибка при отправке:", error);
      }
      console.log(
        "Письмо отправлено на:",
        process.env.SMTP_TO,
        "\n",
        info.response,
      );
    },
  );
};
