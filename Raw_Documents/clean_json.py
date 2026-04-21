import json
import re

with open(r'C:\Users\avorx\OneDrive\Desktop\philipexamprep\Raw_Documents\acc402d_parsed.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

for q in data:
    # Clean up the question text
    text = q['q']
    if "SOLUTION — ANSWER:" in text:
        parts = text.split("SOLUTION — ANSWER:")
        q['q'] = parts[0].strip()
        explanation_part = parts[1].split("\n", 1)[-1].strip()
        if "WORKINGS" in explanation_part:
            explanation_part = explanation_part.replace("WORKINGS", "").strip()
        if explanation_part and not q['explanation']:
            q['explanation'] = explanation_part
            
    q['q'] = q['q'].replace("THE QUESTION", "").strip()

    # Some preambles were bleeding into questions that shouldn't have them
    # For example, Q13-20 don't share the Q10-12 scenario
    if q['q'].startswith("Which of the following statements is TRUE") or q['q'].startswith("Entity A has") or q['q'].startswith("The following information") or q['q'].startswith("Given an entity") or q['q'].startswith("Under Historical Cost") or q['q'].startswith("The main difference") or q['q'].startswith("If environmental"):
        if not "The following information has been extracted" in q['q']:
            q['preamble'] = ""
        elif "WAGIM" in q['q']:
            q['preamble'] = "" # It's part of the question for Q16

with open(r'C:\Users\avorx\OneDrive\Desktop\philipexamprep\Raw_Documents\acc402d_parsed.json', 'w', encoding='utf-8') as f:
    json.dump(data, f, indent=2)

print("Cleaned JSON")
