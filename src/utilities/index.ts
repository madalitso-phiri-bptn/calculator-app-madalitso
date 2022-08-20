export enum Tokens {
  VALUE = "value",
  OPERATOR = "operator",
  DECIMAL = "decimal",
  BRACKET = "bracket",
}
export const identify_token = (value: string) => {
  switch (value) {
    case "+":
      return { value: "+", type: Tokens.OPERATOR };
    case "-":
      return { value: "-", type: Tokens.OPERATOR };
    case "÷" || "/":
      return { value: "/", type: Tokens.OPERATOR };
    case "*":
      return { value: "*", type: Tokens.OPERATOR };
    case "(":
      return { value, type: Tokens.BRACKET };
    case ")":
      return { value, type: Tokens.BRACKET };
    case ".":
      return { value, type: Tokens.DECIMAL };
    case value.match(/^[0-9]*$/)?.input:
      return { value, type: Tokens.VALUE };
    default:
      return false;
  }
};
export const vet_tokens = (current_input: string, new_char: string) => {
  const new_value_result = identify_token(new_char);
  const current_input_array = current_input.split("");
  const last_value_result =
    current_input_array.length >= 1
      ? identify_token(current_input_array[current_input_array.length - 1])
      : false;
  if (new_value_result) {
    if (new_value_result.type != Tokens.VALUE) {
      if (last_value_result) {
        if (last_value_result.type != new_value_result.type) {
          return true;
        }
      }
    }
    return true;
  } else {
    return false;
  }


};


/** __add
 * 
 * @param a string as it may be coming from a textfield 
 * @param b 
 * @returns sum of a and b
 */
 const __add = (a:string,b:string)=>(parseFloat(a)+parseFloat(b))

 /**__substract
  * find the difference of two numbers
  * 
  * @param a 
  * @param b 
  * @returns float the difference of two numbers
  */
 const __substract = (a:string,b:string)=>(parseFloat(a)-parseFloat(b))

 /** __divide 
  *  apply division operator on given numbers
  * @param a 
  * @param b 
  * @returns 
  */
 const __divide = (a:string,b:string)=>(parseFloat(a)/parseFloat(b))

 /**__multiply
  *  apply multiplication on math input
  * @param a 
  * @param b 
  * @returns {Number} resulting value of a*b 
  */
 const __multiply = (a:string,b:string)=>(parseFloat(a)*parseFloat(b))

 /** __fallBackHandler
  *  Called when you just want to return 0. This is a workaround for the scenario below
  * const result  = AppMathLib?[question[1]] ? AppMathLib[question[1]:any](question[0],question[2]) : parseFloat(question);
  * 
  * @param a 
  * @param b 
  * @returns 
  */
 const __fallBackHandler = (a:string,b:string)=>(parseFloat(a)*parseFloat(b))

//has method for easy access and automation
const AppMathLib :AppMathLibType= {
    "+":__add,
    "-":__substract,
    "/":__divide,
    "*":__multiply,
    undefined:__fallBackHandler
}

export default AppMathLib



type AppMathLibType = {
    [index:string]:(a:string,b:string)=>{}
}