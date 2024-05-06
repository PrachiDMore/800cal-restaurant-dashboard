import React, { useState } from "react";
import Layout from "../components/Layout";
import { PiNotepad, PiWallet } from "react-icons/pi";
import { AiOutlineTags } from "react-icons/ai";
import { BsCart } from "react-icons/bs";
import RestoProfile from "../components/RestoProfile";
import Button from "../components/Button";
import { UseOrderContext } from "../context/Order";
import moment from "moment/moment";
import { Link } from "react-router-dom";
import { UseAuthContext } from "../context/Auth";

const Home = () => {
  const [showResto, setShowResto] = useState(false);
  const { orders } = UseOrderContext();
  const { user } = UseAuthContext();

  return (
    <>
      <Layout>
        <div className="w-4/5  Lexend">
          {/* topbar */}
          <div className="w-full p-4 flex items-center justify-between border-b border-textGray text-2xl font-semibold">
            Dashboard
          </div>

          <div className="w-full p-5 grid grid-cols-1 gap-4">
            {/* 1st section */}
            <div className="w-full grid grid-cols-3 gap-8">
              <div className="bg-darkGray rounded-xl p-3 py-5">
                <div className="w-full flex items-center justify-between text-lg">
                  <p className="font-light">Current Orders</p>
                  <PiNotepad className="text-green text-3xl" />
                </div>
                <p className="text-2xl font-bold">
                  {
                    orders?.filter((data) => data.status === "processing")
                      .length
                  }
                </p>
              </div>

              <div className="bg-darkGray rounded-xl p-3 py-5">
                <div className="w-full flex items-center justify-between text-lg">
                  <p className="font-light">Total Orders</p>
                  <BsCart className="text-green text-2xl font-bold" />
                </div>
                <p className="text-2xl font-bold">{orders?.length}</p>
              </div>

              <div className="hidden bg-darkGray rounded-xl p-3 py-5">
                <div className="w-full flex items-center justify-between text-lg">
                  <p className="font-light">Today's Sale</p>
                  <AiOutlineTags className="text-green text-3xl" />
                </div>
                <p className="text-2xl font-bold">1400KD</p>
              </div>

              <div className="bg-darkGray rounded-xl p-3 py-5">
                <div className="w-full flex items-center justify-between text-lg">
                  <p className="font-light">Wallet</p>
                  <PiWallet className="text-green text-3xl" />
                </div>
                <p className="text-2xl font-bold">{user?.wallet} KWD</p>
              </div>
            </div>

            {/* 2nd section */}
            <div className="w-full hidden grid-cols-2 gap-x-4">
              <div className="bg-darkGray rounded-xl p-3">
                <p className="font-semibold">Revenue</p>
              </div>

              <div className="bg-darkGray rounded-xl p-3">
                <p className="font-semibold">Summary</p>
                <p className="text-mediumGray leading-5 text-sm">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
                  provident natus quo culpa, illo asperiores nisi magnam id
                  excepturi unde?
                </p>
              </div>
            </div>

            {/* 3rd section */}
            <div className="w-full grid gap-4">
              <p className="font-semibold text-xl ">Orders</p>

              <div className="hidden gap-4">
                <Button buttonClassName={"w-auto px-3 py-1"} text={"Excel"} />
                <Button buttonClassName={"w-auto px-3 py-1"} text={"Print"} />
              </div>

              <div className="w-full text-white  overflow-auto rounded-lg max-h-[40vh]">
                <table className="w-full text-left bg-darkGray">
                  <thead className="overflow-hidden sticky top-0">
                    <tr className="bg-mediumGray rounded-t-lg">
                      <th className="px-6 py-3">Id</th>
                      <th className="px-6 py-3">Customer</th>
                      <th className="px-6 py-3">Date</th>
                      <th className="px-6 py-3">Description</th>
                      <th className="px-6 py-3">Restaurant</th>
                      <th className="px-6 py-3">Status</th>
                    </tr>
                  </thead>

                  <tbody className="text-sm">
                    {orders?.map((order) => {
                      return (
                        <tr
                          key={order?._id}
                          className="border-b border-mediumGray"
                        >
                          <Link
                            to={`/order/${order?._id}`}
                            className="flex justify-center items-center h-full font-bold px-6 py-4 "
                          >
                            #{order?._id?.slice(18)}
                          </Link>
                          <td className="px-6 py-4">
                            <div className="flex gap-1 items-center">
                              <img
                                className="h-8 w-8 rounded-lg"
                                src={order?.customer?.image}
                                alt=""
                              />
                              <div>
                                <p>
                                  {order?.customer?.firstname}{" "}
                                  {order?.customer?.lastname}
                                </p>
                                <p className="text-xs text-mediumGray">
                                  {order?.customer?.address}
                                </p>
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
                          <td className="px-6 py-4">Being delivered</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </Layout>
      <RestoProfile showResto={showResto} setShowResto={setShowResto} />
    </>
  );
};

export default Home;
