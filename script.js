function calcGrade() {
    var hg = document.getElementById("gradeH").value;
    var cg = document.getElementById("gradeC").value;
    var tg = document.getElementById("gradeT").value;
    var pag = document.getElementById("gradePa").value;
    var pg = document.getElementById("gradeP").value;

    var hgNumArray = convertToNumArray(hg);
    var cgNumArray = convertToNumArray(cg);
    var tgNumArray = convertToNumArray(tg);
    var pagNumArray = convertToNumArray(pag);
    var pgNumArray = convertToNumArray(pg);

    var hgAvg = averageArray(hgNumArray);
    var cgAvg = averageArray(cgNumArray);
    var tgAvg = averageArray(tgNumArray);
    var pagAvg = averageArray(pagNumArray);
    var pgAvg = averageArray(pgNumArray);

    var hw = document.getElementById("weightH").value / 100;
    var cw = document.getElementById("weightC").value / 100;
    var tw = document.getElementById("weightT").value / 100;
    var paw = document.getElementById("weightPa").value / 100;
    var pw = document.getElementById("weightP").value / 100;
    var homework = hgAvg * hw;
    var classwork = cgAvg * cw;
    var tests = tgAvg * tw;
    var participation = pagAvg * paw;
    var projects = pgAvg * pw;

    var finalGrade =  homework + classwork + tests + participation + projects;
    var letterGrade = returnGrade(finalGrade);
    document.getElementById("grade").innerHTML = letterGrade;
    if((hw + cw + tw + paw + pw) != 1){
        alert("Weights Must Add Up To 100");
    }
}


function convertToNumArray(str) {
    var arr = str.split(",");
    for(var i = 0; i < arr.length; i++) {
        arr[i] = parseInt(arr[i]);
    }
    return arr;
}

function averageArray(arr) {
    var sum = 0;
    var aver = 0;
    for(var i=0; i< arr.length;i++) {
        sum = arr[i] + sum;
    }
    aver = sum / arr.length;
    return aver;
}

function returnGrade(aver) {
    if(aver <= 59){
        return "F";
    }
    if( 60 <= aver <= 69){
        return "D";
    }
    if(70 <= aver <= 79){
        return "C";
    }
    if(80 <= aver <= 89){
        return "B";
    }
    if(aver >= 90 ){
        return "A";
    }
}