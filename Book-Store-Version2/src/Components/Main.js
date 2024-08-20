import React, { useState } from "react";
import Card from "./Card.js";
import axios from "axios";
const Main = () => {
	const [search, setSearch] = useState("");
	const [bookData, setData] = useState([]);
	const [mod, setMod] = useState(false);
	const searchBook = (evt) => {
		if (evt.key === "Enter") {
			axios.get('https://www.googleapis.com/books/v1/volumes?q=' + search + '&key=AIzaSyB-sxF0Y_T6SHi13r94X1wd6T0r29j3LZA' + '&maxResults=40')
				.then(res => setData(res.data.items))
				.catch(err => console.log(err))
		}
	}
	return (
		<>
			<div className={mod ? "dark-mod" : "light-mod"}>
				<div className="header">
					<div className="row1">
						<h1>Kitaplar da dostlar gibi az fakat iyi seçilmiş olmalıdır.</h1>
					</div>
					<div className="row2">
						<button className="mod-btn" onClick={() => setMod(!mod)}>
							{mod ? "Light Mode" : "Dark Mode"}
						</button>
						<h2>Aranacak Kitap</h2>
						<div className="search">
							<input type="text" placeholder="Kitap Adı"
								value={search} onChange={e => setSearch(e.target.value)}
								onKeyPress={searchBook} />
							<button><i className="fas fa-search"></i></button>
						</div>
						<img src="./images/bg2.png" alt="" />
					</div>
				</div>

				<div className="container">
					{
						<Card book={bookData} />
					}
				</div>
			</div>
		</>
	)
}
export default Main;