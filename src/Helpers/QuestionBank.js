export const Questions = [
    {
        prompt: `1.] Predict the output of Java Code:\n
class Main {
    public static void main(String[] args) {
        int a = 8, b = 24, c = 0 ;
        
        c = a + b + a++ + b++ + ++a + ++b ;
        System.out.println(c) ;
    }
}`,
        optionA: "85",
        optionB: "87",
        optionC: "97",
        optionD: "100",
        answer: "D",
    },
    {
        prompt: `2.] Predict the output of JS Code:\n
console.log("1") ;

const sample = () =>{
    console.log("2") ;
}

setTimeout(() =>{
    console.log("3") ;
}, 0) ;

console.log("4") ;
console.log("5") ;
sample() ;`,
        optionA: "1 4 5 2 3",
        optionB: "1 4 5 3 2",
        optionC: "1 2 3 4 5",
        optionD: "1 2 3 5 4",
        answer: "A",
    },
    {
        prompt: `3.] Predict the output of Python Code:\n
a = 16
b = 15
print(a % b // 1)`,
        optionA: "0.0",
        optionB: "0",
        optionC: "1.0",
        optionD: "1",
        answer: "D",
    },
    {
        prompt: `\n\n4.] Predict the output of JS Code:\n
const delay = (ms) => {
    return new Promise(resolve =>{
        setTimeout(() => {
            console.log("2") ;
        }, 0);
    }) ;
} ;

const userFunc = async () => {
    console.log("1") ;
    await delay(0) ;
    console.log("3") ;
} ;

userFunc() ;`,
        optionA: "1 2 3",
        optionB: "0 1 2",
        optionC: "0 1 2 3",
        optionD: "1 2",
        answer: "D",
    },
    {
        prompt: `5.] Predict the output of JS Code:\n\nconsole.log( 1 + + +"2" + +"3" + "4" ) ;`,
        optionA: "6",
        optionB: "9",
        optionC: "64",
        optionD: "10",
        answer: "C",
    },
    {
        prompt: `6.] Predict the output of JS Code:\n
let x = null == undefined ;
let y = null === undefined ;
console.log(x === y) ;`,
        optionA: "true",
        optionB: "false",
        optionC: "Error while assigning",
        optionD: "Error in console",
        answer: "B",
    },
    {
        prompt: `7.] Predict the output of JS Code:\n\nconsole.log(10 > 5 > 1) ;`,
        optionA: "true",
        optionB: "false",
        optionC: "undefined",
        optionD: "NaN",
        answer: "B",
    },
    {
        prompt: `8.] Predict the output of JS Code:\n
let arr = [1, 2, 3] ;
arr[5] = 5 ;
console.log(arr[4]) ;`,
        optionA: "ReferenceError",
        optionB: "empty",
        optionC: "undefined",
        optionD: "0",
        answer: "C",
    },
    {
        prompt: `9.] Predict the output of JS Code:\n
console.log([0] == '') ;
console.log([''] == 0) ;`,
        optionA: "true true",
        optionB: "false false",
        optionC: "true false",
        optionD: "false true",
        answer: "D",
    },
    {
        prompt: `10.] Predict the output of JS Code:\n\nconsole.log("b" + "a" + + "a" + "a") ;`,
        optionA: "baa",
        optionB: "baaa",
        optionC: "baNaNa",
        optionD: "Error",
        answer: "C",
    },
    {
        prompt: `11.] Predict the output of JS Code:\n
let [x, ...y] = [1, 2, 3, 4, 5] ;
console.log(y[x]) ;`,
        optionA: "1",
        optionB: "2",
        optionC: "3",
        optionD: "4",
        answer: "C",
    },
    {
        prompt: `12.] Predict the output of JS Code:\n
(function(){
    var a = b = 0 ;
})() ;

console.log(typeof a) ;
console.log(typeof b) ;`,
        optionA: "undefined undefined",
        optionB: "number undefined",
        optionC: "undefined number",
        optionD: "number number",
        answer: "C",
    },
    {
        prompt: `13.] Predict the output of Python Code:\n
l = list("1234") ;
l[0] = l[1] = 5 ;
print(l) ;`,
        optionA: "['5', '5', '3', '4']",
        optionB: "[5, 5, '3', '4']",
        optionC: "[5, 5, 3, 4]",
        optionD: "Error",
        answer: "B",
    },
    {
        prompt: `14.] Predict the output of JS Code:\n
const multipyAsync = (x) => Promise.resolve(x * 2) ;

const asyncFunc = async () => {
    const result = await multipyAsync(3) ;
    return result ;
} ;

asyncFunc().then(value => console.log(value)) ;`,
        optionA: "Error",
        optionB: "undefined",
        optionC: "6",
        optionD: "Promise object",
        answer: "C",
    },
    {
        prompt: `15.] Predict the output of JS Code:\n
const obj = { a: 1, b: {c: {d: 2 } } } ;
const { b: { c: { d: value } } } = obj ;

console.log(value) ;`,
        optionA: "undefined",
        optionB: "{ c: { d: 2 } }",
        optionC: "1",
        optionD: "2",
        answer: "D",
    },
    {
        prompt: `16.] Predict the output of JS Code:\n
let num = 9 ;

if(num === 9){
    let num = 7 ;
    console.log(num) ;
}

console.log(num) ;`,
        optionA: "9 7",
        optionB: "7 9",
        optionC: "7 undefined",
        optionD: "Error",
        answer: "B",
    },
    {
        prompt: `17.] Predict the output of JS Code:\n
const a = [1, 2, 3, 4, 5] ;
a.length = 3 ;

console.log(a) ;`,
        optionA: "[ 1, 2, 3 ]",
        optionB: "[ 1, 2, 3, 4 ]",
        optionC: "[ 0, 1, 2 ]",
        optionD: "Error",
        answer: "A",
    },
    {
    prompt: `\n\n18.] Predict the output of JS Code:\n
function userFunc() {
    try{
        throw new Error("My Error") ;
    }
    catch(e){
        return "Caught" ;
    }
    finally{
        return "Finally" ;
    }
}

console.log(userFunc()) ;
// Hint: A function can return only one thing`,
        optionA: "My Error",
        optionB: "Caught",
        optionC: "Finally",
        optionD: "Error in return",
        answer: "C",
    },
    {
        prompt: `19.] Predict the output of Python Code:\n
result = bool('10') * 2
print(result)`,
        optionA: "0",
        optionB: "2",
        optionC: "20",
        optionD: "Error",
        answer: "B",
    },
    {
        prompt: `20.] Predict the output of Java Code:\n
public class Main {
    public static void main(String[] args) {
        String str1 = "Java" ;
        String str2 = new String("Java") ;

        if (str1 == str2) {
            System.out.println("Equal") ;
        }
        else {
            System.out.println("Not Equal") ;
        }
    }
}`,
        optionA: "Equal",
        optionB: "Not Equal",
        optionC: "Compilation Error",
        optionD: "Runtime Error",
        answer: "B",
    },
] ;
