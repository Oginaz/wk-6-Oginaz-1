import os
import pytest
from selenium import webdriver
from selenium.webdriver.chrome.options import Options


@pytest.fixture(scope="session")
def base_url():
    return os.environ.get("BASE_URL", "http://localhost:3000")


@pytest.fixture(scope="session")
def driver():
    opts = Options()
    if os.environ.get("HEADLESS") in ("1", "true", "True"):
        opts.add_argument("--headless=new")
        opts.add_argument("--disable-gpu")
    opts.add_argument("--window-size=1280,900")
    # Selenium 4+ bundles selenium-manager, no manual chromedriver needed
    drv = webdriver.Chrome(options=opts)
    yield drv
    drv.quit()


