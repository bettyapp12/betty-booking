import { useState } from 'react';

function App() {
  const [people, setPeople] = useState(2);
  const [name, setName] = useState('');
  const [restaurant, setRestaurant] = useState('');
  const [date, setDate] = useState('');
  const [hour, setHour] = useState('');

  const generateMessage = () => {
    return `Ciao! Vorrei prenotare un tavolo per *${people} persone* a nome di *${name}* nel ristorante *${restaurant}*, il giorno *${date}* alle *${hour}*.`;
  };

  const sendWhatsApp = () => {
    const message = generateMessage();
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/?text=${encodedMessage}`, '_blank');
  };

  return (
    <div style={{ maxWidth: '500px', margin: '60px auto', fontFamily: 'sans-serif' }}>
      <h1>Prenota con Betty</h1>
      <label>
        Quante persone?
        <input
          type="number"
          min="1"
          value={people}
          onChange={(e) => setPeople(e.target.value)}
        />
      </label>
      <br />
      <label>
        Nome per la prenotazione:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <br />
      <label>
        Ristorante:
        <input
          type="text"
          value={restaurant}
          onChange={(e) => setRestaurant(e.target.value)}
        />
      </label>
      <br />
      <label>
        Data:
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </label>
      <br />
      <label>
        Ora:
        <input
          type="time"
          value={hour}
          onChange={(e) => setHour(e.target.value)}
        />
      </label>
      <br />
      <button onClick={sendWhatsApp}>Invia su WhatsApp</button>
    </div>
  );
}

export default App;
