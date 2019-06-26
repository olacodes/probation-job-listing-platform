$(function(){
    $.ajax({
        method:"DELETE",
        url:`http://localhost:3000/jobs/${localStorage.getItem("jobId")}`
    })
    .done(function(e){
        window.location = "../admin/admin.html"
    })
})