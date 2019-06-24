$(function(){
    $.ajax({
        method:"GET",
        url: "http://localhost:3000/jobs?_limit=10"
    })
    .done(function(datas){
        let output = ""
        datas.forEach(data => {
            output+=`
            <a href="/admin-single/admin-single.html" class="single" id="${data.id}">
            <div class="top-each card card-body">               
            
                <h5>${data.company}</h5>
                <li>${data.title}</li>
                <li>${data.location}</li>
                <li>${data.category}</li>
        </div>
        </a>
        `
        });

        $(".top").html(output)

        $(".single").click(function(e){
            localStorage.setItem('jobId', this.id);
            console.log(localStorage.getItem('jobId'))
        });
        
    })
})