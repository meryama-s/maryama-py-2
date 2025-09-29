from menu_item import MenuItem
from week2.day4.exercice_XP.menu_manager import MenuManager

def show_user_menu():
    while True:
        print("\n--- Restaurant Menu Manager ---")
        print("V - View an Item")
        print("A - Add an Item")
        print("D - Delete an Item")
        print("U - Update an Item")
        print("S - Show Menu")
        print("E - Exit")
        choice = input("Choose an option: ").upper()

        if choice == 'V':
            name = input("Enter item name to view: ")
            item = MenuManager.get_by_name(name)
            if item:
                print(f"Found: {item}")
            else:
                print("Item not found.")

        elif choice == 'A':
            add_item_to_menu()

        elif choice == 'D':
            remove_item_from_menu()

        elif choice == 'U':
            update_item_from_menu()

        elif choice == 'S':
            show_restaurant_menu()

        elif choice == 'E':
            print("Exiting...")
            show_restaurant_menu()
            break

        else:
            print("Invalid option.")

def add_item_to_menu():
    name = input("Enter item name: ")
    price = int(input("Enter item price: "))
    item = MenuItem(name, price)
    item.save()
    print("Item was added successfully.")

def remove_item_from_menu():
    name = input("Enter item name to delete: ")
    item = MenuItem(name, 0)
    try:
        item.delete()
        print("Item was deleted successfully.")
    except:
        print("Error: Could not delete item.")

def update_item_from_menu():
    old_name = input("Enter item name to update: ")
    old_price = int(input("Enter current item price: "))
    new_name = input("Enter new item name: ")
    new_price = int(input("Enter new item price: "))
    item = MenuItem(old_name, old_price)
    try:
        item.update(new_name, new_price)
        print("Item was updated successfully.")
    except:
        print("Error: Could not update item.")

def show_restaurant_menu():
    print("\n---> Restaurant Menu <---")
    items = MenuManager.all_items()
    for item in items:
        print(f"{item['name']} - {item['price']} DH")

if __name__ == "__main__":
    show_user_menu()
