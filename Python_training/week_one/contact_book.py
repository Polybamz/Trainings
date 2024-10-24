import functions

print("CONTACT LIST")
functions.get_all_contact()

print('''
Enter:
      Delete to delete contact
      Add to add contact
      Search to get a particular contact
      Q to Exit
''')
action = input('ENTER AN ACTION: ')

while action.lower() != 'Q'.lower():
    if action.lower() == 'Delete'.lower():
        delete_data = input('Enter the number you want to delete it data: ')
        functions.delete_contact(delete_data)
        action = input('ENTER AN ACTION: ')

    elif action.lower() == 'Add'.lower():
        name = input('Enter name: ')
        contact = input('Enter contact: ')
        while not functions.is_valid_phone(contact):
            contact = input('Enter valid contact: ')
        if functions.is_valid_phone(contact):
           email = input('Enter email: ')
        while not functions.is_valid_email(email):
            email = input('Enter valid email: ')
        if functions.is_valid_email(email):
            functions.add_contact(contact,name, email)
            action = input('ENTER AN ACTION: ')

        else:
            print('Invalid email')
    elif action.lower() == 'Search'.lower():
        search_word = input('Search: ')
        functions.get_a_contact(search_word=search_word)
        action = input('ENTER AN ACTION: ')

    elif action.lower == 'Q'.lower:
        break
    else:
        print('Enter Valid action')
        break
