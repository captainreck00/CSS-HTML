from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # This enables CORS for your entire app

@app.route('/api/data', methods=['GET'])
def get_data():
    data = {'message': 'Hello from the server!'}
    return jsonify(data)

if __name__ == '__main__':
    app.run(debug=True)
