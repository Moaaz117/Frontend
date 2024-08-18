import React, { useState } from 'react';
import SearchBar from './SearchBar';
import Number from './Number';

function App() {
  const [components, setComponents] = useState([]);
  const [numbers, setNumbers] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  const addComponent = () => {
    setComponents([...components, <Ekle key={components.length} onSave={handleSave} onDelete={() => removeComponent(components.length)} />]);
  };

  const handleSave = (ad, soyad) => {
    setNumbers([...numbers, { ad, soyad }]);
  };

  const removeComponent = (index) => {
    setComponents(components.filter((_, i) => i !== index));
  };

  const removeNumber = (index) => {
    setNumbers(numbers.filter((_, i) => i !== index));
  };

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredNumbers = numbers.filter(number =>
    number.ad.toLowerCase().includes(searchQuery.toLowerCase()) ||
    number.soyad.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className='container'>
      <div className="App">
        <div className='App-header'>
          <SearchBar onSearch={handleSearch} onAdd={addComponent} />
        </div>
        {components}
        <div className="Number-list">
          {filteredNumbers.map((number, index) => (
            <Number
              key={index}
              name={number.ad}
              description={number.soyad}
              onDelete={() => removeNumber(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

class Ekle extends React.Component {
  constructor(props) {
    super(props);
    this.state = { visible: true };
    this.handleCancel = this.handleCancel.bind(this);
    this.handleSave = this.handleSave.bind(this);
  }

  handleCancel() {
    this.setState({ visible: false });
  }

  handleSave() {
    this.props.onSave(this.adInput.value, this.soyadInput.value);
    this.setState({ visible: false });
  }

  render() {
    if (!this.state.visible) return null;

    return (
      <div className="Ekle-space">
        <div className="inputs">
          <input ref={(input) => this.adInput = input} className='Ad-input' placeholder='Ad ve Soyad' />
          <input ref={(input) => this.soyadInput = input} className='Soyad-input' placeholder='Açıklama' />
        </div>
        <div className='input-tuslar'>
          <button onClick={this.handleCancel}>İptal</button>
          <button onClick={this.handleSave}>Kaydet</button>
        </div>
      </div>
    );
  }
}

export default App;
