validate = () => {
  const errors = {
    firstName: "Emran",
  };
  if (errors.firstName.length < 3 && errors.firstName.length > 12) {
    errors.firstName = "First name must be between 3 and 12 letters";
  }
  return errors; // this is an object. so, it can be destructured!
};

console.log(validate().firstName); // Emran
const { firstName } = validate(); // firstName is destructured!
console.log(firstName); // Emran
