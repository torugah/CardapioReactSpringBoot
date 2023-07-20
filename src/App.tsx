import { useState } from 'react';
import './App.css'
import { Card } from './components/card/card';
import { useFoodData } from './hooks/useFoodData';
import { CreateModal } from './components/create-modal/create-modal';

function App() {
  const { data } = useFoodData();
  const [isModalOpen, setISModalOpen] = useState(false);

  const handleOpenModal = () => {
    setISModalOpen(prev => !prev)
  }

  return (
      <div className="container">
        <h1>Cardápio</h1>        
        <div className="card-grid">
          {data?.map(foodData => 
            <Card 
              price={foodData.price} 
              title={foodData.title} 
              image={foodData.image}
            />
          )}
          {isModalOpen && <CreateModal closeModal={handleOpenModal}/>}
          <button onClick={handleOpenModal}>Novo</button>
        </div>
      </div>   
  )
}

export default App
