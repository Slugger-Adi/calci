let input = document.getElementById('display');
let str = '';
const handleClick = (value) => {
    if(value == '=') {
        try{
            str = eval(input.value);
        }
        catch {
            str = 'Invalid Result';
        }
    }
    else if(value == 'AC'){
        str = '';
    }
    else if(value == 'Del'){
        str = str.slice(0,str.length-1);
    }
    else{
        str +=  `${value}`;
    }
    input.value = str;
}

