def timeConversion(s):
    hour = s[:2]
    if s[-2:] == "AM":
        if hour == "12":
            return f"00{s[2:-2]}"
        else:
            return s[:-2]
    else:
        if hour == "12":
            return f"12{s[2:-2]}"
        else:
            return f"{int(hour) + 12}{s[2:-2]}"




print(timeConversion("12:34:23AM"))