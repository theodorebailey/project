export function checkWin(correct, wrong, word) {

    let status = 'win';

    // check win
    word.split('').forEach(letter => {
        // if not correct includes our letter - array doesn't include - set status to nothing
        if(!correct.includes(letter)) {
            // doesn't mean we've won or lost yet - use case for most examples
            status = '';
        }
        
    });

    // check for loss
    if (wrong.length == 11) status = 'lose';

    return status;
}


// export function buttongenerator() {
//   let buttons = 'abcdefghijklmnopqrstuvxyz'.split('').map(letter => 
//     `
//     <button className="btn btn-lg btn-primary m-2"
//     id='`+ letter + `
//     onClick="handleGuess('` + letter + `')"
//     >

//       ` + letter + `
//     </button>
//     `
//     );

// }