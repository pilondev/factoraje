$(document).ready(function() {
    $('#dataTables-example').DataTable({
        responsive: true
    });

    $(".delete-fact-ico").click(function (){
        $(this).parents('tr').addClass("deleted");
        $("#smallModal").modal("show");
    });

    $('.edit-fact-ico').click(function () {
        var currentTD = $(this).parents('tr').find('td.td-porcentaje-fact');
        var spanPorcentaje = currentTD.find('span.porcentaje-editable');
        spanPorcentaje.prop("contenteditable", true);
        $(spanPorcentaje).keypress(function (event) {
            return /\d/.test(String.fromCharCode(event.keyCode));
        });
    });

    $("#eliminar-factura").click(function(){
        var table = $("#dataTables-example");
        var row = table.find("tr.deleted");
        $("#smallModal").modal("hide");
        row.fadeOut(500);
    });
});