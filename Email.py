#Email Slicer with python

email=input("Enter your email address:")
user_name=email[:email.index("@")]
domain_name=email[email.index("@")+1:]
format=(f"Your user name is {user_name} and domain name is {domain_name}")
print(format)

##################################################################################

#Story generator with python

import random

when = ['A few years ago', 'Yesterday', 'Last night', 'A long time ago','On 20th Jan']
who = ['a rabbit', 'an elephant', 'a mouse', 'a turtle','a cat']
name = ['Ali', 'Miriam','daniel', 'Hoouk', 'Starwalker']
residence = ['Barcelona','India', 'Germany', 'Venice', 'England']
went = ['cinema', 'university','seminar', 'school', 'laundry']
happened = ['made a lot of friends','Eats a burger', 'found a secret key', 'solved a mistery', 'wrote a book']
format=(random.choice(when) + ', ' + random.choice(who) + ' that lived in ' + random.choice(residence) + 
', went to the ' + random.choice(went) + ' and ' + random.choice(happened))
print(format)

####################################################################################

#Multiple Inputs with Python using While Loop

while True:
    reply=input("enter text:")
    if reply=="stop":
        break
    print(reply)

#############################################################

