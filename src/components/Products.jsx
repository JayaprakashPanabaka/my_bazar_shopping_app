import React from 'react'
import ProductsCard from './ProductsCard'

const Products = ({products}) => {
  // console.log(products);


  return (
    <div>
      <div className='py-10'>
        <div className='flex flex-col items-center gap-4'>
            <h1 className='text-2xl bg-black text-white py-2 w-80 text-center'>shopping everyday</h1>
            <span className='w-20 h-[3px] bg-black'></span>
            <p className='max-w-[700px] text-gray-600 text-center'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur, magnam? Maiores eius laboriosam dicta exercitationem aut sequi ad quae dignissimos cupiditate, tempore fuga consectetur esse dolorum commodi nam quos ipsa fugiat. Consequuntur rem hic architecto inventore eum tenetur! Architecto ut ipsum hic. Rerum numquam necessitatibus omnis reprehenderit voluptates facilis officia?</p>
        </div>
        <div className='max-w-screen-xl mx-10 py-10 grid grid-cols-4 gap-10'>
          {
            products.map((item) => {
              return <ProductsCard key={item._id} product={item} />
            })
          }
        </div>
      </div>
    </div>
  )
}

export default Products
