class Person {
    first; //class field member or PROPERTY
    last; //class field member or PROPERTY
    constructor(first, last) {
      this.first = first; //this refers to the instance of the object!
      this.last = last;
    }
  }
  
  let person = new Person("Ron", "Swanson");
  console.log(person.first + " " + person.last);


  class MyClass {
    first = "Karol";
    last = "M";   
    speak() {
        console.log("heyyy");
    };

  }

  let myperson = new MyClass(); //creating a myperson object
  console.log(myperson.first);
  myperson.speak();
