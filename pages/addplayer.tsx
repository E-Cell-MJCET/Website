import { useState } from "react";
import {
  getDownloadURL,
  ref,
  uploadBytes,
  uploadBytesResumable,
} from "firebase/storage";
import { db, storage } from "@/firebase";
import { setDoc, doc } from "firebase/firestore";

const AddPlayer = () => {
  const [playerData, setPlayerData] = useState({
    name: "",
    image: null,
    nationality: true,
    type: "",
    rating: 0,
    base: 0,
  });

  const handleChange = (e: any) => {
    if (e.target.name == "playerImage") {
      const file = e.target.files[0];

      setPlayerData({ ...playerData, image: file });
    } else {
      setPlayerData({ ...playerData, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const id = generateID();

    const filename = id + ".jpeg";
    const imageRef = ref(storage, "players/" + filename);

    if (playerData.image) {
      await uploadBytes(imageRef, playerData.image);
    }

    const imageURL = await getDownloadURL(imageRef);
    console.log(imageURL);

    await setDoc(doc(db, "players", id), {
      name: playerData.name,
      indian: playerData.nationality,
      type: playerData.type,
      image: imageURL,
      sold: false,
      rating: playerData.rating,
      base: playerData.base,
    });

    alert("Player added successfully");

    setPlayerData({
      name: "",
      image: null,
      nationality: true,
      type: "",
      rating: 0,
      base: 0,
    });
  };

  const generateID = () => {
    // Generate random 6 digit alphanumeric id
    var result = "";
    var characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    var charactersLength = characters.length;
    for (var i = 0; i < 10; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h3>Player Name</h3>
        <input
          type="text"
          name="name"
          value={playerData.name}
          className="text-black dark:text-white bg-white dark:bg-gray-800 border-2 border-gray-300 dark:border-gray-700 rounded-lg p-2 w-full focus:outline-none focus:border-blue-500"
          placeholder="input player name"
          onChange={handleChange}
        />
        <br />
        <br />

        <h3>Player Image</h3>
        <input
          type="file"
          id="playerImage"
          accept="image/*"
          name="playerImage"
          onChange={handleChange}
        />
        <br />
        <br />

        <h3>nationality</h3>
        <p>Is the player Indian?</p>
        <div>
          <input
            type="radio"
            name="indian"
            id="indian"
            onChange={handleChange}
          />
          <label>Yes</label>
          <input
            type="radio"
            name="indian"
            id="notIndian"
            onChange={handleChange}
          />
          <label>No</label>
        </div>

        <br />
        <br />

        <h3>Player Type</h3>
        <p>Is the player batsman/bowler?</p>

        <div>
          <input
            type="radio"
            name="type"
            id="batsman"
            value="BAT"
            onChange={handleChange}
          />
          <label>Batsman</label>
          <input
            type="radio"
            name="type"
            id="bowler"
            value="BOW"
            onChange={handleChange}
          />
          <label>Bowler</label>
          <input
            type="radio"
            name="type"
            id="batAndWk"
            value="BT/WK"
            onChange={handleChange}
          />
          <label>Batsman and WicketKeeper</label>
          <input
            type="radio"
            name="type"
            id="allRounder"
            value="AR"
            onChange={handleChange}
          />
          <label>All Rounder</label>
        </div>

        <br />
        <br />
        <button onClick={() => handleSubmit}>Submit</button>
      </form>
    </div>
  );
};
export default AddPlayer;
