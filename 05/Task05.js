import React from 'react';
import { Route, useParams, useHistory } from "react-router-dom"
import Shop from "../src/components/Shop"
import products from "./../src/products.json"

const SearchPage = () => {

    const {minPrice, maxPrice, searchTerm} = useParams()
    const minPriceNumber = Number(minPrice)
    const productsAfterMinPrice = products.filter(p => p.price >= Number(minPrice))

    return <p>{minPrice}, {maxPrice}, {searchTerm}</p>

}

const Task05 = () => {
	const initSearch = {
		text: "",
		priceMin: "",
		priceMax: "",
	}

	const [form, setForm] = useState(initSearch)
    const history = useHistory()

	function handleChange(e) {
		const value = e.target.value
		const name = e.target.name
		setForm(state => {
			return {
				...state,
				[name]: value,
			}
		})
	}

	function handleSubmit(e) {
        e.preventDefault()

        const { priceMin, priceMax, text } = form

        history.push(`/task05/${priceMin},${priceMax}-${text}`)
    }

	return (
		<>
			<h1>Task05</h1>
			<form onSubmit={handleSubmit}>
				<div>
					<label>Fraza</label>
					<input name='text' value={form.text} onChange={handleChange} />
				</div>
				<div>
					<label>Cena minimalna</label>
					<input
						name='priceMin'
						value={form.priceMin}
						onChange={handleChange}
					/>
				</div>
				<div>
					<label>Cena maksymalna</label>
					<input
						name='priceMax'
						value={form.priceMax}
						onChange={handleChange}
					/>
				</div>
				<div>
					<input type='submit' />
				</div>
			</form>

			<Route path='/task05/:minPrice?,:maxPrice?-:searchTerm?'>
				<SearchPage />
			</Route>
		</>
	)
}

export default Task05;

