import datetime

# This tool allows users to enter and manage daily tasks.

class Task:
    def __init__(self, name, deadline):
        self.name = name
        self.deadline = deadline
        self.completed = False

    def complete(self):
        self.completed = True

    def __str__(self):
        return f"{self.name} ({self.deadline}) - {'Completed' if self.completed else 'Incomplete'}"

def add_task(tasks):
    name = input("Enter task name: ")
    deadline = input("Enter task deadline (DD/MM/YYYY): ")
    deadline = datetime.datetime.strptime(deadline, "%d/%m/%Y")
    task = Task(name, deadline)
    tasks.append(task)
    print("Task added successfully.")

def show_tasks(tasks):
    if not tasks:
        print("No tasks found.")
        return
    for task in tasks:
        print(task)

def complete_task(tasks):
    if not tasks:
        print("No tasks found.")
        return
    name = input("Enter the name of the task to complete: ")
    for task in tasks:
        if task.name == name:
            task.complete()
            print("Task marked as completed.")
            return
    print("Task not found.")

def main():
    tasks = []
    while True:
        print("Daily Management System")
        print("1. Add task")
        print("2. Show tasks")
        print("3. Complete task")
        print("4. Quit")
        choice = input("Enter your choice (1-4): ")
        if choice == "1":
            add_task(tasks)
        elif choice == "2":
            show_tasks(tasks)
        elif choice == "3":
            complete_task(tasks)
        elif choice == "4":
            print("Goodbye!")
            break
        else:
            print("Invalid choice.")

if __name__ == "__main__":
    main()
