
/*Exercise # 6
Realizar una función que realice el algoritmo de burbuja.  */
const arrIn = [3, 6, 12, 5, 100, 1];

function bubbleSort(arr) {
    for(let i = 0; i < arr.length ; i++) {
        for(let j=0; j < (arr.length - i - 1); j++) {

            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j + 1] = temp;
            }

        }
    }
    return arr;
}



console.log("==== Exercise 6 ====");
console.log(bubbleSort(arrIn))
