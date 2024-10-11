import React from 'react';

const Task05 = () => {

const initSearch = {
    text: '',
    priceMin: '',
    priceMax: '',
}

const [form, setForm] = useState(initSearch)

function handleChange(e) {
    const value = e.target.value
    const name = e.target.value
    setForm((state) => {
      return {
        ...state,    
        [name]: value, 
      }   
    })
}

function handleSubmit () {

}

    return (
        <>
            <h1>Task05</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Fraza</label>
                    <input name="text" value={form.text} onChange={handleChange}/> 
                </div>
                <div>
                    <label>Cena minimalna</label>
                    <input name="priceMin" value={form.priceMin} /> 
                </div>
                <div>
                    <label>Cena maksymalna</label>
                    <input name="priceMax" value={form.priceMax} /> 
                </div>
                <div><input type="submit"/></div>
            </form>
        </>
    );
}

export default Task05;

