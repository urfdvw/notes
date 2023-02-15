class State {
    constructor (val=0) {
        this._val = val;
        this._last = val;
    }

    set now(val) {
        this._last = this._val;
        this._val = val;
    }

    get now () {
        return this._val;
    }

    get diff () {
        return this._val - this._last;
    }
}

class TargetMatcher {
    constructor (target) {
        if (target === undefined){
            this.clear_target();
        } else {
            this.target = target;
        }
        this.segment = "";
        this.mood = new State()
    }
    push (segment) {
        let result = [];
        segment = this.segment + segment;
        // see if the tail contains partial target
        for (let i = segment.length - this.target.length; i < segment.length; i++) {
            if (i < 0) {
                continue;
            }
            let tail = segment.slice(i);
            if (tail === this.target) {
                break
            }
            if (tail === this.target.slice(0, tail.length)) {
                this.segment = tail;
                segment = segment.slice(0, segment.length - tail.length);
                break;
            } else {
                this.segment = "";
            }
        }
        let parts = segment.split(this.target);

        // console.log('DEBUG', 'TargetMatcher parts', parts);
        for (let i = 0; i < parts.length; i++) {
            if (i != 0) {
                this.mood.now = 1;
                result.push([this.target, this.mood.now, this.mood.diff]);
            }
            if (parts[i].length > 0) {
                this.mood.now = 0;
                result.push([parts[i], this.mood.now, this.mood.diff]);
            }
        }
        // console.log('DEBUG', 'TargetMatcher result',  String(result));
        return result;
    }
    clear_target () {
        this.target = 'You shall not pass! (∩๏‿‿๏)⊃━☆ﾟ.*';
    }
}

class BracketMatcher {
    constructor (begin_str, end_str) {
        this.begin_matcher = new TargetMatcher(begin_str);
        this.end_matcher = new TargetMatcher(end_str);
        this.mood = new State();
        this.matcher = this.begin_matcher;
    }
    push (segment) {
        let outlet = [];
        let parts = this.matcher.push(segment);
        while (parts.length > 0) {
            // get current part
            const current = parts.shift();
            // skip if empty
            if (current[0].length === 0) {
                continue;
            }
            if (current[1] === 0) {
                // if not matching, append to outlet
                outlet.push([current[0], this.mood.now, this.mood.diff])
                this.mood.now = this.mood.now; // update mood because it is used
            } else {
                this.mood.now = 1 - this.mood.now;
                if (this.mood.now === 1) {
                    this.matcher = this.end_matcher;
                } else {
                    this.matcher = this.begin_matcher;
                }
                var rest = [];
                for (const p of parts) {
                    rest.push(p[0]);
                }
                const text = rest.join('');
                parts = this.matcher.push(text);
            }
        }
        return outlet
    }
}

class MatcherProcessor {
    constructor (
        matcher,
        in_action = () => {},
        enter_action = () => {},
        exit_action = () => {}
    ) {
        this.matcher = matcher;
        this.in_action = in_action;
        this.enter_action = enter_action;
        this.exit_action = exit_action;

        this.through = false;
        this.segment = '';
    }
    push (parts) {
        var outlet = [];
        var branch = [];
        for (const part_in of parts) {
            for (const part_out of this.matcher.push(part_in)) {
                const text = part_out[0];
                const mood = part_out[1];
                const diff = part_out[2];
                if (diff === 1) {
                    this.enter_action(text);
                }
                if (mood === 1) {
                    this.in_action(text);
                    branch.push(text);
                }
                if (diff === -1) {
                    this.exit_action(text);
                }
                if (mood === 0) {
                    outlet.push(text);
                }
            }
        }
        console.log('DEBUG', 'MatcherProcessor results', outlet, branch)
        return outlet;
    }
}

/* target matcher test start */
console.log('INFO', 'test started');
let test_target_matcher = new TargetMatcher('@#$');

text = ''
parts = test_target_matcher.push(text)
console.log('DEBUG', [text], parts, test_target_matcher.mood)

text = '12345'
parts = test_target_matcher.push(text)
console.log('DEBUG', [text], parts, test_target_matcher.mood)

text = '12@#$345'
parts = test_target_matcher.push(text)
console.log('DEBUG', [text], parts, test_target_matcher.mood)

text = '12345@#'
parts = test_target_matcher.push(text)
console.log('DEBUG', [text], parts, test_target_matcher.mood)

text = '$12345'
parts = test_target_matcher.push(text)
console.log('DEBUG', [text], parts, test_target_matcher.mood)

text = '12@#$@#$345'
parts = test_target_matcher.push(text)
console.log('DEBUG', [text], parts, test_target_matcher.mood)

text = '12345@#$'
parts = test_target_matcher.push(text)
console.log('DEBUG', [text], parts, test_target_matcher.mood)

console.log('INFO', 'test ended');

/* target matcher test end */

/* BracketMatcher test start */
console.log('INFO', 'test started');

let test_bracket_matcher = new BracketMatcher('{{', '}}');

text = ''
parts = test_bracket_matcher.push(text)
console.log('DEBUG', [text])
console.log('DEBUG', parts)

text = '123456'
parts = test_bracket_matcher.push(text)
console.log('DEBUG', [text])
console.log('DEBUG', parts)

text = '12{{34}}56'
parts = test_bracket_matcher.push(text)
console.log('DEBUG', [text])
console.log('DEBUG', parts)

text = '12{{34}}{{56}}'
parts = test_bracket_matcher.push(text)
console.log('DEBUG', [text])
console.log('DEBUG', parts)

text = '12{{3456'
parts = test_bracket_matcher.push(text)
console.log('DEBUG', [text])
console.log('DEBUG', parts)

text = '1234}}{{56}}78'
parts = test_bracket_matcher.push(text)
console.log('DEBUG', [text])
console.log('DEBUG', parts)

console.log('INFO', 'test ended');
/* BracketMatcher test end */
