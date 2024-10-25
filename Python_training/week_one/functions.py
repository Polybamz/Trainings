import csv
import re


file_path = 'contact.csv'

contact_book = []
def add_contact(contact,name, email):
    with open(file_path, 'a', newline='') as file:
        writer = csv.writer(file)
        writer.writerow([contact, name, email])
 
    print('Contact added successfully')


    ### get contact with search word
def get_a_contact(search_word):
    with open(file_path, 'r') as file:
        reader = csv.reader(file)
        for row in reader:
            contact_book.append({
                'contact': row[0],
                'name': row[1],
                'email': row[2]
            })
    for contact in contact_book:
        if(search_word == contact['name'] or search_word == contact['contact'] or search_word== contact['email']):
            print(f'''
Name: {contact['name']}
Contact: {contact["contact"]}
email: {contact["email"]}
''')
        else:
            print('Contact not found')


  ### get all contact
def get_all_contact():
    with open(file_path, 'r') as file:
        reader = csv.reader(file)
        for row in reader:
            contact_book.append({
                'contact': row[0],
                'name': row[1],
                'email': row[2]
            })
    for contact in contact_book:
        print(f'''
Name: {contact['name']}
Contact: {contact["contact"]}
email: {contact["email"]}
''')
            
    ### edit contact
def edit_contact():
    pass
            
            
    ### dellet contact
def delete_contact(contact):
    for all_contact in  contact_book:
        if all_contact['contact'] == contact:
            contact_book.remove(all_contact)
        else:
            print('Contact not available')

#### check if email is valid
def is_valid_email(email):
    regex = r"^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$"
    return bool(re.match(regex, email, re.IGNORECASE))


#### check if phone number is valid
def is_valid_phone(number):
    regex = r'^6\d{8}$'
    return bool(re.match(regex, number, re.IGNORECASE))