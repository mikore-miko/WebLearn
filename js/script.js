$(document).ready(function(){
    $('#myModal').on('show.bs.modal', function (e) {
        var button = $(e.relatedTarget);
        var modal = $(this);
        var youtube_src = $("#myModal iframe").attr("src");
        $("#myModal").on('hidden.bs.modal', function (e) {
            $("#myModal iframe").attr("src", null);
        });
        modal.find('iframe').attr('src', button.data("remote"));
    });
});