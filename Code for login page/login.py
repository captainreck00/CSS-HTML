from flask import Flask, jsonify
from flask_cors import CORS
from flask import request
import Data_functions as func 

app = Flask(__name__)
CORS(app)  # This enables CORS for your entire app

@app.route('/',methods=['POST'])
def login():
    data=request.get_json()
    print(data["email"],data['password'])
    if func.verify(data['email'],data['password']):
        response_data={"verified":"yes"}
    else:    
        response_data={"verified":"no"}
    return jsonify(response_data)

if __name__ == '__main__':
    app.run(debug=True)