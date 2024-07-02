import tkinter as tk
from tkinter import scrolledtext, END

class ChatBot:
    def __init__(self, master):
        self.master = master
        master.title("ChatBot")

        self.chat_history = ""

        self.chat_display = scrolledtext.ScrolledText(master, state='disabled', width=50, height=20)
        self.chat_display.grid(row=0, column=0, padx=10, pady=10, columnspan=2)

        self.input_label = tk.Label(master, text="User:")
        self.input_label.grid(row=1, column=0, padx=10, pady=10)

        self.user_input = tk.Entry(master, width=30)
        self.user_input.grid(row=1, column=1, padx=10, pady=10)

        self.submit_button = tk.Button(master, text="Send", command=self.process_input)
        self.submit_button.grid(row=1, column=2, padx=10, pady=10)

    def process_input(self):
        user_query = self.user_input.get()
        self.user_input.delete(0, END)

        response = self.get_response(user_query)

        self.chat_history += f"You: {user_query}\n"
        self.chat_history += f"Bot: {response}\n"
        self.update_chat_display()

    def get_response(self, query):
        if query.lower() == "hello":
            return "Hi there!"
        elif query.lower() == "how are you?":
            return "I'm just a prototype. The feature is not added yet."
        else:
            return "I'm a prototype. I don't understand that."

    def update_chat_display(self):
        self.chat_display.config(state='normal')
        self.chat_display.delete('1.0', END)
        self.chat_display.insert('insert', self.chat_history)
        self.chat_display.config(state='disabled')

def main():
    root = tk.Tk()
    chat_bot = ChatBot(root)
    root.mainloop()

if __name__ == "__main__":
    main()
