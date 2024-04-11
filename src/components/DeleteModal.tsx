interface Props {
  event?: Event
}

const DeleteModal = ({ event }: Props): JSX.Element => {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center">
      {/* overlay */}
      <div className="absolute w-full h-full bg-black opacity-40"></div>

      {/* content */}
      <div className="absolute w-1/2 h-1/2 bg-white">yo</div>
    </div>
  )
}

export default DeleteModal
