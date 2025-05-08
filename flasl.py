import csv
from flask import Flask, render_template, jsonify

app = Flask(__name__)

def load_locations_from_csv(file_path):
    with open(file_path, newline='', encoding='utf-8') as csvfile:
        reader = csv.DictReader(csvfile)
        return [
            {"name": row["name"], "lat": float(row["lat"]), "lon": float(row["lon"])}
            for row in reader if row["name"] and row["lat"] and row["lon"]
        ]

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/locations')
def get_locations():
    locations = load_locations_from_csv("restaurants.csv")
    return jsonify(locations)

if __name__ == '__main__':
    app.run(debug=True)

    
