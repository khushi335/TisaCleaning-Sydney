import os
import sys

# Project path
project_home = "/home/hightech/work1.hornetspestcontrols.com/tisacleaning"

if project_home not in sys.path:
    sys.path.insert(0, project_home)

# Django settings module
os.environ.setdefault(
    "DJANGO_SETTINGS_MODULE",
    "tisacleaning.settings"
)

from django.core.wsgi import get_wsgi_application

application = get_wsgi_application()