import os
import glob

replacements = {
    "Nadya": "Mira Mall",
    "nadya": "miramall",
    "ندية": "ميرا مول",
    "contact@nadya.ma": "contact@miramall.ma",
    "nadya.ma": "miramall.ma",
    "nadya-temp": "miramall-temp",
    "nadya-favicon.svg": "mira-logo-transparent.png"
}

files_to_process = glob.glob("src/**/*.ts", recursive=True) + \
                   glob.glob("src/**/*.tsx", recursive=True) + \
                   ["package.json", "package-lock.json"]

for filepath in files_to_process:
    if os.path.isfile(filepath):
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
            
        new_content = content
        for old, new in replacements.items():
            new_content = new_content.replace(old, new)
            
        if new_content != content:
            with open(filepath, 'w', encoding='utf-8') as f:
                f.write(new_content)
            print(f"Updated {filepath}")
