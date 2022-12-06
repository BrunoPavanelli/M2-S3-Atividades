const products = [
  {
    name: 'Camisa Polo',
    size: 'G',
    price: 90,
    sale: true,
  },
  {
    name: 'Casaco de Couro',
    size: 'M',
    price: 350,
    sale: true,
  },
  {
    name: 'Calça',
    size: 'GG',
    price: 80,
    sale: false,
  },
  {
    name: 'Jaqueta Jeans',
    size: 'P',
    price: 200,
    sale: false,
  },
  {
    name: 'Moletom',
    size: 'GG',
    price: 180,
    sale: false,
  },
  {
    name: 'Camisa Regata',
    size: 'M',
    price: 60,
    sale: true,
  },
];


//Desenvolva sua lógica aqui utlizando o método de array reduce e verifique o resultado no console do seu navegador.

//1) Vamos começar de uma maneira bem simples. Crie uma função que some todos os números contidos dentro do array [20, 13, 50, 36, 97].
const numbers = [20, 13, 50, 36, 97];

function sumNumbers(array) {
  const sumResult = numbers.reduce((acumulator, currentValue) => acumulator + currentValue, 0)
  return sumResult;
}
console.log('Soma dos numeros do array numbers')
console.log(sumNumbers(numbers));

//2) Agora utilizaremos o nosso array de produtos. Crie uma função que percorra todos os elementos desse array e retorne o valor total de todos os produtos do carrinho.
function totalProducts(array) {
  const sumPricesResult = array.reduce((acumulator, currentElement) => acumulator + currentElement.price, 0)
  return sumPricesResult;
}
console.log('Soma total dos preços dos produtos do Array products')
console.log(totalProducts(products));

//3) Vamos deixar mais interessante? Utilizando o nosso array products, crie uma função que filtre apenas os produtos com tamanho GG e retorne a soma dos preços desses produtos.
function totalProductsSize(array) {
  const arrayOfGGProducts = array.filter(element => element.size === 'GG')
  const sumGGPriceProducts = arrayOfGGProducts.reduce((acumulator, currentElement) => acumulator + currentElement.price, 0)
  return sumGGPriceProducts;
}
console.log('Soma total dos preços dos produtos tamanho GG do Array products')
console.log(totalProductsSize(products));

//DESAFIO
//4) Crie uma função que filtre os elementos em promoção e aplique 50% de desconto no preço deles. Após isso, some o valor total desses produtos.
function totalProductsSale(array) {
  const productsInSale = array.filter((element) => element.sale)
  productsInSale.forEach(element => {
    element.price -= (element.price/2)
  });
  const productsInSaleSumPrices = productsInSale.reduce((acumulator, currentElement) => acumulator + currentElement.price, 0)
  return productsInSaleSumPrices;
}
console.log('Soma total dos preços dos produtos em promoção de 50%   do Array products')
console.log(totalProductsSale(products));
