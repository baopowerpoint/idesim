import { doc, updateDoc } from "firebase/firestore";
import React from "react";
import CardItem from "../components/card/CardItem";
import { useCollection } from "../hooks/useCollection";
import { useAuthContext } from "../hooks/useAuthContext";
import { useFirestore } from "../hooks/useFirestore";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import SkeletionWithCard from "../components/skeleton/SkeletionWithCard";

function Templates() {
  const navigate = useNavigate();
  const { user: owner } = useAuthContext();
  const { documents: products } = useCollection("products");
  const { documents: users } = useCollection("users");
  const { updateDocument: userUpdateDoc, userResponse } = useFirestore("users");
  const { updateDocument: productUpdateDoc, productResponse } =
    useFirestore("products");
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    if (users && owner) {
      setCurrentUser(users.find((user) => user.id === owner.uid));
    }
    console.log(products);
  }, [users, owner, currentUser]);
  const handleNavigate = () => {
    navigate("/login");
  };
  const handleItemLike = async (id) => {
    if (owner && currentUser) {
      const currentProduct = products.find((product) => product.id === id);
      const currentLike = parseInt(currentProduct.likes);
      await productUpdateDoc(currentProduct.id, { likes: currentLike + 1 });
      const currentLikes = currentUser.likes;
      if (!currentLikes.includes(id)) {
        currentLikes.push(id);
      }
      await userUpdateDoc(currentUser.id, { likes: currentLikes });
    } else {
      navigate("/login");
    }
  };
  const handleItemDislike = async (id) => {
    if (owner && currentUser) {
      const currentProduct = products.find((product) => product.id === id);
      const currentLike = parseInt(currentProduct.likes);
      await productUpdateDoc(currentProduct.id, { likes: currentLike - 1 });
      const currentLikes = currentUser.likes;
      const index = currentLikes.indexOf(id);
      if (index > -1) {
        currentLikes.splice(index, 1);
      }

      await userUpdateDoc(currentUser.id, { likes: currentLikes });
    } else {
      navigate("/login");
    }
  };
  const handleIncrement = async (id) => {
    const currentProduct = products.find((product) => product.id === id);
    const currentDownload = parseInt(currentProduct.downloads);
    await productUpdateDoc(currentProduct.id, {
      downloads: currentDownload + 1,
    });
  };
  return (
    <div className="mt-10 text-center mx-5 ">
      <h1 className="text-headline4 font-600">Templates</h1>
      <p className="text-body2">
        Đây là nơi chứa các template cho mọi người tham khảo. Để lưu template,
        bấm vào biểu tượng tải xuống.
      </p>

      <div className="flex flex-col items-center justify-center md:flex-row md:gap-5 ">
        {!products && <SkeletionWithCard />}

        {products &&
          products.map((product) => (
            <CardItem
              key={product.id}
              productId={product.id}
              imgUrl={product.imgUrl}
              price={product.price}
              title={product.title}
              likes={product.likes}
              downloads={product.downloads}
              requireLogin={() => handleNavigate()}
              onDownload={() => {
                handleIncrement(product.id);
              }}
              itemDownloadUrl={product.content}
              onLike={() => handleItemLike(product.id)}
              onDislike={() => handleItemDislike(product.id)}
              userPosted="Trần Bảo"
            />
          ))}
      </div>
    </div>
  );
}

export default Templates;
