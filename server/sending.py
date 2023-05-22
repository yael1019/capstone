import os
import smtplib
# from email.message import EmailMessage
# from email.utils import formataddr
# from pathlib import Path
# from dotenv import load_dotenv

EMAIL_ADDRESS = os.environ.get('EMAIL')
EMAIL_PASSWORD = os.environ.get('PASSWORD')


with smtplib.SMTP('smtp.gmail.com', 587) as smtp:
    smtp.ehlo()
    smtp.starttls()
    smtp.ehlo()

    smtp.login(EMAIL_ADDRESS, EMAIL_PASSWORD)

    subject = 'Appointment Confirmation'
    body = 'This is your email confirmation. Your appointment details can be seen on the MENTORS app on the appointmen page.'

    msg = f'Subject: {subject}\n\n{body}'

    smtp.sendmail(EMAIL_ADDRESS, 'yaelharosh7@gmail.com', msg)


# PORT = 587
# EMAIL_SERVER = "smtp.gmail.com"