document.getElementById('choose').addEventListener('change', function(event) {
    var file = event.target.files[0];
    if (file) {
        var reader = new FileReader();
        reader.onload = function(e) {
            document.querySelector('.image').style.backgroundImage = 'url(' + e.target.result + ')';
        };
        reader.readAsDataURL(file);
    }
});
