module.exports = function toReadable (number) {
    if (number >= 1000) return -1;

    let num1 = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 
            'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 
            'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    let num2 = ['zero', "ten", "twenty", "thirty", "forty", 
            "fifty", "sixty", "seventy", "eighty", "ninety"]
    let num100 = "hundred"

    let str = ""
    
    if (number/100 >= 1 ) {
        str += num1[Math.floor(number/100)] + " " + num100 + " ";
    }

    let partNum = number - 100*Math.floor(number/100);

    if (partNum == 0 && str != ""){
        str = str.slice(0, str.length-1);
    }
    else if (partNum >= 0 && partNum<=19){
        str += num1[partNum];
    }
    else if (partNum%10==0){
        str += num2[partNum/10];
    }
    else {
        let tmp1 = partNum%10;
        let tmp2 = (partNum-tmp1)/10;
        str += num2[tmp2] + " " + num1[tmp1];
    }

    return str;
}
