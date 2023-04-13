import {cartContext} from 'cartContext'
import HomePage from './HomePage'


const BuyPage = () => {

  const cart= useContext(cartContext)
  return (
   <cartContext.Provider value={cart}>
<HomePage/> 
   </cartContext.Provider>
  )
}

export default BuyPage