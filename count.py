string=input("enter the string:").lower()
vowels=["a","e","i","o","u"]
countvowel=0
countdigit=0

def check(letter):
    for i in range(len(vowels)):
        if letter==vowels[i]:
            return True
    return False
for i in range(len(string)):
    if check(string[i]):
        countvowel+=1
for j in string:
    if j.isdigit():
        countdigit+=1
print(f"{countvowel} vowel is found in string")
print(f"{countdigit} digit is found in string")