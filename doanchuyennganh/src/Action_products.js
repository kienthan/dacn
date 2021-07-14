import { useEffect, useState } from "react";

export const Products = () =>
{
    let [products, setProducts] = useState([]);
    let [productLength, setProductLength] = useState(null);

    useEffect(() => {
        fetch("http://localhost/php-react/all-products.php")
          .then((res) => {
            return res.json();
          })
          .then((data) => {
            if (data.success) {
                setProducts(data.users.reverse());
                setProductLength(true);
            } else {
                setProductLength(0);
            }
          })
          .catch((err) => {
            console.log(err);
          });
      }, []);

      const insertProduct = (newProduct) => {
        fetch("http://localhost/php-react/add-product.php", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newProduct),
        })
          .then((res) => {
            return res.json();
          })
          .then((data) => {
            if (data.id) {
              setProducts([
                {
                  id: data.id,
                  ...newProduct,
                },
                ...products,
              ]);
              setProductLength(true);
            } else {
              alert(data.msg);
            }
          })
          .catch((err) => {
            console.log(err);
          });
      };

      
    
      // Deleting a user.
      const deleteProduct = (theID) => {
          // filter outing the user.
        let productDelete = products.filter((product) => {
          return product.id !== theID;
        });
        fetch("http://localhost/php-react/delete-product.php", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ id: theID }),
        })
          .then((res) => {
            return res.json();
          })
          .then((data) => {
            if (data.success) {
              setProducts(productDelete);
              if (products.length === 1) {
                setProductLength(0);
              }
            } else {
              alert(data.msg);
            }
          })
          .catch((err) => {
            console.log(err);
          });
      };


    return {
        Products,
        //editMode,
        //cancelEdit,
        //updateProduct,
        insertProduct,
        deleteProduct,
        productLength,
      };
}