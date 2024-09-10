import { useEffect, useRef } from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { len,num,cha,passw } from './store/passSlice';

function App() {

  /*let [num,setNum] = useState(false);
  let [cha,setCha] = useState(false);
  let [len,setLen] = useState(8)
  let [password,setPassword] = useState('');*/

  let dispatch = useDispatch()
  let number = useSelector((state)=>state.num)
  let character = useSelector((state)=>state.cha)
  let length = useSelector((state)=>state.len)
  let password = useSelector((state)=>state.passw)

  let change = ()=>{

    let str = ''
    let pass = ''
  
    if(number || character){
      if(number) str += '1234567890'
      if(character) str += 'abcdefghijklmnopqrstuvwxyz'

      for(let i=0;i<length;i++){
        pass += str.charAt(Math.floor(Math.random()*str.length))
      }
      dispatch(passw(pass))
    }
  }
  
  useEffect(()=>{
    change()
  },[length,number,character])

  let copyPass = useRef(null);

  let copy = ()=>{
    copyPass.current?.select();
    copyPass.current?.setSelectionRange(0, 999);
    navigator.clipboard.writeText(password)
  }
  
  return (
    
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
      <h1 className='text-white text-center my-3'>Password generator</h1>
    <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
            readOnly
            className="outline-none w-full py-1 px-3"
            placeholder="Password"
            value={password}
            ref={copyPass}
        />
        <button
        
        className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
        onClick={copy}>copy</button>
        
    </div>
    <div className='flex text-sm gap-x-2'>
      <div className='flex items-center gap-x-1'>
        <input 
        type="range"
        name = 'len'
        value={length}
        min={8}
        max={20}
        onChange={(e)=>dispatch(len(e.target.value))}
        className='cursor-pointer'
         
          />
          <label>Length: {length}</label>
      </div>
      <div className="flex items-center gap-x-1">
      <input
          type="checkbox"
          name='num'
          checked = {number}
          onChange={()=>dispatch(num(!number))}
          id="numberInput"
          
      />
      <label htmlFor="numberInput">Numbers</label>
      </div>
      <div className="flex items-center gap-x-1">
          <input
              type="checkbox"
              name='cha'
              checked = {character}
              onChange={()=>dispatch(cha(!character))}
          />
          <label htmlFor="characterInput">Characters</label>
      </div>
    </div>
</div>
    
  )
}

export default App;
