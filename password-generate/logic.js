let uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowercase = "abcdefghijklmnopqrstuvwxyz";
let digits = "0123456789";
let special = "!#$%&()*+-,./:;<=>?@[]^_`{|}~";

function generatePassword(length)
{

    let chk_uppercase = document.querySelector("#uppercase");
    let chk_lowercase = document.querySelector("#lowercase");
    let chk_number = document.querySelector("#number");
    let chk_symbol = document.querySelector("#symbol");

    let dictionary = "";

    if(chk_uppercase.checked)
    {
        dictionary += uppercase;
    }
    if(chk_lowercase.checked)
    {
        dictionary += lowercase;
    }
    if(chk_number.checked)
    {
        dictionary += digits;
    }
    if(chk_symbol.checked)
    {
        dictionary += special;
    }


    let password = "";
    if(chk_uppercase.checked || chk_lowercase.checked || chk_number.checked || chk_symbol.checked)
    {
        for(let i=0; i<length; i++)
        {
            const pos = Math.floor(Math.random() * dictionary.length);
            password += dictionary[pos];
        }
        document.querySelector("#txt").value = password;
    }
    else
    {
        alert("Please select option...!")
        document.querySelector("#txt").value = "";
    }

}

// logic for change the range value with updated length value

document.querySelector("#range").addEventListener("input",()=>{
    let range_val = document.querySelector("#range").value;
    document.querySelector(".length").innerHTML = range_val;
    // document.querySelector(".length").style.fontSize = `${range_val}px`;
});

// logic for text copied for clipboard

document.querySelector(".fa-copy").addEventListener("click",()=>{
    let text = document.querySelector("#txt").value;
    if(text == "")
    {
        alert("Please select option...!")
    }
    else
    {
        navigator.clipboard.writeText(text);
        document.querySelector("#alertbox").style.display = "block";
        setTimeout(()=>{
            document.querySelector("#alertbox").style.display = "none";
            // console.log("closed");
        },2500);
    }
});

document.querySelector("button").addEventListener("click",()=>{

    let range = document.querySelector("#range").value;

    generatePassword(range)

});