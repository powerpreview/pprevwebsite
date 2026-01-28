import type { Handler, HandlerEvent } from '@netlify/functions';
import { Resend } from 'resend';

const handler: Handler = async (event: HandlerEvent) => {
  // Only allow POST
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method not allowed' }),
    };
  }

  try {
    // Parse form data
    const body = JSON.parse(event.body || '{}');
    const { name, email, subject, message } = body;

    // Basic validation
    if (!name || !email || !message) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Missing required fields' }),
      };
    }

    // Log the form submission
    console.log('Contact form submission:', {
      name,
      email,
      subject: subject || 'No subject',
      message,
      timestamp: new Date().toISOString(),
    });

    // Send email via Resend
    const resendApiKey = process.env.RESEND_API_KEY;
    
    if (resendApiKey) {
      try {
        const resend = new Resend(resendApiKey);
        
        await resend.emails.send({
          from: 'PowerPreview Contact <onboarding@resend.dev>',
          to: 'dev.powerpreview@gmail.com',
          replyTo: email,
          subject: `[PowerPreview Contact] ${subject || 'Oggetto non inserito'}`,
          html: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"><html><head><meta name="viewport" content="width=device-width, initial-scale=1.0"><meta http-equiv="Content-Type" content="text/html; charset=UTF-8"><meta name="format-detection" content="telephone=no, date=no, address=no, email=no"><meta name="x-apple-disable-message-reformatting"><meta name="keywords" content="DAG_vLWBetk, BAFjY4GJ3oc"><!--[if mso]><div>
                <noscript>
                  <xml>
                    <o:OfficeDocumentSettings>
                      <o:AllowPNG/>
                      <o:PixelsPerInch>96</o:PixelsPerInch>
                    </o:OfficeDocumentSettings>
                  </xml>
                </noscript></div><![endif]--><!--[if !mso]><!--><style>@media (max-width: 1px) {
        .layout-0 {
          display: none !important;
        }
      }
@media (max-width: 1px) and (min-width: 0px) {
        .layout-0-under-1 {
          display: table !important;
        }
      }</style><!--<![endif]--></head><body style="width:100%;-webkit-text-size-adjust:100%;text-size-adjust:100%;background-color:#f0f1f5;margin:0;padding:0"><table width="100%" border="0" cellpadding="0" cellspacing="0" bgcolor="#f0f1f5" style="background-color:#f0f1f5"><tbody><tr><td style="background-color:#f0f1f5"><!--[if mso]><center>
                    <table align="center" border="0" cellpadding="0" cellspacing="0" width="600">
                      <tbody>
                        <tr>
                          <td><![endif]--><table align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="max-width:600px;min-height:600px;margin:0 auto;background-color:#0f1117"><tbody><tr><td style="vertical-align:top"></td></tr><tr><td style="vertical-align:top;padding:10px
           0px
           0px
           0px"><table align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation"><tbody><tr><td style="padding:10px 0 10px 0;vertical-align:top"><table align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="color:#000;font-style:normal;font-weight:normal;font-size:16px;line-height:1.4;letter-spacing:0;text-align:left;direction:ltr;border-collapse:collapse;font-family:Arial, Helvetica, sans-serif;white-space:normal;word-wrap:break-word;word-break:break-word"><tbody><tr><td dir="ltr" style="color:#ffffff;font-size:42.6667px;font-weight:700;white-space:pre-wrap;text-align:left;padding:0px 20px">${subject || 'Oggetto non inserito'}<br></td></tr><tr><td style="font-size:0;height:16px" height="16">&nbsp;</td></tr><tr><td style="padding:0px 20px"><table cellpadding="0" cellspacing="0" border="0" style="width:100%"><tbody><tr><td align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:100%;max-width:560px"><tbody><tr><td height="1px" style="height:1px;border-radius:999px;line-height:1px;font-size:0;background-color:#843dff">&nbsp;</td></tr></tbody></table></td></tr></tbody></table></td></tr><tr><td style="font-size:0;height:16px" height="16">&nbsp;</td></tr><tr><td dir="ltr" style="color:#ffffff;font-size:24px;font-weight:700;white-space:pre-wrap;text-align:left;padding:0px 20px">${name}<br></td></tr><tr><td style="font-size:0;height:16px" height="16">&nbsp;</td></tr><tr><td dir="ltr" style="color:#ffffff;font-size:16px;white-space:pre-wrap;text-align:left;padding:0px 20px">${email}<br></td></tr><tr><td style="font-size:0;height:16px" height="16">&nbsp;</td></tr><tr><td dir="ltr" style="color:#ffffff;font-size:16px;white-space:pre-wrap;text-align:left;padding:0px 20px">${message.replace(/\n/g, '<br>')}<br></td></tr><tr><td style="font-size:0;height:16px" height="16">&nbsp;</td></tr><tr><td dir="ltr" style="font-size:16px;white-space:pre-wrap;text-align:left;padding:0px 20px"><br></td></tr></tbody></table></td></tr></tbody></table></td></tr><tr><td height="100%" style="height:100%;font-size:0;line-height:0" aria-hidden="true">&nbsp;</td></tr><tr><td style="vertical-align:top"><table border="0" cellpadding="0" cellspacing="0" class="layout-0" align="center" style="display:table;border-spacing:0px;border-collapse:separate;width:100%;max-width:100%;table-layout:fixed;margin:0 auto;background-color:#222222;border-top-left-radius:0;border-top-right-radius:0;border-bottom-left-radius:0;border-bottom-right-radius:0"><tbody><tr><td style="text-align:center;padding:25px 20px"><table border="0" cellpadding="0" cellspacing="0" style="border-spacing:0px;border-collapse:separate;width:100%;max-width:498px;table-layout:fixed;margin:0 auto"><tbody><tr><td width="100.00%" style="width:100.00%;box-sizing:border-box;vertical-align:top;border-top-left-radius:0;border-top-right-radius:0;border-bottom-left-radius:0;border-bottom-right-radius:0"><table border="0" cellpadding="0" cellspacing="0" style="border-spacing:0px;border-collapse:separate;width:100%;table-layout:fixed"><tbody><tr><td><table align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="color:#000;font-style:normal;font-weight:normal;font-size:16px;line-height:1.4;letter-spacing:0;text-align:left;direction:ltr;border-collapse:collapse;font-family:Arial, Helvetica, sans-serif;white-space:normal;word-wrap:break-word;word-break:break-word"><tbody><tr><td><table cellpadding="0" cellspacing="0" border="0" style="width:100%"><tbody><tr><td align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:100%;max-width:498px"><tbody><tr><td height="1px" style="height:1px;border-radius:999px;line-height:1px;font-size:0;background-color:#606060">&nbsp;</td></tr></tbody></table></td></tr></tbody></table></td></tr><tr><td style="font-size:0;height:16px" height="16">&nbsp;</td></tr><tr><td dir="ltr" style="color:#843dff;font-size:31.9996px;font-weight:700;white-space:pre-wrap;text-align:left">PowerPreview API<br></td></tr><tr><td style="font-size:0;height:16px" height="16">&nbsp;</td></tr><tr><td><table cellpadding="0" cellspacing="0" border="0" style="width:100%"><tbody><tr><td align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:100%;max-width:498px"><tbody><tr><td height="1px" style="height:1px;border-radius:999px;line-height:1px;font-size:0;background-color:#606060">&nbsp;</td></tr></tbody></table></td></tr></tbody></table></td></tr><tr><td style="font-size:0;height:16px" height="16">&nbsp;</td></tr><tr><td dir="ltr" style="color:#bdbdbd;font-size:14.6667px;letter-spacing:-0.0025em;white-space:pre-wrap;line-height:0.65;text-align:left;mso-line-height-alt:1px">This is a mail from the main website<br></td></tr></tbody></table></td></tr></tbody></table></td></tr></tbody></table></td></tr></tbody></table><!--[if !mso]><!--><table border="0" cellpadding="0" cellspacing="0" class="layout-0-under-1" align="center" style="display:none;border-spacing:0px;border-collapse:separate;width:100%;max-width:100%;table-layout:fixed;margin:0 auto;background-color:#222222;border-top-left-radius:0;border-top-right-radius:0;border-bottom-left-radius:0;border-bottom-right-radius:0"><tbody><tr><td style="text-align:center;padding:25px 20px"><table border="0" cellpadding="0" cellspacing="0" style="border-spacing:0px;border-collapse:separate;width:100%;max-width:1px;table-layout:fixed;margin:0 auto"><tbody><tr><td width="100.00%" style="width:100.00%;box-sizing:border-box;vertical-align:top;border-top-left-radius:0;border-top-right-radius:0;border-bottom-left-radius:0;border-bottom-right-radius:0"><table border="0" cellpadding="0" cellspacing="0" style="border-spacing:0px;border-collapse:separate;width:100%;table-layout:fixed"><tbody><tr><td><table align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="color:#000;font-style:normal;font-weight:normal;font-size:16px;line-height:1.4;letter-spacing:0;text-align:left;direction:ltr;border-collapse:collapse;font-family:Arial, Helvetica, sans-serif;white-space:normal;word-wrap:break-word;word-break:break-word"><tbody><tr><td><table cellpadding="0" cellspacing="0" border="0" style="width:100%"><tbody><tr><td align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:100%;max-width:1px"><tbody><tr><td height="1px" style="height:1px;border-radius:999px;line-height:1px;font-size:0;background-color:#606060">&nbsp;</td></tr></tbody></table></td></tr></tbody></table></td></tr><tr><td style="font-size:0;height:16px" height="16">&nbsp;</td></tr><tr><td dir="ltr" style="color:#843dff;font-size:31.9996px;font-weight:700;white-space:pre-wrap;text-align:left">PowerPreview API<br></td></tr><tr><td style="font-size:0;height:16px" height="16">&nbsp;</td></tr><tr><td><table cellpadding="0" cellspacing="0" border="0" style="width:100%"><tbody><tr><td align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:100%;max-width:1px"><tbody><tr><td height="1px" style="height:1px;border-radius:999px;line-height:1px;font-size:0;background-color:#606060">&nbsp;</td></tr></tbody></table></td></tr></tbody></table></td></tr><tr><td style="font-size:0;height:16px" height="16">&nbsp;</td></tr><tr><td dir="ltr" style="color:#bdbdbd;font-size:14.6667px;letter-spacing:-0.0025em;white-space:pre-wrap;line-height:0.65;text-align:left;mso-line-height-alt:1px">This is a mail from the main website<br></td></tr></tbody></table></td></tr></tbody></table></td></tr></tbody></table></td></tr></tbody></table><!--<![endif]--></td></tr></tbody></table><!--[if mso]></td>
                </tr>
              </tbody>
            </table>
          </center><![endif]--></td></tr></tbody></table></body></html>`,
        });

        console.log('Email sent successfully via Resend');
      } catch (emailError) {
        console.error('Failed to send email via Resend:', emailError);
        // Don't fail the request if email fails, just log it
      }
    } else {
      console.warn('RESEND_API_KEY not configured, email not sent');
    }

    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        success: true,
        message: 'Form submitted successfully',
      }),
    };
  } catch (error) {
    console.error('Error processing form:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Internal server error' }),
    };
  }
};

export { handler };