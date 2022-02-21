
import {useState} from 'react';
function App() {
  const [calc, setCalc] = useState("");
  const [resultado,setResultado] = useState("");


  const ops =['/','*','+','-','.'];

  const atualizarCalc = value =>{
    if(
      ops.includes(value) && calc === '' ||
      ops.includes(value) && ops.includes(calc.slice(-1)
    )
    )
    { 
      return;
    }

    
      setCalc(calc + value);
      if(!ops.includes(value)){
        setResultado(eval(calc + value).toString());
      }
       
  }


    const criarDigitos = () =>{
      const digitos = [];
      for (let i = 1; i < 10; i++){
        digitos.push(
        <button
         onClick={()=> atualizarCalc(i.toString())}
         botao ={i}>{i}
         </button>
        )
      }
    
      return digitos;

}
  const calcular = () =>{
    setCalc(eval(calc).toString());
  }

    const deletar = () =>{
      if(calc ==''){
        return;
      } else{
        const value = calc.slice(-1, -1);
        setCalc(value);
      }
    }
  return (
    <div className="App">
     <div className="calculadora">
       <div className="visor">
         {resultado ? <span>({resultado})</span> : '' }
         {calc || "0"}
         
         <div className="operadores">
          <button onClick={()=> atualizarCalc('/')}>/</button>
          <button onClick={()=> atualizarCalc('*')}>*</button>
          <button onClick={()=> atualizarCalc('+')}>+</button>
          <button onClick={()=> atualizarCalc('-')}>-</button>
          <button onClick={deletar}>Del</button>
          </div>
    <div className="digitos">
      {criarDigitos()}
    <button onClick={()=> atualizarCalc('-')}>-</button>
    <button onClick={()=> atualizarCalc('0')}>0</button>
    <button onClick={()=> atualizarCalc('.')}>.</button>
    <button onClick={calcular}>=</button>
    </div>
    </div>
    </div>
         </div>
         
         
  );
  }

export default App;
