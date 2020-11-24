import React from 'react';

export default function CollectionItem({ id, name, imageUrl, price }) {
  return (
    <div className='collection-item'>
      <div className='image' style={{ backgroundImage: `url(${imageUrl})` }} />

      <div className='collection-item-footer'>
        <span className='name'>{name}</span>
        <span className='price'>{price}</span>
      </div>
    </div>
  );
}
