const AddPlayer = () => {
  return (
    <div>
      <form action="/server">
        <h3>Player Name</h3>
        <input type="text" name="playername" placeholder="input player name" />
        <br />
        <br />

        <h3>Player Image</h3>
        <input type="file" id="playerImage" name="playerImage" />
        <br />
        <br />

        <h3>nationality</h3>
        <p>Is the player Indian?</p>
        <input type="radio" name="nationality" id="indian" />
        <label>Yes</label>
        <input type="radio" name="nationality" id="notIndian" />
        <label>No</label>
        <br />
        <br />

        <h3>Player Type</h3>
        <p>Is the player batsman/bowler?</p>
        <input type="radio" name="type" id="batsman" />
        <label>Batsman</label>
        <input type="radio" name="type" id="bowler" />
        <label>Bowler</label>
        <input type="radio" name="type" id="batAndWk" />
        <label>Batsman and WicketKeeper</label>
        <input type="radio" name="type" id="allRounder" />
        <label>All Rounder</label>
        <br />
        <br />
        <button>Submit</button>
      </form>
    </div>
  );
};
export default AddPlayer;
