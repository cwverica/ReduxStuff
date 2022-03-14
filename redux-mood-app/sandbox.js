function fizzBuzzSum (n) {
    let sum = 0;

    for(let i = 1; i < n; i++){
        if (i % 5 === 0 || i % 3 === 0) {
            sum += i;
        }
    }

    return sum;
}

function fibbEvenSum (n) {

    let sum = 0;
    let curNum = 1;
    let lastNum = 0;
    let secLastNum = 0;

    while (curNum <= n){
        secLastNum = lastNum;
        lastNum = curNum;
        curNum = secLastNum + lastNum;

        if (curNum % 2 === 0) sum = sum + curNum;
    }

    return sum;

}

function largestPrimeFactor (n) {
    let lpf;
    let counter = 2;
    let primeNums = [2];
    let limit = n;

    while(counter <= limit){
        if(isPrime(counter, primeNums)){
            primeNums.push(counter);
            if (n % counter === 0) {
                lpf = counter;
                limit = limit / counter;
            }
            console.log(`lpf: ${lpf}`)
            console.log(primeNums);
        }

        counter++;
    }

    return lpf;
    
}

function isPrime(n, primeArr) {
    let retVal = true;
    primeArr.forEach(prime => {
        if (n % prime === 0){
            retVal = false;
        }
    });

    return retVal;
}

function highestPalindrome (numDigits) {
    const upperLim = (10 ** numDigits) - 1;
    let num1 = upperLim;
    let num2 = upperLim;
    let found = [];

    while(num1 >= 100){
        while(num1 <= num2){
            if(isPalindrome(num1*num2)) found.push(num1*num2);
            num2--;
        }
        num2 = upperLim;
        num1--;
    }

    return found.sort((a, b) => a-b).reverse()[0];


}

function isPalindrome(str) {
    return (String(str) == String(str).split("").reverse().join(""));
}


function smallestMult(divisor) {

    let mult = divisor;
    while(true){
        mult++;
        if(evenlyDivis(divisor, mult)){
            break;
        }
    }

    return mult;
}

function evenlyDivis(highestDivisor, number){
    let divisible = true;
    for (let i = highestDivisor; i >= 2; i--){
        if (!(number % i === 0)){
            divisible = false;
            break;
        }
    }

    return divisible;
}

function squareOfSum(n) {
    let sum = 0;

    for (let i=1; i<=n; i++){
        sum += i;
    }

    return (sum ** 2);
}

function sumOfSquare(n){
    let sum = 0;
    
    for (let i=0; i<=n; i++){
        sum += (i**2);
    }
    return sum;
}
function squareSumDiff(n){
    return squareOfSum(n) - sumOfSquare(n);
}


function nthPrime(n){
    let primes = [];
    let curNum = 2;

    while(primes.length < n){
        let isPrime = true;
        primes.forEach(prime => {
            if(curNum % prime === 0) isPrime = false;
        })
        if (isPrime) primes.push(curNum);
        curNum++;
    }

    return primes.reverse()[0];
}

function largestProdInSeries(n){
    const largeNum = "7316717653133062491922511967442657474235534919493496983520312774506326239578318016984801869478851843858615607891129494954595017379583319528532088055111254069874715852386305071569329096329522744304355766896648950445244523161731856403098711121722383113622298934233803081353362766142828064444866452387493035890729629049156044077239071381051585930796086670172427121883998797908792274921901699720888093776657273330010533678812202354218097512545405947522435258490771167055601360483958644670632441572215539753697817977846174064955149290862569321978468622482839722413756570560574902614079729686524145351004748216637048440319989000889524345065854122758866688116427171479924442928230863465674813919123162824586178664583591245665294765456828489128831426076900422421902267105562632111110937054421750694165896040807198403850962455444362981230987879927244284909188845801561660979191338754992005240636899125607176060588611646710940507754100225698315520005593572972571636269561882670428252483600823257530420752963450";
    let largestProd = 1;

    const series = largeNum.split("");

    let i = 0;
    while (i + n <= series.length){
        let prod = 1;
        series.slice(i, i+n).forEach(num =>{
            prod = prod * parseInt(num);
        })

        if (prod > largestProd) largestProd = prod;

        i++
    }

    return largestProd;
}

const isPythTriplet = (a, b, c) => ((a**2) + (b**2) == (c**2));
const sumsTo1k = (a, b, c) => (a + b + c === 1000);

function specialTriplet(){
 // answer is 31875000
    let a, b, c = 3;

    while(true){
        b = 2;
        while(b < c){
            a = 1;
            while (a < b){
                if (isPythTriplet(a, b, c) && sumsTo1k(a, b, c)) return (a * b * c);
                a++;
            }
            b++
        }
        c++
    }
}

// TODO: Stuck on this. number 10 in Project Euler

