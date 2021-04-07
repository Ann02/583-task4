function checkAge(){
    let age = prompt('How old are you');
    if (isNaN(age) || age == NaN) {
        alert('The field is empty! Please enter your age');
    }else( age < 14 );{
        alert('You are underage!');
    }
    return age;
}
try{       
    let result = checkAge();
    console.log(result);
} catch (error) {
    console.log(error.name);
    console.log(error.message);
    console.log(error.stack);

    }

checkAge();
