import React from 'react'
import Layout from '../../components/Layout'

const ListIngredients = () => {
	const handleCreate = (e) => {

	}
	return (
		<>
			<Layout>
				<div className='w-4/5  Lexend'>
					{/* topbar */}
					<div className='w-full p-4 flex items-center justify-between border-b border-textGray text-2xl font-semibold'>
						All Ingredients 
					</div>

					<div className='w-full p-5 grid gap-4'>
						<div className='w-full'>
							<input className='w-full outline-none bg-darkGray rounded-lg px-4 py-2' type="text" placeholder='Search...' />
						</div>

						<div className='flex gap-4'>
							{/* <Button buttonClassName={"w-auto px-3 py-1"} text={"Excel"} />
							<Button buttonClassName={"w-auto px-3 py-1"} text={"Print"} /> */}
						</div>

						<div className="w-full text-white overflow-scroll rounded-lg max-h-[71vh]">
							<table className="w-full text-left bg-darkGray h-full max-h-full">
								<thead className='sticky top-0'>
									<tr key={"table-head"} className='bg-mediumGray rounded-t-lg'>
										<th className="px-6 py-3">
											Id
										</th>
										<th className="px-6 py-3">
											Image
										</th>
										<th className="px-6 py-3">
											Name
										</th>
										<th className="px-6 py-3">
											Location
										</th>
									</tr>
								</thead>

								<tbody className='text-sm'>
									{/* {
										orders?.map((order) => {
											return <tr key={order?._id} className="border-b border-mediumGray ">
												<Link to={`/order/${order?._id}`} className="flex items-center px-6 py-4 ">
													#{order?._id?.slice(18)}
												</Link>
												<td className="px-6 py-4">
													<div className='flex gap-1 items-center'>
														<img className='h-8 w-8 rounded-lg' src={order?.customer?.image} alt="" />
														<div>
															<p>{order?.customer?.firstname} {order?.customer?.lastname}</p>
															<p className='text-xs text-mediumGray'>{order?.customer?.address}</p>
														</div>
													</div>
												</td>
												<td className="px-6 py-4">
													{moment(order?.date).format("Do MMM, YYYY - HH:mm")}
												</td>
												<td className="px-6 py-4">
													{order?.program?.name} ({order?.meals?.name})
												</td>
												<td className="px-6 py-4">
													{order?.restaurant?.title}
												</td>
												<td className="px-6 py-4">
													Being delivered
												</td>
											</tr>
										})
									} */}
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</Layout>
		</>
	)
}

export default ListIngredients