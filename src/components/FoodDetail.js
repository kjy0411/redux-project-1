import {useState,useEffect} from "react";
import {useNavigate,useParams} from "react-router";
import {useDispatch, useSelector} from "react-redux";
import {fetchFoodDetail, fetchFoodList} from "../actions/foodActions";

function FoodDetail() {
    const {fno} = useParams();
    // URL을 통해서 데이터 전송
    // path="/detail/:page/:fno/:id"
    // const {page,fno,id} =useParams()
    return (
        <div className="container">
            <div className="row">
                <h1>{fno}</h1>
            </div>
        </div>
    )
}
export default FoodDetail;