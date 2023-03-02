function findDuplicateNumbers(numbers) {
    let duplicates = [];
    let counts = {};
    for (let i = 0; i < numbers.length; i++) {
        let num = numbers[i];
        if (counts[num]) {
            counts[num] += 1;
        } else {
            counts[num] = 1;
        }
        if (counts[num] === 2) {
            duplicates.push(num);
        }
    }

    return duplicates;
}

//Soal A
console.log(findDuplicateNumbers([10,20,20,10,10,30,50,10,20]))

//Soal B
console.log(findDuplicateNumbers([6,5,2,3,5,2,2,1,1,5,1,3,3,3,5]))

//Soal C
console.log(findDuplicateNumbers([1,1,3,1,2,1,3,3,3,3]))


function countWords(sentence) {
    const specialChars = /[^a-zA-Z .,?]/g;
    const words = sentence.split(' ');

    let count = 0;

    for (let i = 0; i < words.length; i++) {
        if (!specialChars.test(words[i])) {
            count++;
        }
    }
    return count;
}

//Soal A
console.log(countWords('Saat meng*ecat tembok, Agung dib_antu oleh Raihan.'))

//Soal B
console.log(countWords('Berapa u(mur minimal[ untuk !mengurus ktp?'))

//Soal C
console.log(countWords('Masing-masing anak mendap(atkan uang jajan ya=ng be&rbeda.'))
