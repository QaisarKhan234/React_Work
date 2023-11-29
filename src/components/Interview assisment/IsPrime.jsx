// // to check weither the given number is visible or not?

// // so we have to create a function for it

// export default function isPrime (number){
//     // first we have to check for weither the number is less than 0r equal to 1
//     if (number <= 1){
//         return false;
//     }

//     // now if it is not less than oor equal to 1 than we have to check for weitther the number is prime or not
//     for (let i= 2 ; i<=number/2; i++){
//         // we have to check the number for half of its number if its divisible until half of its value reached then w
//         // better approach is to remve the extra iteration that is unnecessary
//         if(number%i === 0){
//             return false;
//         }
//     }
//     return true;
// }

// // lets take an example

// let num = 16;

// if (isPrime(num)){
//     console.log(num + " is a prime number");
// }
// else{
//     console.log(num + " is Not a Prime Number");
// }

// // so this programme is working fine.


// let arr = [[2], [6, 1, 3], [7, 0], [2, 4, 6]]
// console.log (arr.flat(3));

// let newArr = arr.flat(3);

// // create a function to find second largest number in an array
// export default function findSecondLargest(arr){
//     let largest = arr[0];
//     let secondLargest = arr[0];

//     for (let i=1; i<arr.length; i++){
//         if(arr[i]>largest){
//             secondLargest = largest;
//             largest = arr[i]
//         }
//         else if(arr[i]>secondLargest && arr[i < largest]){
//             secondLargest =arr[i];
//         }
//     }
//     return secondLargest;
// }

// const secondLargest = findSecondLargest(newArr);
// console.log('The second largest number in the array is: ' + secondLargest);

// // so now it is working fine the second largest number in the above array is 6


// ------------------------------------------------------------------------------------------------------------


// Q3: Generate this series till any given number?  0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ….
// e.g n = 55

// a function to create series is 

let n = 55;

export default function generateSeries (target){
        // here we will take an array containing two entries 0 and 1 to properly iterete our logic 
        // so lets take the first two of the series we are gonna generate 
        const series = [0,1];
        let currentNumber = 1;
        let previousNumber = 0;

        while (currentNumber <= target ){
            // the first is added to next one and this way the series continue
            const nextNumber = currentNumber+previousNumber;
            series.push(nextNumber);
            // the number is pushed into the series and the previous and next number wil be updated so
            previousNumber = currentNumber;
            currentNumber = nextNumber;
        }

    
    return series;
}

const generatedSeries = generateSeries(n);
console.log(generatedSeries);

// ok fine the code is working properly it create the above given series until the given targeted value.

