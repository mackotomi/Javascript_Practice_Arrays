/*
Before we jump in, it important to be aware of The Anatomy Of An Array.
The Array is Composed of Elements + Indexes and hats it..
So for each element inside the array, it will automatically have
an index value. Long story short, Element == Index.
The element can be any datatype the javascript
works with. In this examples i will be using only 'Strings' and
Integers. Lastly, it is good to know, that the array in javasript
is object, but different.. and.. Javascript array are not Associated Array,
which means, we cant name the indexes. This means, Javascript array indexes have numeric values.
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



