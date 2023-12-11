import { Email } from "../config/mail.js";
import fs from "fs";

export const servSendUrlResetPass = async (email, url) => {
  const mail = {
    from: "Churrasqueria La Herencia<" + process.env.GMAILACCOUNT + ">",
    to: email,
    subject: "Recuperacion de contraseña",
    text: url,
    html:
      `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
        <html
          dir="ltr"
          xmlns="http://www.w3.org/1999/xhtml"
          xmlns:o="urn:schemas-microsoft-com:office:office"
        >
          <head>
            <meta charset="UTF-8" />
            <meta content="width=device-width, initial-scale=1" name="viewport" />
            <meta name="x-apple-disable-message-reformatting" />
            <meta http-equiv="X-UA-Compatible" content="IE=edge" />
            <meta content="telephone=no" name="format-detection" />
            <title></title>
            <!--[if (mso 16)]>
              <style type="text/css">
                a {
                  text-decoration: none;
                }
              </style>
            <![endif]-->
            <!--[if gte mso 9
              ]><style>
                sup {
                  font-size: 100% !important;
                }
              </style><!
            [endif]-->
            <!--[if gte mso 9]>
              <xml>
                <o:OfficeDocumentSettings>
                  <o:AllowPNG></o:AllowPNG>
                  <o:PixelsPerInch>96</o:PixelsPerInch>
                </o:OfficeDocumentSettings>
              </xml>
            <![endif]-->
          </head>
        
          <body>
            <div dir="ltr" class="es-wrapper-color">
              <!--[if gte mso 9]>
                <v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="t">
                  <v:fill type="tile" color="#aaa9a9"></v:fill>
                </v:background>
              <![endif]-->
              <table class="es-wrapper" width="100%" cellspacing="0" cellpadding="0">
                <tbody>
                  <tr>
                    <td class="esd-email-paddings" valign="top">
                      <table
                        class="es-content esd-header-popover"
                        cellspacing="0"
                        cellpadding="0"
                        align="center"
                      >
                        <tbody>
                          <tr>
                            <td class="esd-stripe" align="center">
                              <table
                                class="es-content-body"
                                width="600"
                                cellspacing="0"
                                cellpadding="0"
                                bgcolor="black"
                                align="center"
                                style="background-color: black"
                              >
                                <tbody>
                                  <tr>
                                    <td
                                      class="esd-structure es-p20t es-p20r es-p20l"
                                      align="left"
                                      bgcolor="black"
                                      style="background-color: 00000"
                                    >
                                      <table
                                        cellpadding="0"
                                        cellspacing="0"
                                        width="100%"
                                        style="background-color: black"
                                      >
                                        <tbody>
                                          <tr>
                                            <td
                                              width="560"
                                              class="esd-container-frame"
                                              align="center"
                                              valign="top"
                                            >
                                              <table
                                                cellpadding="0"
                                                cellspacing="0"
                                                width="100%"
                                              >
                                                <tbody>
                                                  <tr>
                                                    <td
                                                      align="center"
                                                      class="esd-block-image"
                                                      style="
                                                        font-size: 0px;
                                                        background-color: 00000;
                                                      "
                                                    >
                                                      <a target="_blank"
                                                        ><img
                                                          class="adapt-img"
                                                          src="https://aphgkx.stripocdn.email/content/guids/CABINET_5f5767057ac57765c26808c521050a6c/images/246121516_3064455437166050_4582035958577799178_n.jpg"
                                                          alt
                                                          style="display: block"
                                                          width="250"
                                                      /></a>
                                                    </td>
                                                  </tr>
                                                </tbody>
                                              </table>
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td
                                      class="esd-structure es-p20"
                                      align="left"
                                      style="background-color: white"
                                    >
                                      <table
                                        width="100%"
                                        cellspacing="0"
                                        cellpadding="0"
                                      >
                                        <tbody>
                                          <tr>
                                            <td
                                              class="esd-container-frame"
                                              width="560"
                                              valign="top"
                                              align="center"
                                            >
                                              <table
                                                width="100%"
                                                cellspacing="0"
                                                cellpadding="0"
                                              >
                                                <tbody>
                                                  <tr>
                                                    <td
                                                      align="center"
                                                      class="esd-block-text"
                                                      style="background-color: white"
                                                    >
                                                      <p
                                                        style="
                                                          line-height: 150%;
                                                          color: black;
                                                          font-size: 35px;
                                                        "
                                                      >
                                                        <b
                                                          >Bienvenido<br />&nbsp;Churrasqueria
                                                          La Herencia</b
                                                        >
                                                      </p>
                                                      <p></p>
                                                    </td>
                                                  </tr>
                                                </tbody>
                                              </table>
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td
                                      class="esd-structure es-p20"
                                      align="left"
                                      style="background-color: black"
                                    >
                                      <table
                                        cellpadding="0"
                                        cellspacing="0"
                                        width="100%"
                                      >
                                        <tbody>
                                          <tr>
                                            <td
                                              width="560"
                                              class="esd-container-frame"
                                              align="center"
                                              valign="top"
                                            >
                                              <table
                                                cellpadding="0"
                                                cellspacing="0"
                                                width="100%"
                                              >
                                                <tbody>
                                                  <tr>
                                                    <td
                                                      align="center"
                                                      class="esd-block-text"
                                                    >
                                                      <p
                                                        style="
                                                          line-height: 200%;
                                                          font-size: 20px;
                                                          color: #f6f2f2;
                                                        "
                                                      >
                                                        Ya puedes restablecer tu
                                                        contraseña
                                                      </p>
                                                    </td>
                                                  </tr>
                                                </tbody>
                                              </table>
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                      <table
                        class="esd-footer-popover es-footer"
                        cellspacing="0"
                        cellpadding="0"
                        align="center"
                      >
                        <tbody>
                          <tr>
                            <td
                              class="esd-stripe"
                              align="center"
                              bgcolor="#aaa9a9"
                              style="background-color: #aaa9a9"
                            >
                              <table
                                class="es-footer-body"
                                width="600"
                                cellspacing="0"
                                cellpadding="0"
                                bgcolor="#ffffff"
                                align="center"
                              >
                                <tbody>
                                  <tr>
                                    <td
                                      class="esd-structure es-p20t es-p20b es-p20r es-p20l"
                                      align="left"
                                      bgcolor="#0b5394"
                                      style="background-color: black"
                                    >
                                      <table
                                        cellspacing="0"
                                        cellpadding="0"
                                        width="100%"
                                      >
                                        <tbody>
                                          <tr>
                                            <td
                                              class="esd-container-frame"
                                              width="560"
                                              align="left"
                                            >
                                              <table
                                                width="100%"
                                                cellspacing="0"
                                                cellpadding="0"
                                              >
                                                <tbody>
                                                  <tr >
                                                    <center>
                                                    <td
                                                      align="center"
                                                      class="esd-block-button"
                                                      style="padding-bottom: 30px;"
                                                    >
                                                      
                                                      
                                                      <center>
                                                      <span
                                                        ><a
                                                          href="` +
      url +
      `"
                                                          class="es-button es-button-1669759403558"
                                                          target="_blank"
                                                          style="
                                                            font-family: verdana, geneva,
                                                              sans-serif;
                                                            font-size: 20px;
                                                            background: #d00c07;
                                                            text-decoration: none;
                                                            color: #ffffff;
                                                            padding: 8px;
                                                            border-radius: 25px;
                                                          "
                                                          >RESTABLECER</a
                                                        ></span
                                                      >
                                                      </center>
                                                    </td>
                                                    </center>
                                                  </tr>
                                                </tbody>
                                              </table>
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </body>
        </html>
        `,
  };

  const response = await Email.sendMail(mail);
  if (response.accepted[0] == email) {
    return { mensaje: "success" };
  } else {
    return { mensaje: "error" };
  }
};

export const servSendContacto = async (reqMail) => {
  const mail = {
    from: process.env.GMAILACCOUNT,
    to: process.env.GMAILACCOUNT,
    subject: reqMail.asunto,
    html: `
        <html>
        <body>
          <p>
           NOMBRE:${reqMail.nombre}</br>
           CORREO:${reqMail.email}</br>
           ASUNTO:${reqMail.asunto}</br>
           MENSAJE:${reqMail.mensaje}</br>
          </p>
        </body>
        </html>
        `,
  };
  const response = await Email.sendMail(mail);
  if (response.accepted[0] == process.env.GMAILACCOUNT) {
    return { mensaje: "success" };
  } else {
    return { mensaje: "error" };
  }
}
