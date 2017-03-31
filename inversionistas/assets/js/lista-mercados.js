$(document).ready(function() {
    $('#dataTables-example').DataTable({
        responsive: true
    });

    $(".detalle-comprador").click(function(){
        var nombreClienteTD = $(this).parents('tr').find('td.td-nombre-cliente');
        var nombreClienteSpan = nombreClienteTD.find('span.nombre-cliente').text();
        $("#nombre-cliente-h4").text(nombreClienteSpan);
        $("#client-detail-modal").modal("show");

    });

    $("#eliminar-factura").click(function(){
        var table = $("#dataTables-example");
        $("#eliminar-factura-exitosa").slideDown();
            setTimeout(function(){
            $("#smallModal").modal("hide");
            }, 3000)
        var row = table.find("tr.deleted");
        row.fadeOut(500);
    });

});