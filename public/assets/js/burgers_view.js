$(function() {
    $(".eatBurger").on("click", function(event) {
        
        var id = $(this).data("id");
        var devoured = parseInt($(this).data("devoured"));
        var newDevoured;
        if(devoured === 0){
            newDevoured = 1;
        } else{
            newDevoured = 0;
        };
        var devObj = {
            devoured : newDevoured
        }
        // Send the PUT request.
        
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: devObj
        }).then(function() {
                // console.log("changed devoured status");
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });

    $(".create-form").on("submit", function(event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();

        var newBurger = {
            name: $("#new-burger").val().trim()
        };

        // Send the POST request.
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function() {
            // console.log("created new burger");
            // Reload the page to get the updated list
            location.reload();
            }
        );
    });

    $(".del-burger").on("click", function(event) {
        var id = $(this).data("id");

        // Send the DELETE request.
        $.ajax("/api/burgers/" + id, {
            type: "DELETE"
        }).then(
            function() {
            // console.log("deleted burger", id);
            // Reload the page to get the updated list
            location.reload();
            }
        );
    });
});
