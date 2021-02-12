'use strict';

document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

document.querySelector('button').addEventListener('click', function() {
    const text = document.querySelector('textarea').value;
    const textRow = text.toLowerCase().split('\n');
    
    for (const word of textRow){
        const [first, second] = word.trim().split('_');

        //let result = first + second[0].toUpperCase() + second.slice(1);
        let result = first + second.replace(second[0], second[0].toUpperCase());
    
        // let indexSymbol = word.lastIndexOf('_');
        // let result = word.slice(0,indexSymbol) + word[indexSymbol+1].toUpperCase() + word.slice(indexSymbol+2);

        console.log(result.padEnd(20) + 'x'.repeat(textRow.indexOf(word)+1));
    }
})