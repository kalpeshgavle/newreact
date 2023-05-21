import { useDispatch, useSelector } from "react-redux"
import { changeName } from "../redux/counterSlice";


function Home() {
    const { userName } = useSelector((state) => state.counter);
    const dispatch = useDispatch()
    return <div className="container mt-4">
        <h1>Home page</h1>
        <h3>my name is : {userName} </h3>
        <button onClick={() => dispatch(changeName())}>change name</button>
    </div>
}

export default Home