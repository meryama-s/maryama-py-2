from menu_item import cursor

class MenuManager:

    @classmethod
    def get_by_name(cls, name):
        cursor.execute(
            "SELECT * FROM Menu_Items WHERE item_name = %s",
            (name,)
        )
        result = cursor.fetchone()
        if result:
            return {"id": result[0], "name": result[1], "price": result[2]}
        else:
            return None

    @classmethod
    def all_items(cls):
        cursor.execute("SELECT * FROM Menu_Items")
        results = cursor.fetchall()
        return [{"id": row[0], "name": row[1], "price": row[2]} for row in results]
