import { act, renderHook } from "@testing-library/react"
import { useCounter } from "../../hooks/useCounter"

describe('pruebas en < useCounter.js>',()=>{
test(' Debe retornar valorespor defecto ', () => { 
 const {result }=renderHook(()=>useCounter());
const {counter,shrink,increment,restart} =result.current
expect(counter).toBe(0) 
expect(shrink).toEqual(expect.any(Function)) ;
expect(increment).toEqual(expect.any(Function)) ;
expect(restart).toEqual(expect.any(Function)) ;
     })
     test(' Debe de generar el counter con el valor de 100 ', () => { 
      const {result }=renderHook(()=>useCounter(100));
     const {counter,shrink,increment,restart} =result.current
     expect(counter).toBe(100) 
     
          })

          test(' Debe de incrementar el contador  ', () => { 
            const {result }=renderHook(()=>useCounter(100));
           const {counter,shrink,increment,restart} =result.current
           
           act (()  =>{
             increment(1)
             increment(2)
           
          })
           
           expect(result.current.counter).toBe(103) 
                })

                test(' Debe de disminuir el contador  ', () => { 
                  const {result }=renderHook(()=>useCounter(100));
                 const {counter,shrink,increment,restart} =result.current
                 
                 act (()  =>{
                   shrink(1)
                   shrink(2)
                 
                })
                 
                 expect(result.current.counter).toBe(97) 
                      })

                      test(' Debe de resetear el contador al valor inicial   ', () => { 
                        const {result }=renderHook(()=>useCounter(100));
                       const {counter,shrink,increment,restart} =result.current
                       act (()  =>{
                        shrink(1)
                        shrink(2)
                      restart();
                     })
              
                       expect(result.current.counter).toBe(100) 
                            })
})