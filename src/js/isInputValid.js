/* isInputValid should be applied to all inputs on our signup form
This validator uses a switch with a case derived from the object passed.
***Case is determined by step and should be checked if the main app steps are altered.
*/

const isInputValid = (step, state) => {
  let regex;
  // let validationMessage = ``;
  switch (step) {
    case 0:
      regex = /^[a-zA-Z]*$/gm;
      if (
        state.nameFirst &&
        state.nameLast &&
        state.nameLast.match(regex) &&
        state.nameFirst.match(regex)
      )
        return true;
      else
        alert(`Please Enter a Valid First and Last Name)
      ex: John Snow`);
      break;
    case 1:
      regex = /^([0-9a-zA-Z]([-.\w]*[0-9a-zA-Z])*@(([0-9a-zA-Z])+([-\w]*[0-9a-zA-Z])*\.)+[a-zA-Z]{2,9})$/;
      if (
        state.email &&
        state.email.includes("@") &&
        state.email.includes(".") &&
        state.email.match(regex)
      )
        return true;
      else alert(`Invalid Email - Example@email.com my.email@aol.com`);

      break;
    case 2:
      regex = /\d{5,20}/;
      if (state.phone.match(regex)) return true;
      else
        alert(
          `Invalid Phone - Digits Only Please! Length must be between 5 and 20`
        );

      break;
    case 3:
      if (state.salary) return true;
      else alert(`Please Choose a Salary Range`);
      break;
    default:
      return false;
  }
  // if(validationMessage !== ``)alert(validationMessage);
};

module.exports = isInputValid;

/* Original Function written in app class before export. 
Notice use of this.state.. */

// _validate(key) {
//     let regex, validationMessage;
//     switch (key) {
//       case 0:
//         regex = /^[a-zA-Z]*$/gm;
//         if (
//           this.state.nameFirst &&
//           this.state.nameLast &&
//           this.state.nameLast.match(regex) &&
//           this.state.nameFirst.match(regex)
//         )
//           return true;
//         else validationMessage = `Please Enter a Valid First and Last Name`;
//         break;
//       case 1:
//         regex = /^([0-9a-zA-Z]([-.\w]*[0-9a-zA-Z])*@(([0-9a-zA-Z])+([-\w]*[0-9a-zA-Z])*\.)+[a-zA-Z]{2,9})$/;
//         if (
//           this.state.email &&
//           this.state.email.includes("@") &&
//           this.state.email.includes(".")
//         )
//           return true;
//         else validationMessage = `Invalid Email - Must Contain @`;

//         break;
//       case 2:
//         regex = /\d{5,20}/;
//         if (this.state.phone.match(regex)) return true;
//         else
//           validationMessage = `Invalid Phone - Digits Only Please! Length must be between 5 and 20`;

//         break;
//       case 3:
//         if (this.state.salary) return true;
//         else validationMessage = `Please Choose a Salary Range`;
//         break;
//       default:
//         return false;
//     }
//     alert(validationMessage);
//   }
