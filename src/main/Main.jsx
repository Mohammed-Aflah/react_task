
import Counter from "./counter/Counter"
import Fetching from "./fetchdata/Fetching"
import Form from "./forms/Form"
import Header  from "./header/Header"
import Profile from "./profile/Profile"

function Main(){
    return (

        <div className="conatiner ">
              <Header/>
              <Profile/>
              <Counter/>
              <Fetching/>
              <Form/>
        </div>
        
    )
}
export default Main