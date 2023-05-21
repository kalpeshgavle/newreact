import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProduct } from "../redux/productSlice";
function ProductPage() {
    const dispatch = useDispatch()
    const { loading, product } = useSelector((state) => state.product)
    useEffect(() => {
        dispatch(getProduct())
    }, [])

    if (loading) {
        return <h2>Loading!!!!</h2>
    }

    return (
        <div className="container mt-4">
            <h1>ProductPage</h1>
            <div className="row">
                {
                    product.map(item => {
                        const { title, price, description, image, id } = item;
                        return (
                            <div className="col-md-4" key={id}>
                                <div className="card">
                                    <img src={image} alt={title} style={{ height: "200px", width: "200px", margin: "0px auto" }} />
                                    <div className="card-body">
                                        <h5 className="text-truncate">{title}</h5>
                                        <p>{price}</p>
                                        <p className="text-truncate">{description}</p>
                                        <button className="btn btn-primary">More Details</button>
                                    </div>
                                </div>


                            </div>
                        )
                    })
                }
            </div>

        </div>


    )
}
export default ProductPage;