# import os
# import smtplib
# from email.message import EmailMessage
# import ssl
# from email.utils import formataddr
# from pathlib import Path
# from dotenv import load_dotenv

EMAIL_ADDRESS = os.getenv('EMAIL')
EMAIL_PASSWORD = os.getenv('PASSWORD')
print(EMAIL_ADDRESS)
print(EMAIL_PASSWORD)

subject = 'Appointment Confirmation'
body = 'This is your email confirmation. Your appointment details can be seen on the MENTORS app on the appointmen page.'

em = EmailMessage()
em['From'] = EMAIL_ADDRESS
em['To'] = 'yaelharosh7@gmail.com'
em['Subject'] = subject
em.set_content(body)

context = ssl.create_default_context()

with smtplib.SMTP_SSL('smtp.gmail.com', 465, context=context) as smtp:
    smtp.login(EMAIL_ADDRESS, EMAIL_PASSWORD)
    smtp.sendmail(EMAIL_ADDRESS, 'yaelharosh7@gmail.com', em.as_string())

# with smtplib.SMTP('smtp.gmail.com', 587) as smtp:
#     smtp.ehlo()
#     smtp.starttls()
#     smtp.ehlo()

#     smtp.login(EMAIL_ADDRESS, EMAIL_PASSWORD)

#     subject = 'Appointment Confirmation'
#     body = 'This is your email confirmation. Your appointment details can be seen on the MENTORS app on the appointmen page.'

#     msg = f'Subject: {subject}\n\n{body}'

#     smtp.sendmail(EMAIL_ADDRESS, 'yaelharosh7@gmail.com', msg)


# PORT = 587
# EMAIL_SERVER = "smtp.gmail.com"
