import React from 'react'
import { useState } from 'react'
import { data } from '../data/data'

const Food = () => {
    const [foods, setFoods] = useState(data);

    //filter categories
    const filterType = (category) => {
        setFoods(
            data.filter((item) => {
                return item.category === category
            })
        )
    }

    //filter price
    const filterPrice = (price) => {
        setFoods(
            data.filter((item) => {
                return item.price === price
            })
        )
    }

    return (
        <div className='max-w-[1640px] m-auto px-4 py-12'>
            <h1 className='text-orange-500 font-bold text-4xl text-center'>Top Rated Menu</h1>
            {/* Filter row */}
            <div className='flex flex-col lg:flex-row justify-between'>
                {/* Filter type */}
                <div>
                    <p className='flex justify-between text-gray-700 px-2 py-2 font-bold'>Filter Type</p>
                    <div className='flex flex-wrap'>
                        <button
                            onClick={() => setFoods(data)}
                            className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>
                            All
                        </button>
                        <button
                            onClick={() => filterType('burger')}
                            className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>
                            Burgers
                        </button>
                        <button
                            onClick={() => filterType('pizza')}
                            className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>
                            Pizza
                        </button>
                        <button
                            onClick={() => filterType('salad')}
                            className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>
                            Salads
                        </button>
                        <button
                            onClick={() => filterType('chicken')}
                            className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>
                            Chicken
                        </button>
                    </div>
                </div>

                {/* Filter price */}
                <div>
                    <p className='flex justify-between text-gray-700 px-2 py-2 font-bold'>Filter Price</p>
                    <div className='flex max-w-[390px] w-full'>
                        <button
                            onClick={() => filterPrice('$')}
                            className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>
                            $
                        </button>
                        <button
                            onClick={() => filterPrice('$$')}
                            className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>
                            $$
                        </button>
                        <button
                            onClick={() => filterPrice('$$$')}
                            className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>
                            $$$
                        </button>
                        <button
                            onClick={() => filterPrice('$$$$')}
                            className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>
                            $$$$
                        </button>
                    </div>
                </div>
            </div>
            {/* Display foods */}
            <div className='grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4'>
                {foods.map((item, index) => (
                    <div key={index} className='border shadow-lg rounded-lg hover:scale-105 duration-300'>
                        <img src={item.image} alt={item.name} className='w-full h-[200px] object-cover rounded-t-lg' />
                        <div className='flex pt-4 px-3'>
                            <p className='font-bold'>{item.name}</p>
                        </div>
                        <div className='flex pl-2'>
                            <span className='text-orange-600 p-1'>{item.price}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Food