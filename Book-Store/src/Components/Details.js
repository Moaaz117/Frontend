import { useState } from 'react';

const Details = ({ book }) => {



  let number = 0;

  console.log(book);

  return (
    <>
      {
        book.map((item, index) => {
          // Her kitabın verilerini alıyoruz
          let thumbnail = item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;
          let amount = item.saleInfo.listPrice && item.saleInfo.listPrice.amount;

          // Eğer kitap başlığı ve fiyat varsa, numarayı artır ve render et
          if (item.volumeInfo.title !== undefined) {
            number++; // Her kitap için number'ı artırıyoruz

            return (
              <div key={index}>
                <hr />
                <div className="details">
                  <h3>{number}</h3>
                  <h3>{item.volumeInfo.title}</h3>
                  <h3>{item.volumeInfo.authors}</h3>
                </div>
              </div>
            )
          }
          return null; // Eğer başlık veya fiyat yoksa null döndür
        })
      }
    </>
  )
}

export default Details;
