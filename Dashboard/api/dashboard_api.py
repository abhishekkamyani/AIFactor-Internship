import time
from flask import Flask, jsonify, request
from pymongo import MongoClient

app = Flask(__name__)

client = MongoClient('mongodb://localhost:27017')
db = client['dashboard_db']

def index():
    return 'Welcome to the Flask MongoDB app!'

# Example route to add data to the database
# @app.route('/api/v1/add', methods=['POST'])
# def add_data():
#     data = request.json
#     result = db.dashboard1.insert_one(data)
#     return jsonify({'result': 'Data added', 'id': str(result.inserted_id)})

# # Example route to retrieve data from the database
# @app.route('/data', methods=['GET'])
# def get_data():
#     data = list(db.dashboard1.find())
#     for item in data:
#         item['_id'] = str(item['_id'])
#     return jsonify(data)

    # layout = db.layouts.find_one({"user_id": user_id, "dashboard_id": dashboard_id})

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


    


@app.route('/api/v1/time')
def get_current_time():
    return {'time': time.time()}