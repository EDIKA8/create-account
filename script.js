 function submitForm() {
    const name = document.getElementById('name').value;
    const surname = document.getElementById('surname').value;
    const age = document.getElementById('age').value;

    const person = {
      name: name,
      surname: surname,
      age: age
    };

    console.log("Submitted Info:", person);
  }