import json
f = open("./helpers/ctf_skor_23.txt", "r", encoding="utf-8")
x = f.read()

split = x.split("\n")
scores = {}

for line in split:
    splitted_line = line.split(';')
    #splitted_line = line.split(':')
    #print(splitted_line[1].split(','))
    #print(splitted_line[2].split(' '))
    #scores.append({"team_name": splitted_line[0], "score":int(splitted_line[1].split(' ')[0])})
    #scores[str(splitted_line[1].split(',')[0])] = int(splitted_line[2].split(' ')[1])
    scores[splitted_line[0]] = splitted_line[1]


#sorted_tuples = sorted(scores.items(), key=lambda item: item[1], reverse=True)
#sorted_dict = {k: v for k, v in sorted_tuples}
f = open("./helpers/scores.json", "w", encoding="utf-8")
f.write(json.dumps(scores))