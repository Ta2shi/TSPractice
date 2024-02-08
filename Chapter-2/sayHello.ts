/**
 * string型しか受け取らない関数の定義
 * @param firstName 
 */
function sayHello (firstName: string) {
    console.log('hello' + firstName)
}

let firstName: string = 'Ta2shi'
sayHello(firstName)