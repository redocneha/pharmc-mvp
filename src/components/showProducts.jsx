import { useEffect , useState} from 'react'
import logo from './assets/images/pharmeasy-logo.jpg'
import {Card, Button} from 'react-bootstrap'
import axios from 'axios'
import './showProducts.scss'

function ShowProducts(){

    const [responseData, setResponseData] = useState([]);
    const [data, setData] = useState("");

    async function getShoppingData () {

         await fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>{
                responseData.push(json);
            });
            console.log(responseData);
            const postData = responseData[0].map(pd => 
                <Card className="col-md-3" key={pd.id}>
                    <Card.Img src={pd.image}/>
                    <Card.Body>
                        <Card.Title className="product-title"> {pd.title}</Card.Title>
                        <Card.Text>{pd.category}</Card.Text>
                        <Card.Text className="product-price">Just ${pd.price}</Card.Text>
                        <Button variant="primary">Click to View Details</Button>
                    </Card.Body>
                </Card>
                );
            setData(postData);
    }
    useEffect(() => 
        getShoppingData() , []);

    return (
        <>
        <div className="cmp-showproducts row col-md-12">
            <h1 className="products-maintitle">Happy Shopping</h1>
            {data}
        </div>
        </>
    )
}
export default ShowProducts;