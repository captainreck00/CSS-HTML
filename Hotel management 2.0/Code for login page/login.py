from flask import Flask, jsonify
from flask_cors import CORS
from flask import request

app = Flask(__name__)
CORS(app)  # This enables CORS for your entire app

@app.route('/',methods=['POST'])
def login():
    data=request.get_json()

    response_data={"Check":"Yes"}
    return jsonify(response_data)

if __name__ == '__main__':
    app.run(debug=True)