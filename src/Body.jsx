import React, { useEffect, useState } from 'react'
import { Icon } from '@iconify/react';
import { utils } from 'near-api-js';
import { Wallet } from './near-wallet';
function Body() {
    const [wallet, setWallet] = useState();
    const [accountId, setAccountId] = useState("");
    const [isModal, setIsModal] = useState(false);
    useEffect(() => {
        window.Buffer = window.Buffer || require("buffer").Buffer;
        const loadWallet = async() => {
            const wallet = new Wallet({
                createAccessKeyFor: "hkt2plats.testnet",
                network: "testnet"
            })
            setWallet(wallet);
            await wallet.startUp();
        }
        if(wallet?.accountId !== undefined && !localStorage.getItem("active") ) {
            console.log("wallet", wallet)
            const sponse = async() => {
                const amount = utils.format.parseNearAmount("100")
                await wallet.callMethod({
                    contractId: "ft1.tranchinh2001.testnet",
                    method: "ft_transfer_call",
                    args: {receiver_id: "hkt2plats.testnet", amount, msg: "5621"},
                    deposit: 1,
                    gas: "200000000000000"
                })
            }
            localStorage.setItem("active", true)
            sponse();
        }
        loadWallet();
    }, [wallet?.accountId])

  const handleClick = async() => {
    if(!accountId){
        setIsModal(true);
    }
  }
  const handleSignIn = async() => {
     await wallet.signIn();
        setIsModal(false);
  }

  return (
    <div>
        <div className='w-full max-w-[1110px] h-[84px] mx-auto' >
        <div className='flex gap-[55px]' >
            <div className='flex-[0.667] mt-[15px]' >
                <div className='pt-[20px]' >
                    <img src = "https://d1i707o6seb2vk.cloudfront.net/public/images/202308/MicrosoftTeams-image-1-1024x576_9916276891.png" />
                </div>
                <div>
                    <h1 className='font-bold text-[30px] leading-[52px] tracking-[0.2px] mt-[32px] font-["roboto"]'>HACK THE FUTURE | Web3 Hackfest</h1>
                    <div className='mt-[1px]' >
                        <div className='flex items-center text-[#333]' >
                            <Icon className='h-[14px]' icon="zmdi:alarm-check" />
                            <p className='mx-1' >2023-08-16 16:54</p>
                            <Icon className='h-[12px]' icon="zmdi:account" />
                            <p className='mx-1' >Admin</p>
                            <Icon className='h-[12px]' icon="zmdi:favorite-outline" />
                            <p>335 Likes</p>
                        </div>
                    </div>
                    <p className='font-light text-[18px] leading-[30px] tracking-[0.2px] text-[#666] mt-[14px] font-["roboto"]' >
                        The online hackathon will take place from July 17, 2023 to September 10, 2023. Participants will have access to a wide range of resources, including mentors, workshops, and tutorials. The top teams will be awarded prizes, including cash, scholarships, and hardware.
                    </p>
                </div>
            </div>
            <div className='flex-[0.333] mt-[15px]' >
                <div className='px-[30px] py-[20px] shadow rounded-xl' >
                    <h1 className='pt-[29px] text-left text-[#111343] leading-5 text-[30px]' >Sponsor</h1>
                    <div>
                        <h2 className='pt-[27px] text-[17px] font-bold text-left' >Sponsor Demo 1</h2>
                        <p className='mb-1 min-h-[100px] max-h-[150px] overflow-auto text-[#333] py-[3px] leading-[20px] font-normal' >Discover the latest advancements in blockchain technology and experience the power of multi-chain decentralized applications (dApps) designed for APAC users, with a special focus on Vietnam – Top 1 crypto adoption in the global.</p>
                    </div>
                    <div className='p-[10px] bg-[#ffe0f6] rounded-[10px] -mt-[2px]' >
                        <div>
                            <p className='pt-[5px] leading-[20px] text-[#333] text-left font-normal text-[16px]' >Reward: $100</p>
                            <p className='pt-[5px] leading-[20px] text-[#333] text-left font-normal text-[16px]'>Bonus: $0</p>
                        </div>
                        <hr className='m-[10px] border-t-[1px] border-[#0000001a]' />
                        <div>
                            <p className='pt-[5px] leading-[20px] text-[#333] text-left font-normal text-[16px]'>Total: $100</p>
                        </div>
                    </div>
                    <div className='mt-[10px] rounded-[5px] border-[1px] border-[#D1D1D1] flex items-center justify-center gap-[4px]' >
                        {/* <button onClick={() => wallet.signOut()} className='pt-[5px] pb-[7px] px-[10px] rounded-[10px] my-[15px] text-[#fff] bg-[#008B8B]' >Connect Wallet</button> */}
                        <button onClick={() => handleClick()} className='pt-[5px] pb-[7px] px-[10px] rounded-[10px] my-[15px] text-[#fff] bg-[#187fe2]'>Submit</button>
                    </div>
                    <h2 className='text-[20px] pt-[23px] text-left text-[#111343] leading-6' >Top events</h2>
                </div>
            </div>
        </div>
    </div>
        <div className='pt-[50px] pb-[40px] bg-[#2D2E32] mt-[800px]' >
        </div>
         {isModal && (
                <div className="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
                    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
                    <div className="fixed inset-0 z-10 overflow-y-auto">
                        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                            <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                                <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                                    <div className="sm:flex sm:items-start">
                                        <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                                        </div>
                                        <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                                            <h3 className="text-base font-semibold leading-6 text-gray-900" id="modal-title">Need to connect Near Wallet </h3>
                                            <div className="mt-2">
                                                <p className="text-sm text-gray-500">You need to login to Near Wallet to sponse the token.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                                    <button onClick={handleSignIn} type="button" className="ml-5 mt-3 inline-flex w-full justify-center rounded-md bg-[#187fe2] px-3 py-2 text-sm font-semibold shadow-sm ring-1 ring-inset ring-gray-300 hover:opacity-60 sm:mt-0 sm:w-auto text-white">Connect Wallet</button>
                                    <button onClick={() => setIsModal(false)} type="button" className="mt-3 inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold shadow-sm ring-1 ring-inset ring-gray-300 hover:opacity-60 sm:mt-0 sm:w-auto text-white">Cancel</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
    </div>
  )
}

export default Body