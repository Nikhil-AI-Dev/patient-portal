import React, { useState, useEffect } from 'react'
import AppointmentForm from './components/AppointmentForm.jsx'
import RequestCard from './components/RequestCard.jsx'

export default function App() {
  const [requests, setRequests] = useState([])

  // Fetch existing requests on mount
  useEffect(() => {
    fetch('http://localhost:5000/requests')
      .then(res => res.json())
      .then(data => {
        console.log('App Loaded Data:', data)
        setRequests(data)
      })
      .catch(err => console.error('Failed to load requests:', err))
  }, [])

  // POST a new request and update state
  const handleNewRequest = async req => {
    try {
      const res = await fetch('http://localhost:5000/requests', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(req),
      })
      const saved = await res.json()
      setRequests(prev => [...prev, saved])
    } catch (err) {
      console.error('Failed to save request:', err)
    }
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-2xl font-bold text-center mb-6">Patient Portal</h1>

      <AppointmentForm onSubmit={handleNewRequest} />

      {/* Render cards when we have requests */}
      {requests.length > 0 && (
        <div className="mt-8">
          {requests.map(r => (
            <RequestCard key={r.id} request={r} />
          ))}
        </div>
      )}
    </div>
  )
}
