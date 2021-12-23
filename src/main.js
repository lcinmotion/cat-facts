const fs = require('fs')

fs.readFile('./data.json', 'utf8', (err, jsonString) => {
    if (err) {
        console.log("File read failed", err)
        return
    }
    // Write facts in reverse order
    const catFactsArray = JSON.parse(jsonString);

    function printReverseOrderCatFacts() {
        for (let index = catFactsArray.length - 1; index >= 0; index--) {
            console.log(catFactsArray[index])
        }

        return;
    }

    printReverseOrderCatFacts();
})