$(document).ready(function () {
    index.init();
})
index = {
    init: function () {
        $("#btn_more").click(function () {
            $("#moreModal").modal("show");
        })
    }
}