# Cook N' Eat It
A recipe sharing application using Django and React.

**Table of contents:**
- [Cook N' Eat It](#cook-n-eat-it)
  - [Project Start](#project-start)
    - [Install Python and Git Bash](#install-python-and-git-bash)
    - [Create virtual environment](#create-virtual-environment)
    - [Install requirements](#install-requirements)

## Project Start

### Install Python and Git Bash

Install [python 3]([https://www.python.org/downloads/](https://www.python.org/downloads/)).
Install [Git bash](https://git-scm.com/downloads).

Add python to path (if it isn’t already).

### Create virtual environment

Create a virtual environment called `venv.`

For windows:

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
```

Django versions tend to change a lot with time. So it is important that we specify a version to avoid unwanted effects.
