import React from 'react';
import Image from 'next/image';
import { infoData } from '@/data/InfoData';

export default function InfoSection() {
  return (
    <section id="info" className="py-20">
      <div className="container mx-auto px-4">
        <h3 className='text-center text-blue'>역량 소개</h3>
        <h2 className="text-3xl text-center mb-12">사용자의 경험을 최우선으로 생각하며, 적극적으로 소통합니다.</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {infoData.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="relative w-full h-48">
                <Image
                  src={item.imageUrl}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}