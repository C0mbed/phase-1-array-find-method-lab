// code your solution here

function superbowlWin(record) {
    const winYear = record.find( ({ result }) => result == 'W')
    if (winYear) {
        return winYear.year
    }  
}