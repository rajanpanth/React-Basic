import { foodMenuList } from "../data/food_menus_data"

const FoodMenu = () => {
    return (
        <div>
            <h1>Food Menu</h1>

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
export default FoodMenu;