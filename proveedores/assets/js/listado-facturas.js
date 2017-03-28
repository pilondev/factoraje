$(document).ready(function() {
    $('#dataTables-example').DataTable({
        responsive: true
    });

    $(".delete-fact-ico").click(function (){
        $(this).parents('tr').addClass("deleted");
        $("#smallModal").modal("show");
    });

    $('.edit-fact-ico').click(function () {
        //Metodo para obtener los valores de los campos de fecha de pago y porcentaje
        //Setea los nuevos valores por los que selecciones y los pone actualizados en la tabla

        $("#edit-modal").modal("show");
        var dateTD = $(this).parents('tr').find('td.td-fecha-pago-fact');
        var dateEditableSpan = dateTD.find('span.date-editable');
        var dateEditable = dateTD.find('span.date-editable').text();
        $("#datepicker").val(dateEditable);
        var valorFecha = $("#datepicker").val(dateEditable);

        var currentTD = $(this).parents('tr').find('td.td-porcentaje-fact');
        var spanPorcentaje = currentTD.find('span.porcentaje-editable');
        var spanPorcentajeValor = spanPorcentaje.text();
        $("#ceder-porcentaje").val(spanPorcentajeValor);
        valorPorcentaje = $("#ceder-porcentaje").val(spanPorcentajeValor);

        $("#editar-factura").click(function(){

            $("#actualizacion-factura-exitosa").slideDown();
            setTimeout(function(){
                $("#edit-modal").modal("hide");;
            }, 3000)

            dateEditableSpan.text(valorFecha.val());
            spanPorcentaje.text(valorPorcentaje.val());
        });
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