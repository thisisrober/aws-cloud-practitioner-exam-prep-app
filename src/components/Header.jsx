import React, { useState } from 'react';
import { X, Clock, ClipboardCheck } from 'lucide-react';

const Header = ({ onBack, quizConfig, timeLeft, formatTime, quizFinished, finishQuiz }) => {
  const [showAbandonDialog, setShowAbandonDialog] = useState(false);

  const animationStyles = `
    @keyframes fadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }
    @keyframes zoomIn {
      from {
        opacity: 0;
        transform: scale(0.95);
      }
      to {
        opacity: 1;
        transform: scale(1);
      }
    }
    .modal-overlay {
      animation: fadeIn 0.2s ease-in-out;
    }
    .modal-content {
      animation: zoomIn 0.3s ease-in-out;
    }
  `;

  return (
    <>
      <style>{animationStyles}</style>
    <nav className="bg-white border-b border-slate-200 px-6 py-4 flex items-center justify-between sticky top-0 z-10">
      <div className="flex items-center gap-4">
        <button 
          onClick={() => setShowAbandonDialog(true)}
          className="p-2 hover:bg-slate-100 rounded-full transition-colors"
        >
          <X className="w-5 h-5 text-slate-500" />
        </button>
        <div className="h-6 w-[1px] bg-slate-200 mx-2" />
        <h2 className="font-bold text-slate-700 hidden sm:block">
          {quizConfig?.type === 'domain' ? `Domain ${quizConfig.domainId}` : 'Certification Exam'}
        </h2>
      </div>

      <div className="flex items-center gap-6">
        <div className="flex items-center gap-2 px-4 py-2 bg-slate-100 rounded-full font-mono text-slate-700 font-bold">
          <Clock className="w-4 h-4 text-orange-500" />
          {formatTime(timeLeft)}
        </div>
        {!quizFinished && (
          <button 
            onClick={finishQuiz}
            className="bg-emerald-500 hover:bg-emerald-600 text-white px-5 py-2 rounded-lg font-bold transition-colors flex items-center gap-2"
          >
            <ClipboardCheck className="w-4 h-4" />
            Finish
          </button>
        )}
      </div>

      {showAbandonDialog && (
        <div className="modal-overlay fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="modal-content bg-white rounded-2xl p-8 max-w-md shadow-2xl">
            <h3 className="text-lg font-bold text-slate-900 mb-2">Abandon Test?</h3>
            <p className="text-sm text-slate-600 mb-6">Are you sure you want to leave the test? Your progress will not be saved.</p>
            <div className="flex gap-3">
              <button
                onClick={() => setShowAbandonDialog(false)}
                className="flex-1 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg font-bold transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  setShowAbandonDialog(false);
                  onBack();
                }}
                className="flex-1 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg font-bold transition-colors"
              >
                Abandon
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
    </>
  );
};

export default Header;
