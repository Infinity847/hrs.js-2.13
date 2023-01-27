var Answer = "";
var SpeechResult = "";
var KeyPressCode = 0;
var s_width = screen.width;
var s_height = screen.height;
var Bot$Utterances = [];
var Bot$Responses = [];
var Bot$Alternatives = [];
var Bot$EventType = '=';
var $$ConfigBot = false;
var player$latitude = 0;
var player$longitude = 0;
var SpeechRecog$Link = '';
var AJAX$Link = '';
var AJAX$Result = '';
function $Import(module) {
if (module == 'WebSocket') {
return {
    GetSocket:function(port,protocall) {
return new WebSocket(port,protocall);
    }
}
}else if(module == 'ChatBot') {
return {
    AddUtterance: function(item) {
        Bot$Utterances.push(item);
        },
        AddResponse: function(item) {
            Bot$Responses.push(item);
            },
            AddAlternative: function(item) {
                Bot$Alternatives.push(item);
                },
                GiveResult:  function(item) {
                    if (Bot$Alternatives.length==0||Bot$Responses.length==0||Bot$Utterances.length==0) {
                    if (Bot$Utterances.length==0) {
        console.error(`
        Error: There are no utterances
        `);
                    }
                    if (Bot$Responses.length == 0) {
                        console.error(`
        Error: There are no responses
        `);
                    }
                    if (Bot$Alternatives.length == 0) {
                        console.error(`
        Error: There are no alternatives
        `);
                    }
                }else {
                    $$ConfigBot=false;
                    for (i=0;i<Bot$Utterances.length;i++) {
                        if ($$ConfigBot == false){
        if (Bot$EventType == '=') {
        if (item == Bot$Utterances[i]) {
            $$ConfigBot = true;
            return Bot$Responses[i];
        }
        }else {
            if (item.includes(Bot$Utterances[i])) {
                $$ConfigBot = true;
                return Bot$Responses[i];
            }  
        }
        }
                }
                    if (!($$ConfigBot)){
                //Alternative
                return Bot$Alternatives[parseInt(Math.random())*parseInt(Bot$Alternatives.length)];
                    }
                }
                },
                EventType:function(item) {
                    Bot$EventType = item;
                    }
}
}else if(module=='AJAX') {
return {
    GetLinkData:function(link) {
     AJAX$net.open("GET",link);
     } ,ChangeAJAXlink:function(item) {
         AJAX$Link = item;
         }
 }
}else {
    console.error(`
    Use a real module
    1. Check if your spelling is incorrect
    `);
}
}

const AJAX$net = new XMLHttpRequest();
AJAX$net.onload = function() {
AJAX$Result = this.responseText;
if (AJAX$Link = '') {}else {
document.getElementById(AJAX$Link).click();
}
}

function $ChangeAJAXlink(item) {
AJAX$Link = item;
}
console.log(`
HRSCRIPT VERSION 2.13

    HRSCRIPT 2

`);
var recognition = new window.webkitSpeechRecognition; var content = "";
function $ChangeSRlink(item) {
SpeechRecog$Link = item;
}

recognition.onresult = function(e)
{

content = e.results[0][0].transcript;
SpeechResult = content;
console.log(SpeechResult);
if (SpeechRecog$Link == '') {
}else {
    document.getElementById(SpeechRecog$Link).click();
}
}
function $DocPrint(printvalue) {
document.write(printvalue);
}
function $ImgPrint(id,image) {
document.write("<img src = '" + image + "' id = '" + id + "'>");
}
function Const$DocPrint(printvalue,times) {
    for (i = 1; i < times + 1; i++) {
        document.write(printvalue);
    }
}
function $WindowModal(text) {
    window.alert(text);
}
function $Button(id,text,pushwidget) {
document.write("<button onclick = '" + pushwidget + "()' id = '" + id + "'>" + text + "</button>");
}
function None() {
    
}
function $SpaceDown() {
    document.write("<br>");
}
function $OpenCenter() {
    document.write("<center>");
}
function $CloseCenter() {
    document.write("</center>");
}
function $WindowInputModal(desc,placeholder) {
Answer = prompt(desc,placeholder);
}
function $SpeechRecog() {
    recognition.start();
}
function $SpeechRecogButton() {
    document.write("<button onclick = '" + "$SpeechRecog" + "()' id = '" + "SRbtn" + "'>" + "&#127908;" + "</button>");
}
function $TTS(text) 
{
  const sound = new SpeechSynthesisUtterance(text);
  sound.rate = 1;
  sound.volume = 1;
  speechSynthesis.speak(sound);
}
function $Style(id,csscode) {
document.getElementById(id).style = csscode;
}
function $InnerHTML(id,text) {
document.getElementById(id).innerHTML = text;
}
function $Label(id,text) {
document.write("<p id = '" + id + "'>" + text + "</p>");
}
document.onkeydown = function(event) {
    KeyPressCode = event.keyCode;
}
function $DetectKeyCode(event) {
    KeyPressCode = event.keyCode;
}
function $SetLocalStorage(key,value) {
localStorage.setItem(key,value);
}
function $ClickElement(id) {
document.getElementById(id).click();
}
function $LocatePlayer() {
    try {
        navigator.geolocation.getCurrentPosition(GetLocate);
      } catch {

      }
}
function GetLocate(position) {
    player$latitude = position.coords.latitude;
    player$longitude = position.coords.longitude;
  }
  function $Add(n1,n2) {
return parseInt(n1) + parseInt(n2);
  }
  function $Subtract(n1,n2) {
    return parseInt(n1) - parseInt(n2);
      }
      function $Divide(n1,n2) {
        return parseInt(n1) / parseInt(n2);
          }
          function $Multiply(n1,n2) {
            return parseInt(n1) * parseInt(n2);
              }
function $Input(id,ph) {
document.write("<input id = '" + id + "' placeholder = '" + ph + "'>");
}
function $Value(id) {
    return document.getElementById(id).value;
}
function $OpenDiv(id) {
document.write("<div id = '" + id + "'>");
}
function $CloseDiv() {
    document.write("</div>");
}
