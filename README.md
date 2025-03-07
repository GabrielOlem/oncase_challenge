# Fullstack Challenge

This is a fullstack application developed as part of a challenge. It consists of a frontend built with React and a backend built with Django.

## Features
- Add participants with their first name, last name, and participation percentage.
- Display data in a table format.
- Visualize data with a pie chart.
- Fully responsive UI.

## Technologies Used
### Frontend
- React
- Axios
- Recharts (for chart visualization)
- CSS

### Backend
- Django
- Django REST Framework

## Installation and Setup
### Prerequisites
Ensure you have the following installed on your system:
- Node.js
- Python 3

### Backend Setup
1. Navigate to the backend directory:
   ```sh
   cd backend
   ```
2. Create a virtual environment and activate it:
   ```sh
   python -m venv venv
   source venv/bin/activate  # On Windows, use `venv\Scripts\activate`
   ```
3. Install dependencies:
   ```sh
   pip install -r requirements.txt
   ```
4. Run database migrations:
   ```sh
   python manage.py migrate
   ```
5. Start the backend server:
   ```sh
   python manage.py runserver
   ```

### Frontend Setup
1. Navigate to the frontend directory:
   ```sh
   cd frontend
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the development server:
   ```sh
   npm start
   ```

## API Endpoints
- `GET /api/data/` - Retrieve all participant data
- `POST /api/data/add/` - Add a new participant

## Usage
1. Open the frontend at `http://localhost:5173`.
2. Fill in the form with participant details and submit.
3. View the updated table and pie chart.

## License
This project is open-source and available under the MIT License.

## Author
Developed by Gabriel Evangelista

