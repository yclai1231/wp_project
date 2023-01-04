import React, { useEffect, useState } from "react";
import { useParams, Outlet, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { ProductsWithSortBar, Filter } from "../components/Products/index.js";
import { useWeb } from "./hooks/useWeb";

const ProductContainer = styled.div`
  display: flex;
  width: 100%;
  background-color: white;
`;
const LeftContainer = styled.div`
  border-top: 2px solid black;
  .icon {
    width: 20px;
    margin-right: 10px;
    padding-bottom: 5px;
  }
`;
const RightContainer = styled.div`
  width: calc(100% - 180px);
  margin-top: 2vmin;
  margin-left: min(2vmin, 10px);
  margin-bottom: 5vmin;
`;

const Products = () => {
  const [data, setData] = useState({ section: "all", method: null });
  const [products, setProducts] = useState(null);
  const [sort, setSort] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();

  const handleSortChange = (event) => {
    setSort(event.target.value);
    setData((prev) => ({
      ...prev,
      method: event.target.value,
    }));
  };
  const { CRUD } = useWeb();
  const Query = CRUD("R", "/products");

  const handleNavigateToDetail = (product_id) => {
    navigate("/products/" + product_id);
  };

  useEffect(() => {
    const Render = async () => {
      try {
        const result = await CRUD("R", "/products")(data);
        setProducts(result);
      } catch (err) {
        alert("有問題");
      }
    };
    Render();
  }, []);

  return (
    <ProductContainer>
      <LeftContainer>
        <Filter data={data} submit={Query} setProducts={setProducts} />
      </LeftContainer>
      <RightContainer>
        {id ? (
          <Outlet />
        ) : (
          <ProductsWithSortBar
            sort={sort}
            handleSortChange={handleSortChange}
            handleNavigateToDetail={handleNavigateToDetail}
            products={products}
          />
        )}
      </RightContainer>
    </ProductContainer>
  );
};
export default Products;
