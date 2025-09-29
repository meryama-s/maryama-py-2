from flask import Flask, render_template, request, redirect, url_for
import psycopg2

app = Flask(__name__)

conn = psycopg2.connect(
    dbname="restaurant_db",
    user="postgres",
    password="meryamarafiki",
    host="localhost",
    port="5432"
)
cur = conn.cursor()

@app.route('/')
def home():
    return redirect(url_for('menu'))

@app.route('/menu')
def menu():
    cur.execute("SELECT * FROM Menu_Items")
    items = cur.fetchall()  # items will be list of tuples (item_id, item_name, item_price)
    return render_template('menu.html', items=items)

@app.route('/add', methods=['GET','POST'])
def add_item():
    if request.method == 'POST':
        name = request.form['name']
        price = int(request.form['price'])
        cur.execute("INSERT INTO Menu_Items (item_name, item_price) VALUES (%s, %s)", (name, price))
        conn.commit()
        return redirect(url_for('menu'))
    return render_template('add_item.html')

@app.route('/delete/<int:item_id>')
def delete_item(item_id):
    cur.execute("DELETE FROM Menu_Items WHERE item_id = %s", (item_id,))
    conn.commit()
    return redirect(url_for('menu'))

@app.route('/update/<int:item_id>', methods=['GET','POST'])
def update_item(item_id):
    if request.method == 'POST':
        name = request.form['name']
        price = int(request.form['price'])
        cur.execute("UPDATE Menu_Items SET item_name=%s, item_price=%s WHERE item_id=%s", (name, price, item_id))
        conn.commit()
        return redirect(url_for('menu'))
    else:
        cur.execute("SELECT * FROM Menu_Items WHERE item_id = %s", (item_id,))
        item = cur.fetchone()
        return render_template('update_item.html', item=item)

if __name__ == '__main__':
    app.run(debug=True)
