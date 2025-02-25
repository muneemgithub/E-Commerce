import React from 'react'
import HeroSection from './Hero'
import JewelleryFilter from './JewellryFilter'
import ShopByCategory from './ShopByCategory'
import { Box } from '@mui/material'
import TestimonialCards from './CustomerCard'

const Home = () => {
  return (
    <>
      <HeroSection />
      <Box sx={{ mt: 90 }}>  {/* MUI Box with margin-top */}
        <JewelleryFilter />
      </Box>
      <ShopByCategory />
      <TestimonialCards/>
    </>
  )
}

export default Home
