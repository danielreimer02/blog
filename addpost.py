import os
import shutil
from prompt_toolkit import prompt
from prompt_toolkit.completion import Completer, Completion

class FolderCompleter(Completer):
    def get_completions(self, document, complete_event):
        current_input = document.text_before_cursor
        path_parts = current_input.split("/")
        
        if path_parts[-1] == "..":
            base_path = "/".join(path_parts[:-2]) + "/"
            prefix = path_parts[-1]
        else:
            base_path = "/".join(path_parts[:-1]) + "/"
            prefix = path_parts[-1]
        
        try:
            completions = []
            for item in os.listdir(base_path):
                if item.startswith(prefix):
                    path = os.path.join(base_path, item)
                    if os.path.isdir(path):
                        item += "/"
                    completions.append(Completion(item, start_position=-len(prefix)))
            
            yield from completions
        except FileNotFoundError:
            pass

# Get the folder path
folder_path = prompt("Enter the path to the blog folder: ", completer=FolderCompleter())

# Check if the folder exists
if not os.path.isdir(folder_path):
    print("Invalid folder path.")
    exit(1)

# Get the folder name
folder_name = os.path.basename(folder_path.rstrip('/'))
print("folder name is: ", folder_name)

# Check if the blog file name matches the folder name
blog_file_name = folder_name + ".md"
blog_file_path = os.path.join(folder_path, blog_file_name)
if not os.path.isfile(blog_file_path):
    print(f"The blog file '{blog_file_name}' does not exist in the blog folder.")
    exit(1)

# Check if the destination folder already exists
dest_folder_path = os.path.join("public/data", folder_name)
if os.path.exists(dest_folder_path):
    print(f"The destination folder '{dest_folder_path}' already exists.")
    exit(1)

# Create the destination folder
os.makedirs(dest_folder_path)

# Copy the files to the destination folder
shutil.copy(blog_file_path, os.path.join(dest_folder_path, blog_file_name))
shutil.copy(os.path.join(folder_path, "ref.md"), os.path.join(dest_folder_path, "ref.md"))

print("Files copied successfully!")