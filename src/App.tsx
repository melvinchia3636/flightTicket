import React from 'react';
import { Icon } from '@iconify/react';
import Barcode from './barcode.png';
import Barcode2 from './barcode2.svg';

function App() {
  return (
    <div className="h-screen overflow-x-scroll flex text-2xl bg-gray-200">
      <div className="inline-block p-32 self-center">
        <div className="w-[72rem] h-[32rem] drop-shadow-[5px_5px_10px_rgba(0,0,0,0.2)] rounded-xl overflow-hidden flex">
          <div className="w-[70%] bg-white rounded-xl overflow-hidden relative h-full flex flex-col text-gray-600">
            <div className="w-full p-4 px-6 bg-primary gap-2 h-24 font-medium text-gray-200 flex items-center justify-between">
              <div className="flex gap-3 items-center uppercase tracking-wide">
                <Icon icon="akar-icons:planet" className="w-12 h-12" />
                <div>
                  <h1 className="text-3xl font-semibold">Universal Airlines</h1>
                  <p className="text-base">Passenger Ticket</p>
                </div>
              </div>
              <div>
                <p className="uppercase tracking-wide">Boarding Pass</p>
                <p className="text-sm uppercase tracking-wide text-right">Business Class</p>
              </div>
            </div>
            <div className="flex flex-1 p-5 gap-5">
              <div className="h-full">
                <img src={Barcode} alt="" className="h-full w-16 object-cover" />
              </div>
              <div className="flex flex-col justify-between -mt-2">
                <div className="flex gap-12">
                  <div>
                    <span className="uppercase text-sm font-semibold">name of passenger</span>
                    <p className="uppercase text-lg">chia doe john / Melvin</p>
                  </div>
                  <div>
                    <span className="uppercase text-sm font-semibold">date</span>
                    <p className="uppercase text-lg">16 OCT 2022</p>
                  </div>
                  <div>
                    <span className="uppercase text-sm font-semibold">flight no.</span>
                    <p className="uppercase text-lg">DL 9424</p>
                  </div>
                  <div>
                    <span className="uppercase text-sm font-semibold">class</span>
                    <p className="uppercase text-lg">B</p>
                  </div>
                </div>
                <div>
                  <span className="uppercase text-sm font-semibold">FROM</span>
                  <p className="uppercase text-lg">SINGAPORE CHANGI AIRPORT / SIN</p>
                </div>
                <div>
                  <span className="uppercase text-sm font-semibold">TO</span>
                  <p className="uppercase text-lg">KUALA LUMPUR INTERNATIONAL AIRPORT / KUL</p>
                </div>
                <div className="flex gap-12 pt-6">
                  <div>
                    <span className="uppercase text-sm font-semibold">gate</span>
                    <p className="uppercase text-5xl font-semibold">27B</p>
                  </div>
                  <div>
                    <span className="uppercase text-sm font-semibold">departure time</span>
                    <p className="uppercase text-5xl font-semibold">20:40</p>
                  </div>
                  <div>
                    <span className="uppercase text-sm font-semibold">seat</span>
                    <p className="uppercase text-5xl font-semibold">32A</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full bg-primary text-gray-200 p-4 flex items-center">
              <p className="text-sm">2Q1ZL5738</p>
              <p className="flex-1 text-center text-sm">PLEASE BE AT THE GATE 30 MINUTES BEFORE DEPARTURE</p>
            </div>
            <Icon
              icon="clarity:airplane-solid"
              className="w-[16rem] h-[16rem] absolute bottom-0 right-8 text-primary opacity-10"
            />
          </div>
          <div className="absolute z-[9999] left-[70%] top-1/2 -translate-y-1/2 h-[90%] flex flex-col justify-between">
            {Array(16)
              .fill(0)
              .map(() => (
                <span className="w-1.5 h-4 bg-gray-200 rounded-full -translate-x-1/2" />
              ))}
          </div>
          <div className="w-[30%] bg-white rounded-xl overflow-hidden h-full flex flex-col text-gray-600">
            <div className="w-full p-4 bg-primary h-24 flex-shrink-0 font-medium text-gray-200 flex flex-col items-center">
              <p className="uppercase tracking-wide mt-1">UNIVERSAL AIRLINES</p>
              <p className="text-sm uppercase tracking-wide">Business Class</p>
            </div>
            <div className="flex flex-1 flex-col justify-between -mt-2 p-5">
              <div className="flex items-center justify-center gap-6 font-medium py-6">
                <p className="text-6xl">SIN</p>
                <Icon icon="fa-solid:plane" className="w-7 h-7 text-primary" />
                <p className="text-6xl">KUL</p>
              </div>
              <div className="flex gap-12">
                <div>
                  <span className="uppercase text-sm font-semibold">name of passenger</span>
                  <p className="uppercase text-lg">chia doe john / Melvin</p>
                </div>
              </div>
              <div className="flex gap-12">
                <div>
                  <span className="uppercase text-sm font-semibold">date</span>
                  <p className="uppercase text-lg">16 OCT 2022</p>
                </div>
                <div>
                  <span className="uppercase text-sm font-semibold">departure</span>
                  <p className="uppercase text-lg">20:40</p>
                </div>
              </div>
              <div className="flex gap-12 relative">
                <div>
                  <span className="uppercase text-sm font-semibold">gate</span>
                  <p className="uppercase text-5xl font-semibold">27B</p>
                </div>
                <div>
                  <span className="uppercase text-sm font-semibold">seat</span>
                  <p className="uppercase text-5xl font-semibold">32A</p>
                </div>
                <Icon
                  icon="akar-icons:planet"
                  className="absolute -right-2 -bottom-9 w-48 h-48 text-primary opacity-10"
                />
              </div>
            </div>
            <div className="w-full bg-primary text-gray-200 p-2 gap-8 flex items-center justify-between">
              <img src={Barcode2} alt="" className="h-6 w-full object-cover ml-1" />
              <p className="text-base p-2 -mt-[2px]">2Q1ZL5738</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
