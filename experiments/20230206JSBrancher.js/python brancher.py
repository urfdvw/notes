import os
rootdir = '.'

def md_files():
    for subdir, dirs, files in os.walk(rootdir):
        for file in files:
            if file.endswith('.md'):
                yield os.path.join(subdir, file)

class MatchedFilter:
    def __init__(self, target):
        self.target = target
        self.segment = ""
    def __call__(self, segment):
        result = []
        segment = self.segment + segment

        for i in range(len(segment) - len(self.target), len(segment)):
            if i < 0:
                continue
            tail = segment[i:]
            if (tail == self.target[:len(tail)]):
                self.segment = tail
                segment = segment[i:]
                break

        parts = segment.split(self.target)
        first_part = parts.pop(0)
        if len(first_part) > 0:
            result.append([first_part, False])
        for p in parts:
            result.append([self.target, True])
            result.append([p, False])
        return result

class Brancher:
    def __init__(self, begin_str, end_str):
        self.begin_matcher = MatchedFilter(begin_str)
        self.end_matcher = MatchedFilter(end_str)
        self.mood = False
        self.set_matcher()
    def set_matcher(self):
        self.matcher = self.end_matcher if self.mood else self.begin_matcher
    def __call__(self, segment):
        result = []
        parts = self.matcher(segment)
        while parts:
            p = parts.pop(0)
            if not p[1]:
                result.append([p[0], self.mood])
            else:
                self.mood = not self.mood
                self.set_matcher()
                parts = self.matcher(''.join([p[0] for p in parts]))
        return result


if __name__ == '__main__':
    brancher = Brancher('`{', '}`')

    for path in md_files():
        with open(path, 'r', encoding='utf-8') as f:
            result = []
            for b in brancher(f.read()):
                if not b[1]:
                    result.append(b[0])
                else:
                    result.append(b[1].upper())
        with open(path, 'w', encoding='utf-8') as f:
            f.write(''.join(result))
