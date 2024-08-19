import { useState } from 'react';
import Modal from './Modal';
const Books = ({ book }) => {
	const [show, setShow] = useState(false);
	const [bookItem, setItem] = useState();
	return (
		<>
			{
				book.map((item) => {
					let thumbnail = item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;

					if (thumbnail != undefined) {
						return (
							<>
								<div className="book" onClick={() => { setShow(true); setItem(item) }}>
									<img src={thumbnail} alt="" />
								</div>
								<Modal show={show} item={bookItem} onClose={() => setShow(false)} />
							</>
						)
					}
				})
			}
		</>
	)}
export default Books;