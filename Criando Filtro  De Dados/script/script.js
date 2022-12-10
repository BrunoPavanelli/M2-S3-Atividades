const data = [
  {
    name: 'Hotel Cancun',
    country: 'México',
    price: 250,
    isOpen: true,
    toBook: [
      {
        date: '24/05/2023',
        isAvaliable: true,
      },
      {
        date: '30/07/2023',
        isAvaliable: false,
      },
      {
        date: '04/01/2024',
        isAvaliable: true,
      },
    ],
  },
  {
    name: 'Pousada do Zé',
    country: 'Brasil',
    price: 130,
    isOpen: true,
    toBook: [
      {
        date: '17/03/2023',
        isAvaliable: false,
      },
      {
        date: '10/05/2023',
        isAvaliable: false,
      },
      {
        date: '21/06/2024',
        isAvaliable: false,
      },
    ],
  },
  {
    name: 'Copacabana Palace',
    country: 'Brasil',
    price: 350,
    isOpen: false,
    toBook: [
      {
        date: '15/01/2023',
        isAvaliable: true,
      },
      {
        date: '04/02/2023',
        isAvaliable: true,
      },
      {
        date: '09/08/2024',
        isAvaliable: false,
      },
    ],
  },
  {
    name: 'Empire Hotel',
    country: 'Estados Unidos',
    price: 400,
    isOpen: false,
    toBook: [
      {
        date: '31/12/2022',
        isAvaliable: false,
      },
      {
        date: '04/02/2023',
        isAvaliable: false,
      },
      {
        date: '29/07/2024',
        isAvaliable: false,
      },
    ],
  },
];


//Desenvolva sua lógica aqui utlizando o método de array filter e verifique o resultado no console do seu navegador.

//1) Crie uma função para filtrar os hotéis que estão localizados no Brasil
function filterCountry(array) {
  const hotelsInBrazil = array.filter((obj) => obj.country === 'Brasil')
  return newArray; 
}
console.log('Filtrando Hoteis no Brasil')
console.log(filterCountry(data));

// 2) Crie uma função para filtrar os hotéis que possuem o preço igual ou maior que R$200,00.
function filterPrice(array) {
  const filterHotelByPrice = array.filter((obj) => obj.price >= 200)
  return filterHotelByPrice;
}
console.log('Filtrando Hoteis por Preço')
console.log(filterPrice(data));

//3) Crie uma função para filtrar os hotéis que estão abertos nesse momento (isOpen)
function filterIsOpen(array) {
  const filterOpenHotels = array.filter((obj) => obj.isOpen)
  return filterOpenHotels;
}
console.log('Filtrando Hoteis Abertos')
console.log(filterIsOpen(data));

//DESAFIO
//4) Crie uma função que filtre apenas o hotel com o nome “Copacabana Palace”. Após isso, crie outra função para verificar as datas disponíveis para agendamento nesse hotel (isAvaliable).
function filterHotelName(array) {
  const filterHotelByName = array.filter((obj) => obj.name === 'Hotel Cancun')
  return filterHotelByName;
}

function filterToBook() {
  const hotel = filterHotelName(data);
  const hotelToBook = hotel[0].toBook
  const dates = hotelToBook.filter((obj) => obj.isAvaliable)
  return dates;
}
console.log('Retornando Datas do Hotel Cancun')
console.log(filterToBook());
