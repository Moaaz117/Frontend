import React, { useState, useEffect } from "react";
import Books from "./Books";
import Details from "./Details";
import axios from "axios";
import './styles.css'; // CSS dosyanızı içe aktarın

const Main = () => {
	const [bookData, setData] = useState([]);
	const [mod, setMod] = useState(false);

	useEffect(() => {
		axios
			.get(
				'https://www.googleapis.com/books/v1/volumes?q=Programming&key=AIzaSyB-sxF0Y_T6SHi13r94X1wd6T0r29j3LZA' + '&maxResults=40'
			)
			.then((res) => {
				setData(res.data.items);
			})
			.catch((err) => console.log(err));
	}, []);

	return (
		<>
			<div className={mod ? "dark-mod" : "light-mod"}>
				<div className="header">
					<h1>Book Store</h1>
					<button onClick={() => setMod(!mod)}>
						{mod ? "Light Mode" : "Dark Mode"}
					</button>
				</div>
				<div className="books">
					{bookData.length > 0 ? (
						<Books book={bookData} />
					) : (
						<p>Loading popular books...</p>
					)}
				</div>
			</div>
			<div className={mod ? "dark-mod" : "light-mod"}>
				<div className="container">
					<Details book={bookData} />
				</div>
			</div>
		</>
	);
};

export default Main;
