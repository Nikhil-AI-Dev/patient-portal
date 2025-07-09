import React, { useState } from 'react'
import AppointmentForm from './components/AppointmentForm.jsx'
import RequestCard from './components/RequestCard.jsx'

export default function App() {
  const [requests, setRequests] = useState([])

  const handleNewRequest = req => {
    setRequests(prev => [...prev, { ...req, id: Date.now() }])
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-2xl font-bold text-center mb-6">Patient Portal</h1>

      <AppointmentForm onSubmit={handleNewRequest} />

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
