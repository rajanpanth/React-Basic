import { useState } from "react";
import { BrowserRouter, Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom'
import TodoList from "./day-7task";

function Tasks() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route path="/task1" element={<Counter />} />
                    <Route path="/task2" element={<Toggle />} />
                    <Route path="/task3" element={<InputData />} />
                    <Route path="/task4" element={<DarkLightMode />} />
                    <Route path="/task5" element={<ColorPicker />} />
                    <Route path="/task6" element={<ImageShowHide />} />
                    <Route path="/task7" element={<ClickTracker />} />
                    <Route path="/task8" element={<PasswordToggle />} />
                    <Route path="/task9" element={<TrafficLight />} />
                    <Route path="/task10" element={<RandomQuoteGenerator />} />
                     <Route path="/todo" element={<TodoList/>} />
                    <Route path="*" element={<Nopage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

function Nopage() {
    return (<div>
        Page not found 404 error....
    </div>)
}

function Layout() {
    return (<div id="main" style={{ height: "100vh", background: "gray", color: "white", padding: "20px", fontSize: "20px", fontWeight: "bold", textAlign: "center", }}>
        <div style={{

        }}>
            <Link to="/Task1"><button style={{ margin: 15, color: "black", fontWeight: "bold", padding: 10, height: 40, width: 100 }}>Task1</button></Link>
            <Link to="/Task2"><button style={{ margin: 15, color: "black", fontWeight: "bold", padding: 10, height: 40, width: 100 }}>Task2</button></Link>
            <Link to="/Task3"><button style={{ margin: 15, color: "black", fontWeight: "bold", padding: 10, height: 40, width: 100 }}>Task3</button></Link>
            <Link to="/Task4"><button style={{ margin: 15, color: "black", fontWeight: "bold", padding: 10, height: 40, width: 100 }}>Task4</button></Link>
            <Link to="/Task5"><button style={{ margin: 15, color: "black", fontWeight: "bold", padding: 10, height: 40, width: 100 }}>Task5</button></Link>
            <Link to="/Task6"><button style={{ margin: 15, color: "black", fontWeight: "bold", padding: 10, height: 40, width: 100 }}>Task6</button></Link>
            <Link to="/Task7"><button style={{ margin: 15, color: "black", fontWeight: "bold", padding: 10, height: 40, width: 100 }}>Task7</button></Link>
            <Link to="/Task8"><button style={{ margin: 15, color: "black", fontWeight: "bold", padding: 10, height: 40, width: 100 }}>Task8</button></Link>
            <Link to="/Task9"><button style={{ margin: 15, color: "black", fontWeight: "bold", padding: 10, height: 40, width: 100 }}>Task9</button></Link>
            <Link to="/Task10"><button style={{ margin: 15, color: "black", fontWeight: "bold", padding: 10, height: 40, width: 100 }}>Task10</button></Link>
             <Link to="/Todo"><button style={{ margin: 15, color: "black", fontWeight: "bold", padding: 10, height: 40, width: 100 }}>Todo</button></Link>
            <Outlet />
        </div>
    </div >)
}

function Counter() {
    let [count, setCount] = useState(0)

    function increase() {
        setCount(count + 1);

    }
    function decrease() {
        setCount(count - 1);

    }
    function reset() {
        setCount(0);

    }

    return (<div>
        <p>{count}</p>
        <button onClick={increase}>inc</button>
        <button onClick={decrease}>dec</button>
        <button onClick={reset}>reset</button>
        <p>
            {count % 2 == 0 ? " is even" : "is Odd"}
        </p>
    </div>)

}

function Toggle() {
    let [toggle, setToggle] = useState(false)
    function handleToggle() {
        setToggle(!toggle);
    }
    return (<div>
        <button onClick={handleToggle}>Toggle</button>
        {toggle && <p>Hello, I am visible now!</p>}
    </div>)
}

function InputData() {
    let [input, setInput] = useState("");

    function handleChange(event) {
        setInput(event.target.value);
    }
    return (<div>
        <input type="text" value={input} onChange={handleChange} />
        <p>You typed: {input}</p>
    </div>)
}

function DarkLightMode() {
    let [isDarkMode, setIsDarkMode] = useState(false);

    function toggleMode() {
        setIsDarkMode(!isDarkMode);
    }
    return (<div style={{
        backgroundColor: isDarkMode ? "black" : "white",
        color: isDarkMode ? "white" : "black",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
    }}>
        <button onClick={toggleMode}>
            Switch to {isDarkMode ? "Light" : "Dark"} Mode
        </button>
        <p>This is {isDarkMode ? "Dark" : "Light"} Mode</p>
    </div>)
}

function ColorPicker() {
    let [color, setColor] = useState("gray");

    function handleChange(event) {
        setColor(event.target.value);
    }
    return (<div>
        <input type="color" value={color} onChange={handleChange} />
        {document.getElementById("main").style.backgroundColor = color}
        <p style={{ background: color, color
: "white", padding: "10px"
         }}>This text is {color}</p>
    </div>)
}

function ImageShowHide() {
    let [isVisible, setIsVisible] = useState(true);
    function toggleVisibility() {
        setIsVisible(!isVisible);
    }
    return (<div>
        <button onClick={toggleVisibility}>
            {isVisible ? "Hide" : "Show"} Image
        </button>
        {isVisible && <img src="https://tse1.mm.bing.net/th/id/OIP.X5IFK5FnctErlsC4kU0RLQHaHX?cb=defcache2defcache=1&rs=1&pid=ImgDetMain&o=7&rm=3" alt="Placeholder" />}
    </div>)
}

//Build a click tracker that counts how many times a specific area is clicked.
function ClickTracker() {
    let [clickCount, setClickCount] = useState(0);
    function handleClick() {
        setClickCount(clickCount + 1);
    }
    return (<div>
        <div onClick={handleClick} style={{ width: "200px", height: "200px", backgroundColor: "lightblue", display: "flex", justifyContent: "center", alignItems: "center", cursor: "pointer" }}>
            Click Me
        </div>
        <p>Click Count: {clickCount}</p>
    </div>)
}

function PasswordToggle() {
    let [isPasswordVisible, setIsPasswordVisible] = useState(false);

    function togglePasswordVisibility() {
        setIsPasswordVisible(!isPasswordVisible);
    }
    return (<div>
        <input type={isPasswordVisible ? "text" : "password"} placeholder="Enter Password" />
        <button onClick={togglePasswordVisibility}>
            {isPasswordVisible ? "Hide" : "Show"} Password
        </button>
    </div>)
}

function RandomQuoteGenerator() {
    const quotes = [
        "The best way to predict the future is to invent it.",
        "Life is 10% what happens to us and 90% how we react to it.",
        "The only way to do great work is to love what you do.",
        "Success is not the key to happiness. Happiness is the key to success.",
        "In the middle of every difficulty lies opportunity.",
    ];
    let [currentQuote, setCurrentQuote] = useState("");

    function generateRandomQuote() {
        const randomIndex = Math.floor(Math.random() * quotes.length);
        setCurrentQuote(quotes[randomIndex]);
    }
    return (<div>
        <button onClick={generateRandomQuote}>Generate Random Quote</button>
        {currentQuote && <p>{currentQuote}</p>}
    </div>)
}

function TrafficLight() {
    let [light, setLight] = useState("red");
    function changeLight(newLight) {
        setLight(newLight);
    }
    return (<div>
        <div style={{ width: "100px", height: "300px", backgroundColor: "black", padding: "10px", display: "flex", flexDirection: "column", justifyContent: "space-around", alignItems: "center" }}>
            <div onClick={() => changeLight("red")} style={{ width: "60px", height: "60px", borderRadius: "50%", backgroundColor: light === "red" ? "red" : "gray" }}></div>
            <div onClick={() => changeLight("yellow")} style={{ width: "60px", height: "60px", borderRadius: "50%", backgroundColor: light === "yellow" ? "yellow" : "gray" }}></div>
            <div onClick={() => changeLight("green")} style={{ width: "60px", height: "60px", borderRadius: "50%", backgroundColor: light === "green" ? "green" : "gray" }}></div>
        </div>
    </div>)
}



export default Tasks

