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
  const [teamData, setTeamData] = useState({
    name: "",
    id: "",
    image: null,
    rating: 0,
    balance: 100,
  });

  const handleChange = (e: any) => {
    console.log(e.target.id);

    if (e.target.name == "teamImage") {
      const file = e.target.files[0];

      setTeamData({ ...teamData, image: file });
    } else {
      setTeamData({ ...teamData, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const filename = teamData.id + ".jpeg";
    const imageRef = ref(storage, "teams/" + filename);

    if (teamData.image) {
      await uploadBytes(imageRef, teamData.image);
    }

    const imageURL = await getDownloadURL(imageRef);
    console.log(imageURL);

    await setDoc(doc(db, "teams", teamData.id), {
      name: teamData.name,
      id: teamData.id,
      logo: imageURL,
      players: [],
      rating: 0,
      balance: 100,
    });

    alert("Team added successfully");

    setTeamData({
      name: "",
      id: "",
      image: null,
      rating: 0,
      balance: 100,
    });
  };

  return (
    <div className="w-full h-screen flex items-center justify-center ">
      <form onSubmit={handleSubmit} className="max-w-3xl">
        <h3>id</h3>
        <Input
          type="text"
          name="id"
          value={teamData.id}
          placeholder="Input Team ID"
          onChange={handleChange}
        />
        <br />
        <br />
        <h3>Player Image</h3>
        <input
          type="file"
          id="teamImage"
          accept="image/*"
          name="teamImage"
          onChange={handleChange}
        />
        <br />
        <br />
        <h3>Team Name</h3>
        <Input
          type="text"
          name="name"
          value={teamData.name}
          placeholder="Input Team Name"
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
