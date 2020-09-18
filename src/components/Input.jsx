import React, { useState }from 'react';


const Input = ({handleSearch}) => {
        
    const [tagSearch, setTagSearch] = useState('')
    
    const handleChange = (e) => {
    
        setTagSearch(e.target.value)
        
    }

    const handlerSubmit = (event) => {
        event.preventDefault()
        if(event.target.value === ''){
          alert('Search tag must not be blank!')
        }
    }

    const handleOnClick = () => {
      if(tagSearch !== ''){
        handleSearch(tagSearch)
      }
    }
    return (
      <div> 
        <nav className="navbar navbar-light py-3">
        <form className="form-inline" action="" onSubmit={handlerSubmit}>
           <input required className="form-control mr-2" type="search" placeholder="Search" onChange={handleChange} value={tagSearch}/>
           <button className="btn btn-outline-success my-2 my-sm-0 " onClick={handleOnClick} type="submit">Search</button>
        </form>
        </nav>
      </div>
    );
  
}

export default Input;
