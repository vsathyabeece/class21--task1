var div=document.createElement("div");
div.style.textAlign="center";
var input=document.createElement("input");
input.setAttribute("type","text");
input.setAttribute("id","word");
input.setAttribute("placeholder","Ex:hello");

var button=document.createElement("button");
button.setAttribute("type","button");
button.innerHTML="Search";
button.classList.add("btn","btn-primary");
button.style.marginLeft="5px";
button.addEventListener("click",foo);

let active=document.createElement("div");
active.setAttribute("id","active");


div.append(input,button,active);
document.body.append(div);
async function foo(){
    let res=document.getElementById("word").value;
   console.log(res);
   
    let url=`https://api.dictionaryapi.dev/api/v2/entries/en/${res}`;
   
   let res1=await fetch(url);
    let res2=await res1.json();
    
    console.log(res2);
        console.log(res2[0].phonetics[0].audio);
        console.log(res2[0].phonetics[0].text);
        console.log(res2[0].meanings[0].synonyms[0]);
        console.log(res2[0].sourceUrls[0]);
        active.innerHTML=`<p>Synonyms: ${res2[0].meanings[0].synonyms[0]}</P>
   <p> Phonetics :${res2[0].phonetics[0].text}</p>
   <p>Phonetics Audio: ${res2[0].phonetics[0].audio}</P>
   <p>Source URL:${res2[0].sourceUrls[0]}</p>`;   

}
foo();