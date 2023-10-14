const commandlist = {}
commandlist['help'] = `
help: print this message and exit
hello: greetings
hello -intro: introduction of PRON
show [image/project] [-Y/—year] year: show images/projects of the given year
member [-Y/—year]: member list of the year

exit: return to main website
`;
commandlist['start'] = `
`
commandlist['hello'] = `
<img src="images/logo.png">


hello!
This is shinsung high school computer&programming club <u>'PRON'</u>
<a href="https://www.youtube.com/@pronshinsung" target="_blank"><i class="fab fa-youtube"></i></a>  <a href="https://discord.gg/vrM2nKmS" target="_blank"><i class="fab fa-discord"></i></a>  <a href="https://www.instagram.com/shinsung.pron/" target="_blank"><i class="fab fa-instagram"></i></a>

`
commandlist['loli'] = `
<img src="images/loli.gif">


`

commandlist['hello -intro'] = `
hello!
`
commandlist['sudo -rm -rf ./*'] = `

`
commandlist['exit'] = `

`
commandlist['안동기'] = `
기장
`
let codelist = [];
codelist.push(`#include <stdio.h>
int main(void) {
    printf("Hello, World!");
    return 0;
}`);
codelist.push(`for(int i=1;i<10;i++){
    printf("%d\\n",i);
}`);
//codelist.push(``);



function changeme(){
    if(document.getElementById("finaltest").innerHTML.replace(/&nbsp;/gi," ").length < 120){
        if(event.keyCode != 32 && event.keyCode != 13){
            document.getElementById("finaltest").innerHTML += String.fromCharCode(event.keyCode);
        }
        document.getElementById("inputplace").value = "";
    }
    document.getElementById("jb-content").scrollLeft += 1000000;
    document.getElementById("inputplace").value = "";
    
    
}
let step = 0;
let gamestarted = false;
let nStart;
let nEnd;
let gamestep = 0;
let gametext;
let point = 0;
function commandoutput(command) {
    console.log(command);
    if(command == "exit" || command == "sudo -rm -rf ./*"){
        location.replace('index.html');
    }
    else if(command == "start") {
        nStart = new Date().getTime();
        //타자게임
        let textl = codelist[Math.floor(Math.random() * codelist.length)];
        //testl = textl.replace(/\\/gi,"|_");
        textl = textl.replace(/\n\n/gi,"&nbsp;");
        textl = textl.replace(/\\/gi,"\\");
        gametext = textl.split("\n");
        step = gametext.length;
        gamestarted = true;
        for(gamestep = 0;gamestep < step;gamestep++){
            gametext[gamestep] = gametext[gamestep].replace(/ /gi,"&nbsp;");
            gametext[gamestep] = gametext[gamestep].replace(/</gi,"&lt;");
            gametext[gamestep] = gametext[gamestep].replace(/>/gi,"&gt;");
        }
        gamestep = 0;
        document.getElementById("testfor").innerHTML = "<span style='color: #5184b3'>#</span><span id='finaltest'></span>"
        document.getElementById("textoutput").innerHTML += "<p>&nbsp;화면에 보이는 문장을 입력 후 엔터를 누르세요.</p>"
        document.getElementById("textoutput").innerHTML += "<p>&nbsp;"+gametext[gamestep]+"</p>"
        //nEnd =  new Date().getTime();
        //var nDiff = nEnd - nStart;
    }
    else{
        let text = commandlist[command];
        let count = 0;
        let prepos = 0;
        let pos = text.indexOf("\n");
        while (pos !== -1) {
            count++;
            document.getElementById("textoutput").innerHTML += "&nbsp;" + text.slice(prepos, pos) + "<br>";
            prepos = pos;
            pos = text.indexOf("\n", pos + 1);
        }
    }
    
    
}
function changeme2(){
    if(event.keyCode == 8){
        if(document.getElementById("finaltest").innerHTML.slice(-6) == "&nbsp;"){
            document.getElementById("finaltest").innerHTML = document.getElementById("finaltest").innerHTML.slice(0, -6);
        }
        else if(document.getElementById("finaltest").innerHTML.slice(-4) == "&lt;" || document.getElementById("finaltest").innerHTML.slice(-4) == "&gt;"){
            document.getElementById("finaltest").innerHTML = document.getElementById("finaltest").innerHTML.slice(0, -4);
        }
        else{
            document.getElementById("finaltest").innerHTML = document.getElementById("finaltest").innerHTML.slice(0, -1);
        }
        document.getElementById("jb-content").scrollLeft += 10000;
    }
    else if(event.keyCode == 32){
        if(document.getElementById("finaltest").innerHTML.replace(/&nbsp;/gi," ").length < 120){
            document.getElementById("finaltest").innerHTML += "&nbsp;";
            document.getElementById("inputplace").value = "";
            document.getElementById("jb-content").scrollLeft += 10000;
        }
    }
    else if(event.keyCode == 9){
        if(document.getElementById("finaltest").innerHTML.replace(/&nbsp;/gi," ").length < 120){
            event.preventDefault();
            document.getElementById("finaltest").innerHTML += "&nbsp;&nbsp;&nbsp;&nbsp;";
            document.getElementById("inputplace").value = "";
            document.getElementById("jb-content").scrollLeft += 10000;
        }
    }
    else if(event.keyCode == 13){
        
        if(gamestarted){ //타자게임 공간
            gamestep += 1;
            
            if(gamestep <= step){
                if(document.getElementById("finaltest").innerHTML == gametext[gamestep - 1]){
                    point += 500;
                    document.getElementById("textoutput").innerHTML += "<p style='color : #00f300'>&nbsp;" + document.getElementById("finaltest").innerHTML + "</p>";
                }
                else{
                    document.getElementById("textoutput").innerHTML += "<p style='color : #ef0000'>&nbsp;" + document.getElementById("finaltest").innerHTML + "</p>";
                }
                
            }
            if(gamestep < step){
                document.getElementById("textoutput").innerHTML += "<p>&nbsp;" + gametext[gamestep] + "</p>";
            }
            else{
                gamestarted = false;
                nEnd =  new Date().getTime();
                var nDiff = (nEnd - nStart) / 1000;
                alert(nDiff + "초 동안 " + point + "점 득점");
                document.getElementById("testfor").innerHTML = '<span style="color: #79cd30;">root@pron-pc</span>:~<span style="color: #5184b3">#</span>&nbsp;<span id="finaltest"></span>'
            }
            document.getElementById("finaltest").innerHTML = "";
            document.getElementById("inputplace").value = "";
            
        }
        else{ //명령어 처리 공간
            document.getElementById("textoutput").innerHTML += '<p><span style="color: #79cd30;">root@pron-pc</span>:~<span style="color: #5184b3">#</span>&nbsp;' + document.getElementById("finaltest").innerHTML + '</p>';
            let command = document.getElementById("finaltest").innerHTML;
            document.getElementById("finaltest").innerHTML = "";
            document.getElementById("inputplace").value = "";
            command = command.toLowerCase();
            command = command.replace(/&nbsp;/g, ' ');
            if(command in commandlist){
                commandoutput(command);
                
            }
            else{
                if(command !== ''){
                document.getElementById("textoutput").innerHTML += "&nbsp;&nbsp;command '" + command + "' is not valid" + "<br>";}
            }
        }
        
        document.getElementById("jb-content").scrollTop += 10000;
    }
    document.getElementById("inputplace").value = "";
    document.getElementById("jb-content").scrollLeft += 10000;
}

function byebye(){
    document.getElementById("inputplace").value = "";
}