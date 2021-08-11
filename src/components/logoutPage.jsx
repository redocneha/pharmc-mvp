import { useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import {logoutSubmit} from '../redux/user/actions'
function LogoutPage() {

    const id = useSelector((state) => state.user.id);
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(logoutSubmit(id));
    })
    return (
        <>
        <h2>You are loggedout. Please close the browser</h2>
        </>
    )
}
export default LogoutPage;