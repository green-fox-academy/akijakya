let groceryList:string [] = ['eggs', 'milk', 'fish', 'apples', 'bread', 'chicken'];

//building a function that console logs if an item is on a list
function isOnTheList (list:any, item:any) {
    let result:boolean = list.some(e => e === item);
    if (result === true) {
        console.log(item + ' - on the list!')
    } else {
        console.log(item + ' - not on the list!');
    }
}

// Do we have milk on the list?
isOnTheList(groceryList, 'milk');

// Do we have bananas on the list?
isOnTheList(groceryList, 'bananas');