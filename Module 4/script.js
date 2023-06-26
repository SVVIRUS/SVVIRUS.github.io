var Firstnames = new Array();
Firstnames[0] = "Yaakov";
Firstnames[1] = "John";
Firstnames[2] = "Jen";
Firstnames[3] = "jason";
Firstnames[4] = "paul";
Firstnames[5] = "frank";
Firstnames[6] = "larry";
Firstnames[7] = "paula";
Firstnames[8] = "laura";
Firstnames[0] = "jim";

for (var i = 0;i < Firstnames.length;i++) {
    if(Firstnames[i].charAt(0)==='J'||Firstnames[i].charAt(0)==='j'){
        console.log("Goodbye " + Firstnames[i])
    }
    else{
        console.log("Hello " +Firstnames[i])
    }
}