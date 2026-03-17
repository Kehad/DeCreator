"use client";
import React, { useState } from 'react';
import AudioSlider from './AudioSlider';
import FooterSoundEffects from './footerSoundEffects';
import { GainSlider } from './GainSlider';
import { WaveformIcon } from '@public/svg';


export const SpectralShaping = () => {
  const [hpf, setHpf] = useState(85);
  const [lpf, setLpf] = useState(12.5);

  return (
    <div className="">
      <header className="mb-8">
        <div className="flex items-center gap-2 mt-4 text-gray-400 group cursor-default">
          <span className="text-lg font-semibold tracking-wider">Spectral Shaping</span>
          <svg className="w-4 h-4 opacity-60 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
          </svg>
        </div>
        <p className="text-md text-white mt-1">Removes unwanted frequencies or highlights important ones</p>
      </header>

      <div className='space-y-3'>
        <GainSlider label="High Pass Filter (HPF)" value={hpf} left={20} right={200} plan='audio' unit='Hz' onChange={setHpf} spanText={hpf} />
        <GainSlider label="Low Pass Filter (LPF)" value={lpf} left={1} right={20} step={0.1} plan="audio" unit='KHz' spanText={lpf} onChange={setLpf} />
      </div>

      <section className="mt-8">
        <div className="flex justify-between text-xs mb-2 uppercase tracking-widest text-gray-400">
          <span>Peak meters</span>
          <span className="text-red-500 font-bold">-12.5 dB</span>
        </div>
        <div className="h-28 bg-[#161616] rounded-xl overflow-hidden relative border border-gray-800/50">
          <svg className="absolute bottom-0 w-full h-full text-red-600/40" viewBox="0 0 100 40" preserveAspectRatio="none">
            <path d="M0 40 L0 32 L5 28 L10 35 L15 20 L20 30 L25 25 L30 38 L35 22 L40 33 L45 27 L50 35 L55 20 L60 30 L65 25 L70 38 L75 22 L80 34 L85 28 L90 36 L95 24 L100 32 L100 40 Z" fill="currentColor" />
          </svg>
        </div>
      </section>

      <FooterSoundEffects text={`Cut off frequencies: ${hpf}Hz - ${lpf}kHz`} icon={<WaveformIcon />} />


    </div>
  );
};