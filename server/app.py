from flask import Flask, request, jsonify
from flask_migrate import Migrate
from models import db, User, Specialist, Service, Appointment
from flask_bcrypt import Bcrypt
import os
# from dotenv import load_dotenv
from flask_jwt_extended import create_access_token, get_jwt_identity, jwt_required, JWTManager

#! CONFIG
app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///development.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config["JWT_SECRET_KEY"] = os.getenv("JWT_SECRET_KEY")
# print(os.getenv("JWT_SECRET_KEY"))
migrate = Migrate(app, db)
db.init_app(app)
bcrypt = Bcrypt(app)
# load_dotenv()
jwt = JWTManager(app)

app.secret_key = os.getenv("PASSWORD_SECRET_KEY")

#! HOME ROUTE
@app.get('/')
def get():
    return 'Hello World'

# ! USER ROUTES
@app.get('/users')
def get_users():
    users = User.query.all()
    return jsonify([user.to_dict() for user in users]), 200

@app.get('/users/<int:id>')
def get_user(id):
    user = User.query.get(id)
    return jsonify(user.to_dict()), 200

@app.post('/users')
def post_user():
    try:
        data = request.json
        password_hash = bcrypt.generate_password_hash(data['password']).decode('utf-8')
        user = User(
            name=data['name'],
            email=data['email'],
            username=data['username'],
            password=password_hash
        )
        users = User.query.all()
        for us in users:
            if us.username == user.username:
                pass
        db.session.add(user)
        db.session.commit()
        return jsonify(user.to_dict()), 201
    except:
        return {'Error': 'That username is taken. Username must be unique.'}, 401

@app.post('/login')
def login():
    user = User.query.where(User.username == request.json['username']).first()
    if user and bcrypt.check_password_hash(user.password, request.json['password']):
        token = create_access_token(identity=user.id)
        return {
            "user": user.to_dict(),
            "token": token
        }, 201
    else:
        return {'Error': 'Invalid username or password'}, 401

@app.get('/check_token')
@jwt_required()
def check_token():
    id = get_jwt_identity()
    print(id)
    user = User.query.where(User.id == id).first()
    if user:
        return {"user": user.to_dict()}, 200
    else:
        return {'Error': 'Unauthorized'}, 401

#! SPECIALIST ROUTES
@app.get('/specialists')
def get_specialists():
    specialists = Specialist.query.all()
    return jsonify([specialist.to_dict() for specialist in specialists]), 200

@app.get('/specialists/<int:id>')
def get_specialist(id):
    specialist = Specialist.query.get(id)
    return jsonify(specialist.to_dict()), 200

#! SERVICE ROUTES
@app.get('/services')
def get_services():
    services = Service.query.all()
    return jsonify([service.to_dict() for service in services]), 200

@app.get('/services/<int:id>')
def get_service(id):
    service = Service.query.get(id)
    return jsonify(service.to_dict()), 200

# ! APPOINTMENT ROUTES
@app.get('/appointments')
def get_appointments():
    appointments = Appointment.query.all()
    return jsonify([appointment.to_dict() for appointment in appointments]), 200

@app.get('/appointments/2')
def get_appointments_2():
    appointments = Appointment.query.all()
    return jsonify([appointment.to_dict_2() for appointment in appointments]), 200

@app.get('/appointments/<int:id>')
def get_appointment(id):
    appointment = Appointment.query.get(id)
    return jsonify(appointment.to_dict()), 200

@app.get('/appointments/2/<int:id>')
def get_appointment_2(id):
    appointment = Appointment.query.get(id)
    return jsonify(appointment.to_dict_2()), 200

@app.get('/appointments/3/<int:id>')
def get_user_apt(id):
    user = User.query.get(id)
    appointments = user.appointments
    return [apt.to_dict_2() for apt in appointments], 200

@app.post('/appointments')
def post_appointment():
    appointment = Appointment(**request.json)
    db.session.add(appointment)
    db.session.commit()
    return jsonify(appointment.to_dict_2()), 201

@app.patch('/appointments/<int:id>')
def edit_appointment(id):
    data = request.json
    Appointment.query.where(Appointment.id == id).update(data)
    appointment = Appointment.query.get(id)
    db.session.commit()
    return jsonify(appointment.to_dict()), 200

@app.delete('/appointments/<int:id>')
def delete_appointment(id):
    appointment = Appointment.query.get(id)
    user = appointment.user
    db.session.delete(appointment)
    db.session.commit()
    user_to_dict = user.to_dict()
    user_name = user_to_dict['name']
    return jsonify(f'{user_name}\'s appointment has been deleted'), 200

if __name__ == '__main__':
    app.run(port=3001, debug=True)