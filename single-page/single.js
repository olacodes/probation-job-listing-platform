

$.ajax({
    method:"GET",
    url: `http://localhost:3000/jobs/${localStorage.getItem("jobId")}`
})
.done(function(data){
    $(".contain").html(`
    <div class="card card-body">
    <div class="job-header card card-body">
        <h5 class="pb-2">${data.company}</h5>
        <p>${data.title}</p>
        <p>${data.location}</p>
        <p>${data.category}</p>
    </div>
    <div class="job-summary card card-body">
        <h5 class="pb-2">Job Summary</h5>
        <p>${data.summary}</p>
    </div>
    <div class="job-description card card-body">
            <h4 class="pb-2">Job Description</h4>
            <p>
                ${data.description}
            </p>
        </div>
</div>
    `)
})