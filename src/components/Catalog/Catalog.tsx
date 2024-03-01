import React from 'react'
import './Catalog.css'
import { Product } from '../Home/Home';

interface CatalogProps {
  products: Product[];
}

const Catalog: React.FC<CatalogProps> = ({products}) => {
  return (
    <div className='catalog-container'>
      <div className='catalog-box'>
        {products?.map(p => p.Name)}
      </div>
    </div>
  )
}

export default Catalog
