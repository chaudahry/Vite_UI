# appwrite_client.py
import os
from appwrite.client import Client
from appwrite.services.databases import Databases
from appwrite.services.account import Account
from appwrite.services.users import Users
from dotenv import load_dotenv

load_dotenv()

# --- Appwrite Configuration ---
APPWRITE_ENDPOINT = os.environ.get("APPWRITE_ENDPOINT")
APPWRITE_PROJECT_ID = os.environ.get("APPWRITE_PROJECT_ID")
APPWRITE_API_KEY = os.environ.get("APPWRITE_API_KEY")
DATABASE_ID = os.environ.get("APPWRITE_DATABASE_ID")

# --- Collection IDs ---
# It's recommended to store these in environment variables as well
COLLECTION_USERS = os.environ.get("APPWRITE_COLLECTION_USERS_ID", "users")
COLLECTION_RESUMES = os.environ.get("APPWRITE_COLLECTION_RESUMES_ID", "resumes")
COLLECTION_REQUIREMENTS = os.environ.get("APPWRITE_COLLECTION_REQUIREMENTS_ID", "requirements")
COLLECTION_RESULTS = os.environ.get("APPWRITE_COLLECTION_RESULTS_ID", "results")

# --- Initialize Appwrite Client ---
client = Client()
client.set_endpoint(APPWRITE_ENDPOINT)
client.set_project(APPWRITE_PROJECT_ID)
client.set_key(APPWRITE_API_KEY)

# --- Initialize Appwrite Services ---
db = Databases(client)
account = Account(client)
users = Users(client)

print("✅ Appwrite Client Initialized.")