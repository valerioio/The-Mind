export default function Root() {
  return (
    <>
      <h1>The Mind</h1>
      <input type="text" id="name" />
      <label for="name">Name</label>
      <input type="text" id="room" />
      <label for="room">Room</label>
      <a href="waiting-room">
        <button>Enter</button>
      </a>
    </>
  );
}
