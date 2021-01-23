import json


def create_question_map(question, number):
    return {"number": number, "question": question}


with open("src.txt") as file:
    data = file.read()
    questions = data.split('\n\n')
    questions_mapped = []
    for i in range(len(questions)):
        question = questions[i]
        questions_mapped.append(create_question_map(question, i+1))

    json_questions = json.dumps(questions_mapped)

    with open("36_questions.json", "x") as json_file:
        json_file.write(json_questions)
