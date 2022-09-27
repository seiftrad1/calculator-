import { useState } from "react";
import "./style.css";
export function Calculator() {
  const [expression, setExpression] = useState("");
  const [answer, setAnswer] = useState(0);
  const [ope, setOpe] = useState("");
  const display = (symbol) => {
    setExpression((prev) => prev + symbol);
    if (expression[expression.length - 1] === "=") {
      if (/[0-9.]/.test(symbol)) {
        setExpression(symbol);
      } else {
        setExpression(answer + symbol);
      }
    }
  };
  const calculate = () => {
    setAnswer(eval(expression));
    setExpression((prev) => prev + "=");
  };
  const handleOperator = (op) => {
    if (/[+-\/*]$/.test(expression)) {
      setOpe(op);
      setExpression(expression.replace(expression.length - 1 + ope));
      console.log(ope);
      console.log(expression.replace(expression.length - 1 + ope));
    } else if (expression === "") {
      return null;
    } else {
      setExpression(expression + "" + op + "");
    }
  };

  const allclear = () => {
    setExpression("0");
    setAnswer(0);
  };
  const clear = () => {
    setExpression((prev) =>
      prev
        .split("")
        .slice(0, prev.length - 1)
        .join("")
    );
    setAnswer(0);
  };

  return (
    <div className="container" id="drum-machine">
      <div className="grid">
        <div className=" dis" id="display">
          <input type="text" value={expression} placeholder="0" disabled />
          <div className="total">{answer}</div>
        </div>
        <div onClick={allclear} className="padButton AC tomato">
          AC
        </div>
        <div onClick={clear} id="clear" className="padButton C tomato">
          C
        </div>
        <div
          id="divide"
          onClick={() => handleOperator("/")}
          className="padButton div"
        >
          /
        </div>
        <div
          id="multiply"
          onClick={() => handleOperator("*")}
          className="padButton times"
        >
          x
        </div>
        <div
          onClick={() => display("7")}
          id="seven"
          className="padButton seven dark-grey"
        >
          7
        </div>
        <div
          onClick={() => display("8")}
          id="eight"
          className="padButton eight dark-grey"
        >
          8
        </div>
        <div
          onClick={() => display("9")}
          id="nine"
          className="padButton nine dark-grey"
        >
          9
        </div>
        <div
          id="subtract"
          onClick={() => handleOperator("-")}
          className="padButton minus"
        >
          -
        </div>
        <div
          onClick={() => display("4")}
          id="four"
          className="padButton four dark-grey"
        >
          4
        </div>
        <div
          onClick={() => display("5")}
          id="five"
          className="padButton five dark-grey"
        >
          5
        </div>
        <div
          onClick={() => display("6")}
          id="six"
          className="padButton six dark-grey"
        >
          6
        </div>
        <div
          id="add"
          onClick={() => handleOperator("+")}
          className="padButton plus"
        >
          +
        </div>
        <div
          onClick={() => display("1")}
          id="one"
          className="padButton one dark-grey"
        >
          1
        </div>
        <div
          onClick={() => display("2")}
          id="two"
          className="padButton two dark-grey"
        >
          2
        </div>
        <div
          onClick={() => display("3")}
          id="three"
          className="padButton three dark-grey"
        >
          3
        </div>
        <div
          onClick={() => display("0")}
          id="zero"
          className="padButton zero dark-grey"
        >
          0
        </div>
        <div onClick={calculate} id="equals" className="padButton equal blue">
          =
        </div>
        <div
          id="decimal"
          onClick={() => display(".")}
          className="padButton dot dark-grey"
        >
          .
        </div>
      </div>
    </div>
  );
}
