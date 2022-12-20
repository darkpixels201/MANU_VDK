import React from 'react'
import BestSellerMobile from './HomeMobile/BestSellerMobile'
import { BestSellerWeb } from './HomeWeb/BestSellerWeb'
// import BestSellerMobile from './BestSellerMobile'
// import { BestSellerWeb } from './BestSellerWeb'

const BestSeller = () => {
  return (
    <div>
      {window.innerWidth <= 999 ? <BestSellerMobile /> : <BestSellerWeb />}
    </div>
  )
}

export default BestSeller