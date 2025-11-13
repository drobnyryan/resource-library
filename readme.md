# Resource Library (FastAPI + JSON)


Minimal resource library prototype (text-first) built with FastAPI. Data is stored in `data/resources.json`.


## Run locally


1. Create a Python virtualenv and activate it.
2. Install requirements:


```bash
pip install -r requirements.txt
```


3. Run locally:


```bash
uvicorn app.main:app --reload --port 8000
```


4. Open http://localhost:8000


## Deploy to Render


1. Push this repo to GitHub.
2. Create a new Web Service on Render and connect the repo.
3. Render will use `render.yaml` to build and deploy the service.
