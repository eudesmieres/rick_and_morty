
const validation = (userData) => {
   let errors = {};

   if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(userData.username)){
      errors.username = "El email no es correcto";
   }
   if(!userData.username){
    errors.username = "El nombre de usuario no puede estar vacío";
   }
   if(userData.username.length > 35){
    errors.username = "No puede tener más de 35 caracteres";
   }
   if(!userData.password.match(/\d/)){
    errors.password = "La contraseña tiene que tener al menos un número";
   }
   if(userData.password.length < 6 || userData.password.length > 10){
    errors.password = "La contraseña tiene que tener una longitud entre 6 y 10 caracteres"
   }
   return errors;
}


export default validation;