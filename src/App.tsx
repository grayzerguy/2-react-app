//import Alert from "./components/Alert";
import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
// import ListGroup from "./components/ListGroup"


function App() {

  // let items = ["New York", "London", "Tokyo", "Paris"];
  // const handelSelectedItem = (item: string) =>
  //   console.log(item)
  const handelClick = () =>
    alertOn(true)
  const [alertOff, alertOn] = useState(false)
  const handelCloseAlert = () =>
    alertOn(false)

  return (
    <div>
      {/* <Alert><p> hello</p></Alert> */}
      {/* <ListGroup items={items} heading="Cities" onSelectItem={handelSelectedItem} /> */}
      {alertOff && <Alert onClose={handelCloseAlert}>My Alert</Alert>}
      <Button color="primary" onClick={handelClick}>My Button</Button>
    </div >
  )

}

export default App
