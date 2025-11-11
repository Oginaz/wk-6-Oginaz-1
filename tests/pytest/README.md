# PyTest E2E (Selenium) — Login & Logout

End-to-end tests using PyTest and Selenium WebDriver.

## Setup

1) Create/activate a virtual environment (optional but recommended).

```bash
python -m venv .venv
. .venv/Scripts/activate  # Windows PowerShell
```

2) Install dependencies:

```bash
pip install -r tests/pytest/requirements.txt
```

## Environment

- BASE_URL: Base URL of the running app (default: http://localhost:3000)
- HEADLESS: Set to `1` to run Chrome headless

## Run

Start the app in another terminal:

```bash
npm start
```

Then execute the tests:

```bash
pytest -q tests/pytest
```

Run with env vars:

```bash
$env:BASE_URL="http://127.0.0.1:3000"; $env:HEADLESS="1"; pytest -q tests/pytest   # PowerShell
```

## Notes

- Selectors used (from the app):
  - Email input: `#login-email`
  - Password input: `#login-password`
  - Submit button: `.login-btn`
  - Logout button: `.nav-logout`
  - Profile heading: `h1` with text `My Profile`


