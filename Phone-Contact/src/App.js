import React, { useState } from 'react';
import SearchBar from './SearchBar';
import Number from './Number';
import Modal from './Modal'; // Modal for editing and adding

function App() {
  const [numbers, setNumbers] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [editingIndex, setEditingIndex] = useState(null); 
  const [currentNumber, setCurrentNumber] = useState({ ad: '', aciklama: '', numara: '' }); // Include numara

  const addComponent = () => {
    setCurrentNumber({ ad: '', aciklama: '', numara: '' }); // Reset the fields for new entry
    setIsAddModalOpen(true); // Open the Add modal
  };
  
  const handleSave = (ad, aciklama, numara) => {
    setNumbers([...numbers, { ad, aciklama, numara }]);
    setIsAddModalOpen(false); // Close the modal after saving
  };

  const removeNumber = (index) => {
    setNumbers(numbers.filter((_, i) => i !== index));
  };

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleChange = (index) => {
    setEditingIndex(index);
    setCurrentNumber(numbers[index]); // Set the data to be edited
    setIsEditModalOpen(true); // Open the Edit modal
  };

  const handleModalSave = (updatedAd, updatedAciklama, updatedNumara) => {
    const updatedNumbers = numbers.map((item, i) =>
      i === editingIndex ? { ad: updatedAd, aciklama: updatedAciklama, numara: updatedNumara } : item
    );
    setNumbers(updatedNumbers);
    setIsEditModalOpen(false);
  };

  const filteredNumbers = numbers.filter(number =>
    number.ad.toLowerCase().includes(searchQuery.toLowerCase()) ||
    number.aciklama.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className='container'>
      <div className="App">
        <div className='App-header'>
          <SearchBar onSearch={handleSearch} onAdd={addComponent} />
        </div>
        <div className="Number-list">
          {filteredNumbers.map((number, index) => (
            <Number
              key={index}
              name={number.ad}
              description={number.aciklama}
              numara={number.numara}
              onDelete={() => removeNumber(index)}
              onChange={() => handleChange(index)}
            />
          ))}
        </div>
      </div>

      {/* Add Modal */}
      {isAddModalOpen && (
        <Modal
          name={currentNumber.ad}
          description={currentNumber.aciklama}
          numara={currentNumber.numara}
          onSave={handleSave}
          onClose={() => setIsAddModalOpen(false)}
        />
      )}

      {/* Edit Modal */}
      {isEditModalOpen && (
        <Modal
          name={currentNumber.ad}
          description={currentNumber.aciklama}
          numara={currentNumber.numara}
          onSave={handleModalSave}
          onClose={() => setIsEditModalOpen(false)}
        />
      )}
    </div>
  );
}

export default App;
