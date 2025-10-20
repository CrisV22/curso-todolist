from flask import Flask
from flask import jsonify
from flask_cors import CORS
import psycopg2

# __name__ define o nome do servidor
app = Flask(__name__)

# CORS(app) # liberar acesso a dominios distintos
CORS(app, origins=["http://localhost:5173"])

# Configuração do banco de dados
DB_CONFIG = {
    "host": "localhost",
    "port": "5432",
    "database": "tododb",
    "user": "admin",
    "password": "admin"
}

# Função para conectar ao banco
def get_db_connection():
    conn = psycopg2.connect(**DB_CONFIG)
    return conn

@app.route("/tasks",  methods=["GET"])
def get_tasks():
    conn = get_db_connection()
    cur = conn.cursor()

    # Busca todos os registros da tabela todos
    cur.execute("SELECT * FROM todos")
    # Guarda retorno na variável rows
    rows = cur.fetchall()
    # Testando pegada de dados
    print(rows)
    
    # Transforma os dados em lista de dicionários
    tasks = []
    for row in rows:
        tasks.append({
            "id": row[0],
            "title": row[1],
            "description": row[2],
            "isCompleted": row[3],
            "created_at": row[4]
        })
    
    print(tasks)
    
    cur.close()
    conn.close()

    # Retorna em formato JSON
    return jsonify(tasks)

if __name__ == "__main__":
  app.run(port=5000, debug=True)
