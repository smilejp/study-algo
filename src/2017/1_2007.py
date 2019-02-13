
month, day = map(int,raw_input().split())
dayOfWeeks = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']
days = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

totalDays = day
for index in range(1,month):
  totalDays += days[index - 1]

print dayOfWeeks[totalDays % 7]