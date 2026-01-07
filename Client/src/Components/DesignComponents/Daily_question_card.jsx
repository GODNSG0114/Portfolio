import React, { useContext ,useEffect,useState } from 'react'
import axios from 'axios';
import {toast} from 'react-toastify'
import appContext from '../../Context/AppContext';

const Daily_question_card = () => {

const {dailyQuestion, dailyLoading , dailysolved} = useContext(appContext)

 if(dailyQuestion) {return (
    <>
      {/* Daily Question Card */}
      <div className="relative group">
        { !dailyLoading && <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-500"></div>}
        <div className="relative bg-gray-900 rounded-2xl p-20 border border-gray-800 hover:border-purple-500 transition duration-300">
          <div className="flex items-center justify-between mb-6">
            <h4 className="text-2xl font-bold text-purple-400">Daily Challenge Status</h4>
            <div className="text-xs text-gray-400 bg-gray-800 px-3 py-1 rounded-full">
              {new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
            </div>
          </div>

          {dailyLoading ? (
            <div className="text-gray-500">Loading daily question...</div>
          ) : 
            <>
              {/* Question Name */}
              <div className="mb-6">
                <div className="text-xl font-semibold text-white mb-3">
                 <a href={dailyQuestion.questionLink} target='_blank'> {dailyQuestion.questionTitle || 'Daily Coding Challenge'}</a>
                </div>
                {dailyQuestion.difficulty && (
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${dailyQuestion.difficulty === 'Easy' ? 'bg-green-500/20 text-green-400' :
                    dailyQuestion.difficulty === 'Medium' ? 'bg-yellow-500/20 text-yellow-400' :
                      'bg-red-500/20 text-red-400'
                    }`}>
                    {dailyQuestion.difficulty}
                  </span>
                )}
              </div>

              {/* Status Section */}
              <div className="mb-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-3 h-3 rounded-full ${dailysolved ? 'bg-green-400' : 'bg-gray-600'
                    }`}></div>
                  <span className={`font-medium ${dailysolved ? 'text-green-400' : 'text-gray-400'
                    }`}>
                    {dailysolved ? <div>Solved -By <span className='font-bold underline'>NSG</span></div> : 'Not Solved Yet'}
                  </span>
                </div>

                {/* Solution Button */}
                {dailysolved && dailyQuestion.solutionUrl && (
                  <a
                    href={dailyQuestion.solutionUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition duration-300 shadow-lg hover:shadow-xl"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    View Solution
                  </a>
                )}
              </div>
            </>
          }
        </div>
      </div>
    </>
  )}
  
}

export default Daily_question_card