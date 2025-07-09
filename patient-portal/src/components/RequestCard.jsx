import React from 'react'

export default function RequestCard({ request }) {
  const { name, email, date, reason } = request

  return (
    <div className="max-w-md mx-auto my-4 p-4 bg-white rounded shadow border border-gray-200">
      <h2 className="text-lg font-semibold">{name}</h2>
      <p className="text-sm text-gray-600">{email}</p>
      <p className="mt-2">
        <span className="font-medium">Date:</span> {new Date(date).toLocaleDateString()}
      </p>
      <p className="mt-1">
        <span className="font-medium">Reason:</span> {reason}
      </p>
    </div>
  )
}
