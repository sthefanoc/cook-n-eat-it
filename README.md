# Cook N' Eat It
A recipe sharing application using Django and React.

**Table of contents:**
- [Cook N' Eat It](#cook-n-eat-it)
  - [Project Start](#project-start)
    - [Install Python and Git Bash](#install-python-and-git-bash)
    - [Create virtual environment](#create-virtual-environment)
    - [Install requirements](#install-requirements)
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
```

Django versions tend to change a lot with time. So it is important that we specify a version to avoid unwanted effects.

To install dependencies, run:

```bash
pip install -r requirements.txt
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
