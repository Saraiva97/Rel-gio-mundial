import React, { useState, useEffect } from 'react';
import './RelogioMundial.css'; // Importando o arquivo CSS

function RelogioMundial() {
  const [timezones, setTimezones] = useState([
    { name: 'Nova York', offset: -5, color: '#ff4500' }, // Cor laranja
    { name: 'Londres', offset: 0, color: '#4682b4' }, // Cor azul aço
    { name: 'Tóquio', offset: 9, color: '#32cd32' }, // Cor verde limão
    { name: 'Sydney', offset: 10, color: '#800080' } // Cor roxa
  ]);

  const [showAddCardOptions, setShowAddCardOptions] = useState(false);

  const handleAddCard = (offset, name) => {
    if (timezones.length < 13) {
      // Gerando uma cor aleatória para o novo cartão
      const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
      setTimezones(prevTimezones => [...prevTimezones, { name, offset, color: randomColor }]);
    }
    setShowAddCardOptions(false);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setTimezones(prevTimezones =>
        prevTimezones.map(timezone => ({
          ...timezone,
          currentTime: new Date(Date.now() + timezone.offset * 3600 * 1000)
        }))
      );
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const remainingOptions = [
    { offset: 1, name: 'Adis Abeba (Ethiopia)' },
    { offset: -3, name: 'Bogotá (Colombia)' },
    { offset: -3, name: 'Brasília (Brazil)' },
    { offset: -3, name: 'Buenos Aires (Argentina)' },
    { offset: 5, name: 'Cairo (Egypt)' },
    { offset: 10, name: 'Canberra (Australia)' },
    { offset: 3.5, name: 'Carachi (Pakistan)' },
    { offset: 7, name: 'Daca (Bangladesh)' },
    { offset: -7, name: 'Denver (United States)' },
    { offset: -5, name: 'Detroit (United States)' },
    { offset: -4, name: 'El Salvador (El Salvador)' },
    { offset: 3, name: 'Estonia (Estonia)' },
    { offset: 9, name: 'Colombo (Sri Lanka)' },
    { offset: 3, name: 'Fiji (Fiji)' },
    { offset: 5, name: 'Gaza (Palestine)' },
    { offset: 8, name: 'Pequim (China)' },
    { offset: 1, name: 'Iran (Iran)' },
    { offset: 2, name: 'Jamaica (Jamaica)' },
    { offset: -6, name: 'Kathmandu (Nepal)' },
    { offset: -6, name: 'La Paz (Bolivia)' },
    { offset: -8, name: 'Los Angeles (United States)' },
    { offset: -5, name: 'Managua (Nicaragua)' },
    { offset: -4, name: 'Manaus (Brazil)' },
    { offset: 3, name: 'Moscou (Russia)' },
    { offset: -3, name: 'Nepal (Nepal)' },
    { offset: 5.75, name: 'Oman (Oman)' },
    { offset: -10, name: 'Honolulu (United States)' },
    { offset: -4, name: 'Panama (Panama)' },
    { offset: 2, name: 'Paris (France)' },
    { offset: 8, name: 'Vladivostok (Russia)' },
    { offset: -3, name: 'Qatar (Qatar)' },
    { offset: 3, name: 'Riyadh (Saudi Arabia)' },
    { offset: 1, name: 'Samara (Russia)' },
    { offset: 1, name: 'Warsaw (Poland)' },
    { offset: 3, name: 'Índia (India)' },
    { offset: -3, name: 'Tahiti (French Polynesia)' },
    { offset: 1, name: 'Berlim (Germany)' },
    { offset: 3, name: 'Cuba (Cuba)' },
    { offset: 1, name: 'Yerevan (Armenia)' },
    { offset: -3, name: 'Xangai (China)' },
    { offset: 9, name: 'Zâmbia (Zambia)' },
  ];
  
  
  // You can continue adding more cities if needed
  

  return (
    <div className="container">
      <h1>Relógio Mundial</h1>
      <div className="card-container">
        {timezones.map((timezone, index) => (
          <div className="card" key={index} style={{ backgroundColor: timezone.color }}>
            <strong>{timezone.name}: </strong>
            <span>{timezone.currentTime ? timezone.currentTime.toLocaleTimeString() : 'Carregando...'}</span>
          </div>
        ))}
        <div className="card add-card" onClick={() => setShowAddCardOptions(!showAddCardOptions)}>
          Adicionar Fuso Horário
          {showAddCardOptions && (
            <ul className="options">
              {remainingOptions.map((option, index) => (
                <li key={index} onClick={() => handleAddCard(option.offset, option.name)}>
                  {option.name}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}

export default RelogioMundial;   
