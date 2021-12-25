const voters3 = [
    { name: "Bob", age: 30, voted: true },
    { name: "Jake", age: 32, voted: true },
    { name: "Kate", age: 25, voted: false },
    { name: "Sam", age: 20, voted: false },
    { name: "Phil", age: 21, voted: true },
    { name: "Ed", age: 55, voted: true },
    { name: "Tami", age: 54, voted: true },
    { name: "Mary", age: 31, voted: false },
    { name: "Becky", age: 43, voted: false },
    { name: "Joey", age: 41, voted: true },
    { name: "Jeff", age: 30, voted: true },
    { name: "Zack", age: 19, voted: false },
  ];
  
  function voterResults(arr) {
    const obj3 = {};
    arr.reduce((acc, value) => {
      if (value.age >= 19 && value.age <= 25) {
        if (obj3.numYoungPeople == undefined) {
          obj3.numYoungPeople = 1;
        } else {
          obj3.numYoungPeople++;
        }
      }
  
      if (value.age >= 19 && value.age <= 25 && value.voted == true) {
        if (obj3.numYoungVotes == undefined) {
          obj3.numYoungVotes = 1;
        } else {
          obj3.numYoungVotes++;
        }
      }
    });
  
    console.log(obj3);
  }
  
  voterResults(voters3);