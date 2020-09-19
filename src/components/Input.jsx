import React, { useState }from 'react';


const Input = ({handleSearch}) => {
        
    const [tagSearch, setTagSearch] = useState('')
    
    //Guarda lo que se escribe en el input en el estado
    const handleChange = (e) => {
    
        setTagSearch(e.target.value)
        
    }
    //Previene refrescar la pagina completa
    const handlerSubmit = (event) => {
        event.preventDefault()
    }

    //Previene busqueda vacia y manda el estado por props a traves de la funcion handleSearch
    const handleOnClick = () => {
      if(tagSearch !== ''){
        handleSearch(tagSearch.toLowerCase())
      }
    }
    return (
      <div className="nav"> 
          <div className="search-box">
            <form action="" onSubmit={handlerSubmit}>
              <input required className="search-txt" type="search" placeholder="Search" 
              onChange={handleChange} value={tagSearch}/>
              <button className="search-btn" onClick={handleOnClick} type="submit">
                <i className="fa fa-search"></i></button>
            </form>    
          </div>
      </div>
    );
  
}

export default Input;
