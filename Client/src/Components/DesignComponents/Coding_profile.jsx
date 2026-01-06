import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Coding_profile = () => {
  const [leetcodeData, setLeetcodeData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLeetCodeData = async () => {
      try {
        const data = await axios.get('https://alfa-leetcode-api.onrender.com/GODNSG0114/profile');
        setLeetcodeData(data.data);
      } catch (error) {
        console.error('Error fetching LeetCode data:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchLeetCodeData();
  }, []);

  return (
    <div className="relative group">
      {!loading && <div className="absolute inset-0 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-500"></div>}
      <div className="relative bg-gray-900 rounded-2xl p-8 border border-gray-800 hover:border-orange-500 transition duration-300">
        <div className="flex items-center justify-between mb-6">
          <h4 className="text-2xl font-bold text-orange-400">LeetCode</h4>
          <div className="text-sm text-gray-400">Rank: #{leetcodeData?.ranking || '---'}</div>
        </div>

        {loading ? (
          <div className="text-gray-500">Loading stats...</div>
        ) : (
          <>
            <div className="mb-6">
              <div className="text-4xl font-bold text-white mb-2">
                {leetcodeData?.totalSolved || 0}
              </div>
              <div className="text-gray-400">Problems Solved</div>
            </div>

            <div className="grid grid-cols-3 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-green-400">
                  {leetcodeData?.easySolved || 0}
                </div>
                <div className="text-xs text-gray-500">Easy</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-yellow-400">
                  {leetcodeData?.mediumSolved || 0}
                </div>
                <div className="text-xs text-gray-500">Medium</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-red-400">
                  {leetcodeData?.hardSolved || 0}
                </div>
                <div className="text-xs text-gray-500">Hard</div>
              </div>
            </div>

            <div className="mt-6 space-y-2">
              <div className="flex items-center gap-3">
                <div className="w-12 text-xs text-gray-500">Easy</div>
                <div className="flex-1 bg-gray-800 rounded-full h-2 overflow-hidden">
                  <div
                    className="bg-green-400 h-full transition-all duration-500"
                    style={{ width: `${(leetcodeData?.easySolved /(leetcodeData?.easySolved + leetcodeData?.mediumSolved + leetcodeData?.hardSolved) ) * 100}%` }}
                  ></div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 text-xs text-gray-500">Medium</div>
                <div className="flex-1 bg-gray-800 rounded-full h-2 overflow-hidden">
                  <div
                    className="bg-yellow-400 h-full transition-all duration-500"
                    style={{ width: `${(leetcodeData?.mediumSolved / (leetcodeData?.easySolved + leetcodeData?.mediumSolved + leetcodeData?.hardSolved)) * 100}%` }}
                  ></div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 text-xs text-gray-500">Hard</div>
                <div className="flex-1 bg-gray-800 rounded-full h-2 overflow-hidden">
                  <div
                    className="bg-red-400 h-full transition-all duration-500"
                    style={{ width: `${(leetcodeData?.hardSolved / (leetcodeData?.easySolved + leetcodeData?.mediumSolved + leetcodeData?.hardSolved)) * 100}%` }}
                  ></div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default Coding_profile