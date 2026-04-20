with open('index.html', 'rb') as f:
    raw = f.read()

fixes = [
    # em-dash (U+2014) broken as  \xc3\xa2\xe2\x82\xac\xe2\x80\x9d
    (b'\xc3\xa2\xe2\x82\xac\xe2\x80\x9d',           b'&mdash;'),
    # em-dash in comment (stored as pure UTF-8 \xe2\x80\x94 — leave this one alone)
    # About Me heading: man-teacher emoji broken
    (b'\xc3\xb0\xc5\xb8\xe2\x80\x98\xc2\xa8\xc3\xa2\xe2\x82\xac\xc2\x8d\xc3\xb0\xc5\xb8\xc2\x8f\xc2\xab', b'&#x1F468;&#x200D;&#x1F393;'),
    # Handshake emoji \U0001F91D broken
    (b'\xc3\xb0\xc5\xb8\xc2\xa4\xc2\x9d',           b'&#x1F91D;'),
    # Waving hand \U0001F44B broken
    (b'\xc3\xb0\xc5\xb8\xe2\x80\x98\xe2\x80\xb9',   b'&#x1F44B;'),
    # Email envelope \u2709\ufe0f broken
    (b'\xc3\xa2\xc5\x93\xe2\x80\xb0\xc3\xaf\xc2\xb8\xc2\x8f', b'&#x2709;&#xFE0F;'),
    # Telephone \U0001F4DE broken
    (b'\xc3\xb0\xc5\xb8\xe2\x80\x9c\xc5\xbe',       b'&#x1F4DE;'),
    # Speech bubble \U0001F4AC broken
    (b'\xc3\xb0\xc5\xb8\xe2\x80\x99\xc2\xac',       b'&#x1F4AC;'),
    # Briefcase \U0001F4BC broken
    (b'\xc3\xb0\xc5\xb8\xe2\x80\x99\xc2\xbc',       b'&#x1F4BC;'),
    # Blue book \U0001F4D8 broken (two instances SmartFix + Fb Profile)
    (b'\xc3\xb0\xc5\xb8\xe2\x80\x9c\xcb\x9c',       b'&#x1F4D8;'),
    # Camera \U0001F4F8 broken
    (b'\xc3\xb0\xc5\xb8\xe2\x80\x9c\xc2\xb8',       b'&#x1F4F8;'),
]

total = 0
for bad, good in fixes:
    n = raw.count(bad)
    if n:
        raw = raw.replace(bad, good)
        print(f'Fixed {n}x  {bad!r}  ->  {good.decode("ascii")}')
        total += n
    else:
        print(f'NOT FOUND: {bad!r}')

with open('index.html', 'wb') as f:
    f.write(raw)

print(f'\nTotal: {total} fixes. File saved.')
