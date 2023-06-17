import React from "react";
import './Bill.scss'

const Bill = ({ cart }) => {
  let distinctEntities = {}
  let total = 0
  cart.forEach(element => {
    if (distinctEntities[element.title]) {
      distinctEntities[element.title] = {
        item: element,
        quantity: distinctEntities[element.title].quantity + 1
      }
    }
    else {
      distinctEntities[element.title] = {
        item: element,
        quantity: 1
      }
    }
    total += element.price
  });
  const resultArray = Object.values(distinctEntities);
  console.log({ cart, distinctEntities })
  return <div className="billWrapper">
    {
      resultArray.map(item =>
        <BillCard
          item={item.item}
          quantity={item.quantity}
        />
      )
    }
    <div className="billTotal">
      <strong>Total</strong>
      <strong>${total.toFixed(2)}</strong>
    </div>
  </div>;
};

const BillCard = ({ item, quantity }) => {
  return <div className="billItem">
    <div className="billtitle">
      <div
        style={{ backgroundImage: `url(${item.images[0]})`, backgroundSize: 'cover', width: '100px', height: 80 }}
      /> <h4>{item.title}</h4>
    </div>
    <div>
      <p>${item.price}<br />
        ×{quantity}</p>
    </div>
  </div>
}

export default Bill;
