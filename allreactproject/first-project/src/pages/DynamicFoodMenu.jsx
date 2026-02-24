import { useState } from "react"
const DynamicFoodMenu = () => {
    //preparing state using use state

    const [foodMenuList, setFoodMenuList] = useState([
        {
            id: 1,
            name: "Pizza",
            price: 1000,
            description: "A delicious cheesy pizza with your choice of toppings.",
            image: "https://img.freepik.com/premium-photo/closeup-cheese-pepperoni-pizza-slice-being-lifted_1223942-16181.jpg?w=1060"
        },
        {
            id: 2,
            name: "Burger",
            price: 800,
            description: "A juicy beef burger with lettuce, tomato, and cheese.",
            image: "https://recipes.net/wp-content/uploads/2023/07/veggie-indian-burger_c600955990467b492e73154a8d821fc7.jpeg",
        }
    ])

    const handleAddFoodMenu = () => {
        const newFoodMenu = {
            id: foodMenuList.length + 1,
            name: "Pasta",
            price: 900,
            description: "A classic Italian pasta dish with rich tomato sauce.",
            image: "https://tse4.mm.bing.net/th/id/OIP.v6MMzd45x7JuJIFdtgA2WwHaEK?rs=1&pid=ImgDetMain&o=7&rm=3"
        }
       setFoodMenuList([...foodMenuList, newFoodMenu])
    }
    return (
        <div>
            <h1> Dynamic Food Menu</h1>
            <button onClick={handleAddFoodMenu}>Add Food Menu</button>

            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(2, 1fr)", // 2 per row
                    gap: "20px",
                    justifyContent: "center"
                }}
            >
                {foodMenuList.map((el) => {
                    return (
                        <div
                            key={`${el.id}-${el.name}`}
                            style={{
                                backgroundColor: "orange",
                                padding: "10px",
                                borderRadius: "5px",
                                display: "flex",
                                alignItems: "center",
                                gap: "20px"
                            }}
                        >
                            <img 
                                src={el.image} 
                                alt={el.name} 
                                style={{ width: "120px", height: "120px", objectFit: "cover" }}
                            />

                            <div>
                                <p><strong>{el.name}</strong></p>
                                <p>{el.price}</p>
                                <p>{el.description}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
export default DynamicFoodMenu;