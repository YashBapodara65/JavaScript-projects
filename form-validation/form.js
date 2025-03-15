let rusername = document.querySelector("#ruser");
let remail = document.querySelector("#reml");
let rpassword = document.querySelector("#rpwd");
let rcpassword = document.querySelector("#rcpwd");
let arr = [];

document.querySelector("#lbtn").addEventListener('click',()=>{
    document.querySelector("#signup-form-data").style.display = "block";
    document.querySelector("#signin-form-data").style.display = "none";
});

document.querySelector("#rbtn").addEventListener('click',()=>{
    document.querySelector("#signup-form-data").style.display = "none";
    document.querySelector("#signin-form-data").style.display = "block";
});

document.querySelector("#signup-form-data").addEventListener("submit",(e)=>{
    e.preventDefault();
    
    let isValid = true;
    document.querySelector("#ruserError").innerText = "";
    rusername.style.border = "1px solid black";
    document.querySelector("#remlError").innerText = "";
    remail.style.border = "1px solid black";
    document.querySelector("#rpwdError").innerText = "";
    rpassword.style.border = "1px solid black";
    document.querySelector("#rcpwdError").innerText = "";
    rcpassword.style.border = "1px solid black";
    
    if(rusername.value == "")
    {
        document.querySelector("#ruserError").innerText = "Username is required *";
        document.querySelector("#ruserError").style.color = "red";
        rusername.style.border = "1px solid red";
        isValid = false;
    }
    else if(rusername.value.length < 8 && rusername.value.length > 0)
    {
        document.querySelector("#ruserError").innerText = "Username in minimum 8 character *";
        document.querySelector("#ruserError").style.color = "red";    
        rusername.style.border = "1px solid red";
        isValid = false;
    }


    if(remail.value == "")
    {
        document.querySelector("#remlError").innerText = "Email is required *";
        document.querySelector("#remlError").style.color = "red";    
        remail.style.border = "1px solid red"; 
        isValid = false;
    }

    if(rpassword.value == "")
    {
        document.querySelector("#rpwdError").innerText = "Password is required *";
        document.querySelector("#rpwdError").style.color = "red";    
        rpassword.style.border = "1px solid red";
        isValid = false;
    }
    else if(rpassword.value.length < 8)
    {
        document.querySelector("#rpwdError").innerText = "Password in minimum 8 character *";
        document.querySelector("#rpwdError").style.color = "red";    
        rpassword.style.border = "1px solid red";
        isValid = false;
    }

    if(rpassword.value !== rcpassword.value)
    {
        document.querySelector("#rcpwdError").innerText = "Password does not match...!";
        document.querySelector("#rcpwdError").style.color = "red";
        rcpassword.style.border = "1px solid red";
        isValid = false;
    }
    
    if(isValid)
    {   
        let obj = {
            username : rusername.value,
            email : remail.value,
            password : rpassword.value,
            confirm_password : rcpassword.value,
        };
        
        arr.push(obj);

        Swal.fire({
            title: "Good job!",
            text: "Please proceed login page...!",
            icon: "success"
        }).then((res)=>{
            if(res.isConfirmed){
                // alert("s");
                document.querySelector("#signup-form-data").style.display = "none";
                document.querySelector("#signin-form-data").style.display = "block";
            }
            // else{
                // alert("e");
            // }

            document.querySelector("#ruser").value = "";
            document.querySelector("#reml").value = "";
            document.querySelector("#rpwd").value = "";
            document.querySelector("#rcpwd").value = "";
        });

    }

});

let lemail = document.querySelector("#leml");
let lpassword = document.querySelector("#lpwd");


document.querySelector("#signin-form-data").addEventListener("submit",(le)=>{
    le.preventDefault();
    
    let isValid = true;
    document.querySelector("#lemlError").innerText = "";
    lemail.style.border = "1px solid black";
    document.querySelector("#lpwdError").innerText = "";
    lpassword.style.border = "1px solid black";
    
    if(lemail.value == "")
    {
        document.querySelector("#lemlError").innerText = "Email is required *";
        document.querySelector("#lemlError").style.color = "red";    
        lemail.style.border = "1px solid red"; 
        isValid = false;
    }

    if(lpassword.value == "")
    {
        document.querySelector("#lpwdError").innerText = "Password is required *";
        document.querySelector("#lpwdError").style.color = "red";    
        lpassword.style.border = "1px solid red";
        isValid = false;
    }

    console.log(arr);

    let ans = arr.filter((el)=>{
        if(el.email == lemail.value && el.password == lpassword.value)
        {
            return el;
        }
    });

    if(ans.length > 0)
    {
        // alert("Login Successfull");
        Swal.fire({
            title: "Good job!",
            text: "You are successfully login in your account...!",
            icon: "success"
        });
    }
    else if(ans.length == 0)
    {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Email or password are does not matched...!",
            // footer: '<a href="#">Why do I have this issue?</a>'
        });
    }

    document.querySelector("#leml").value = "";
    document.querySelector("#lpwd").value = "";

});