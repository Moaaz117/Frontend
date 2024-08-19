import React, { useState, useEffect } from 'react';

function Modal({ name, description, numara, onSave, onClose }) {
  const [ad, setAd] = useState('');
  const [aciklama, setAciklama] = useState('');
  const [telefonNumarasi, setTelefonNumarasi] = useState('');

  useEffect(() => {
    setAd(name);
    setAciklama(description);
    setTelefonNumarasi(numara); // Initialize numara state
  }, [name, description, numara]);

  const handleSave = () => {
    const formattedNumara = telefonNumarasi.replace(/\D/g, ''); // Sadece rakamları tut
    if (formattedNumara.length !== 10) {
      alert("Lütfen geçerli bir telefon numarası girin (10 haneli olmalı).");
      return;
    }
    onSave(ad, aciklama, formattedNumara); // Numara da kaydedilir
    onClose(); // Popup kapatılır
  };

  const formatPhoneNumber = (value) => {
    if (!value) return value;
    const phoneNumber = value.replace(/\D/g, ''); // Tüm harf dışı karakterleri kaldır
    const phoneNumberLength = phoneNumber.length;

    if (phoneNumberLength < 4) return phoneNumber;
    if (phoneNumberLength < 7) {
      return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3)}`;
    }
    return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3, 6)}-${phoneNumber.slice(6, 10)}`;
  };

  const handlePhoneChange = (e) => {
    const formattedPhoneNumber = formatPhoneNumber(e.target.value);
    setTelefonNumarasi(formattedPhoneNumber);
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>{name ? 'Bilgileri Düzenle' : 'Yeni Bilgi Ekle'}</h2>
        <input
          type="text"
          value={ad}
          onChange={(e) => setAd(e.target.value)}
          placeholder="Ad"
        />
        <input
          type="text"
          value={aciklama}
          onChange={(e) => setAciklama(e.target.value)}
          placeholder="Açıklama"
        />
        <input
          type="tel"
          value={telefonNumarasi}
          onChange={handlePhoneChange}
          placeholder="(555) 555-5555"
          maxLength={14} // Maksimum 14 karakter (telefon formatı için)
        />
        <div className="modal-buttons">
          <button onClick={onClose}>İptal</button>
          <button onClick={handleSave}>Kaydet</button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
