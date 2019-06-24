$(function(){
    $.ajax({
        method:"GET",
        url: "http://localhost:3000/jobs?_limit=6"
    })
    .done(function(data){
        let output = ""
        data.forEach(data => {
            output+=`
            <a href="/single-page/single-page.html" class="single" id="${data.id}">

            <div class="top-each card card-body">               
            <div class="top-jobs">
                <h5>${data.company}</h5>
                <li>${data.title}</li>
                <li>${data.location}</li>
                <li>${data.category} <span class="btn btn-sm" style="float: right">Read More</span></li>
            </div>
        </div>
        </a>
        `
        })
        
        $(".top").html(output)

        $(".single").click(function(e){
            localStorage.setItem('jobId', this.id);
            console.log(localStorage.getItem('jobId'))
        });
        
    })
})

$(".ict").click(function(){
    $.ajax({
        method:"GET",
        url: "http://localhost:3000/jobs?_limit=10"
    })
    .done(function(data){
        let output = ""
        $.each(data, function(i, data){
            output+=`
                <div class="top-each card card-body">               
                <div class="top-jobs">
                    <h5>${data.company}</h5>
                    <li>${data.title}</li>
                    <li>${data.location}</li>
                    <li>${data.category}</li>
                </div>
            </div>
        `
        })

        $(".all").html(output)
        
    })

})