import { List } from "../List";
import { ProductsCart } from "./CartProduct";
import { EmptyCart } from "./EmptyCart";
import { StyledCart } from "./style";

export const Cart = ({ productsCart, setProductsCart }) => {
  return (
    <StyledCart>
      <div className="Cart__Header">
        <h2>Carrinho de Compras</h2>
      </div>
      <List>
        {productsCart.length > 0 ? (
          productsCart.map((currentProduct) => {
            return (
              <ProductsCart
                key={currentProduct.id}
                productsCart={productsCart}
                setProductsCart={setProductsCart}
                currentProduct={currentProduct}
              />
            );
          })
        ) : (
          <EmptyCart />
        )}
      </List>
    </StyledCart>
  );
};
