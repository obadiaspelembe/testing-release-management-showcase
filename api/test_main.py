from fastapi.testclient import TestClient
from main import app

client = TestClient(app)

def test_get_inspiration():
    response = client.get("/inspire")
    assert response.status_code == 200
    data = response.json()
    assert "phrase" in data
    assert "author" in data
    assert isinstance(data["phrase"], str)
    assert isinstance(data["author"], str)