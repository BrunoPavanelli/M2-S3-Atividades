// Utilizando o array dentro do método freeze, que literalmente congela os dados
// Métodos de alteração de array como push, pop, shift não funcionarão nesses arrays
// Métodos de iteração como map, some, forEach, filter funcionam normalmente

// Base de dados de usuários
const usuarios = Object.freeze([
    {
      id: 1,
      nome: "Samuel Persuhn",
      stacks: ["JavaScript", "PostgreSQL", "Node.js"],
      idade: 26,
      endereco: {},
      password: "51686aaasd2",
      email: "samu@kenzie.com",
    },
    {
      id: 2,
      nome: "Patrick Nekel",
      stacks: ["JavaScript", "MongoDB", "Python"],
      idade: 22,
      endereco: {},
      password: "supersenha123548",
      email: "patrick@kenzie.com",
    },
    {
      id: 3,
      nome: "Samuel Leão",
      stacks: ["HTML5", "CSS3", "React.js"],
      idade: 28,
      endereco: {},
      password: "hash*asdasda7788",
      email: "samueleao@kenzie.com",
    },
    {
      id: 4,
      nome: "Danrley",
      stacks: ["VideoMaker", "Effects", "Roteirista"],
      idade: 30,
      endereco: {},
      password: "889977",
      email: "danrley@kenzie.com",
    },
  ]);
  
  // Base de dados de endereços
  const enderecos = Object.freeze([
    {
      id: 1,
      userId: 2,
      endereco: {
        rua: "Avenida São Paulo",
        bairro: "Centro",
        zipCode: "45687-000",
        cidade: "São Paulo",
        estado: "São Paulo",
      },
    },
    {
      id: 2,
      userId: 1,
      endereco: {
        rua: "Rua Quitino",
        bairro: "Nações",
        zipCode: "78120-000",
        cidade: "Blumenau",
        estado: "Santa Catarina",
      },
    },
    {
      id: 3,
      userId: 4,
      endereco: {
        rua: "Rua do videomaker",
        bairro: "Hollywood",
        zipCode: "44744-000",
        cidade: "Hollywood",
        estado: "Los Angeles",
      },
    },
    {
      id: 4,
      userId: 3,
      endereco: {
        rua: "Avenida Brasil",
        bairro: "Centro",
        zipCode: "4587-000",
        cidade: "Natal",
        estado: "Rio Grande do Norte",
      },
    },
  ]);
  
  //Adicionar endereços aos usuarios pelo id
  
  function addAddresToUser(array1, array2) {

    const onlyAddress = array1.map(usersData => array2.find(userAddress => usersData.id === userAddress.userId
    )).map(address => address.endereco)

    const userWithAddress = [...array1]
    userWithAddress.map((usersData, index) => usersData.endereco = onlyAddress[index])
    
    return userWithAddress
  }
  console.log('Users Complete Datas:')
  const usersData = addAddresToUser(usuarios, enderecos)
  console.log(usersData)
  
  //funcao para deletar o password
  
  function deletePassword(object) {
    // const onlyPasswords = array.map(usersData => {
    //   const { password, ...rest } = usersData
    //   return rest
    // })
    // const { password } = array
    delete object.password
    return object
  }
 
  function listUsers(array) {
    const userPublicData = array.map(usersData => deletePassword(usersData))

    return userPublicData
  }
  
  const usersPublicData = listUsers(usersData)
  console.log('Users Public Data')
  console.log(usersPublicData)

  //listar somente nome, email e stack
  function listUserStacks(array) {
    const usersNecessaryData = array.map(usersData => {
      let {email, nome, stacks} = usersData
      return {email, nome, stacks}
    })

    return usersNecessaryData
  }

  console.log('Users Necessary Data')
  console.log(listUserStacks(usersData))
  
  //deletar um usuário que tenha python na stack
  
  function deleteUser(array) {
    const nullishingUserWithPythonStack = array.map(usersData => {
      if (usersData.stacks.includes('Python')) {
        return null
      }
      return usersData
    })
    const usersStacksWithOutPython = nullishingUserWithPythonStack.filter(usersData => usersData !== null)
    return usersStacksWithOutPython
  }

  console.log('Users that not use Python')
  console.log(deleteUser(usersData))