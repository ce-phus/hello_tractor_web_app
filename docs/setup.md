## Getting Started

# Prerequisites

- `Python`
- `Node js`
- `Redis`

## Installation

1. `Clone the repo`

```sh
    git clone https://github.com/ce-phus/hello_tractor_web_app.git

```

### Client setup

```sh
    cd client

    npm install

    npm run dev
```

### Backend setup

- Create a virtual environment  after navigating to the realtime_chat

```sh
    cd realtime_chat

    virtualenv venv

    source venv/bin/activate

    pip install -r requirements.txt

    cd backend/hello_tractor

    python3 manage.py migrate

    python3 manage.py runserver
```