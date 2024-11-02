import { useEffect } from "react";

const RestaurantMenu=()=>{
    useEffect(()=>{
        fetchMenu()
    },[])
    return(
        <div className="Menu">
            <h1>Name of Restaurant </h1>
            <h2>Menu</h2>
            <ul>
                <li>Burger</li>
                <li>Biryani</li>
                <li>Pizza</li></ul>
        </div>
        
    )
}
export default RestaurantMenu;