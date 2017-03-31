$(document).ready(function() {
    $('#dataTables-example').DataTable({
        responsive: true
    });

       $('.pagar-factura').click(function () {

        $("#modal-pagar-factura").modal("show");
            var totalTD = $(this).parents('tr').find('td.td-total-pagar');
            var spanTotal = totalTD.find('span.span-total-pagar');
            var spanTotalValor = spanTotal.text();
            var badgeTotal = '$';
                badgeTotal += spanTotalValor;
            $(".badge-total").text(badgeTotal);

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

   $(".delete-fact-ico").click(function (){
    $(this).parents('tr').addClass("deleted");
    $("#smallModal").modal("show");
    });
});