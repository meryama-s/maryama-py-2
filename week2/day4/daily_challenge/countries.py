import requests
import random
import psycopg2
def fetch_countries():
    url = "https://restcountries.com/v3.1/all?fields=name,capital,flags,subregion,population" #api url
    response = requests.get(url)
    print(response.status_code)
    print(response.text[:200])
    if response.status_code == 200:
        return response.json()
    else:
        print("error in recovering countries from API")
        return[]
    
def save_countries_to_db(countries):
    conn = psycopg2.connect(
        dbname='countries',
        user='postgres',
        password='meryamarafiki',
        host='localhost',
        port='5432'
    )
    cursor = conn.cursor()

    for country in countries:
        name = country.get('name', {}).get('common', 'Unknown')
        capital = country.get('capital', ['Unknown'])[0]
        flag = country.get('flags', {}).get('png', '')
        subregion = country.get('subregion', 'Unknown')
        population = country.get('population', 0)

        cursor.execute("""
            INSERT INTO countries (name, capital, flag, subregion, population)
            VALUES (%s, %s, %s, %s, %s)
            """, (name, capital, flag, subregion, population))

    conn.commit()
    cursor.close()
    conn.close()
    print("10 contries have been saved in the database")

def main():
    all_countries = fetch_countries()
    if not all_countries:
        return

    random_countries = random.sample(all_countries, 10)
    save_countries_to_db(random_countries)

if __name__ == "__main__":
    main()