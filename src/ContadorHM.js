import React, { useState } from 'react';

const App = () => {
  const [totalCount, setTotalCount] = useState(0);
  const [manCount, setManCount] = useState(0);
  const [womanCount, setWomanCount] = useState(0);

  const updateDisplay = () => {
    
  };

  const resetCounters = () => {
    setTotalCount(0);
    setManCount(0);
    setWomanCount(0);
  };

  const incrementMan = () => {
    setManCount(manCount + 1);
    setTotalCount(totalCount + 1);
  };

  const decrementMan = () => {
    if (manCount > 0) {
      setManCount(manCount - 1);
      setTotalCount(totalCount - 1);
    }
  };

  const incrementWoman = () => {
    setWomanCount(womanCount + 1);
    setTotalCount(totalCount + 1);
  };

  const decrementWoman = () => {
    if (womanCount > 0) {
      setWomanCount(womanCount - 1);
      setTotalCount(totalCount - 1);
    }
  };

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      margin: '0',
      backgroundColor: '#f0f0f0',
    }}>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: '#fff',
        padding: '40px',
        borderRadius: '10px',
        boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
        width: '300px',
        marginTop: '50px',
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          width: '100%',
          fontFamily: 'Arial, sans-serif',
        }}>
          <h1 style={{ margin: '0' }}>Total</h1>
          <button onClick={resetCounters} style={{
            fontSize: '24px',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            marginLeft: '100px'
          }}>
            &#x21bb;
          </button>
        </div>
        <input type="text" value={totalCount} readOnly style={{
          textAlign: 'center',
          fontSize: '24px',
          margin: '10px 0',
          width: '100px',
          height: '40px',
          border: '1px solid #000',
          borderRadius: '5px',
          backgroundColor: '#f9f9f9',
        }} />
        
        <div style={{
          display: 'flex',
          justifyContent: 'space-around',
          width: '100%',
        }}>
          {/* Seção de homens */}
          <PersonSection 
            label="Homens" 
            count={manCount} 
            increment={incrementMan} 
            decrement={decrementMan} 
            imageSrc="../Atividade6/perfil2.png" 
          />
          
          {/* Seção de mulheres */}
          <PersonSection 
            label="Mulheres" 
            count={womanCount} 
            increment={incrementWoman} 
            decrement={decrementWoman} 
            imageSrc="../Atividade6/perfil.png" 
          />
        </div>
      </div>
    </div>
  );
};

const PersonSection = ({ label, count, increment, decrement, imageSrc }) => (
  <div style={{
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    fontFamily: 'Arial, sans-serif',
  }}>
    <img src={imageSrc} alt={label} style={{ width: '80px', height: '80px' }} />
    <div style={{
      display: 'flex',
      gap: '10px',
      marginTop: '10px',
    }}>
      <button onClick={increment} style={{
        fontSize: '24px',
        width: '50px',
        height: '50px',
        backgroundColor: '#9ACD32',
        color: 'white',
        border: 'none',
        borderRadius: '50%',
        cursor: 'pointer',
      }}>+</button>
      <button onClick={decrement} style={{
        fontSize: '24px',
        width: '40px',
        height: '40px',
        backgroundColor: '#f44336',
        color: 'white',
        border: 'none',
        borderRadius: '50%',
        cursor: 'pointer',
      }}>-</button>
    </div>
    <h3>{label}</h3>
    <input type="text" value={count} readOnly style={{
      textAlign: 'center',
      fontSize: '24px',
      width: '100px',
      height: '40px',
      border: '1px solid #000',
      borderRadius: '5px',
      backgroundColor: '#f9f9f9',
    }} />
  </div>
);

export default App;
