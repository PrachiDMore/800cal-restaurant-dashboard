import React, { useState } from 'react'
import Layout from '../components/Layout';
import { PiNotepad, PiWallet } from "react-icons/pi"
import { AiOutlineTags } from "react-icons/ai"
import { BsCart } from "react-icons/bs"
import RestoProfile from '../components/RestoProfile';

const Home = () => {
	const [showResto, setShowResto] = useState(false)

	return (
		<>
			<Layout>
				<div className='w-4/5  Lexend'>
					{/* topbar */}
					<div className='w-full p-4 flex items-center justify-between border-b border-textGray text-2xl font-semibold'>
						Dashboard
						<img onClick={() =>{setShowResto(true)}} className='border-green border-2 rounded-3xl p-1 h-12 w-12' src="/assets/resto.png" alt="" />
					</div>

					<div className='w-full p-5 grid grid-cols-1 gap-4'>
						{/* 1st section */}
						<div className='w-full grid grid-cols-4 gap-4'>
							<div className='bg-darkGray rounded-xl p-3 py-5'>
								<div className='w-full flex items-center justify-between text-lg'>
									<p className='font-light'>Current Orders</p>
									<PiNotepad className='text-green text-xl' />
								</div>
								<p className='text-2xl font-bold'>23</p>
							</div>

							<div className='bg-darkGray rounded-xl p-3 py-5'>
								<div className='w-full flex items-center justify-between text-lg'>
									<p className='font-light'>Total Orders</p>
									<BsCart className='text-green' />
								</div>
								<p className='text-2xl font-bold'>150</p>
							</div>

							<div className='bg-darkGray rounded-xl p-3 py-5'>
								<div className='w-full flex items-center justify-between text-lg'>
									<p className='font-light'>Today's Sale</p>
									<AiOutlineTags className='text-green text-xl' />
								</div>
								<p className='text-2xl font-bold'>1400KD</p>
							</div>

							<div className='bg-darkGray rounded-xl p-3 py-5'>
								<div className='w-full flex items-center justify-between text-lg'>
									<p className='font-light'>Wallet</p>
									<PiWallet className='text-green text-xl' />
								</div>
								<p className='text-2xl font-bold'>5000KD</p>
							</div>
						</div>

						{/* 2nd section */}
						<div className='w-full grid grid-cols-2 gap-x-4'>
							<div className='bg-darkGray rounded-xl p-3'>
								<p className='font-semibold'>Revenue</p>
							</div>
							
							<div className='bg-darkGray rounded-xl p-3'>
								<p className='font-semibold'>Summary</p>
								<p className='text-mediumGray leading-5 text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem provident natus quo culpa, illo asperiores nisi magnam id excepturi unde?</p>
							</div>
						</div>

						{/* 3rd section */}
						<div className='w-full'>
							<p className='font-semibold text-xl '>Orders</p>
							<div className="w-full text-white pt-3 overflow-hidden border-mediumGray rounded-lg">
								<table className="w-full text-left bg-darkGray ">
									<thead className='overflow-hidden '>
										<tr className='bg-mediumGray rounded-t-lg'>
											<th className="px-6 py-3">
												Id
											</th>
											<th className="px-6 py-3">
												Customer
											</th>
											<th className="px-6 py-3">
												Date
											</th>
											<th className="px-6 py-3">
												Description
											</th>
											<th className="px-6 py-3">
											Quantity
											</th>
											<th className="px-6 py-3">
												Status
											</th>
										</tr>
									</thead>

									<tbody className='text-sm'>
										<tr className="border-b border-mediumGray">
											<th className="px-6 py-4 ">
												1
											</th>
											<td className="px-6 py-4">
												<div className='flex gap-1 items-center'>
													<img className='h-8 w-8' src="/assets/profile.png" alt="" />
													<div>
														<p>John Doe</p>
														<p className='text-xs text-mediumGray'>Garden view park, Kuwait</p>
													</div>
												</div>
											</td>
											<td className="px-6 py-4">
											12th July, 2023 23:00
											</td>
											<td className="px-6 py-4">
											Home delivery
											</td>
											<td className="px-6 py-4">
											1
											</td>
											<td className="px-6 py-4">
											Being delivered
											</td>
										</tr>
										
									</tbody>
								</table>
							</div>
						</div>
					</div>


				</div>
			</Layout>
			<RestoProfile showResto={showResto} setShowResto={setShowResto}/>
		</>
	)
}

export default Home
