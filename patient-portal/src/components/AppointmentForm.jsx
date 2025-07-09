import React, { useState } from 'react'

export default function AppointmentForm({ onSubmit }) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [date, setDate] = useState('')
  const [reason, setReason] = useState('')

  const handleSubmit = e => {
    e.preventDefault()
    onSubmit({ name, email, date, reason })
    setName('')
    setEmail('')
    setDate('')
    setReason('')
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto space-y-4 p-4 bg-white rounded shadow border border-gray-200"
    >
      <div>
        <label className="block text-sm font-medium">Name</label>
        <input
          type="text"
          required
          value={name}
          onChange={e => setName(e.target.value)}
          className="mt-1 block w-full border rounded p-2"
          placeholder="Patient Name"
        />
      </div>
      <div>
        <label className="block text-sm font-medium">Email</label>
        <input
          type="email"
          required
          value={email}
          onChange={e => setEmail(e.target.value)}
          className="mt-1 block w-full border rounded p-2"
          placeholder="you@example.com"
        />
      </div>
      <div>
        <label className="block text-sm font-medium">Date</label>
        <input
          type="date"
          required
          value={date}
          onChange={e => setDate(e.target.value)}
          className="mt-1 block w-full border rounded p-2"
        />
      </div>
      <div>
        <label className="block text-sm font-medium">Reason</label>
        <textarea
          required
          value={reason}
          onChange={e => setReason(e.target.value)}
          className="mt-1 block w-full border rounded p-2"
          placeholder="Brief reason for visit"
        />
      </div>
      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 disabled:opacity-50"
        disabled={!name || !email || !date || !reason}
      >
        Request Appointment
      </button>
    </form>
  )
}
