function procuraSobremesa(valorDoInput) {

    const valorDoInputInLowerCase = valorDoInput.toLowerCase()

    const newArray = listaDeSobremesas.filter(el => el.nome.toLowerCase().includes(valorDoInputInLowerCase))

    return newArray
}