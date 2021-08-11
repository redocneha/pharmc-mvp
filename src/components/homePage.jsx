import React from 'react';
import { useSelector } from "react-redux";
import ShowProducts from './showProducts';
import './homePage.scss'
function HomePage (){
    const userId = useSelector((state) => state.user.id);
    const isSeller = useSelector((state) => state.user.isSeller)
return(
    <>
    <div className="cmp-homepage">
    <ShowProducts></ShowProducts>
    </div>
    </>
)

}
export default HomePage;