$(function(){
    $("#sign-up").submit(function(e){
        e.preventDefault();
        // Get All The input values of the user
    
        let firstname = $("input[name='firstname']").val();
        let lastname = $("input[name='lastname']").val();
        let email = $("input[name='email']").val();
        let password = $("input[name='password']").val();
    
        let posting = {
            firstname: firstname,
            lastname: lastname,
            email: email,
            password: password
        }
    
        $.ajax({
            method: "POST",
            url: "http://localhost:3000/Admin",
            data: posting
        })
    
        .done(function(){
            window.alert("Sign up successfull you can now login");   
        })
    })
    
})

$(function(){
    $.ajax({
        method: "GET",
        url: `http://localhost:3000/Admin`
    })
    .done(function(admins){
        console.log(admins);
        
        $("#login").submit(function(e){
            e.preventDefault()
            let emailVal = $("input[name='email']").val();
            let passwordVal = $("input[name='password']").val();
    
            for (let i = 0; i < admins.length;) {
                let admin = admins[i];
    
    
                if (!admin.email == emailVal && admin.password == passwordVal) {
                 
                    window.alert("Incorrect password or email")
                    window.location = "/admin-login/admin-login.html"
                    i++
                
                }else{
                   
                    window.location = "/admin/admin.html"
                    window.alert("WELCOME BACK ADMIN")
                    break;
                    console.log(admin.password);
                }
                
            }
            
        })      
            
    })
     
})
