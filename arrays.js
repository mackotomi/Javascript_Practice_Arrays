/*
Before we jump in, it is !Important to be aware of The Anatomy Of An Array.
The Array is Composed of Elements + Indexes and thats it..
So, for each element inside the array, it will automatically have
an index value. Long story short, Element == Index.
The element can be any datatype the javascript
works with. In this examples i will be using only 'Strings' and
Integers. Lastly, it is good to know, that the array in javasript
is object, but different.. and.. Javascript array are not Associated Array,
which means, we cant name the indexes. This means, Javascript array indexes have numeric values. Also, array index stats from 0.
*/

/*
Two arrays, one with numbers and one with names as string.
*/

let arrayWithNames = ['john', 'rami', 'peter', 'sunny', 'eli', 'noro', 'kamil', 'harez', 'tony'];
let arrayWithNumber = [1,2,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
let arrayOfArmory = ['sword', 'bow', 'shield', 'helm', 'wand', 'dagger', 'hamer', 'staff'];

/*
consoel log for both arrays
*/

console.log(arrayWithNames);
console.log(arrayWithNumber);

/*
how to check if array is really an array? a?
*/

console.log(Array.isArray(arrayWithNames));
console.log(Array.isArray(arrayWithNumber));

/*
The problem of typeOf is that it wil log object, which
the arrays are.. so there is the isArray method that 
logs true or fales specifically designed to check arrays.
dont use typeof to check if array is array, becuase
it will log object.
*/

console.log(typeof arrayWithNames);
console.log(typeof arrayWithNumber);

/*
As we can see, the typeof returns the object.
Arrays are basically objects, but with numbered indexes,
compred to objects, which can have string named indexes that arrays cant.
In javascript arrays are not associated arrays like in PHP and other languages.
*/

/*
How we can change the arrays elements / indexes?
First lets try to add, remove elements.
*/

/*
To add an element into an array, we can use the push();
*/

let arrayEmpty = [];
console.log(arrayEmpty);

arrayEmpty.push('Element1','Element2','Element3')
console.log(arrayEmpty);

/*
The pop() method will remove or pop out an element out of the array.
It will remove the element from the end of the array even if you specificy
the element name in the parameter of the pop();
*/
arrayEmpty.pop('Element2')
console.log(arrayEmpty);

/*
So, how ca  we find specific element in array in first place?
We need to check if specific element is within an array first.
If true, we then need to check where it is located based on the index
of the element in the array.
After, we can used method to remove the index, where the element is located.
*/

/*
So for this ill use the array with armory, and i will check the content of the array.
*/

console.log(arrayOfArmory);

/*
How do i check if specific element is in array? There is method called includes()
With this method we can check True or False boolean that will tell us if such
Element is within the array that is being checked with the includes()
This though will not tell us the index of the element, it will only tell us
that the element is within the array. After, we need to check the index of the element.
But first, lets check if specific element is part of an arrayOfArmory.
*/

console.log(arrayOfArmory.includes(''));

/*
So once we know, that Element with Specific name is included / true within the array,
how do we check its index? The asnwer is using method .indexOf() We use indexOf('dagger'); where in parameter we inlude the name of the element.
*/

console.log(arrayOfArmory);
console.log(arrayOfArmory.indexOf('staff'));
console.log(arrayOfArmory[7]);

/*
This will print the the index number 7 where the element string staff is located.
*/

// Array Method - Check indexOf the Element in the array.
console.log(arrayOfArmory.indexOf('shield') + ' ' + arrayOfArmory[2]);

// Multiple weapon of different qualities arrays.
let normalWeapons = ["normal_weapon_1" , "normal_weapon_2" , "normal_weapon_3" , "normal_weapon_4" , "normal_weapon_5"];
let rareWeapons = ["rare_weapon_1" , "rare_weapon_2" , "rare_weapon_3" , "rare_weapon_4" , "rare_weapon_5"];
let uniqueWeapons = ["unique_weapon_1" , "unique_weapon_2" , "unique_weapon_3" , "unique_weapon_4" , "unique_weapon_5"];
let legendaryWeapons = ["legendary_weapon_1" , "legendary_weapon_2" , "legendary_weapon_3" , "legendary_weapon_4" , "legendary_weapon_5"];

// The .concat() will join other array to other array. Decide which of the array you want to concat with, and use the array with concat method that has the other array.
let conctatedArray = normalWeapons.concat(rareWeapons);
console.log(conctatedArray);