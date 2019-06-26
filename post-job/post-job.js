
$("#postForm").submit(function(e){
    e.preventDefault()
    
    // Get input Value
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
        method:"POST",
        url: `http://localhost:3000/jobs`,
        data: posting
    })
    .done(function(data){
        window.location = "../admin/admin.html"
        
    })
 

    
})