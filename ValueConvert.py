def convert_temperature():
    print("Which conversion do you want to choose:")
    print("1. Celsius to Fahrenheit")
    print("2. Fahrenheit to Celsius")
    choice=int(input("Enter your choice (1 or 2):"))
    if choice==1:
        C=float(input("Enter temperature in Celsius:"))
        F=((C*9)/5)+32
        print(f"{C} degree celsius is equal to {F} degree fahrenheit")
    elif choice==2:
        F=float(input("Eeter temperatur in Fahrenheit:"))
        C=((F-32)*5)/9
        print(f"{F} degree fahrenheit is equal to {C} degree celsius")
    else:
        print("Invalid number...........try agaian")

def convert_currency():
    print("which conversion do you want to choose:")
    print("1. Dollor to Kyat")
    print("2. Kyat to Dollor")
    choice=int(input("enter you choice (1 or 2):"))
    if choice==1:
        value=float(input("enter dollor:"))
        kyat=value*1778
        print(f"{value} dollor is equal to {kyat} kyat")
    elif choice==2:
        value=float(input("enter kyat:"))
        dollor=value/1778
        print(f"{value} kyat is equal to {dollor} dollor")
    else:
        print("Invalid number....try again")

def convert_lengths():
    print("Which conversion do you want to choose:")
    print("1. Centimeters to foot and inches")
    print("2. Foot and inches to centimeter")
    choice = int(input("Enter your choice: "))
    if choice == 1:
        value = float(input("Enter length in cm: "))
        inches = value/2.54
        feet = inches/12
        print(f"{value} centimeters in equal to {feet} feet and {inches} inch")
    elif choice == 2:
        feet = float(input("Enter length in feet: "))
        inches = float(input("Enter length in inches: "))
        length = (feet*12 + inches)*2.54
        print(f"{feet} feet and {inches} inches in centimeters will be {length}")
    
def convert_time():
    print("which convert would you like to change:")                #1minute=0.0167 hour
    print("1. minute to second")                                    #1second=0.000278hour
    print("2. minute to hour")
    print("3. second to minute")
    print("4. second to hour")
    print("5. hour to minute")
    print("6. hour to second")
    choose=int(input("enter choice:"))
    if choose==1:
        value=int(input("enter minute:"))
        s=value*60
        print(f"{value} minute is equal to {s} second")
    elif choose==2:
        value=int(input("enter minute:"))
        h=value*0.0167
        print(f"{value} minute is equal to {h} hour")
    elif choose==3:
        value=int(input("enter second:"))
        m=value/60
        print(f"{value} second is equal to {m} minute")
    elif choose==4:
        value=int(input("enter second:"))
        h=value*0.000278
        print(f"{value} second is equal to {h} hour")
    elif choose==5:
        value=int(input("enter hour:"))
        m=value*60
        print(f"{value} hour is equal to {m} minute")
    elif choose==6:
        value=int(input("enter hour:"))
        s=value*3600
        print(f"{value} hour is equal to {s} second")

print("=======welcome to value converter=======")
while True:
    print("which converter would you like to choose:")
    print("1. Convert temperature")
    print("2. Convert currency")
    print("3. Convert length")
    print("4. convert_time")
    print("5. Exit")
    choose=int(input("enter choice 1,2,3,4 or 5:"))
    if choose==1:
        convert_temperature()
    elif choose==2:
        convert_currency()
    elif choose==3:
        convert_lengths()
    elif choose==4:
        convert_time()
    else:
        break