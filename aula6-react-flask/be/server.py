from flask import Flask
from flask_cors import CORS

# __name__ defines the server name
app = Flask(__name__)
# CORS(app) # liberar acesso a dominios distintos
CORS(app, origins=["http://localhost:5173"])

@app.route("/tasks",  methods=["GET"])
def hello_world():
    return [{
      "id": "8f7a9356-18b0-4506-8bbf-f092b736f8c5",
      "title": "JavaScript API",
      "description": "Descrição",
      "isCompleted": False,
    },
    {
      "id": "1f4f762a-ed6a-4e8c-a576-2e197a83af00",
      "title": "React API",
      "description": "Descrição",
      "isCompleted": False,
    },
    {
      "id": "7019ac75-aee2-4ec9-89d3-f5bde3e0cd53",
      "title": "Tailwind API",
      "description": "Descrição",
      "isCompleted": False
    }]

app.run(port=5000, debug=True)

