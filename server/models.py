from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.orm import validates
from sqlalchemy.ext.associationproxy import association_proxy

db = SQLAlchemy()

class User(db.Model):
    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String, nullable=False)
    email = db.Column(db.String, nullable=False, unique=True)
    username = db.Column(db.String, nullable=False, unique=True)
    password = db.Column(db.String, nullable=False)
    created_at = db.Column(db.DateTime, server_default=db.func.now())
    updated_at = db.Column(db.DateTime, server_default=db.func.now(), onupdate=db.func.now())

    appointments = db.relationship('Appointment', backref='user')
    specialists = association_proxy('appointments', 'specialist')
    services = association_proxy('appointments', 'service')

    @validates('password')
    def validate(self, key, value):
        if len(value) < 8:
            raise ValueError('Password must be at least 8 characters')
        return value

    def __init__(self, name, email, username, password):
        self.name = name
        self.email = email
        self.username = username
        self.password = password

    def __repr__(self):
        return f'<User id={self.id} name={self.name} email={self.email} username={self.username} password={self.password}>'

    def to_dict(self):
        return {
            "id": self.id,
            "name": self.name,
            "email": self.email,
            "username": self.username,
            "password": self.password
        }

class Specialist(db.Model):
    __tablename__ = 'specialists'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String, nullable=False)
    email = db.Column(db.String, nullable=False, unique=True)
    created_at = db.Column(db.DateTime, server_default=db.func.now())
    updated_at = db.Column(db.DateTime, server_default=db.func.now(), onupdate=db.func.now())

    appointments = db.relationship('Appointment', backref='specialist')
    users = association_proxy('appointments', 'user')
    services = association_proxy('appointments', 'service')

    def __init__(self, name, email):
        self.name = name
        self.email = email

    def __repr__(self):
        return f'<Specialist id={self.id} name={self.name} email={self.email}>'

    def to_dict(self):
        return {
            "id": self.id,
            "name": self.name,
            "email": self.email
        }

class Service(db.Model):
    __tablename__ = 'services'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.Text, nullable=False)
    about = db.Column(db.String, nullable=False)
    price = db.Column(db.Float, nullable=False)
    created_at = db.Column(db.DateTime, server_default=db.func.now())
    updated_at = db.Column(db.DateTime, server_default=db.func.now(), onupdate=db.func.now())

    appointments = db.relationship('Appointment', backref='service')
    users = association_proxy('appointments', 'user')
    specialists = association_proxy('appointments', 'specialist')

    @validates('price')
    def validate(self, key, value):
        if value < 0:
            raise ValueError('Price can not be less than 0')
        return value

    def __init__(self, name, about, price):
        self.name = name
        self.about = about
        self.price = price

    def __repr__(self):
        return f'<Service id={self.id} name={self.name} about={self.about} price={self.price}>'

    def to_dict(self):
        return {
            "id": self.id,
            "name": self.name,
            "about": self.about,
            "price": self.price
        }

class Appointment(db.Model):
    __tablename__ = 'appointments'

    id = db.Column(db.Integer, primary_key=True)
    notes = db.Column(db.Text)
    date = db.Column(db.String)
    time = db.Column(db.String)

    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    specialist_id = db.Column(db.Integer, db.ForeignKey('specialists.id'), nullable=False)
    service_id = db.Column(db.Integer, db.ForeignKey('services.id'), nullable=False)

    def __init__(self, user_id, specialist_id, service_id, date=None, time=None, notes=None):
        self.user_id = user_id
        self.specialist_id = specialist_id
        self.service_id = service_id
        self.notes = notes
        self.date = date
        self.time = time

    def __repr__(self):
        return f'<Appointment id={self.id} date={self.date} time={self.time} user_id={self.user_id} specialist_id={self.specialist_id} service_id={self.service_id}>'

    def to_dict(self):
        return {
            "id": self.id,
            "notes": self.notes,
            "date": self.date,
            "time": self.time,
            "user_id": self.user_id,
            "specialist_id": self.specialist_id,
            "service_id": self.service_id
        }

    def to_dict_2(self):
        return {
            "id": self.id,
            "notes": self.notes,
            "date": self.date,
            "time": self.time,
            "user": self.user.name,
            "specialist": self.specialist.name,
            "service_id": self.service.name
        }