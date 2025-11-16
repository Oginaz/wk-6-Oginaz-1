from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC


def test_login_success(driver, base_url):
    # Ensure clean session
    driver.delete_all_cookies()
    driver.get(base_url)
    driver.execute_script("window.localStorage.clear();")
    driver.get(f"{base_url}/login")

    email = WebDriverWait(driver, 5).until(
        EC.presence_of_element_located((By.CSS_SELECTOR, "#login-email"))
    )
    password = WebDriverWait(driver, 5).until(
        EC.presence_of_element_located((By.CSS_SELECTOR, "#login-password"))
    )

    email.clear(); email.send_keys("user1@test.com")
    password.clear(); password.send_keys("TestPass123")

    driver.find_element(By.CSS_SELECTOR, ".login-btn").click()

    WebDriverWait(driver, 5).until(EC.presence_of_element_located((By.CSS_SELECTOR, "h1")))
    heading = driver.find_element(By.CSS_SELECTOR, "h1").text.strip()
    assert heading == "My Profile"


def test_logout_flow(driver, base_url):
    # login first (demo auth accepts any password pattern)
    driver.delete_all_cookies()
    driver.get(base_url)
    driver.execute_script("window.localStorage.clear();")
    driver.get(f"{base_url}/login")

    WebDriverWait(driver, 5).until(EC.presence_of_element_located((By.CSS_SELECTOR, "#login-email"))).send_keys("user1@test.com")
    WebDriverWait(driver, 5).until(EC.presence_of_element_located((By.CSS_SELECTOR, "#login-password"))).send_keys("TestPass123")
    driver.find_element(By.CSS_SELECTOR, ".login-btn").click()

    WebDriverWait(driver, 5).until(EC.text_to_be_present_in_element((By.CSS_SELECTOR, "h1"), "My Profile"))

    # logout via navbar
    WebDriverWait(driver, 5).until(EC.element_to_be_clickable((By.CSS_SELECTOR, ".nav-logout"))).click()

    # Verify redirected to landing or login; ensure Login link is present
    WebDriverWait(driver, 5).until(EC.presence_of_element_located((By.LINK_TEXT, "Login")))
    assert driver.find_element(By.LINK_TEXT, "Login")


