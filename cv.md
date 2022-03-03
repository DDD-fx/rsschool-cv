# CV
## Dmitry Khoroshkin
### Frontend Developer
----
#### Contacts
----
 **tel:** +7 (495) 572-9745\
 **e-mail:** d.khoroshkin@gmail.com
----
#### About me
----
Quality-focused professional with demonstrated strengths in directing research and development projects, conducting experiments, drawing conclusions and aggregating experimental data. Exhibited acumen in applying strong analytical skills to develop action plans that comprehensively reduced manufacturing costs and increased productivity. Provided internal cohesion to ensure quality and timely project completion. 
#### Skills
----
- HTML5
- CSS3
- JavaScript
- Figma
- Git
- WebStorm

#### Code example (JS)
----
*Create a function that takes a positive integer and returns the next bigger number that can be formed by rearranging its digits. For example: **2017 ==> 2071***\
*If the digits can't be rearranged to form a bigger number, return -1*

```
function nextBigger(n) {

    let arr = [...n.toString()];

    if (arr.join("") === maxToMin(arr)) return -1;
    else if (arr[arr.length - 1] > arr[arr.length - 2]) return reverseLastDigits(arr)

    function reverseLastDigits(arr) {
        return Number(arr.slice(0, arr.length - 2).concat(arr.slice(-2).reverse()).join(""));
    }

    function maxToMin(arr) {
        return arr.slice().sort((a, b) => b - a).join("")
    }

    function minToMax(arr) {
        return arr.slice().sort((a, b) => a - b)
    }

    for (let i = 3; i <= arr.length;) {
        let subarr = arr.slice(-i);

        if (subarr.join("") === maxToMin(subarr)) i++;
        else {
            let numToChange = subarr[0];
            let nextBiggerNum = subarr.slice(1).filter(el => el > numToChange).sort()[0];
            let nextBiggerNumIndex = subarr.indexOf(nextBiggerNum, 1);
            subarr[0] = nextBiggerNum;
            subarr[nextBiggerNumIndex] = numToChange;
            subarr = [subarr[0]].concat(minToMax(subarr.slice(1)));
            return Number(arr.slice(0, -i).concat(subarr).join(""))
        }
    }
}
```
#### Courses
-----
- JS, CSS, HTML according to [learnjavascript.ru](https://learn.javascript.ru/)

#### Languages 
-----
- **English**: Upper-intermediate.
- **Japanese**: JLPT N2