import datetime

class WorkDay:
    def __init__(self, date):
        self.date = date
        self.start_time = None
        self.end_time = None

    def start(self):
        self.start_time = datetime.datetime.now()

    def end(self):
        self.end_time = datetime.datetime.now()

    def working_hours(self):
        if self.start_time is None or self.end_time is None:
            return None
        return (self.end_time - self.start_time).total_seconds() / 3600

class WorkWeek:
    def __init__(self):
        self.days = []

    def add_day(self, date):
        self.days.append(WorkDay(date))

    def get_day(self, date):
        for day in self.days:
            if day.date == date:
                return day
        return None

    def working_hours(self):
        total_hours = 0
        for day in self.days:
            hours = day.working_hours()
            if hours is not None:
                total_hours += hours
        return total_hours

# Example usage
week = WorkWeek()

# Add work days
week.add_day(datetime.date(2023, 3, 13))
week.add_day(datetime.date(2023, 3, 14))

# Start and end work day
monday = week.get_day(datetime.date(2023, 3, 13))
monday.start()
monday.end()

tuesday = week.get_day(datetime.date(2023, 3, 14))
tuesday.start()

# Print total working hours for the week
print("Total working hours for the week: {:.2f}".format(week.working_hours()))
