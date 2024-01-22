try {
    console.log(taskin);
} catch (error) {
    console.log('this is error ' + error);
}


let age = 19;

try {
    if (age > 18) {
        console.log("your are older");
    }else{
        console.log('your too young');
    }
} catch (error) {
    console.log('this is error name ' + error);
}
