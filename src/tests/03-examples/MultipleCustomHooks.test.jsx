import { fireEvent, render,screen} from "@testing-library/react"
import { MultipleCustomHooks } from "../../03-examples/MultipleCustomHooks"
import { useFetch } from "../../hooks/useFetch"
import { useCounter } from "../../hooks/useCounter"



jest.mock('../../src/hooks/useFetch')
jest.mock('../../src/hooks/useCounter')

describe('pruebas en < MultipleCustomHooKs>',()=>{

   const mockincrement=jest.fn()
           
   useCounter.mockReturnValue({
     counter:1,
     increment:mockincrement
   })

beforeEach(()=>{
   jest.clearAllMocks();
})
test('debe de mostrar el componente por defecto ', () => { 


   render(<MultipleCustomHooks/>);

expect(screen.getByText('Loading ....'))
expect(screen.getByText('Breaking bad quotes'))
const nextButton=screen.getByRole('button',{name:'Next quote'})
// screen.debug()
   expect(nextButton.disabled).toBeTruthy();
   
   
   })
   test('debe de mostrar un Quote ', () => { 
      useFetch.mockReturnValue({
         data:[{author:'Fernando',quote:'hola mundo'}],
         isLoading:false,
         hasError:null
      })
      

      render(<MultipleCustomHooks/>);

      expect(screen.getByText('Hola Mundo') ).toBeTruthy()
      expect(screen.getByText('Fernando') ).toBeTruthy()
      const nextButton=screen.getByRole('button',{name:'Next quote'})

   expect(nextButton.disabled).toBeTruthy();
         
         })

         test('debe de mostrar la función de incrementar  ', () => { 
          
            
      
            render(<MultipleCustomHooks/>);
            const nextButton=screen.getByRole('button',{name:'Next quote'})
              fireEvent.click(nextButton)    
              
              expect(mockincrement).toHaveBeenCalled();
               
               })
})