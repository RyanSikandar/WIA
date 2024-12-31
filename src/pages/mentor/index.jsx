import React, { useState, useEffect } from 'react';
import AdvertisementCard from '../../components/AdCard';
import Header from '../../components/Header';
import { getAllAds } from '../../Repository/mentorRepo';
import { useQuery } from '@tanstack/react-query';
import { useRedirect } from '../../customHook/useRedirect';

function Mentors() {
  useRedirect();

    const {data: sampleAdvertisements, isLoading, isSuccess
    } = useQuery({
        queryKey: ["getAllAds"],
        queryFn: getAllAds,
    });

    if (isLoading) {
        return <p>Loading...</p>;
    }
    if (isSuccess) {
        console.log("sampleAdvertisements", sampleAdvertisements);
    }


  return (
    <>
      <Header userRole={'woman'} />
      <div className="min-h-screen bg-gray-100 flex flex-col items-center py-8 space-y-4">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Mentor Advertisements</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sampleAdvertisements.map((advertisement, index) => (
            <div key={index} className="flex flex-col items-center">
              <AdvertisementCard advertisement={advertisement} />
              
            </div>
          ))}
        </div>
      </div>

      
    </>
  );
}

export default Mentors;
