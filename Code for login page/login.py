from flask import Flask, jsonify
from flask_cors import CORS
from flask import request


app = Flask(__name__)
CORS(app, resources={r"/api/*": {"origins": "http://127.0.0.1:5500"}})  # Allow requests from your web page's origin

@app.route('/api/data', methods=['POST', 'OPTIONS'])  # Include OPTIONS method
def login():
    if request.method == 'OPTIONS':  # Handle preflight requests
        response = app.response_class(
            response='',
            status=200,
            headers={
                'Access-Control-Allow-Origin': 'http://127.0.0.1:5500',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Allow-Methods': 'POST',
            }
        )
        return response

    data = request.get_json()

    response_data = {"Check": "Yes"}
    return jsonify(response_data)

if __name__ == '__main__':
    app.run(debug=True)
