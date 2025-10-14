## 🎯 Objetivo

![Preview](./docs/preview.gif)

### 📚 Teoria

Como dois sistemas se comunicam?
Analogia: Americano conversando com alguém que não sabe Inglês.

História: Restaurante
FE <-> API <-> BE

Definição: Application Programming Interface, Interface de Programação de Aplicações

### API, endpoints e API REST

![REST API arquitetura](/aula6-react-flask/docs/REST-API.png)
Link: https://medium.com/@crystian.lf/entenda-sobre-api-de-uma-vez-por-todas-fb5475df8db0

API REST: Utiliza a estrutura REST (Representational State Transfer, Estado de Transferência Representacional).

    Create - POST
    Read - GET
    Update - PUT
    Delete - DELETE

### FLASK

```python
Instalação: pip install Flask
Teste: flask --version
Rodar servidor: flask --app server run
```

### CORS

    Definição: Cross-Origin Resource Sharing, Compartilhamento de Recursos entre Origens Diferentes;

    Lógica: protocolo + domínio + porta;

    Situação: Ocorre quando o BE não libera acesso para o FE.

Exemplo:

http://localhost:5173 → Frontend (React)

http://localhost:5000 → Backend (Python)

```python
Instalação CORS: pip install flask-cors
```

### Perguntas
