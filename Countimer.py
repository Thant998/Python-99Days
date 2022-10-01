import time
def countdown_timer():
    second=int(input("enter second:"))
    print("Count Start now....")
    while second!=0:
        time.sleep(1)
        second-=1
        print(second)
    print("Count End")


print("====welcomt to Countdown timer====")
while True:
    choice=input("do you want to set time (yes or no):")
    if choice.lower()=="yes":
        countdown_timer()
    elif choice.lower()=="no":
        print("Exit")
    else:
        print("enter valid choice....try again")

#import time
#def countdown(t):
    
    #while t:
        #mins, secs = divmod(t, 60)
        #timer = '{:02d}:{:02d}'.format(mins, secs)
        #print(timer, end="\r")
        #time.sleep(1)
        #t -= 1
      
    #print('Fire in the hole!!')
  
#t = input("Enter the time in seconds: ")
#countdown(int(t))