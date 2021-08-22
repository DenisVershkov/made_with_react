const nodemailer = require("nodemailer");

class MailService {
  constructor() {
    this.transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    });
  }

  async sendActivationMail(to, link) {
    await this.transporter.sendMail({
      from: `ElbrusFinalProject team <${process.env.SMTP_USER}>`,
      to,
      subject: "Активация аккаунта на ElbrusFinalProject",
      text: "",
      html: `
    <table border="0" cellpadding="0" cellspacing="0" width="100%">
    <tr>
      <td align="center" bgcolor="#e9ecef">
        <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;">
          <tr>
            <td align="center" valign="top" style="padding: 36px 24px;">
              <a href="{}" target="_blank" style="display: inline-block;">
                <img src="https://res.cloudinary.com/finalprojectelbrus/image/upload/v1626253060/geek_cafqim.svg" alt="Logo" border="0" width="48" style="display: block; width: 48px; max-width: 48px; min-width: 48px;">
              </a>
            </td>
          </tr>
        </table>
      </td>
    </tr>
    <tr>
      <td align="center" bgcolor="#e9ecef">
        <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;">
          <tr>
            <td align="left" bgcolor="#ffffff" style="padding: 36px 24px 0; font-family: 'Source Sans Pro', Helvetica, Arial, sans-serif; border-top: 3px solid #d4dadf;">
              <h1 style="margin: 0; font-size: 32px; font-weight: 700; letter-spacing: -1px; line-height: 48px;">Здравствуйте!</h1>
            </td>
          </tr>
        </table>
      </td>
    </tr>
    <tr>
      <td align="center" bgcolor="#e9ecef">
        <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;">
          <tr>
            <td align="left" bgcolor="#ffffff" style="padding: 24px; font-family: 'Source Sans Pro', Helvetica, Arial, sans-serif; font-size: 16px; line-height: 24px;">
            <p style="margin: 0;">Вы указали адрес ${to} в качестве логина на ElbrusFinalProject. Для подтверждения адреса нажмите на кнопку ниже.</p>
            </td>
          </tr>
          <tr>
          <td align="left" bgcolor="#ffffff" style="padding: 24px; font-family: 'Source Sans Pro', Helvetica, Arial, sans-serif; font-size: 16px; line-height: 24px;">
          <p style="margin: 0;">Ссылка дейстует 10 минут, и использовать её можно только 1 раз</p>
        </td>
          </tr>
          <tr>
            <td align="left" bgcolor="#ffffff">
              <table border="0" cellpadding="0" cellspacing="0" width="100%">
                <tr>
                  <td align="center" bgcolor="#ffffff" style="padding: 12px;">
                    <table border="0" cellpadding="0" cellspacing="0">
                      <tr>
                      <td align="center" bgcolor="#1a82e2" style="border-radius: 6px;">
                        <a href=${link} target="_blank" style="display: inline-block; padding: 16px 36px; font-family: 'Source Sans Pro', Helvetica, Arial, sans-serif; font-size: 16px; color: #ffffff; text-decoration: none; border-radius: 6px;">Подтвердить активацию аккаунта</a>
                      </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <tr>
                      <td align="left" bgcolor="#ffffff" style="padding: 24px; font-family: 'Source Sans Pro', Helvetica, Arial, sans-serif; font-size: 16px; line-height: 24px;">
                      <p style="margin: 0;">Если вы не регистрируетесь на ElbrusFinalProject, просто не обращайте внимания на это письмо. Скорее всего, кто-то указал ваш адрес по ошибке.</p>
                    </td>
                    </tr>
          <tr>
          <td align="left" bgcolor="#ffffff" style="padding: 24px; font-family: 'Source Sans Pro', Helvetica, Arial, sans-serif; font-size: 16px; line-height: 24px; border-bottom: 3px solid #d4dadf">
            <p style="font-size:15px;font-style:italic;">С заботой о безопасности Вашего аккаунта,,<br> команда ElbrusFinalProject</p>
          </td>
        </tr>
        </table>
      </td>
    </tr>
    <tr>
      <td align="center" bgcolor="#e9ecef" style="padding: 24px;">
        <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;">
          <tr>
          <td align="center" bgcolor="#e9ecef" style="padding: 12px 24px; font-family: 'Source Sans Pro', Helvetica, Arial, sans-serif; font-size: 14px; line-height: 20px; color: #666;">
            <p style="margin: 0;">
              ElbrusFinalProject</p>
              <p style="margin: 0;">
                Moscow Russia</p>
          </td>
        </tr>
        </table>
      </td>
    </tr>
  </table>
              `,
    });
  }

  async sendResetPasswordLink(to, link) {
    await this.transporter.sendMail({
      from: `ElbrusFinalProject team <${process.env.SMTP_USER}>`,
      to,
      subject: "Восстановление пароля на ElbrusFinalProject",
      text: "",
      html: `
    <table border="0" cellpadding="0" cellspacing="0" width="100%">
    <tr>
      <td align="center" bgcolor="#e9ecef">
        <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;">
          <tr>
            <td align="center" valign="top" style="padding: 36px 24px;">
              <a href="{}" target="_blank" style="display: inline-block;">
                <img src="https://res.cloudinary.com/finalprojectelbrus/image/upload/v1626253060/geek_cafqim.svg" alt="Logo" border="0" width="48" style="display: block; width: 48px; max-width: 48px; min-width: 48px;">
              </a>
            </td>
          </tr>
        </table>
      </td>
    </tr>
    <tr>
      <td align="center" bgcolor="#e9ecef">
        <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;">
          <tr>
            <td align="left" bgcolor="#ffffff" style="padding: 36px 24px 0; font-family: 'Source Sans Pro', Helvetica, Arial, sans-serif; border-top: 3px solid #d4dadf;">
              <h1 style="margin: 0; font-size: 32px; font-weight: 700; letter-spacing: -1px; line-height: 48px;">Здравствуйте!</h1>
            </td>
          </tr>
        </table>
      </td>
    </tr>
    <tr>
      <td align="center" bgcolor="#e9ecef">
        <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;">
          <tr>
            <td align="left" bgcolor="#ffffff" style="padding: 24px; font-family: 'Source Sans Pro', Helvetica, Arial, sans-serif; font-size: 16px; line-height: 24px;">
            <p style="margin: 0;">Вы запросили ссылку для изменения вашего пароля на <a href='https://www.google.com/'>ElbrusFinalProject</a>. Чтобы изменить пароль – перейдите по этой ссылке или нажмите на кнопку ниже.</p>
            </td>
          </tr>
          <tr>
          <td align="left" bgcolor="#ffffff" style="padding: 24px; font-family: 'Source Sans Pro', Helvetica, Arial, sans-serif; font-size: 16px; line-height: 24px;">
          <p style="margin: 0;">Если вы не запрашивали изменения пароля, просто проигнорируйте это письмо. Ваш пароль не изменится пока вы не перейдете по ссылке и не введете новый пароль.</p>
        </td>
          </tr>
          <tr>
            <td align="left" bgcolor="#ffffff">
              <table border="0" cellpadding="0" cellspacing="0" width="100%">
                <tr>
                  <td align="center" bgcolor="#ffffff" style="padding: 12px;">
                    <table border="0" cellpadding="0" cellspacing="0">
                      <tr>
                      <td align="center" bgcolor="#1a82e2" style="border-radius: 6px;">
                        <a href=${link} target="_blank" style="display: inline-block; padding: 16px 36px; font-family: 'Source Sans Pro', Helvetica, Arial, sans-serif; font-size: 16px; color: #ffffff; text-decoration: none; border-radius: 6px;">Сменить пароль</a>
                      </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <tr>
          <td align="left" bgcolor="#ffffff" style="padding: 24px; font-family: 'Source Sans Pro', Helvetica, Arial, sans-serif; font-size: 16px; line-height: 24px; border-bottom: 3px solid #d4dadf">
            <p style="font-size:15px;font-style:italic;">С заботой о безопасности Вашего аккаунта,,<br> команда ElbrusFinalProject</p>
          </td>
        </tr>
        </table>
      </td>
    </tr>
    <tr>
      <td align="center" bgcolor="#e9ecef" style="padding: 24px;">
        <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;">
          <tr>
          <td align="center" bgcolor="#e9ecef" style="padding: 12px 24px; font-family: 'Source Sans Pro', Helvetica, Arial, sans-serif; font-size: 14px; line-height: 20px; color: #666;">
            <p style="margin: 0;">
              ElbrusFinalProject</p>
              <p style="margin: 0;">
                Moscow Russia</p>
          </td>
        </tr>
        </table>
      </td>
    </tr>
  </table>
              `,
    });
  }
}

module.exports = new MailService();
