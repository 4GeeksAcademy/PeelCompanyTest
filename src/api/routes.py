"""This module takes care of starting the API Server, Loading the DB and Adding the endpoints"""

from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Subscription
from api.utils import generate_sitemap, APIException
from flask_cors import CORS
from datetime import datetime, timedelta

api = Blueprint('api', __name__)

# Allow CORS requests to this API
CORS(api)

@api.route('/register', methods=['POST'])
def register():
    data = request.get_json()
    new_user = User(username=data['username'], password=data['password'], email=data['email'])
    db.session.add(new_user)
    db.session.commit()
    return jsonify({'message': 'User created'}), 201

@api.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    user = db.session.query(User).filter_by(username=data['username'], password=data['password']).first()
    if user:
        return jsonify({'message': 'Login successful'}), 200
    return jsonify({'message': 'Invalid credentials'}), 401

@api.route('/subscribe', methods=['POST'])
def subscribe():
    data = request.get_json()
    user = db.session.query(User).filter_by(id=data['user_id']).first()
    if user:
        new_subscription = Subscription(
            user_id=user.id,
            subscription_type=data['subscription_type'],
            end_date=datetime.utcnow() + timedelta(days=int(data['duration_days']))
        )
        db.session.add(new_subscription)
        db.session.commit()
        return jsonify({'message': 'Subscription added'}), 201
    return jsonify({'message': 'User not found'}), 404
