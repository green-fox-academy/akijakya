//  Create a function that takes a list of numbers as parameter
//  Returns a list where the elements are sorted in ascending numerical order
//  Make a second boolean parameter, if it's `true` sort that list descending

//making bubble first
function bubble (nums:number []) {
    let sorted:number [] = nums.sort((a,b)=>a-b);
    return sorted;
}

//making advancedbubble
function advancedBubble (nums:number [], boo:boolean) {
    var sorted:number [] = nums.sort();
    if (boo == true){
        let sorted:number [] = nums.sort((a,b)=>b-a);
    } else {
        let sorted:number [] = nums.sort((a,b)=>a-b);
    }
    return sorted;
}

//  Example:
console.log(bubble([34, 12, 24, 9, 5]));
//  should print [5, 9, 12, 24, 34]
console.log(advancedBubble([34, 12, 24, 9, 5], true));
//  should print [34, 24, 12, 9, 5]