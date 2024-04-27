from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "*"}})  # Allow requests from any origin

app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///example.db'
db = SQLAlchemy(app)

class Patient(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(50), unique=True, nullable=False)
    password = db.Column(db.String(100), nullable=False)
    first_name = db.Column(db.String(50), nullable=False)
    last_name = db.Column(db.String(50), nullable=False)
    email = db.Column(db.String(100), unique=True, nullable=False)
    phone_number = db.Column(db.String(15), unique=True, nullable=False)

class Doctor(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    password = db.Column(db.String(100), nullable=False)
    first_name = db.Column(db.String(50), nullable=False)
    last_name = db.Column(db.String(50), nullable=False)
    email = db.Column(db.String(100), unique=True, nullable=False)
    phone_number = db.Column(db.String(15), unique=True, nullable=False)
    license_number = db.Column(db.String(50), unique=True, nullable=False)

@app.route('/')
def home():
    return 'Welcome to the user authentication service'

@app.route('/login/patient', methods=['POST'])
def patient_login():
    data = request.get_json()
    username = data.get('username')
    password = data.get('password')
    patient = Patient.query.filter_by(username=username, password=password).first()
    if patient:
        return jsonify({'message': 'Patient login successful'}), 200
    else:
        return jsonify({'message': 'Invalid username or password'}), 401

@app.route('/register/patient', methods=['POST'])
def patient_register():
    data = request.get_json()
    password = data.get('password')
    first_name = data.get('first_name')
    last_name = data.get('last_name')
    email = data.get('email')
    phone_number = data.get('phone_number')
    if Patient.query.filter_by(email=email).first():
        return jsonify({'message': 'Email already exists'}), 400
    new_patient = Patient( password=password, first_name=first_name,
                          last_name=last_name, email=email, phone_number=phone_number)
    db.session.add(new_patient)
    db.session.commit()
    return jsonify({'message': 'Patient registered successfully'}), 201

@app.route('/login/doctor', methods=['POST'])
def doctor_login():
    data = request.get_json()
    username = data.get('username')
    password = data.get('password')
    doctor = Doctor.query.filter_by(username=username, password=password).first()
    if doctor:
        return jsonify({'message': 'Doctor login successful'}), 200
    else:
        return jsonify({'message': 'Invalid username or password'}), 401

@app.route('/register/doctor', methods=['POST'])
def doctor_register():
    data = request.get_json()
    password = data.get('password')
    first_name = data.get('first_name')
    last_name = data.get('last_name')
    email = data.get('email')
    phone_number = data.get('phone_number')
    license_number = data.get('license_number')
    if Doctor.query.filter_by(email=email).first():
        return jsonify({'message': 'Email already exists'}), 400
    new_doctor = Doctor(password=password, first_name=first_name,
                        last_name=last_name, email=email, phone_number=phone_number,
                        license_number=license_number)
    db.session.add(new_doctor)
    db.session.commit()
    return jsonify({'message': 'Doctor registered successfully'}), 201

if __name__ == '__main__':
    with app.app_context():
        db.create_all()
    app.run(debug=True)
