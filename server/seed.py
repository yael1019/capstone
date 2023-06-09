from app import app, bcrypt
from models import db, User, Specialist, Service, Appointment
from faker import Faker
import random

fake = Faker()

if __name__ == '__main__':
    with app.app_context():

        User.query.delete()
        Specialist.query.delete()
        Service.query.delete()
        Appointment.query.delete()

        print("Starting Seeding!")
        # password_hash = bcrypt.generate_password_hash('password123').decode('utf-8')
        users = []
        tim = User('Tim Charles', 'timmothycharles0@gmail.com', 'TimmyTom', bcrypt.generate_password_hash('password123').decode('utf-8'))
        bob = User('Bob Anthony', 'bobAnthony@gmail.com', 'Anthonyb', bcrypt.generate_password_hash('password123').decode('utf-8'))
        jacky = User('Jacky Gell', 'jacksgells@gmail.com', 'JackyGeller', bcrypt.generate_password_hash('password123').decode('utf-8'))
        abraham = User('Abraham Shalom', 'abe_shalom@gmail.com', 'Abe', bcrypt.generate_password_hash('password123').decode('utf-8'))
        carlos = User('Carlos Smith', 'carlos_SMITH@gmail.com', 'Carlos_Smith', bcrypt.generate_password_hash('password123').decode('utf-8'))
        freddy = User('Freddy Jenkins', 'fJenkins@gmail.com', 'JenkinsFreddy', bcrypt.generate_password_hash('password123').decode('utf-8'))
        sandy = User('Sandy Cheeks', 'sandycheeks@gmail.com', 'SandyC', bcrypt.generate_password_hash('password123').decode('utf-8'))
        jennifer = User('Jennifer Bruno', 'jenB@gmail.com', 'JenB', bcrypt.generate_password_hash('password123').decode('utf-8'))
        dennise = User('Dennise Bruno', 'dennise@gmail.com', 'DeeBruno', bcrypt.generate_password_hash('password123').decode('utf-8'))
        robert = User('Robert Jones', 'robertjones@gmail.com', 'RobJones', bcrypt.generate_password_hash('password123').decode('utf-8'))

        users.append(tim)
        users.append(bob)
        users.append(jacky)
        users.append(abraham)
        users.append(carlos)
        users.append(freddy)
        users.append(sandy)
        users.append(jennifer)
        users.append(dennise)
        users.append(robert)
        db.session.add_all(users)

        specialists = []
        hamza = Specialist('PA Hamza', 'paHamza@gmail.com')
        sana = Specialist('PA Sana', 'paSana@gmail.com')
        mark = Specialist('PA Mark', 'paMark@gmail.com')
        hadassah = Specialist('PA Hadassah', 'paHadassah@gmail.com')
        Sergey = Specialist('PA Sergey', 'paSergey@gmail.com')
        Karen = Specialist('PA Karen', 'paKaren@gmail.com')
        Aqsa = Specialist('PA Aqsa', 'paAqsa@gmail.com')
        Elkalefah = Specialist('PA Elkalefah', 'paElkakefah@gmail.com')
        Jared = Specialist('PA Jared', 'paJared@gmail.com')
        Moshkovitch = Specialist('PA Moshkovitch', 'paMoshkovitch@gmail.com')

        specialists.append(hamza)
        specialists.append(sana)
        specialists.append(mark)
        specialists.append(hadassah)
        specialists.append(Sergey)
        specialists.append(Karen)
        specialists.append(Aqsa)
        specialists.append(Elkalefah)
        specialists.append(Jared)
        specialists.append(Moshkovitch)
        db.session.add_all(specialists)

        services = []
        mentoring = Service(
            "Mentoring",
            """
Are you considering applying to a PA program this cycle or are you simply exploring the Physician Assistant career path and have some questions? Our Mentors, who are practicing Physician Assistants, offer General Advising sessions where you can receive personalized one-on-one guidance for 60 minutes. Additionally, you'll receive a comprehensive written report of the conversation. If you have previously applied and were rejected, you can also send us your last CASPA application and personal statement for a review. We can provide feedback on how to improve your application and make it stand out this time around.

During a General Advising session, some common topics that are discussed include:

1. Undergraduate Planning: Our Mentors will review your undergraduate coursework and ensure you are taking the necessary courses to meet program prerequisites. We can also suggest additional courses that can enhance your competitiveness, even if they are not listed as prerequisites by PA programs. We can discuss GRE and PACAT preparation and whether it's required for the programs you are applying to.
2. Volunteer Hours: Many students struggle with finding the right volunteer opportunities and determining the appropriate number of hours. Our Mentors can provide information about local volunteer opportunities and advise you on the type and quantity of volunteer hours that will make you stand out as an applicant. 
3. Physician Assistant Program Selection: Choosing the right PA programs involves considering various factors beyond just GPA. Each program has specific requirements beyond the basic prerequisites, such as the GRE or PACAT. Our Mentors can help you create a list of programs that best suit your needs and qualifications.
4. Patient Care Experience/Shadowing: Our Mentors can guide you on how to obtain the required clinical hours for a specific program. They can clarify which clinical hours count and whether paid or unpaid experience is preferable. They can also provide advice on finding shadowing experiences, including virtual options, and securing the best jobs for gaining patient care experience hours.
5. Second Time Around Applicant: If you have previously applied and were not accepted, our Mentors can review your latest CASPA application and provide suggestions on how to improve it for your next attempt. Whether it involves retaking science courses, getting more involved in volunteer work, changing the type of clinical hours, or crafting a standout personal statement, our Mentors have the experience to evaluate your application and advise you on the appropriate actions to take.

To get started, make an appointment with one of Physician Assistants. Our standard turnaround time is 48 hours or less. 
            """,
            50.00
        )
        personal_statement_edit = Service(
            "Personal Statement Editing",
            """
Are you finding it difficult to write your personal statement for your PA program application? Are you struggling with standard phrases and unsure how to make your statement stand out? If so, our Physician Assistant Mentors are here to help.

Your personal statement is a crucial part of your application, accounting for 40 to 60 percent of a PA program's decision to invite you for an interview. Even if you have an impressive GPA, a poorly crafted personal statement can hinder your chances of gettingan interview. We have worked with re-applicants who had high GPAs but were unsuccessful in the previous cycle due to their personal statements. However, with our guidance, they were able to improve their statements and gain acceptance into PA programs.

When writing something, it's natural to think it sounds good to you or to have a friend read it and confirm your feelings. However, what you truly need is unbiased feedback from a practicing Physician Assistant with admissions board experience. Our Mentors, who have years of experience editing personal statements, can provide you with honest feedback and help you refine your statement.

Many applicants receive tips on what they think should be included in their statements from similar sources, resulting in statements that sound alike to admissions boards. To truly stand out, you need a personalized and unique statement. Your personal statement will be reviewed and edited by a practicing Physician Assistant. Our Mentors will not only check for grammar and spelling, but they will also provide direct feedback on the content of your statement, suggesting changes and improvements where necessary.

The plan is designed to provide you with a comprehensive and personalized service to craft your personal statement. Here's what the plan includes:

1. Personal Statement Workshop via Zoom(30-45 mins): We will conduct a workshop session where we will discuss and determine your unique story and the content of your personal statement. This will help you develop a compelling narrative that showcases your motivations, experiences, and qualifications for the PA program. Please note that you should not prepare a draft before the workshop.
2. Two Comprehensive Edits: After the workshop, we will provide two rounds of comprehensive edits on your personal statement. Our experienced PA Mentors, who have admissions board experience, will review and refine your statement for content, structure, clarity, and overall effectiveness. Our goal is to help you create a standout personal statement that highlights your strengths and sets you apart from other applicants.
3. Two Zoom Calls: We will schedule two Zoom calls throughout the process. The first call will be for brainstorming the initial draft of your personal statement, where we will provide guidance and suggestions. The second call will be to review the initial edit and discuss the content of your statement. These calls allow for personalized guidance and feedback tailored to your specific needs.
4. Less than 24-hour turnaround(after first zoom meeting): We understand the importance of meeting deadlines, so we aim to provide a quick turnaround time for our edits and feedback.

To get started, make an appointment with one of Physician Assistants. Our standard turnaround time is 48 hours or less. 
            """,
            150.00
        )
        resume_edit = Service(
            "Resume Editing",
            """
Are you finding it challenging to write your resume? Are you staring at your computer screen, unsure of how to effectively present your qualifications and experiences? If so, let our Physician Assistant Mentors help you create a standout resume that sets you apart from other applicants.

Your resume is a critical component of your application, providing a snapshot of your skills, experiences, and achievements. However, it's common for resumes to contain generic phrases and lack the necessary impact to catch the attention of admissions boards. If you've read generic advice like "team player," "strong collaborator," or "passionate about helping others" and are unsure how to make your resume stand out, we are here to help.

To get started, simply choose the Editing Plan that best suits your needs and upload your resume in Word or PDF format during the checkout process. Our standard turnaround time is 48 hours or less. Select one of the following plans:

With our editing service, we offer a comprehensive approach to help you refine your resume. Here's what the service includes:

1. Resume Workshop via Zoom: We will conduct a 30-45 minute interview to determine the core content of your resume. This workshop will help us identify wha should and should not be on your resume. Please refrain from sending a draft until after the interview.
2. Comprehensive Edit: Once you have completed the interview, you will submit a draft of your resume. Our experienced mentors will provide a thorough edit, focusing on content, structure, clarity, and overall effectiveness. We will review your draft carefully and provide detailed comments and suggestions to help you improve your resume.
3. Turnaround Time: We understand the importance of meeting deadlines, so our standard turnaround time is less than 48 hours. We aim to provide prompt and efficient service to help you progress with your application.

To get started, make an appointment with one of Physician Assistants. Our standard turnaround time is 48 hours or less. 
            """,
            35.00
        )
        application_edits = Service(
            "Primary and Secondary Application Essay Edits",
            """
Are you finding it challenging to write your primary or secondary application essays? Are you struggling to avoid common phrases and clichés such as "I want to help people", "teamwork", "collaboration", "working with the underserved", "lateral mobility/flexibility of the profession", or "solidified"? If any of this resonates with you, or if you simply want assistance in making your statement stand out from the crowd, our team of Physician Assistant Mentors is here to help.

Your essays plays a critical role in a PA program's decision to invite you for an interview. It is important to recognize that while your writing may sound good to you or receive positive feedback from friends, you need an unbiased perspective from a practicing Physician Assistant with admissions board experience to provide an honest evaluation of your essays.

Most applicants receive advice from similar sources regarding what they believe should be included in their essays. As a result, many essays tend to sound similar to admissions boards. To truly stand out, you need a essays that captures attention and sets you apart from other applicants. In addition to correcting grammar and spelling, our mentors will offer direct feedback on the content of your essays, ensuring that it effectively communicates your unique qualities and experiences.

The plan is designed to provide you with a comprehensive and personalized service to craft your supplemental essays. Here's what the plan includes:

1. Supplemental Essays Workshop via Zoom(30-45 mins): We will conduct a workshop session where we will discuss and determine your unique story and the content of your essays. This will help you develop a compelling narrative that showcases your motivations, experiences, and qualifications for the PA program. Please note that you should not prepare a draft before the workshop.
2. Two Comprehensive Edits: After the workshop, we will provide two rounds of comprehensive edits. Our experienced PA Mentors, who have admissions board experience, will review and refine your statement for content, structure, clarity, and overall effectiveness. Our goal is to help you create standout essays that highlight your strengths and sets you apart from other applicants.
3. Two Zoom Calls: We will schedule two Zoom calls throughout the process. The first call will be for brainstorming the initial draft of your personal statement, where we will provide guidance and suggestions. The second call will be to review the initial edit and discuss the content of your essays. These calls allow for personalized guidance and feedback tailored to your specific needs.
4. Less than 48-hour turnaround: We understand the importance of meeting deadlines, so we aim to provide a quick turnaround time for our edits and feedback.

To get started, make an appointment with one of Physician Assistants. Our standard turnaround time is 48 hours or less. 
            """,
            200.00
        )
        mock_interview = Service(
            "Mock Interviews",
            """
The Physician Assistant School Interview is a critical factor in determining your acceptance into a program. Rather than leaving it to chance, it's important to be well-prepared. While many applicants turn to online research or seek assistance from pre-health departments at their universities, it's important to recognize that relying solely on this information can lead to generic answers that fail to make you stand out. Additionally, those who have previously interviewed without success may still be unsure about what went wrong.

Our Mentors are currently practicing Physician Assistants who have the most up-to-date knowledge and insights into the interview process. They know exactly what questions will be asked and how you should respond. It's not just about knowing what to say; it's also about understanding what not to say. Our Mentors will work closely with you to ensure you feel comfortable and relaxed during your interview.

Our Mock Interviews are conducted one-on-one with a Certified Physician Assistant and are conveniently held virtually via Zoom. We offer flexible scheduling, even accommodating last-minute interviews. 

Our comprehensive Mock Interview service is designed to benefit both first-time applicants and re-applicants. With this service, you will receive:

1. Two 90-minute Mock Interviews: You will have the opportunity to participate in two mock interviews, each lasting 90 minutes. These interviews will be conducted one-on-one with a Certified Physician Assistant who has extensive experience in the field.
2. Direct Feedback: After each question, you will receive direct feedback on your answers. Our Mentors will provide constructive criticism, highlight areas of improvement, and offer guidance on how to enhance your responses.
3. Comprehensive Question Set: Each mock interview will consist of a minimum of 40 questions. These questions will cover both traditional interview formats and Multiple Mini Interviews (MMIs). By practicing with a wide range of questions, you will gain valuable experience and be better prepared for various interview styles.

To get started, make an appointment with one of Physician Assistants. Our standard turnaround time is 48 hours or less.
            """,
            200.00
        )
        career_mapping = Service(
            "Career Mapping",
            """
Are you facing challenges in developing your career map? Do you find yourself unsure of how to effectively plan and navigate your professional path? If so, our Physician Assistant Mentors are here to provide expert guidance and help you create a comprehensive career map that sets you on the path to success.

A career map is a valuable tool that allows you to visualize your goals, identify potential opportunities, and strategically plan your professional development. However, creating an effective career map can be overwhelming and confusing without the right support.

Our experienced Mentors specialize in career mapping and can assist you in crafting a personalized career map tailored to your aspirations and unique strengths. By working closely with a practicing Physician Assistant who has firsthand experience in the field, you'll receive valuable insights and advice that will help you make informed decisions and set achievable goals.

The plan is designed to provide you with a comprehensive and personalized service to map your career out. The plan includes a Zoom(60 mins) call, we will discuss your unique story and determine the right next steps for yout to take. 

To get started, make an appointment with one of Physician Assistants. Our standard turnaround time is 48 hours or less.
            """, 
            20.00
        )
        pacat_planning = Service(
            "PACAT Planning",
            """
The PA-CAT exam evaluates your understanding of fundamental subjects that serve as prerequisites for PA school. Its purpose is to assess your academic aptitude and gauge the depth of your knowledge to determine your suitability for the specific program you are applying to.

If the PA schools you are applying to mandate the PACAT, we can develop a personalized study plan tailored to help you achieve a competitive score. Our plan will outline the essential topics to be covered, suggest recommended resources, and establish a comprehensive schedule for your preparation.

To get started, make an appointment with one of Physician Assistants. Our standard turnaround time is 48 hours or less.
            """,
            30.00
        )
        gre_planning = Service(
            "GRE Planning",
            """
The GRE exam assesses your proficiency in core subjects and skills necessary for graduate school. It aims to evaluate your academic readiness and measure your knowledge and abilities in order to determine your suitability for the specific program you are applying to.

If the graduate programs you are applying to require the GRE, we can create a customized study plan designed to help you achieve a competitive score. Our plan will identify the key areas to focus on, recommend appropriate study materials, and establish a comprehensive schedule to guide your preparation.

To get started, make an appointment with one of Physician Assistants. Our standard turnaround time is 48 hours or less.
            """,
            25.00
        )
        application_questions = Service(
            "Application Questions",
            """
The application process for Physician Assistant programs can be overwhelming and filled with uncertainty. It's natural to have numerous questions and concerns along the way. That's why our team of experienced Physician Assistants is here to provide you with the answers and guidance you need. We are dedicated to supporting you throughout the application process, offering clarity and assistance to help you navigate through any challenges or uncertainties that may arise.

We offer the opportunity to schedule a 15-30 minute Zoom call where you can discuss any questions or concerns you may have. 

To get started, make an appointment with one of Physician Assistants. Our standard turnaround time is 48 hours or less.
            """,
            0.00
        )
        application_review = Service(
            "Application Review",
            """
After completing your application, our team of physician assistants can conduct a comprehensive review of your entire application with you. From start to finish, we will meticulously examine every aspect of your application to ensure it is polished and ready for submission. Our goal is to enhance your application and make it competitive, instilling you with confidence throughout the process. With our expertise and attention to detail, you can trust that your application will be in excellent shape for consideration by the admissions committees.

We offer the opportunity to schedule a 90 minute Zoom call where we will review your application with you. 

To get started, make an appointment with one of Physician Assistants. Our standard turnaround time is 48 hours or less.
            """,
            50.00
        )

        services.append(mentoring)
        services.append(personal_statement_edit)
        services.append(resume_edit)
        services.append(application_edits)
        services.append(mock_interview)
        services.append(career_mapping)
        services.append(pacat_planning)
        services.append(gre_planning)
        services.append(application_questions)
        services.append(application_review)
        db.session.add_all(services)

        complete = ['yes', 'no']
        for _ in range(30):
            appointment = Appointment(random.randint(1, 10), random.randint(1, 10), random.randint(1, 10), random.choice(complete))
            db.session.add(appointment)
        
        db.session.commit()

        apts = Appointment.query.all()
        for apt in apts:
            if apt.completed == 'yes':
                if apt.service_id == 1:
                    apt.notes = """Courses
- Pre-requisites:
    - Completed
- Spanish – strongly recommend taking at least one semester. Preferably, during the Summer session. Can be from a Community College and taken online is fine. Although not required by some programs, it is highly desirable. This one course will make you more competitive.
- Need Medical Terminology – you can take any course online but here is one we recommend:
https://extension.ucsd.edu/courses-and-programs/medical-terminology-an-anatomy-and-physiology- approach

PA Programs
- Preferred PA Programs are in New York, but really you can apply to any of the programs in the northeast down to Florida. That doesn’t mean you couldn’t apply elsewhere, but you will have a better chance with east coast programs.
- Certainly you need to pay attention to the requirements for patient care hours as some programs do have minimum requirements.
- Once you have some exposure with a PA and can write about it in a Personal Statement as well as getting an LOR from a PA, you really should be able to apply to any PA Program and you should only need to apply to about 6 programs
- When reviewing programs, please don’t pay attention to “applicant profiles” or anything that talks about what the average applicant has. This is not helpful information and is very misleading.
- When you are choosing programs, do not use things like “PANCE Pass Rates” to make your decision. Additionally, don’t go for the top name programs. It does NOT matter where you go to PA School when it comes to finding a job. And you will never make more money because of the program you attend. When you see schools that have “Provisional” or “Probationary” status, those are okay to apply to.

Information Sessions
- Thinking about PA Programs you plan to apply to and look up to see when they are having “Information Sessions” and start signing up for them. If they don’t have them listed on the website, email the programs and ask if they know what the dates will be in 2021 or if you can get on their mailing list for these sessions. Programs are already hosting virtual sessions.
- Attend as many as possible; try to attend at least two sessions per program. They keep track of this information.
- Ask a question to get noticed but be careful what you ask. Do not ask things like “why did you become a PA” or “what’s special about your program” or questions along those lines. You could always ask how their program has been affected by COVID. Check out a program’s social media (Facebook and/or Instagram) to get a bit more information about them and you might something there to ask them a question about.
"""
                    # Appointment.query.where(Appointment.id == apt.id)
                if apt.service_id == 2:
                    apt.notes =  """Personal Statement
- Avoid sources like “PA Forum” and “Reddit”. People who have been accepted into a program often put up their Personal Statements and make recommendations about “what must” be in a Personal Statement. But remember, you are not that person and the statement should be about you. Also, keep in mind that thousands of other people are also reading this and taking the same recommendations and invariably, 85% of all statements sound very much alike.
- The statement accounts for about 50 percent of a programs decision to grant an interview. VERY important. Make it personal and should include:
    - Why Medicine
    - How did you find out about the PA Career?
        - What research about the PA Career did you do after learning of it? 
    - Why PA?
- I said I will help you with another draft of your personal statement.
"""
                    # Appointment.query.where(Appointment.id == apt.id)
                if apt.service_id == 3:
                    apt.notes = """Shadowing
- Remember, when working around PA’s, that time does count as shadowing. You do not need to have a formal agreement for it to count as shadowing. This is why it is imperative that you work alongside a PA and why we strongly recommend getting a job as an ER Tech or Medical Assistant.
- Virtual shadowing was accepted last cycle and we expect the same for this cycle.
- Keep an accurate log of all shadowing (see attached excel spreadsheet for example of log). I talked to CASPA and you can group all Virtual Shadowing into one entry in CASPA but keep a personal log in case they decide to audit you – this is what I was told.
- Virtual Shadowing links:
    - Pre-PA Pals https://www.youtube.com/channel/UC9xp_OUmz8Z1s46P4X0JHRg/featured 
    - Virtual Shadowing List https://www.instagram.com/virtualshadowinglist/
    - Virtual Shadowing List – Facebook https://www.facebook.com/VirtualShadowingLIST
    - Physician Assistant Shadowing Network https://www.facebook.com/groups/shadowPA/ 
    - https://www.instagram.com/ap.the.pac/

Volunteer – Keep up Volunteer Hours:
- Strongly recommend a free clinic to work out of maybe one day a week. This is the preferred source for volunteer hours. This most recent cycle we found this to be a common trend amongst the programs. Also, free clinics are often staffed with mid-level providers and this is good for your observations of that role. Just search the name of your city and “free clinic” and you will find them.
- Contact your local County Health Department for and see if you can get involved with COVID testing or vaccination administration.
- Feeding America https://www.feedingamerica.org/
- Team Rubicon https://teamrubiconusa.org/relief/
- Google “phone calls for isolated seniors” in your area. There are different groups in each state but so many are doing this program and you can do this right from your home.
- It’s not about the number of hours but a consistency with volunteering. Twice a month is great.
"""
                    # Appointment.query.where(Appointment.id == apt.id)
                if apt.service_id == 4:
                    apt.notes = """Shadowing
- Remember, when working around PA’s, that time does count as shadowing. You do not need to have a formal agreement for it to count as shadowing. This is why it is imperative that you work alongside a PA and why we strongly recommend getting a job as an ER Tech or Medical Assistant.
- Virtual shadowing was accepted last cycle and we expect the same for this cycle.
- Keep an accurate log of all shadowing (see attached excel spreadsheet for example of log). I talked to CASPA and you can group all Virtual Shadowing into one entry in CASPA but keep a personal log in case they decide to audit you – this is what I was told.
- Virtual Shadowing links:
    - Pre-PA Pals https://www.youtube.com/channel/UC9xp_OUmz8Z1s46P4X0JHRg/featured 
    - Virtual Shadowing List https://www.instagram.com/virtualshadowinglist/
    - Virtual Shadowing List – Facebook https://www.facebook.com/VirtualShadowingLIST
    - Physician Assistant Shadowing Network https://www.facebook.com/groups/shadowPA/ 
    - https://www.instagram.com/ap.the.pac/

Volunteer – Keep up Volunteer Hours:
- Strongly recommend a free clinic to work out of maybe one day a week. This is the preferred source for volunteer hours. This most recent cycle we found this to be a common trend amongst the programs. Also, free clinics are often staffed with mid-level providers and this is good for your observations of that role. Just search the name of your city and “free clinic” and you will find them.
- Contact your local County Health Department for and see if you can get involved with COVID testing or vaccination administration.
- Feeding America https://www.feedingamerica.org/
- Team Rubicon https://teamrubiconusa.org/relief/
- Google “phone calls for isolated seniors” in your area. There are different groups in each state but so many are doing this program and you can do this right from your home.
- It’s not about the number of hours but a consistency with volunteering. Twice a month is great.

LOR’s – only submit 3 unless a specific program asks for more than 3 such as a work supervisor
- Professor – Science Professor – you mentioned your O-Chem Professor
- M.D. – use MD from Urology
- P.A. – to be competitive, you really need an LOR from a PA, but you could do two MD’s

CASPA – Your goal should be to submit your CASPA by May 31st if at all possible in the cycle you are applying to. If not, obviously as soon as possible. Fill out CASPA as much as you can entering all information before the new cycle opens. CASPA will open the new cycle on April 29th and whether you are applying this cycle or next, fill out as much as you can. Most information rolls over into the new cycle.
"""
                    # Appointment.query.where(Appointment.id == apt.id)
                if apt.service_id == 5:
                    apt.notes = """PA Programs
- Preferred PA Programs are in New York, but really you can apply to any of the programs in the northeast down to Florida. That doesn’t mean you couldn’t apply elsewhere, but you will have a better chance with east coast programs.
- Certainly you need to pay attention to the requirements for patient care hours as some programs do have minimum requirements.
- Once you have some exposure with a PA and can write about it in a Personal Statement as well as getting an LOR from a PA, you really should be able to apply to any PA Program and you should only need to apply to about 6 programs
- When reviewing programs, please don’t pay attention to “applicant profiles” or anything that talks about what the average applicant has. This is not helpful information and is very misleading.
- When you are choosing programs, do not use things like “PANCE Pass Rates” to make your decision. Additionally, don’t go for the top name programs. It does NOT matter where you go to PA School when it comes to finding a job. And you will never make more money because of the program you attend. When you see schools that have “Provisional” or “Probationary” status, those are okay to apply to.

Information Sessions
- Thinking about PA Programs you plan to apply to and look up to see when they are having “Information Sessions” and start signing up for them. If they don’t have them listed on the website, email the programs and ask if they know what the dates will be in 2021 or if you can get on their mailing list for these sessions. Programs are already hosting virtual sessions.
- Attend as many as possible; try to attend at least two sessions per program. They keep track of this information.
- Ask a question to get noticed but be careful what you ask. Do not ask things like “why did you become a PA” or “what’s special about your program” or questions along those lines. You could always ask how their program has been affected by COVID. Check out a program’s social media (Facebook and/or Instagram) to get a bit more information about them and you might something there to ask them a question about.
"""
                    # Appointment.query.where(Appointment.id == apt.id)
                if apt.service_id == 6:
                    apt.notes = """PCE – Patient Care Experience Hours
- Currently scheduled to start training for MA/Scribe at an Urgent Care Center on Monday, 4/19.
    - You will need time working around PA’s to write about in your Personal Statement so you can positively show you understand the role. Once you’ve had a couple of days, we can put this into your Personal Statement. Just observe the types of patients the PA’s are seeing; age groups, types of complaints, common treatments.
    - Time spent working with PA’s can also be counted as shadowing. Observe a PA while they are examining a patient – that is shadowing time; assist a PA with anything like helping the PA while they suture, place an IV or any other procedure and that time is also considered shadowing; as the PA explains anything – explaining about a particular test (X-ray, EKG, blood test, etc), or if the PA is explaining about a particular medication or generally explaining anything that is part of healthcare, that time is also considered shadowing and you need to keep track of this time.
- Spending time with PA’s, you should develop relationships that can turn into Letters of Recommendation.
    - Previous experience was as an MA for a Urologist.

Shadowing
- Remember, when working around PA’s, that time does count as shadowing. You do not need to have a formal agreement for it to count as shadowing. This is why it is imperative that you work alongside a PA and why we strongly recommend getting a job as an ER Tech or Medical Assistant.
- Virtual shadowing was accepted last cycle and we expect the same for this cycle.
- Keep an accurate log of all shadowing (see attached excel spreadsheet for example of log). I talked to CASPA and you can group all Virtual Shadowing into one entry in CASPA but keep a personal log in case they decide to audit you – this is what I was told.
- Virtual Shadowing links:
    - Pre-PA Pals https://www.youtube.com/channel/UC9xp_OUmz8Z1s46P4X0JHRg/featured 
    - Virtual Shadowing List https://www.instagram.com/virtualshadowinglist/
    - Virtual Shadowing List – Facebook https://www.facebook.com/VirtualShadowingLIST
    - Physician Assistant Shadowing Network https://www.facebook.com/groups/shadowPA/ 
    - https://www.instagram.com/ap.the.pac/

Volunteer – Keep up Volunteer Hours:
- Strongly recommend a free clinic to work out of maybe one day a week. This is the preferred source for volunteer hours. This most recent cycle we found this to be a common trend amongst the programs. Also, free clinics are often staffed with mid-level providers and this is good for your observations of that role. Just search the name of your city and “free clinic” and you will find them.
- Contact your local County Health Department for and see if you can get involved with COVID testing or vaccination administration.
- Feeding America https://www.feedingamerica.org/
- Team Rubicon https://teamrubiconusa.org/relief/
- Google “phone calls for isolated seniors” in your area. There are different groups in each state but so many are doing this program and you can do this right from your home.
- It’s not about the number of hours but a consistency with volunteering. Twice a month is great.
"""
                    # Appointment.query.where(Appointment.id == apt.id)
                if apt.service_id == 7:
                    apt.notes = """PACAT – the goal is a total combined score (Verbal & Quantitative) of 300 or greater
- When you take the PACAT, if your combined score is over 300, you would not need to retake. You will not get a higher preference from the admissions board for a high score. Or only apply to those that do not require.
- If the PA Program(s) you are applying to do not require the PACAT, do not take. It will not be taken into account when factoring your application.
- Some helpful study aides if you decide to take the GRE:
- Try Greg Mat for study guide https://www.youtube.com/channel/UCktwzce9ncy_K78l1KBZkYQ
- Magoosh has a free GRE Practice test (40 questions) https://magoosh.com/gre/gre‐practice‐test/
- Kaplan also has a free GRE Practice test https://www.kaptest.com/gre/free/free‐gre‐practice‐test
"""
                # Appointment.query.where(Appointment.id == apt.id)
                if apt.service_id == 8:
                    apt.notes = """GRE – the goal is a total combined score (Verbal & Quantitative) of 300 or greater
- When you take the GRE, if your combined score is over 300, you would not need to retake. You will not get a higher preference from the admissions board for a high score. Or only apply to those that do not require.
- If the PA Program(s) you are applying to do not require the GRE, do not take. It will not be taken into account when factoring your application.
- Some helpful study aides if you decide to take the GRE:
- Try Greg Mat for study guide https://www.youtube.com/channel/UCktwzce9ncy_K78l1KBZkYQ
- Magoosh has a free GRE Practice test (40 questions) https://magoosh.com/gre/gre‐practice‐test/
- Kaplan also has a free GRE Practice test https://www.kaptest.com/gre/free/free‐gre‐practice‐test
"""
                    # Appointment.query.where(Appointment.id == apt.id)
                if apt.service_id == 9:
                    apt.notes = """Shadowing
- Remember, when working around PA’s, that time does count as shadowing. You do not need to have a formal agreement for it to count as shadowing. This is why it is imperative that you work alongside a PA and why we strongly recommend getting a job as an ER Tech or Medical Assistant.
- Virtual shadowing was accepted last cycle and we expect the same for this cycle.
- Keep an accurate log of all shadowing (see attached excel spreadsheet for example of log). I talked to CASPA and you can group all Virtual Shadowing into one entry in CASPA but keep a personal log in case they decide to audit you – this is what I was told.
- Virtual Shadowing links:
    - Pre-PA Pals https://www.youtube.com/channel/UC9xp_OUmz8Z1s46P4X0JHRg/featured 
    - Virtual Shadowing List https://www.instagram.com/virtualshadowinglist/
    - Virtual Shadowing List – Facebook https://www.facebook.com/VirtualShadowingLIST
    - Physician Assistant Shadowing Network https://www.facebook.com/groups/shadowPA/ 
    - https://www.instagram.com/ap.the.pac/

Volunteer – Keep up Volunteer Hours:
- Strongly recommend a free clinic to work out of maybe one day a week. This is the preferred source for volunteer hours. This most recent cycle we found this to be a common trend amongst the programs. Also, free clinics are often staffed with mid-level providers and this is good for your observations of that role. Just search the name of your city and “free clinic” and you will find them.
- Contact your local County Health Department for and see if you can get involved with COVID testing or vaccination administration.
- Feeding America https://www.feedingamerica.org/
- Team Rubicon https://teamrubiconusa.org/relief/
- Google “phone calls for isolated seniors” in your area. There are different groups in each state but so many are doing this program and you can do this right from your home.
- It’s not about the number of hours but a consistency with volunteering. Twice a month is great.

LOR’s – only submit 3 unless a specific program asks for more than 3 such as a work supervisor
- Professor – Science Professor – you mentioned your O-Chem Professor
- M.D. – use MD from Urology
- P.A. – to be competitive, you really need an LOR from a PA, but you could do two MD’s

CASPA – Your goal should be to submit your CASPA by May 31st if at all possible in the cycle you are applying to. If not, obviously as soon as possible. Fill out CASPA as much as you can entering all information before the new cycle opens. CASPA will open the new cycle on April 29th and whether you are applying this cycle or next, fill out as much as you can. Most information rolls over into the new cycle.
"""
                    # Appointment.query.where(Appointment.id == apt.id)
                if apt.service_id == 10:
                    apt.notes = """Shadowing
- Remember, when working around PA’s, that time does count as shadowing. You do not need to have a formal agreement for it to count as shadowing. This is why it is imperative that you work alongside a PA and why we strongly recommend getting a job as an ER Tech or Medical Assistant.
- Virtual shadowing was accepted last cycle and we expect the same for this cycle.
- Keep an accurate log of all shadowing (see attached excel spreadsheet for example of log). I talked to CASPA and you can group all Virtual Shadowing into one entry in CASPA but keep a personal log in case they decide to audit you – this is what I was told.
- Virtual Shadowing links:
    - Pre-PA Pals https://www.youtube.com/channel/UC9xp_OUmz8Z1s46P4X0JHRg/featured 
    - Virtual Shadowing List https://www.instagram.com/virtualshadowinglist/
    - Virtual Shadowing List – Facebook https://www.facebook.com/VirtualShadowingLIST
    - Physician Assistant Shadowing Network https://www.facebook.com/groups/shadowPA/ 
    - https://www.instagram.com/ap.the.pac/

Volunteer – Keep up Volunteer Hours:
- Strongly recommend a free clinic to work out of maybe one day a week. This is the preferred source for volunteer hours. This most recent cycle we found this to be a common trend amongst the programs. Also, free clinics are often staffed with mid-level providers and this is good for your observations of that role. Just search the name of your city and “free clinic” and you will find them.
- Contact your local County Health Department for and see if you can get involved with COVID testing or vaccination administration.
- Feeding America https://www.feedingamerica.org/
- Team Rubicon https://teamrubiconusa.org/relief/
- Google “phone calls for isolated seniors” in your area. There are different groups in each state but so many are doing this program and you can do this right from your home.
- It’s not about the number of hours but a consistency with volunteering. Twice a month is great.

LOR’s – only submit 3 unless a specific program asks for more than 3 such as a work supervisor
- Professor – Science Professor – you mentioned your O-Chem Professor
- M.D. – use MD from Urology
- P.A. – to be competitive, you really need an LOR from a PA, but you could do two MD’s

CASPA – Your goal should be to submit your CASPA by May 31st if at all possible in the cycle you are applying to. If not, obviously as soon as possible. Fill out CASPA as much as you can entering all information before the new cycle opens. CASPA will open the new cycle on April 29th and whether you are applying this cycle or next, fill out as much as you can. Most information rolls over into the new cycle.
"""
                    # Appointment.query.where(Appointment.id == apt.id)

        for apt in apts:
            apt.date = 'Monday 07/03/2023'
            apt.time = '10:30 AM'
        
        db.session.commit()

        print("Done Seeding!")


