import React from 'react'

export const phoneContents = {
  hero: () => (
    <div className="h-full bg-gradient-to-b from-blue-50 to-white">
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-4 pt-8 pb-6">
        <h1 className="text-xl font-bold mb-2">Kunal Jain</h1>
        <p className="text-sm opacity-90">Full-Stack Developer</p>
      </div>
      <div className="p-4 space-y-4">
        <div className="bg-white rounded-xl p-4 shadow-md border border-gray-200">
          <div className="text-xs text-gray-500 mb-1">Location</div>
          <div className="text-sm font-bold text-gray-800">📍 Mumbai, India</div>
        </div>
        <div className="bg-white rounded-xl p-4 shadow-md border border-gray-200">
          <div className="text-xs text-gray-500 mb-1">Experience</div>
          <div className="text-sm font-bold text-gray-800">⚡ 2+ Years</div>
        </div>
        <div className="bg-white rounded-xl p-4 shadow-md border border-gray-200">
          <div className="text-xs text-gray-500 mb-1">Specialization</div>
          <div className="text-sm font-bold text-gray-800">🚀 Mobile & Web Apps</div>
        </div>
      </div>
    </div>
  ),
  
  ecommerce: () => (
    <div className="h-full bg-gradient-to-b from-blue-50 to-white overflow-hidden">
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-3 pt-8 sticky top-0 z-10">
        <div className="flex justify-between items-center mb-3">
          <h1 className="text-lg font-bold">ShopHub</h1>
          <div className="flex gap-2">
            <div className="w-5 h-5 rounded-full bg-white/30 flex items-center justify-center text-xs">🔍</div>
            <div className="w-5 h-5 rounded-full bg-white/30 flex items-center justify-center text-xs">🛒</div>
          </div>
        </div>
        <div className="bg-white/20 rounded-lg px-3 py-2 text-xs">
          Search products...
        </div>
      </div>
      <div className="flex gap-2 px-3 py-3 overflow-x-auto">
        {['All', 'Fashion', 'Electronics'].map((cat, i) => (
          <button key={i} className={`px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap ${
            i === 0 ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'
          }`}>
            {cat}
          </button>
        ))}
      </div>
      <div className="px-3 py-2 space-y-2">
        {[1, 2, 3].map(i => (
          <div key={i} className="bg-white rounded-xl p-3 border border-gray-200 shadow-sm">
            <div className="h-24 bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg mb-2 flex items-center justify-center text-2xl">
              📦
            </div>
            <h3 className="font-bold text-xs text-gray-800">Premium Product {i}</h3>
            <p className="text-xs text-gray-500 mb-2">High quality item</p>
            <div className="flex justify-between items-center">
              <span className="text-sm font-bold text-blue-600">₹{299 * i}</span>
              <button className="bg-blue-600 text-white px-2 py-1 rounded text-xs font-semibold">
                Add
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  ),
  
  food: () => (
    <div className="h-full bg-white overflow-hidden">
      <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white p-3 pt-8 pb-6 sticky top-0 z-10">
        <div className="flex justify-between items-center mb-3">
          <h1 className="text-lg font-bold">FoodHub</h1>
          <div className="w-5 h-5 rounded-full bg-white/30 flex items-center justify-center text-xs">🛒</div>
        </div>
        <div className="flex items-center gap-2 bg-white/20 rounded-lg px-2 py-2 text-xs">
          <span>📍</span> <span>Current Location</span>
        </div>
      </div>
      <div className="p-3 space-y-3">
        <div className="h-24 bg-gradient-to-r from-orange-300 to-orange-400 rounded-xl flex items-center justify-center text-white">
          <div className="text-center">
            <p className="text-xl font-bold">50% OFF</p>
            <p className="text-xs">On all orders today</p>
          </div>
        </div>
        {[1, 2, 3].map(i => (
          <div key={i} className="border border-gray-200 rounded-lg overflow-hidden">
            <div className="h-20 bg-gradient-to-br from-orange-200 to-orange-300 flex items-center justify-center text-3xl">
              🍕
            </div>
            <div className="p-3 bg-white">
              <p className="font-bold text-xs text-gray-800">Restaurant {i}</p>
              <div className="flex items-center justify-between text-xs text-gray-600 mt-1">
                <span>⭐ 4.9 • 200 reviews</span>
                <span>🕐 25 min</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  ),
  
  fintech: () => (
    <div className="h-full bg-gradient-to-b from-purple-50 to-white overflow-hidden">
      <div className="bg-gradient-to-r from-purple-600 to-purple-700 text-white p-3 pt-8 pb-5 rounded-b-3xl">
        <div className="flex justify-between items-center">
          <h1 className="text-lg font-bold">FinWallet</h1>
          <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">👤</div>
        </div>
      </div>
      <div className="px-3 py-3">
        <div className="bg-gradient-to-br from-purple-600 to-purple-700 text-white rounded-2xl p-4 shadow-lg mb-3">
          <p className="text-xs opacity-80 mb-2">Total Balance</p>
          <h2 className="text-3xl font-bold mb-3">₹24,500</h2>
          <div className="flex justify-between items-end">
            <div>
              <p className="text-xs opacity-80">Card Number</p>
              <p className="text-sm font-mono">4532 •••• 8901</p>
            </div>
            <div className="text-2xl">💳</div>
          </div>
        </div>
        <div className="grid grid-cols-4 gap-2 mb-3">
          {['➤', '⬇️', '💳', '📊'].map((icon, i) => (
            <button key={i} className="flex flex-col items-center gap-1 p-2 bg-gray-100 rounded-xl text-xs font-semibold text-gray-800">
              <span className="text-lg">{icon}</span>
            </button>
          ))}
        </div>
        <div className="space-y-2">
          <h3 className="font-bold text-xs text-gray-800">Transactions</h3>
          {[
            { name: 'Starbucks', amount: '-₹450', icon: '☕' },
            { name: 'Salary', amount: '+₹50,000', icon: '💰', positive: true },
            { name: 'Netflix', amount: '-₹199', icon: '🎬' }
          ].map((tx, i) => (
            <div key={i} className="flex items-center justify-between p-2 bg-gray-50 rounded-lg border border-gray-200">
              <div className="flex items-center gap-2">
                <span className="text-lg">{tx.icon}</span>
                <p className="text-xs font-semibold text-gray-800">{tx.name}</p>
              </div>
              <p className={`text-xs font-bold ${tx.positive ? 'text-green-600' : 'text-gray-800'}`}>
                {tx.amount}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  ),
  
  ai: () => (
    <div className="h-full bg-gradient-to-b from-green-50 to-white overflow-hidden">
      <div className="bg-gradient-to-r from-green-600 to-green-700 text-white p-3 pt-8 pb-6 sticky top-0 z-10">
        <h1 className="text-lg font-bold">🔥 Fire NOC AI</h1>
        <p className="text-xs opacity-90">Inspection Framework</p>
      </div>
      <div className="p-3 space-y-3">
        <div className="bg-white rounded-xl p-4 border border-green-200 shadow-sm">
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-bold text-sm text-gray-800">Current Inspection</h3>
            <span className="px-2 py-1 bg-green-500/20 text-green-600 rounded-full text-xs font-bold">
              Active
            </span>
          </div>
          <div className="space-y-2">
            {[
              'Location Verified',
              'Altitude Check',
              'Duplicate Detection',
              'Decibel Analysis'
            ].map((check, i) => (
              <div key={i} className="flex items-center justify-between text-xs">
                <span className="text-gray-600">{check}</span>
                <span className="text-green-600 font-bold">✓ {i === 0 ? 'Matched' : i === 1 ? 'Valid' : i === 2 ? 'Passed' : 'Normal'}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm">
          <h3 className="font-bold text-sm text-gray-800 mb-2">AI Analysis</h3>
          <div className="h-20 bg-gradient-to-br from-green-200 to-green-300 rounded-lg flex items-center justify-center text-3xl mb-2">
            🤖
          </div>
          <p className="text-xs text-gray-600 mb-2">Processing with AI hash detection...</p>
          <div className="bg-gray-100 rounded-full h-2 overflow-hidden">
            <div className="bg-green-600 h-full" style={{ width: '85%' }} />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-2">
          <div className="bg-white rounded-xl p-3 border border-gray-200 text-center">
            <div className="text-2xl font-bold text-green-600">95%</div>
            <div className="text-xs text-gray-600">Accuracy</div>
          </div>
          <div className="bg-white rounded-xl p-3 border border-gray-200 text-center">
            <div className="text-2xl font-bold text-blue-600">124</div>
            <div className="text-xs text-gray-600">Inspections</div>
          </div>
        </div>
      </div>
    </div>
  ),
}
