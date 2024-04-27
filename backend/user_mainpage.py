from flask import Flask, request, jsonify, render_template, session
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///example.db'
db = SQLAlchemy(app)

# Import Prescription model from doctor_prescription.py
from doctor_prescription import Prescription

# Import Patient model from user_auth1.py
from user_auth1 import Patient

@app.route('/login/patient', methods=['POST'])
def patient_login():
    data = request.get_json()
    patient_id = data.get('patient_id')
    patient = Patient.query.filter_by(id=patient_id).first()
    if patient:
        session['patient_id'] = patient.id
        return jsonify({'message': 'Patient login successful'}), 200
    else:
        return jsonify({'message': 'Invalid patient ID'}), 401

@app.route('/user_mainpage')
def user_mainpage():
    # Check if patient is logged in
    if 'patient_id' not in session:
        return jsonify({'message': 'Unauthorized'}), 401
    
    # Get prescriptions for the logged-in patient
    patient_id = session['patient_id']
    prescriptions = Prescription.query.filter_by(patient_id=patient_id).all()
    
    # Render HTML template with prescriptions
    return render_template('user_mainpage.html', prescriptions=prescriptions)

if __name__ == '__main__':
    app.run(debug=True)
