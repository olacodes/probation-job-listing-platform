$(function(){
    $.ajax({
        method: "GET",
        url: `http://localhost:3000/jobs`
    })
    .done(function(datas){
        let output = ""
        datas.forEach(data => {
        output +=`
        <a href="/single-page/single-page.html" class="single" id="${data.id}">
            <div class="wrap mb-2">
                <div class="job-header card card-body">
                    <h5>${data.company}</h5>
                    <li>${data.title}</li>
                    <li>${data.location}</li>
                    <li>${data.category}</li>
                </div>
                <div class="job-summary card card-body">
                    <i class="fa fa-star fa-3x"></i>
                    
                    <p>${data.summary}</p>
                </div>
            </div>
        </a>
        `
         
        });
        $('.contain').html(output)

        $(".single").click(function(e){
            localStorage.setItem('jobId', this.id);
        });
        
    })
})