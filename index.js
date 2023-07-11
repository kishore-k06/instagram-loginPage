$(".btn").click(function(){
    console.log("Logged in");

    $("input[type=text]").each(function() {
        $(this).val("");
    });   
    $("input[type=password]").each(function() {
        $(this).val("");
    }); 
});

$(".btn").keydown(function(){
    console.log("Logged in");

    $("input[type=text]").each(function() {
        $(this).val("");
    });   
    $("input[type=password]").each(function() {
        $(this).val("");
    }); 
});