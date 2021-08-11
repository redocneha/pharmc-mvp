
import './sellerHomePage.scss';
import {Card, Button, Container, Row, Col} from "react-bootstrap";
import axios from 'axios';
import ReactPaginate from 'react-paginate';
import {useState , useEffect } from 'react';

function SellerHomepage () {

    const [offset, setOffset] = useState(0);
    const [data, setData] = useState([]);
    const [perPage] = useState(5);
    const [pageCount, setPageCount] = useState(0);

    const getData = async() => {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts`);
        const data = response.data;
        const slice = data.slice(offset, offset + perPage);
        const postData = slice.map(pd => <tr key={pd.id}>
            <td>
                {pd.id}
             </td>
             <td>
                {pd.title}
             </td>
             <td>
                 <Button className="btn-primary">confirm Order</Button>  
             </td>
            </tr>);
        var displayData = <table> <tbody> {postData} </tbody></table>
        setData(displayData)
        setPageCount(Math.ceil(data.length / perPage))
    }
    useEffect(() => {
        getData()
    });

    const handlePageClick = (e) => {
        const selectedPage = e.selected;
        console.log('selected page is ',e.selected);
        setOffset(selectedPage * perPage)
    };

    return(
        <>
        <div class="sellerhomepage">
            <h1>Welcome to Seller Home Page</h1>
            <Container>
                <Row>
                    <Col>
                        <Card className="productpage">
                                <Card.Body>
                                    <Card.Title>Product Page </Card.Title>
                                    <Card.Text>Proceed to Product Page</Card.Text>
                                    <Button><a className="link" href="/productpage">Product Orders</a></Button>
                                </Card.Body>
                        </Card>                  
                    </Col>
                    <Col>
                        <Card className="confirmorder">
                            <Card.Body>
                                <Card.Title>Confirm Orders </Card.Title>
                                <Card.Text>Proceed to Confirm Orders</Card.Text>
                                <Button><a className="link" href="/sellerconfirmorder">Confirmed Orders</a></Button>
                            </Card.Body>
                        </Card> 
                    </Col>
                    <Col>
                        <Card className="paymenthistory">
                            <Card.Body>
                                <Card.Title>Payment History </Card.Title>
                                <Card.Text>Proceed to Payment History</Card.Text>
                                <Button><a className="link" href="/paymenthistory">Payment History</a></Button>
                            </Card.Body>
                        </Card> 
                    </Col>
                </Row>
            </Container>
            <Container className="unconfirmedorders">
                <Row>
                    <h3 className="unconfirmed-title">
                        UnConfirmed Orders
                    </h3>
                </Row>
            </Container>
        <div className="unconfirmed-pagination">
            {data}
            <ReactPaginate
                previousLabel={"prev"}
                nextLabel={"next"}
                breakLabel={"..."}
                breakClassName={"break-me"}
                pageCount={pageCount}
                marginPagesDisplayed={2}
                pageRangeDisplayed={5}
                onPageChange={handlePageClick}
                containerClassName={"pagination"}
                subContainerClassName={"pages pagination"}
                activeClassName={"active"}
            />
        </div>
        </div>
        </>
    )
}
export default SellerHomepage;