function sumOfPrimesBelow(n){
    let primes = new Set();
    let nonPrimes = new Set();
    let curNum = 2;

    while(curNum < n){
        let isPrime = true;
        if (nonPrimes.has(curNum)) {
            curNum++;
            continue;
        }
        for (let prime of primes) {
            if (curNum % prime === 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) primes.add(curNum);
        for(let i = 1; i <= Math.ceil(n/curNum); i++){
            nonPrimes.add(curNum * i);
        }
        curNum++;
    }
    return [...primes].reduce((prev, cur) => prev + cur);
}




function largestProdInGrid(numOfFactors, grid = []) {
    const constGrid = [
        [08, 02, 22, 97, 38, 15, 00, 40, 00, 75, 04, 05, 07, 78, 52, 12, 50, 77, 91, 08 ],
        [49, 49, 99, 40, 17, 81, 18, 57, 60, 87, 17, 40, 98, 43, 69, 48, 04, 56, 62, 00 ],
        [81, 49, 31, 73, 55, 79, 14, 29, 93, 71, 40, 67, 53, 88, 30, 03, 49, 13, 36, 65 ],
        [52, 70, 95, 23, 04, 60, 11, 42, 69, 24, 68, 56, 01, 32, 56, 71, 37, 02, 36, 91 ],
        [22, 31, 16, 71, 51, 67, 63, 89, 41, 92, 36, 54, 22, 40, 40, 28, 66, 33, 13, 80 ],
        [24, 47, 32, 60, 99, 03, 45, 02, 44, 75, 33, 53, 78, 36, 84, 20, 35, 17, 12, 50 ],
        [32, 98, 81, 28, 64, 23, 67, 10, 26, 38, 40, 67, 59, 54, 70, 66, 18, 38, 64, 70 ],
        [67, 26, 20, 68, 02, 62, 12, 20, 95, 63, 94, 39, 63, 08, 40, 91, 66, 49, 94, 21 ],
        [24, 55, 58, 05, 66, 73, 99, 26, 97, 17, 78, 78, 96, 83, 14, 88, 34, 89, 63, 72 ],
        [21, 36, 23, 09, 75, 00, 76, 44, 20, 45, 35, 14, 00, 61, 33, 97, 34, 31, 33, 95 ],
        [78, 17, 53, 28, 22, 75, 31, 67, 15, 94, 03, 80, 04, 62, 16, 14, 09, 53, 56, 92 ],
        [16, 39, 05, 42, 96, 35, 31, 47, 55, 58, 88, 24, 00, 17, 54, 24, 36, 29, 85, 57 ],
        [86, 56, 00, 48, 35, 71, 89, 07, 05, 44, 44, 37, 44, 60, 21, 58, 51, 54, 17, 58 ],
        [19, 80, 81, 68, 05, 94, 47, 69, 28, 73, 92, 13, 86, 52, 17, 77, 04, 89, 55, 40 ],
        [04, 52, 08, 83, 97, 35, 99, 16, 07, 97, 57, 32, 16, 26, 26, 79, 33, 27, 98, 66 ],
        [88, 36, 68, 87, 57, 62, 20, 72, 03, 46, 33, 67, 46, 55, 12, 32, 63, 93, 53, 69 ],
        [04, 42, 16, 73, 38, 25, 39, 11, 24, 94, 72, 18, 08, 46, 29, 32, 40, 62, 76, 36 ],
        [20, 69, 36, 41, 72, 30, 23, 88, 34, 62, 99, 69, 82, 67, 59, 85, 74, 04, 36, 16 ],
        [20, 73, 35, 29, 78, 31, 90, 01, 74, 31, 49, 71, 48, 86, 81, 16, 23, 57, 05, 54 ],
        [01, 70, 54, 71, 83, 51, 54, 69, 16, 92, 33, 48, 61, 43, 52, 01, 89, 19, 67, 48 ],
    ] ;

    grid = grid.length > 0 ? grid : constGrid;

    if (!(grid.filter(row => row.length === grid.length).length === grid.length)) throw new Error("Not a square grid");
    if (grid.length < numOfFactors) throw new Error ("grid to small/number of factors to large");

    let largestProd = 0;
    let horz, vert, diagR, diagL;
    let curNums = [];
    numOfFactors -= 1;

    for (let x = 0; x < grid.length; x++){
        for (let y = 0; y < grid[x].length; y++){
            curNums = [];
            horz = 0;
            vert = 0;
            diagR = 0;
            diagL = 0;

            if (!!(grid[x][y+numOfFactors])){
                horz = grid[x].slice(y, y+numOfFactors).reduce((acc, num) => acc * num);
                largestProd = horz > largestProd ? horz : largestProd;
            }

            if (!!(grid[x+numOfFactors])){
                for(let i = 0; i <= numOfFactors; i++){
                    curNums.push(grid[x+i][y]);
                }
                vert = curNums.reduce((acc, num) => acc * num);
                largestProd = vert > largestProd ? vert : largestProd;
                curNums = [];
            }

            if (!!(grid[x][y+3]) && !!(grid[x+numOfFactors])){
                for(let i = 0; i <= numOfFactors; i++){
                    curNums.push(grid[x+i][y+i]);
                }
                diagR = curNums.reduce((acc, num) => acc * num);
                largestProd = diagR > largestProd ? diagR : largestProd;
                curNums = [];
            }

            if (!!(grid[x][y-3]) && !!(grid[x+numOfFactors])){
                for(let i = 0; i <= numOfFactors; i++){
                    curNums.push(grid[x+i][y-i]);
                }
                diagR = curNums.reduce((acc, num) => acc * num);
                largestProd = diagR > largestProd ? diagR : largestProd;
                curNums = [];
            }
        }
    }

    return largestProd;

}

