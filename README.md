# Cook N' Eat It
A recipe sharing application using Django and React.

**Table of contents:**
- [Cook N' Eat It](#cook-n-eat-it)
  - [Project Start](#project-start)
    - [Install Python and Git Bash](#install-python-and-git-bash)
    - [Create virtual environment](#create-virtual-environment)
    - [Install requirements](#install-requirements)
  - [Django recipe server](#django-recipe-server)
    - [Create Django project](#create-django-project)
    - [Start recipes app](#start-recipes-app)
  - [React client](#react-client)
  - [Project commit structure](#project-commit-structure)

## Project Start

### Install Python and Git Bash

Install [python 3]([https://www.python.org/downloads/](https://www.python.org/downloads/)).
Install [Git bash](https://git-scm.com/downloads).

Add python to path (if it isn’t already).

### Create virtual environment

Inside the project directory, create a server folder called `/server-django`.

Inside that folder, create a virtual environment called `venv.`

For Windows:

```bash
python -m venv venv
```

For Mac/Linux:

```bash
python3 -m venv venv
```

Activate virtual environment.

For windows, using git bash terminal:

```bash
source venv/Scripts/activate
```

For windows, on powershell:

```bash
.\venv\Script\activate
```

For Mac or Linux:

```bash
source venv/bin/activate
```

### Install requirements

In the root of the project, add a `requirements.txt` file with:

```
django>=4.0.0,<4.1.0
djangorestframework
pyyaml
requests
django-cors-headers
cloudinary
dotenv
```

Django versions tend to change a lot with time. So it is important that we specify a version to avoid unwanted effects.

To install dependencies, run:

```bash
pip install -r requirements.txt
```

## Django recipe server

### Create Django project

Create Django project inside the `/server-django` folder, run:

```bash
django-admin startproject cookneatit .
```
Start our API with:
```bash
python manage.py startapp api
```
Setup API with changes to `api/urls.py`:
```python
from django.urls import path
from . import views

urlpatterns = [
    path('', views.api_home),
]
```
And to `api/views.py`:
```python
from django.http import JsonResponse

def api_home(request, *args, **kwargs):
    return JsonResponse({'message': 'Hello world!'})
```
And `cookneatit/settings.py`:
```python
INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'api',
]
```
And `cookneatit/urls.py`:
```python
from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('api.urls')),
]
```

Now, we can run the server with:
```bash
python manage.py runserver
```
The application will be available at http://localhost:8000/api/
```JSON
{
    "message": "Hello, World!"
}
```
### Start recipes app
To start the app creating, run:
```bash
python manage.py startapp recipes
```
Add the application to `cookneatit/settings.py`:
```python
INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'api',
    'recipes'
]
```
Inside `recipes/models.py`, we'll start our Model:
```python
from email import contentmanager
from turtle import title
from django.db import models

class Recipe(models.Model):
    title=models.CharField(max_length=255),
    content=models.TextField(blank=True, null=True),
    created_at=models.DateTimeField(auto_now_add=True),
    preparation_time=models.IntegerField(blank=True, null=True),
    cooking_time=models.IntegerField(blank=True, null=True),
    total_time=models.IntegerField(blank=True, null=True),
    serves=models.IntegerField(blank=True, null=True, default=1),
``` 
Apply changes to database with:
```bash
python manage.py makemigrations
python manage.py migrate
```
Now


## React client

To bootstrap the project with [vite](https://vite.netlify.com/), run the command inside the frontend directory:

```bash
npm create vite .
```
Then, choose the version with React and TypeScript.
Following, we can run the project with:

```bash
npm install
npm run dev
```























## Project commit structure

Based on this FreeCodeCamp article:
[How to Write Better Git Commit Messages](https://www.freecodecamp.org/news/how-to-write-better-git-commit-messages/)

Structure:
 - `feat` – a new feature is introduced with the changes
 - `fix` – a bug fix has occurred
 - `chore` – changes that do not relate to a fix or feature and don't modify src or test files (for example updating dependencies)
 - `refactor` – refactored code that neither fixes a bug nor adds a feature
 - `docs` – updates to documentation such as a the README or other markdown files
 - `style` – changes that do not affect the meaning of the code, likely related to code formatting such as white-space, missing semi-colons, and so on.
 - `test` – including new or correcting previous tests
 - `perf` – performance improvements
 - `ci` – continuous integration related
 - `build` – changes that affect the build system or external dependencies
 - `revert` – reverts a previous commit
