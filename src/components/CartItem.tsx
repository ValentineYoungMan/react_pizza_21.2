import React from 'react';
import { useDispatch } from 'react-redux';
import { CartItem, addItem, minusItem, removeItem } from '../redux/slices/cartSlice';
import clsx from 'clsx';

type CartItemProps = {
  id: string;
  name: string;
  type: string;
  size: number;
  price: number;
  count: number;
  imageUrl: string;
};

const CartItemBlock: React.FC<CartItemProps> = ({
  id,
  name,
  type,
  size,
  price,
  count,
  imageUrl,
}) => {
  const dispatch = useDispatch();

  const onClickPlus = () => {
    dispatch(addItem({ id } as CartItem));
  };
  const onClickMinus = () => {
    dispatch(minusItem(id));
  };
  const onClickRemove = () => {
    if (window.confirm('Are you sure you want to remove?')) {
      dispatch(removeItem(id));
    }
  };

  return (
    <div className="cart__item">
      <div className="cart__item-img">
        <img className="pizza-block__image" src={imageUrl} alt="Pizza" />
      </div>
      <div className="cart__item-info">
        <h3>{name}</h3>
        <p>
          {type}, {size} см.
        </p>
      </div>
      <div className="cart__item-count">
        <button
          disabled={count == 1}
          onClick={onClickMinus}
          className="button button--outline button--circle cart__item-count-minus">
          -
        </button>
        <b>{count}</b>
        <button
          onClick={onClickPlus}
          className="button button--outline button--circle cart__item-count-plus">
          +
        </button>
      </div>
      <div className="cart__item-price">
        <b>${price * count}</b>
      </div>
      <div className="cart__item-remove">
        <div onClick={onClickRemove} className="button button--outline button--circle">
          x
        </div>
      </div>
    </div>
  );
};

export default CartItemBlock;
