
import './App.css'


function App() {
  const handleClickfunction =(e)=>{
   const body =document.querySelector('body');
   body.style.background= GetrandomColor()
   e.target.style.backgroundcolor =GetrandomColor()
  };

    function GetrandomColor(){
      let letter ='0123456789ABCDEF'
      let color='#'
      for(let i =0; i<6; i++){
        color+=letter[Math.floor(Math.random() * 16)];
      }
      return color;
    }
  return (
    <>
     <div className="container">
     <h1>Random user on Refresh</h1>
     <button className='btn' onClick={handleClickfunction}>Refresh</button>

     </div>
     
   
    </>
  )
}
export default App
