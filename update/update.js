$(function(){
    $.ajax({
        method: "GET",
        url:`http://localhost:3000/jobs/${localStorage.getItem("jobId")}`
    })
    .done(function(data){
        $("input[name='title']").val(data.title);
        $("input[name='company']").val(data.company);
        $("input[name='location']").val(data.location);
        $("input[name='locationId']").val(data.locationId);
        $("input[name='category']").val(data.category);
        $("input[name='categoryId']").val(data.categoryId);
        $("textarea[name='summary']").val(data.summary);
        $("textarea[name='description']").val(data.description);
    })
})

$("#updateForm").submit(function(e){
    e.preventDefault();
    let title = $("input[name='title']").val();
    let company = $("input[name='company']").val();
    let description = $("textarea[name='description']").val();
    let summary = $("textarea[name='summary']").val();
    let location = $("input[name='location']").val();
    let locationId = $("input[name='locationId']").val();
    let category = $("input[name='category']").val();
    let categoryId = $("input[name='categoryId']").val();

    var posting =  {
        title:title,
        company:company,
        description:description,
        summary:summary,
        location:location,
        locationId:locationId,
        category:category,
        categoryId:categoryId
    }


    $.ajax({
        method:"PUT",
        url: `http://localhost:3000/jobs/${localStorage.getItem("jobId")}`,
        data: posting
    })
    .done(function(e){
       
        window.location = "../admin-single/admin-single.html"
    })
})