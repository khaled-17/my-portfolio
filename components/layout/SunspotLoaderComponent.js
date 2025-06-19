'use client'
import React from 'react'

const SunspotLoaderComponent = () => {

  
  return (
<div className='bg-black h-screen    z-50 fixed w-full scrollbar-hide '>
  <div className=' justify-center items-center flex h-screen'>

      <div className="la-square-jelly-box ">
      <div></div>
      <div></div>
aaaa
      <style jsx>{`
        .la-square-jelly-box,
        .la-square-jelly-box > div {
          position: relative;
          box-sizing: border-box;
        }
        .la-square-jelly-box {
          // display: block;
          // font-size: 0;
          // color: #fff;
          // width: 100px;
          // height: 100px;
            display: block;
  font-size: 0;
  color: #fff;
  width: 64px; /* بدل 32 */
  height: 64px; /* بدل 32 */
        }
        .la-square-jelly-box > div {
          display: inline-block;
          background-color: currentColor;
          border: 0 solid currentColor;
        }
        .la-square-jelly-box > div:nth-child(1),
        .la-square-jelly-box > div:nth-child(2) {
          position: absolute;
          left: 0;
          width: 100%;
        }
        .la-square-jelly-box > div:nth-child(1) {
          top: -25%;
          z-index: 1;
          height: 100%;
          border-radius: 10%;
          animation: square-jelly-box-animate 0.6s -0.1s linear infinite;
        }
        .la-square-jelly-box > div:nth-child(2) {
          bottom: -9%;
          height: 10%;
          background: #000;
          border-radius: 50%;
          opacity: 0.2;
          animation: square-jelly-box-shadow 0.6s -0.1s linear infinite;
        }

        @keyframes square-jelly-box-animate {
          17% {
            border-bottom-right-radius: 10%;
          }
          25% {
            transform: translateY(25%) rotate(22.5deg);
          }
          50% {
            border-bottom-right-radius: 100%;
            transform: translateY(50%) scale(1, 0.9) rotate(45deg);
          }
          75% {
            transform: translateY(25%) rotate(67.5deg);
          }
          100% {
            transform: translateY(0) rotate(90deg);
          }
        }

        @keyframes square-jelly-box-shadow {
          50% {
            transform: scale(1.25, 1);
          }
        }
      `}</style>
    </div>
</div>
</div>
  )
}

export default SunspotLoaderComponent
