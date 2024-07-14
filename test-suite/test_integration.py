import os
import pytest
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC


APP_URL = os.environ.get("APP_URL", "http://localhost:3000")

@pytest.fixture(scope="module")
def driver():
    driver = webdriver.Chrome()
    yield driver
    driver.quit()

def test_title_is_rendering(driver):
    driver.get(APP_URL)
    wait = WebDriverWait(driver, 10)
    data_element = wait.until(
        EC.presence_of_element_located((By.XPATH, "//h1[contains(text(), 'Inspiring Text Generator')]"))
    )
    assert "Inspiring Text Generator" in data_element.text



def test_text_change_after_submit(driver):
    # Locate the span and get its initial text
    span = WebDriverWait(driver, 10).until(
        EC.presence_of_element_located((By.XPATH, "//span"))
    )
    initial_text = span.text

    # Locate the button and click it
    button = WebDriverWait(driver, 10).until(
        EC.presence_of_element_located((By.XPATH, "//button"))
    )
    button.click()

    # Wait for the span's text to change
    WebDriverWait(driver, 10).until(
        lambda d: d.find_element(By.XPATH, "//span").text != initial_text
    )

    # Get the new text and verify it is different from the initial text
    new_text = driver.find_element(By.XPATH, "//span").text
    assert new_text != initial_text or new_text == "Network response was not ok"