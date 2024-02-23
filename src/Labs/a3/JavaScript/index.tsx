import ArrayIndexAndLength from "./arrays/ArrayIndexAndLength";
import WorkingWithArrays from "./arrays/WorkingWithArrays";
import IfElse from "./conditionals/IfElse";
import TerneryOperator from "./conditionals/TerneryOperator";
import ArrowFunctions from "./functions/ArrowFunctions";
import ES5Functions from "./functions/ES5Functions";
import FunctionDestructing from "./functions/FunctionDestructing";
import FunctionParenthesisAndParameters from "./functions/FunctionParenthesesAndParameters";
import ImpliedReturn from "./functions/ImpliedReturn";
import WorkingWithFunctions from "./functions/WorkingWithFunctions";
import Destructing from "./json/Destructing";
import House from "./json/House";
import JsonStringify from "./json/JsonStringify";
import Spreading from "./json/Spreading";
import TemplateLiterals from "./string/TemplateLiterals";
import BooleanVariables from "./variables/BooleanVariables";
import VariableTypes from "./variables/VariableTypes";
import VariablesAndConstants
  from "./variables/VariablesAndConstants";

function JavaScript() {
    console.log('Hello World!');
    return(
       <div>
          <h1>JavaScript</h1>
          <VariablesAndConstants/>
          <VariableTypes/>
          <BooleanVariables/>
          <IfElse/>
          <TerneryOperator/>
          <WorkingWithFunctions/>
          <WorkingWithArrays/>
          <TemplateLiterals/>
          <House/>
          <Spreading/>
          <Destructing/>
          <FunctionDestructing/>
       </div>
    );
 }
 export default JavaScript