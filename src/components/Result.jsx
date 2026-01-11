import React from 'react';
import { Trophy } from 'lucide-react';

const Result = ({ score, onRetry, onBack }) => {
  return (
    <div className="max-w-xl mx-auto text-center py-12">
      <div className="mb-8 flex justify-center">
        <div className={`p-8 rounded-full ${score >= 700 ? 'bg-emerald-100 text-emerald-600' : 'bg-red-100 text-red-600'}`}>
          <Trophy className="w-16 h-16" />
        </div>
      </div>
      <h2 className="text-4xl font-extrabold mb-2">
        {score >= 700 ? 'Certification Passed!' : 'Not Passed'}
      </h2>
      <p className="text-slate-500 text-lg mb-8">Your estimated score on the AWS scale</p>
      
      <div className="flex items-center justify-center gap-8 mb-12">
        <div className="text-center">
          <div className="text-5xl font-black text-slate-900 mb-1">{score}</div>
          <div className="text-xs font-bold uppercase tracking-widest text-slate-400">Points (100-1000)</div>
        </div>
        <div className="w-[1px] h-12 bg-slate-200" />
        <div className="text-center">
          <div className="text-5xl font-black text-slate-900 mb-1">700</div>
          <div className="text-xs font-bold uppercase tracking-widest text-slate-400">Minimum to pass</div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-8">
        <button 
          onClick={onBack}
          className="p-4 bg-slate-100 hover:bg-slate-200 rounded-xl font-bold transition-colors text-slate-700"
        >
          Back to Home
        </button>
        <button 
          onClick={onRetry}
          className="p-4 bg-orange-500 hover:bg-orange-600 text-white rounded-xl font-bold transition-colors"
        >
          Retry Test
        </button>
      </div>
    </div>
  );
};

export default Result;
