function removeDoCarrinho(produto) {
    let produtoIndex = listaDoCarrinho.findIndex((element) => {
        if (element.id === produto.id) {
            return element
        }
    })
    let produtoRemoved = listaDoCarrinho.splice(produtoIndex,1)
    return produtoRemoved
}