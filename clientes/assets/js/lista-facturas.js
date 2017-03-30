$('.pagar-factura').click(function () {

    $("#modal-pagar-factura").modal("show");
        var totalTD = $(this).parents('tr').find('td.td-total-pagar');
        var spanTotal = totalTD.find('span.span-total-pagar');
        var spanTotalValor = spanTotal.text();
        var badgeTotal = '$';
            badgeTotal += spanTotalValor;
        $(".badge-total").text(badgeTotal);

});