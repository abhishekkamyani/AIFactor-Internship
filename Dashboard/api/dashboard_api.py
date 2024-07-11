import time
from flask import Flask, jsonify, request
from pymongo import MongoClient

app = Flask(__name__)

client = MongoClient('mongodb://localhost:27017')
db = client['dashboard_db']


@app.route('/api/v1/dashboard/<user_id>/<dashboard_id>', methods=['POST'])
def save_layout(user_id, dashboard_id):
    layouts = request.json.get('layouts')
    if not layouts:
        return jsonify({"message": "Layouts are required"}), 400
    
    layout = {
        "user_id": user_id,
        "dashboard_id": dashboard_id,
        "layouts": layouts
    }
    
    existing_layout = db.layouts.find_one({"user_id": user_id, "dashboard_id": dashboard_id})
    if existing_layout:
        db.layouts.update_one({"_id": existing_layout["_id"]}, {"$set": layout})
    else:
        db.layouts.insert_one(layout)
    
    return jsonify({"message": "Layout saved"}), 200


@app.route('/api/v1/dashboard/<user_id>/<dashboard_id>', methods=['GET'])
def get_layout(user_id, dashboard_id):
    layout = db.layouts.find_one({"user_id": user_id, "dashboard_id": dashboard_id})
    if layout:
        layout["_id"] = str(layout["_id"])
        return jsonify(layout)
    return jsonify({"message": "Layout not found"}), 404

    


@app.route('/api/v1/time')
def get_current_time():
    return {'time': time.time()}