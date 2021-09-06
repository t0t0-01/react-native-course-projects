import React, { useContext } from "react";
import { Button, Input } from "react-native-elements";
import Spacer from "./Spacer";
import { Context as LocationContext } from "../Context/LocationContext";
import useSaveTrack from "../hooks/useSaveTrack";

const TrackForm = () => {
  const {
    state: { name, recording, locations },
    startRecording,
    stopRecording,
    changeName,
  } = useContext(LocationContext);

  const [saveTrack] = useSaveTrack();

  console.log(locations.length);

  return (
    <>
      <Spacer>
        <Input
          value={name}
          onChangeText={changeName}
          placeholder="Enter name"
        />
      </Spacer>

      <Spacer>
        {recording ? (
          <Button title="Stop" onPress={stopRecording} />
        ) : (
          <Button title="Start Recording" onPress={startRecording} />
        )}
      </Spacer>

      <Spacer>
        {!recording && locations.length ? (
          <Button title="Save Recording" onPress={() => saveTrack()} />
        ) : null}
      </Spacer>
    </>
  );
};

export default TrackForm;
