import React from 'react';
import { useSelector } from "react-redux";

function HomePage (){
    const userId = useSelector((state) => state.user.id);
return(
    <>
    {userId !== 0 && <h4>{userId}</h4> }
    <h2>Welcome to home page</h2>
    </>
)

}
export default HomePage;