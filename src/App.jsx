import './App.css'
import FromAction from './Components/FormAction/FromAction'
import HookForm from './Components/HookForm.jsx/HookForm'
import ProductManagement from './Components/Productmanagement/ProductManagement'
import SimpleForm from './Components/SimpleFrom/SimpleForm'

function App() {
  

  return (
    <>

      <h1> Explore React Form</h1>
      
      <SimpleForm></SimpleForm>
      <FromAction></FromAction>
      <ControledField></ControledField>
      <UnControledFIeld></UnControledFIeld>
      <HookForm> </HookForm>
    <ProductManagement></ProductManagement>

    </>
  )
}

export default App
