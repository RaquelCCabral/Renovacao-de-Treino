import React from 'react'
import "./App.css"

const App = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const formDados = new FormData(event.target);
    const dados = Object.fromEntries(formDados);

    console.log(dados);
    document.getElementById('formulario').reset(); 
    alert('Solicitação enviada com sucesso!');
  };

  return (
    <div className ='box'>
      <form id = 'formulario' onSubmit = {handleSubmit}>
        <div className ='titulo'>
          <label>RENOVAÇÃO DE TREINO</label>
        </div>
        <label>Nome: </label>
        <input required type = 'text' className = 'text' name = 'nome'></input><br></br>
        <label>CPF: </label>
        <input required type = 'text' className = 'text' name = 'cpf' placeholder = '___.___.___-__' minLength ={'11'}></input><br></br>

        <label>Objetivo: </label>
        <select name = 'objetivo' className = 'objetivo'>
            <option>--</option>
            <option value = 'emagrecimento'>Emagrecer</option>
            <option value = 'definição e tonificação'>Definir músculos</option>
            <option value = 'hipertrofia'>Ganhar Massa Muscular</option>
            <option value = 'condicionamento'>Condicionamento Físico</option>
        </select><br></br>

        <div className ='radios'>
          <label>Tipo de Série: </label>
          <input className='radio' type = 'radio' value = 'ab' name = 'tipo de série' /> A/B
          <input className='radio' type = 'radio' value = 'abc' name = 'tipo de série' /> A/B/C
        </div>

        <div className ='centralizar'>
          <label>Comentários:</label><br></br>
          <textarea className ='textarea' name = 'comentários' placeholder ='Acrescente algum pedido se quiser'></textarea><br></br>
          <button className = 'submit' type = 'submit'>Enviar</button>
        </div>
      </form>
    </div>
  );
};

export default App;