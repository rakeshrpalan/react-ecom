const cart = [];

const handleWishlist = (statee = cart, action) => {
  const product = action.payload;
  switch (action.type) {
    case "ADD":
      // check exist
      const exist = statee.find((x) => x.id === product.id);
      if (exist) {
        // increase item qty
        return statee.map((x) =>
          x.id === product.id ? { ...x, qty: x.qty + 1 } : x
        );
      } else {
        const product = action.payload;
        return [
          ...statee,
          {
            ...product,
            qty: 1,
          },
        ];
      }
      break;
    case "DEL":
      const exist1 = statee.find((x) => x.id === product.id);
      if (exist1.qty === 1) {
        return statee.filter((x) => x.id !== exist1.id);
      } else {
        return statee.map((x) =>
          x.id === product.id ? { ...x, qty: x.qty - 1 } : x
        );
      }
      break;

    default:
      return statee;
      break;
  }
};

export default handleWishlist;
