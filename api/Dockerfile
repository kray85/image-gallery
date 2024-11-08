FROM python:3.9-slim

LABEL maintainer="tetradigitalguy.com"

ENV PYTHONUNBUFFERED=1

COPY ./requirements.txt /tmp/requirements.txt

WORKDIR /app

EXPOSE 5000


RUN python -m venv /py && \
    /py/bin/pip install --upgrade pip && \
    /py/bin/pip install -r /tmp/requirements.txt && \
    rm -rf /tmp

COPY . .

# Debugging step: Check installed packages
RUN /py/bin/pip freeze

# Command to run the application
CMD ["/py/bin/python", "app.py"]