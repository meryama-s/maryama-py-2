from flask import Flask, render_template, request, redirect, url_for
import psycopg2

#creet the app
app = Flask(__name__)
# connection postgres with DB
conn = psycopg2.connect(
    dbname="menu",
    user="postgres",
    password="meryamarafiki",
    host="localhost",
    port="5432"
)
#the cursor to send the orders to DB
cur = conn.cursor()
@app.route('/')
def home():
    return redirect(url_for('menu'))



# hna kayn route

#show up the menu
@app.route('/menu')
def menu():
    cur.execute("SELECT * FROM menu_items")
    items = cur.fetchall()
    return render_template('menu.html', items=items)

#add new dish
@app.route('/add', methods=['GET','POST'])
def add_item():
    if request.method =='POST':
        name = request.form['name']
        price = request.form['price']
        cur.execute("INSERT INTO menu_items (name, price) VALUES (%s, %s)", (name, price))
        conn.commit()
        return redirect(url_for('menu'))
    return render_template('add_item.html')

#remove item through its ID
@app.route('/delete/<int:item_id>')
def delete_item(item_id):
    cur.execute("DELETE FROM menu_items WHERE id = %s", (item_id,))
    conn.commit()
    return redirect(url_for('menu'))

#updating item
@app.route('/update/<int:item_id>', methods=['GET','POST'])
def update_item(item_id):
    if request.method == 'POST':
        name = request.form['name']
        price = request.form['price']
        cur.execute("UPDATE menu_items SET name=%s, price= %s WHERE id=%s", (name, price, item_id))
        conn.commit()
        return redirect(url_for('menu'))
    else:
        cur.execute("SELECT * FROM menu_items WHERE id= %s",(item_id,))
        item= cur.fetchone()
        return render_template('update_item.html', item=item)

if __name__=='__main__':
    app.run(debug=True)
