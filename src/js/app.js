$(document).ready(function() {
    var files = {'png':21}, container = $('#image-list');
    for (var ext in files)
    {
        for (var i = 0; i < files[ext]; i++)
        {
            var src = "assets/images/testimonial-images/" + (i+1) + "."+ext ;
            var img = $('<img src="'+src+'"/>'); 
            container.append($('<li/>').html($('<a/>', {'href':'#'}).html(img)));
        }
    }
}); 

