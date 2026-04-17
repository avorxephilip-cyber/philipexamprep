import docx
doc = docx.Document('2021 Pasco Advance Accounting Q1.docx')
with open('docx_text.txt', 'a', encoding='utf-8') as f:
    f.write('\n\n--- TABLES ---\n')
    for table in doc.tables:
        for row in table.rows:
            f.write(' | '.join([cell.text.replace('\n', ' ') for cell in row.cells]) + '\n')
