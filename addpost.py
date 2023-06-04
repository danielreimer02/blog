def append_to_file(title, content):
    with open('public/data.txt', 'a') as file:
        file.write(f"\nTitle: {title}\n")
        file.write(f"Content: {content}\n")

# Example usage
title = input("Enter the blog post title: ")
content = input("Enter the blog post content: ")

append_to_file(title, content)