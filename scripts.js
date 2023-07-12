const string = "Text".toLowerCase();
const splittedString = string.split('');

const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]


const convertString = () => {
    let indexLetters = []
    for (let i = 0; i < splittedString.length; i++) {
        indexLetters.push(alphabet.findIndex(letter => letter === splittedString[i]))
    }

    let convertedString = []
    for (let i = 0; i < indexLetters.length; i++) {
        if (indexLetters[i].toString().length === 1) {
            convertedString.push(indexLetters[i])
        } else {
            let splittedNumber = indexLetters[i].toString().split('')
            let summedSplittedNumber = (+splittedNumber[0]) + (+splittedNumber[1])

            if (summedSplittedNumber.toString().length === 1) {
                convertedString.push(summedSplittedNumber)
            } else {
                let splittedNumberSecondly = summedSplittedNumber.toString().split('')
                let summedSplittedNumberSecondly = (splittedNumberSecondly[0]) + (+splittedNumberSecondly[1])

                if ((summedSplittedNumberSecondly).toString().split('') === 1) {
                    convertedString.push(summedSplittedNumberSecondly)
                } else {
                    let splittedNumberThirdly = summedSplittedNumberSecondly.toString().split('')
                    convertedString.push((+splittedNumberThirdly[0]) + (+splittedNumberThirdly[1]))
                }
            }
        }
    }

    return convertedString
}
console.log(convertString())