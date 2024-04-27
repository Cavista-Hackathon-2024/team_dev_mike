from flask import Flask, request, jsonify, send_file, session
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
from datetime import datetime
import random
import string

# Create Flask app instance
app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "*"}})

# Define route to serve miketest.html
@app.route('/miketest')
def serve_html():
    return send_file('miketest.html')

# Configure SQLAlchemy
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///example.db'
db = SQLAlchemy(app)

# Import models
from user_auth1 import Doctor, Patient

# Define Prescription model
class Prescription(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    doctor_id = db.Column(db.Integer, nullable=False)
    patient_id = db.Column(db.Integer, nullable=False)
    date = db.Column(db.Date, nullable=False)
    prescription_desc = db.Column(db.Text, nullable=False)
    prescription_id = db.Column(db.String(10), unique=True, nullable=False)
    issued_at = db.Column(db.DateTime, nullable=False)

# Define route for prescription submission
@app.route('/prescription', methods=['POST'])
def add_prescription():
    # Check if doctor is logged in
    if 'doctor_id' not in session:
        return jsonify({'message': 'Unauthorized'}), 401
    
    data = request.form
    doctor_id = session['doctor_id']
    patient_id = data.get('patient_id')
    date = datetime.now().date()  # Get current date
    prescription_desc = data.get('prescription_desc')
    
    # Generate a random 6-digit alphanumeric code for prescription ID
    prescription_id = ''.join(random.choices(string.ascii_uppercase + string.digits, k=6))
    
    # Store the prescription in the database
    new_prescription = Prescription(doctor_id=doctor_id, patient_id=patient_id, date=date,
                                    prescription_desc=prescription_desc,
                                    prescription_id=prescription_id,
                                    issued_at=datetime.now())
    db.session.add(new_prescription)
    db.session.commit()
    
    return jsonify({'message': 'Prescription added successfully'}), 201

# Route to fetch all prescriptions
@app.route('/prescriptions', methods=['GET'])
def get_prescriptions():
    # Check if doctor is logged in
    if 'doctor_id' not in session:
        return jsonify({'message': 'Unauthorized'}), 401
    
    # Get all prescriptions for the logged-in doctor
    doctor_id = session['doctor_id']
    prescriptions = Prescription.query.filter_by(doctor_id=doctor_id).all()
    
    # Convert prescriptions to JSON
    prescriptions_data = []
    for prescription in prescriptions:
        prescription_data = {
            'id': prescription.id,
            'patient_id': prescription.patient_id,
            'date': prescription.date.strftime('%Y-%m-%d'),
            'prescription_desc': prescription.prescription_desc,
            'prescription_id': prescription.prescription_id,
            'issued_at': prescription.issued_at.strftime('%Y-%m-%d %H:%M:%S')
        }
        prescriptions_data.append(prescription_data)
    
    return jsonify({'prescriptions': prescriptions_data})

# Get doctor ID from login route and set session
@app.route('/login/doctor', methods=['POST'])
def doctor_login():
    data = request.get_json()
    username = data.get('username')
    password = data.get('password')
    doctor = Doctor.query.filter_by(username=username, password=password).first()
    if doctor:
        session['doctor_id'] = doctor.id
        return jsonify({'message': 'Doctor login successful'}), 200
    else:
        return jsonify({'message': 'Invalid username or password'}), 401

if __name__ == '__main__':
    app.run(debug=True)
