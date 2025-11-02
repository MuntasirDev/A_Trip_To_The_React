import './App.css'
import FromAction from './Components/FormAction/FromAction'
import ControlledField from './Components/ControlledField/ControlledField'
import HookForm from './Components/HookForm.jsx/HookForm'
import ProductManagement from './Components/Productmanagement/ProductManagement'
import SimpleForm from './Components/SimpleFrom/SimpleForm'
import UnControlledField from './Components/UnControlledField/UnControlledField'
import FamilyTree from './Components/FamilyTree/FamilyTree'

function App() {
  

  return (
    <>

      <h1> Explore React Form</h1>
      
      <SimpleForm></SimpleForm>
      <FromAction></FromAction>
     <ControlledField></ControlledField>
      <UnControlledField></UnControlledField>
      <HookForm> </HookForm>
    <ProductManagement></ProductManagement>
    <FamilyTree></FamilyTree>

    </>
  )
}

export default App
