import Button from './components/Button'

const App = () => {
  return (
    <>
    <div>
      <Button primary outline>Buy Now</Button> 
    </div>
    <div>
      <Button secondary rounded>Secondary Button</Button> 
    </div>
    <div>
      <Button danger outline rounded>Delete</Button> 
    </div>
    <div>
      <Button warning>Are you sure?</Button>
    </div>
    <div>
      <Button success>Success</Button> 
    </div>
    </>

  )
}

export default App