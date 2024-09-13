let pedido = [];

document.querySelectorAll(".pedir").forEach(function(button) {
button.addEventListener("click", function() {
    var dataId = this.getAttribute("data-id");

    pedido.push(dataId);

    console.log("Item adicionado ao pedido" + dataId)
    console.log("Itens do pedido até agora:" + pedido.join(", "));

    let pedidoFormatado = "https://wa.me/5512992560838?text=Itens%20do%20meu%20pedido:%20" + pedido.map(item =>encodeURIComponent(item)).join(", ");

    document.getElementById('meuPedido').setAttribute("href", pedidoFormatado);
}); 
});