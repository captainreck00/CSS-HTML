import sqlite3

conn=sqlite3.connect("my_database.db")
cursor=conn.cursor()

cursor.execute("Select * FROM users")
r=cursor.fetchall()



def verify(email,password):
    for i in r:
        print(i)
        if email==i[0] and password==i[1]:
            return True
    return False    
            
        


