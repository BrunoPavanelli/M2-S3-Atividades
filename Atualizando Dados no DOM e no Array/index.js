const students = [
  {
    name: "Camila",
    age: 40,
  },
  {
    name: "Carlos",
    age: 32,
  },
  {
    name: "Antonio",
    age: 24,
  },
  {
    name: "Luana",
    age: 36,
  },
];

const addNewStudentInDOM = (data) => {
  data.forEach((element) => { 
    document.body.insertAdjacentHTML("beforeend", `
    <div>
      <h3>${element.name}</h3>
      <small>${element.age}</small>
    </div>
    `)
  })
}

addNewStudentInDOM(students)

const newStudent = (newData, data) => {
  data.push(newData)
  addNewStudentInDOM([newData])
}

const samuel = {
  name: 'Samuel',
  age: 23
}

newStudent(samuel, students)

