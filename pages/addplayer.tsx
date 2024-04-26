import { useState } from "react";
import {
  getDownloadURL,
  ref,
  uploadBytes,
  uploadBytesResumable,
} from "firebase/storage";
import { db, storage } from "@/firebase";
import { setDoc, doc } from "firebase/firestore";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useRouter } from "next/router";

const AddPlayer = () => {
  const router = useRouter();
  const [playerData, setPlayerData] = useState({
    name: "",

    indian: true,
    type: "",
    rating: null,
    base: null,
  });

  const handleChange = (e: any) => {
    console.log(e.target.id);
    if (e.target.id === "indian") {
      setPlayerData({ ...playerData, indian: e.target.value });
      console.log(playerData);
    } else if (e.target.id === "type") {
      setPlayerData({ ...playerData, type: e.target.value });
    } else {
      setPlayerData({ ...playerData, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const id = generateID();

    // const filename = id + ".jpeg";
    // const imageRef = ref(storage, "players/" + filename);

    // if (playerData.image) {
    //   await uploadBytes(imageRef, playerData.image);
    // }

    // const imageURL = await getDownloadURL(imageRef);
    // console.log(imageURL);

    await setDoc(doc(db, "players", id), {
      name: playerData.name,
      indian: playerData.indian,
      type: playerData.type,
      status: "Not Sold",
      rating: parseFloat(playerData.rating),
      base: parseFloat(playerData.base),
    });

    alert("Player added successfully");

    setPlayerData({
      name: "",

      indian: true,
      type: "",
      rating: 0,
      base: 0,
    });

    router.back();
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
    <div className="w-full h-screen flex items-center justify-center">
      <form onSubmit={handleSubmit} className="max-w-3xl">
        <h3>Player Name</h3>
        <Input
          type="text"
          name="name"
          value={playerData.name}
          placeholder="input player name"
          onChange={handleChange}
        />
        <br />
        <br />

        <h3>Nationality</h3>
        <p>Is the player Indian?</p>
        <div className="space-y-5 mt-5">
          <div className="flex items-center space-x-2">
            <input
              type="radio"
              id="indian"
              name="indian"
              onChange={handleChange}
              value="Yes"
            />
            <label>Yes</label>

            <input
              type="radio"
              id="indian"
              name="indian"
              value="No"
              onChange={handleChange}
            />
            <label>No</label>
          </div>
        </div>

        <br />
        <br />

        <h3>Player Type</h3>
        <p>Is the player batsman/bowler?</p>

        <div className="space-y-5 mt-5">
          <div className="flex items-center space-x-2">
            <input
              type="radio"
              id="type"
              name="type"
              value="BAT"
              onChange={handleChange}
            />
            <label>Batsman</label>
          </div>
          <div className="flex items-center space-x-2">
            <input
              type="radio"
              id="type"
              name="type"
              value="BOW"
              onChange={handleChange}
            />
            <label>Bowler</label>
          </div>
          <div className="flex items-center space-x-2">
            <input
              type="radio"
              id="type"
              name="type"
              value="BT/WK"
              onChange={handleChange}
            />
            <label>Batsman and WicketKeeper</label>
          </div>
          <div className="flex items-center space-x-2">
            <input
              type="radio"
              id="type"
              value="AR"
              name="type"
              onChange={handleChange}
            />
            <label>All Rounder</label>
          </div>
        </div>

        <br />
        <br />
        <h3>Player Rating</h3>
        <Input
          type="text"
          name="rating"
          value={playerData.rating}
          placeholder="input player rating"
          onChange={handleChange}
        />

        <br />
        <br />
        <h3>Player Base Price</h3>
        <Input
          type="text"
          name="base"
          value={playerData.base}
          placeholder="input player base price"
          onChange={handleChange}
        />

        <br />
        <br />

        <Button onClick={() => handleSubmit}>Submit</Button>
      </form>
    </div>
  );
};
export default AddPlayer;
