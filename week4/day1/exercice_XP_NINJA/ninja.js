const mergeWords = (word) => {
    let words = [word];
    const next = (nextWord) => {
        if (nextWord === undefined) {
            return words.join(" ");
        } else {
            words.push(nextWord);
            return next;
        }
    };
    return next;
};


console.log(mergeWords('There')('is')('no')('spoon')());  // There is no spoon


// currying function 
const mergeWordss = (string) => (nextString) =>
  nextString === undefined
    ? string
    : mergeWordss(string + ' ' + nextString);
console.log(mergeWordss('There')('is')('no')('spoon')()); // 

