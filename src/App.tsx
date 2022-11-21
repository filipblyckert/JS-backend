import React, { useState,useEffect } from 'react'
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-dom';
import InputForm from './components/InputForm';
import TodoList from './components/TodoList';
import TodoProvider from './Contexts/TodoContext';
import HomeView from './views/HomeView';
import ContactsView from './views/ContactsView';
import NotFoundView from './views/NotFoundView';
import ProductDetailsView from './views/ProductsDetailView';
import ProductsView from './views/ProductsView';
import { TodoContext, TodoContextType } from '../Contexts/TodoContext';



const App: React.FC = () => {

  const[ products, setProducts] = useState({
    all: [],
    featuredProducts: []
  
   })
   
   const fetchProducts = async () => {
    let response = await fetch('https://win22-webapi.azurewebsites.net/api/products')
    const json = await response.json();
  
    return {response, json};
  };
  
    useEffect(() => {
      fetchProducts().then(
        data => setProducts( {...data.response, all: data.json} )
      )
    }, [])


  return (
<BrowserRouter>


    
    <TodoProvider value={products}>
  
    <Routes>
        <Route path='/' element={<HomeView/>} />

        <Route path='/contacts' element={<ContactsView/>} /> 
        <Route path='/products' element={<ProductsView/>} />
        <Route path='/*' element={<NotFoundView/>} />
        <Route path='/products/:name' element={<ProductDetailsView/>} />

        </Routes>

      <div className='d-flex justify-content-center mt-3'>
      <div>
        <h1 style={{textAlign:"center"}}>TODO LIST</h1>
        <InputForm />
        <TodoList/>
      
      </div>
    
    </div>
    </TodoProvider>
    </BrowserRouter>
  );
}

export default App;
