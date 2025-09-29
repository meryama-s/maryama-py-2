import psycopg2

#connection 

conn = psycopg2.connect(
    dbname='restaurant_db',
    user='postgres',
    password='meryamarafiki',
    host='localhost',
    port='5432'
)

cursor = conn.cursor()

class MenuItem:
    def __init__(self, name, price):
        self.name = name
        self.price = price

    def save(self):
        cursor.execute(
            "INSERT INTO Menu_Items (item_name, item_price) VALUES (%s, %s)",
            (self.name, self.price)
        )
        conn.commit()

    def delete(self):
        cursor.execute(
            "DELETE FROM Menu_Items WHERE item_name = %s",
            (self.name,)
        )
        conn.commit()

    def update(self, new_name, new_price):
        cursor.execute(
            "UPDATE Menu_Items SET item_name = %s, item_price = %s WHERE item_name = %s",
            (new_name, new_price, self.name)
        )
        conn.commit()
        self.name = new_name
        self.price = new_price