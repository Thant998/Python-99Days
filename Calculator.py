print("    Welcome to My Calculator app       ")

while True:                                 
    print("What would you like to do?")
    print("1. Addition")
    print("2. Subtraction")
    print("3. Multiplication")
    print("4. Division")
    print("5. Exit")
    choice=int(input("Enter your choice [1,2,3,4,5]:"))
    if choice==1:
        num1=int(input("enter the first number---"))
        num2=int(input("enter the second number---"))
        print("Output:",num1+num2)
    elif choice==2:
        num1=int(input("enter the first number---"))
        num2=int(input("enter the second number---"))
        print("Output:",num1-num2)
    elif choice==3:
        num1=int(input("enter the first number---"))
        num2=int(input("enter the second number---"))
        print("Output:",num1*num2)
    elif choice==4:
        num1=int(input("enter the first number---"))
        num2=int(input("enter the second number---"))
        print("Output:",num1/num2)
    elif choice==5:
        print("Exit")
        break
    print()         #its print() is iterat
#print()            #its print() is onece
                    #These two are not same, so just try!\
##############################################################
import random
def rolling_dice():
    dice_number=random.randint(1,6)
    return dice_number
print("     welcome to rolling dice     ")
while True:
    playing=input("Do you want to roll dice(yes or no):")
    if playing.lower()=="yes":
        number=rolling_dice()
        print("the dice is rolling:")
        print("the dice number is",number)
    elif playing.lower()=="no":
        print("Exit")
        break
    else:
        print("Invalid input..try again")
