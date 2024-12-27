import time

def countdown_timer(seconds):
    while seconds:
        mins, secs = divmod(seconds, 60)
        timer = f'{mins:02d}:{secs:02d}'
        print(timer, end='\r')
        time.sleep(1)
        seconds -= 1
    
    print("Time's up!")

# Input: Countdown in seconds
seconds = int(input("Enter the time in seconds: "))
countdown_timer(seconds)
