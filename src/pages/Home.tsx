import React from 'react'
import { Header } from '../components/Header'
import Categories from '../components/Home/Categories'
import NewArrivals from '../components/Home/NewArrivals'
import Populardeals from '../components/Home/Populardeals'
import { shirtsList, shoesList, trousersList } from '../fakeData'
import Section from '../components/Home/Section'

export const Home = () => {
  return (
    <div className='w-[97%] md:w-[85%] lg:w-[75%] m-auto'>
        <Header />
        <div className='bg-headerImage bg-cover bg-center h-[300px] md:h-[400px] lg:h-[400px] rounded-lg' data-aos="zoom-in-up">
        </div>
        <Categories />
        <NewArrivals />
        <Section
          sectionName='Shirts'
          products={shirtsList}
        />
        <Populardeals />
        <Section
          sectionName='Shoes'
          products={shoesList}
        />
        <Section
          sectionName='Pants'
          products={trousersList}
        />
    </div>
  )
}
