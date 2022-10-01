import string
def check_passward(passward):
    lower_letter=0
    upper_letter=0
    special_char=0
    white_space=0
    digit_num=0
    for char in list(passward):
        if char in string.ascii_lowercase:
            lower_letter+=1
        elif char in string.ascii_uppercase:
            upper_letter+=1
        elif char==" ":
            white_space+=1
        elif char in string.digits:
            digit_num+=1
        else:
            special_char+=1
    strength=0
    remarks=" "
    if lower_letter>=1:
        strength+=1
    if upper_letter>=1:
        strength+=1
    if white_space>=1:
        strength+=1
    if digit_num>=1:
        strength+=1
    if special_char>=1:
        strength+=1
    if strength==1:
        remarks="That's a very bad password. Change it as soon as possible."
    elif strength==2:
        remarks= "That's not a good password. You should consider making a tougher password."
    elif strength==3:
        remarks = "Your password is okay, but it can be improved a lot"
    elif strength == 4:
        remarks = "Your password is hard to guess. But you can make it even more secure"
    elif strength == 5:
        remarks = "Now that's one hell of a strong password !!! Hackers don't have a chance guessing that password."
    
    print("your passward has:")
    print(f"{lower_letter} lower letter")
    print(f"{upper_letter} upper letter")
    print(f"{white_space} white space")
    print(f"{digit_num} digit number")
    print(f"{special_char} special char")
    print(f"Passward score: {strength}/5")
    print(f"remarks: {remarks}")

print("===welcome  to passward check===")
while True:
    choice=input("Do you want to check passward (yes or no):")
    if choice.lower()=="yes":
        passward=input("enter your passward:")
        check_passward(passward)
    elif choice.lower()=="no":
        print("Exit")
        break
    else:
        print("enter valid choice....try again")