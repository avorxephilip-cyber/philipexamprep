import json
import random
import sys

# Set stdout to utf-8 to handle arrows
sys.stdout.reconfigure(encoding='utf-8')

# Same data
questions = [
    { "q": "A project is best defined as:", "options": ["A permanent, routine ongoing operation","A temporary, unique endeavor with a defined beginning and end to create a specific outcome","A department within a company","A long-term business strategy"], "answer": 1, "explanation": "A project is temporary (has a defined start and end), unique (creates a unique product, service, or result), and purposeful (aimed at achieving specific objectives within constraints)." },
    { "q": "Which of the following is NOT a characteristic of a project?", "options": ["Temporary nature","Specific objective","Repetitive and ongoing","Requires resources"], "answer": 2, "explanation": "Projects are NOT repetitive and ongoing — that describes operations. Projects are temporary, unique, goal-oriented, and complex." },
    { "q": "The Triple Constraint in project management consists of:", "options": ["Quality, Risk, and Stakeholders","Time, Cost, and Scope","Budget, Resources, and Communication","Initiation, Planning, and Closure"], "answer": 1, "explanation": "The Triple Constraint (Iron Triangle) is Time (schedule), Cost (budget), and Scope (deliverables). Changing any one constraint affects the others." },
    { "q": "What is the correct sequence of the Project Life Cycle?", "options": ["Planning → Execution → Initiation → Closure","Initiation → Planning → Execution & Control → Closure","Execution → Planning → Initiation → Closure","Initiation → Execution → Planning → Closure"], "answer": 1, "explanation": "The Project Life Cycle follows: Initiation → Planning → Execution & Controls → Termination/Closure. Each phase has specific deliverables and decision points." },
    { "q": "A project stakeholder is:", "options": ["Only the project sponsor","Any individual or organization who may have an interest in and be actively involved in the project","Only the project team","Only the project's end users"], "answer": 1, "explanation": "Stakeholders include all individuals and organizations with an interest in the project outcome — sponsors, customers, team members, suppliers, regulators, and the public." },
    { "q": "Which document formally authorizes a project and appoints the project manager?", "options": ["Project scope statement","Project charter","Gantt chart","Risk register"], "answer": 1, "explanation": "The Project Charter formally authorizes the existence of the project, defines its objectives, scope, and constraints, and appoints the project manager with the authority to use organizational resources." },
    { "q": "A Gantt chart is primarily used to:", "options": ["Track project costs","Show the project schedule with activities and their durations displayed against a timeline","Identify project risks","Manage stakeholder relationships"], "answer": 1, "explanation": "A Gantt chart is a bar chart showing project tasks plotted against time. It visually represents the project schedule, showing start/end dates, durations, dependencies, and progress." },
    { "q": "The Critical Path in a project network is:", "options": ["The path with the least activities","The longest sequence of dependent tasks through the project — determining the minimum project duration","The most expensive set of activities","Activities the project manager finds most critical"], "answer": 1, "explanation": "The Critical Path is the longest sequence of dependent activities. Any delay on the critical path delays the entire project. It determines the minimum possible project duration." },
    { "q": "What does 'float' (or 'slack') mean in project scheduling?", "options": ["The contingency budget","The amount of time a task can be delayed without delaying the project completion date","The number of resources on standby","The project buffer time at the end"], "answer": 1, "explanation": "Float (slack) is the amount of time a non-critical activity can be delayed without affecting the project's final deadline. Critical path activities have zero float." },
    { "q": "The Work Breakdown Structure (WBS) is:", "options": ["A bar chart showing the project schedule","A hierarchical decomposition of the total project scope into smaller, manageable work packages","A risk assessment tool","A stakeholder analysis diagram"], "answer": 1, "explanation": "The WBS decomposes the project scope into progressively smaller work packages — making the scope manageable, assignable, and measurable. It is the foundation for cost and schedule planning." },
    { "q": "A project delay is defined as:", "options": ["Finishing one day after the planned completion","The inability of a project team to complete all stipulated activities within the estimated duration","Having too many resources","Any scope change"], "answer": 1, "explanation": "Project delay is the team's inability to complete all project activities within the originally planned timeframe. Delays can be critical (affecting overall completion) or non-critical." },
    { "q": "An 'excusable' delay is one:", "options": ["Caused by poor planning by the contractor","Caused by events beyond the contractor's control — such as natural disasters or client-caused delays","Caused by scope creep","Due to underestimated task durations"], "answer": 1, "explanation": "Excusable delays result from unforeseeable events outside the contractor's control — acts of God, government actions, client-caused delays. The contractor is typically granted a time extension but no additional compensation." },
    { "q": "Which conflict resolution strategy seeks a win-win outcome?", "options": ["Forcing/Competing","Problem solving/Collaborating","Avoidance/Withdrawal","Smoothing/Accommodating"], "answer": 1, "explanation": "Problem Solving (Collaborating) seeks a win-win outcome by addressing the root cause of the conflict. It is the most effective long-term conflict resolution strategy in project management." },
    { "q": "Risk management in a project involves:", "options": ["Ignoring low-probability risks","Identifying, analyzing, and developing responses to potential events that could affect project objectives","Only managing financial risks","Assigning all risks to the client"], "answer": 1, "explanation": "Project risk management is a systematic process of identifying, analyzing (probability × impact), planning responses (avoid, transfer, mitigate, accept), and monitoring risks throughout the project lifecycle." },
    { "q": "The role of a Project Sponsor is to:", "options": ["Do detailed project work","Provide strategic direction, secure resources, remove high-level obstacles, and be the project's executive champion","Manage the day-to-day schedule","Conduct risk assessments"], "answer": 1, "explanation": "The Project Sponsor is the senior executive who owns the project at the organizational level — providing funding, strategic direction, removing obstacles, making high-level decisions, and accepting the final deliverable." }
]

def reshuffle(qs):
    new_qs = []
    for q in qs:
        options = q['options'][:]
        correct_answer_text = options[q['answer']]
        random.shuffle(options)
        new_answer_index = options.index(correct_answer_text)
        new_qs.append({
            "q": q['q'],
            "options": options,
            "answer": new_answer_index,
            "explanation": q['explanation']
        })
    return new_qs

reshuffled = reshuffle(questions)

for q in reshuffled:
    # Use ensure_ascii=False to keep arrows as characters
    opts_json = json.dumps(q["options"], ensure_ascii=False)
    line = f'      {{ q: "{q["q"]}", options: {opts_json}, answer: {q["answer"]}, explanation: "{q["explanation"]}" }},'
    print(line)
