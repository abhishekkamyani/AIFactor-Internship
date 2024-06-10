from flask import Flask
from data import todos

app = Flask(__name__)

@app.route('/api/v1/todos/get', methods=['GET'])
def get_check():
    return todos
