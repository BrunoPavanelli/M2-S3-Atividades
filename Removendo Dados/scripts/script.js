function removeDoCarrinho(produto) {
    let produtoIndex = listaDoCarrinho.findIndex(function(element) {
        if (element.id === produto.id) {
            return element
        }
    })
    let produtoRemoved = listaDoCarrinho.splice(produtoIndex,1)
    console.log(produtoRemoved)
    return produtoRemoved
}