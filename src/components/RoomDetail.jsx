import React from 'react'

const RoomDetail = () => {
      const { id } = useParams();

  const room = data.find((item) => item.id === id);

  if (!room) return <h2>Room not found</h2>;

  return (
    <div>RoomDetail</div>
  )
}

export default RoomDetail