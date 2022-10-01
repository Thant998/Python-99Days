user_input=str(input("enter the phase:"))
text=user_input.split()
a=" "
for i in text:
    a=a+str(i[0]).upper()
print(a)

import datetime
alarm_time=input("Put the time of alarm to be set: HH:MM:SS")
alarm_hour=alarm_time[0:2]
alarm_minute=alarm_time[3:5]
alarm_second=alarm_time[6:8]
alarm_period=alarm_time[9:11].upper()
print("Setting up alarm........")
while True:
    now=datetime.datetime.now()
    current_hour=now.strftime("%I")
    current_minute=now.strftime("%M")
    current_second=now.strftime("%S")
    current_period=now.strftime("%p")
    if alarm_period==current_period:
        if alarm_hour==current_hour:
            if  alarm_minute==current_minute:
                if alarm_second==current_second:
                    print("Wake up....")
                    break

# Program to find the ASCII value of the given character

c = 'p'
print("The ASCII value of '" + c + "' is", ord(c))