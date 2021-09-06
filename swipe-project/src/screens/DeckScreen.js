import React, { useRef } from "react";
import { Text, View, Animated, ScrollView, PanResponder } from "react-native";
import { Card, Button } from "react-native-elements";
import Deck from "../Components/Deck";

const DeckScreen = () => {
  const DATA = [
    {
      id: 1,
      text: "Card #1",
      uri: "https://scx2.b-cdn.net/gfx/news/2019/2-nature.jpg",
    },
    {
      id: 2,
      text: "Card #2",
      uri: "https://images.theconversation.com/files/399816/original/file-20210510-5797-xqoxsr.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop",
    },
    {
      id: 3,
      text: "Card #3",
      uri: "https://thumbs-prod.si-cdn.com/P4Smi9MthEBXH7pdW8Y-bvwR6ts=/1072x720/filters:no_upscale()/https://public-media.si-cdn.com/filer/04/8e/048ed839-a581-48af-a0ae-fac6fec00948/gettyimages-168346757_web.jpg",
    },
    {
      id: 4,
      text: "Card #4",
      uri: "https://natureconservancy-h.assetsadobe.com/is/image/content/dam/tnc/nature/en/photos/Zugpsitze_mountain.jpg?crop=0,176,3008,1654&wid=4000&hei=2200&scl=0.752",
    },
    {
      id: 5,
      text: "Card #5",
      uri: "https://cdn-prod.medicalnewstoday.com/content/images/articles/325/325466/man-walking-dog.jpg",
    },
    {
      id: 6,
      text: "Card #6",
      uri: "https://cdn.the-scientist.com/assets/articleNo/66864/aImg/35078/foresttb-l.jpg",
    },
    {
      id: 7,
      text: "Card #7",
      uri: "https://www.lombardodier.com/files/live/sites/loportail/files/news/2021/May/20210521/Nature_LOcom.jpg",
    },
    {
      id: 8,
      text: "Card #8",
      uri: "https://www.greenqueen.com.hk/wp-content/uploads/2021/06/WEF-Investments-In-Nature-Based-Solutions-Have-To-Triple-By-2030-To-Address-Climate-Change-Biodiversity-Loss.jpg",
    },
  ];

  const renderCard = (item) => {
    return (
      <Card key={item.id}>
        <Card.Title>{item.text}</Card.Title>
        <Card.Image source={{ uri: item.uri }} />
        <Text style={{ margin: 10 }}>Customize</Text>
        <Button
          icon={{ name: "code" }}
          backgroundColor="#03A9F4"
          title="View Now!"
        />
      </Card>
    );
  };

  const renderNoMoreCards = () => {
    return (
      <Card>
        <Card.Title>"All Done!"</Card.Title>
        <Text style={{ margin: 10 }}>No more content</Text>
        <Button
          icon={{ name: "code" }}
          backgroundColor="#03A9F4"
          title="Get more!"
        />
      </Card>
    );
  };
  return (
    <View>
      <Deck
        data={DATA}
        callback={renderCard}
        renderNoMoreCards={renderNoMoreCards}
      />
    </View>
  );
};

export default DeckScreen;
