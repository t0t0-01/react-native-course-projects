import React, { useRef, useState, useEffect } from "react";
import {
  Text,
  View,
  PanResponder,
  Animated,
  Dimensions,
  StyleSheet,
  LayoutAnimation,
} from "react-native";

const SCREEN_WIDTH = Dimensions.get("window").width;
const SWIPE_THRESHOLD = 0.25 * SCREEN_WIDTH;
const SWIPE_OUT_DURATION = 250;
const Deck = (props) => {
  const { data, callback, onSwipeRight, onSwipeLeft, renderNoMoreCards } =
    props;
  // This callback takes as input a piece of data, and it returns JSX
  // we want for this data

  const [index, setIndex] = useState(0);
  const position = useRef(new Animated.ValueXY()).current;
  const update = useRef();

  //We add this useEffect so that we reset the index if we change the data
  useEffect(() => setIndex(0), [data]);

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,

      onPanResponderMove: (event, gestureState) => {
        position.setValue({ x: gestureState.dx, y: gestureState.dy });
      },
      onPanResponderRelease: (event, gestureState) => {
        if (gestureState.dx > SWIPE_THRESHOLD) {
          forceSwipe("right");
        } else if (gestureState.dx < -SWIPE_THRESHOLD) {
          debugger;
          forceSwipe("left");
        } else {
          Animated.spring(position, {
            toValue: { x: 0, y: 0 },
            useNativeDriver: false,
          }).start();
        }
      },
    })
  ).current;

  const renderCards = () => {
    if (index >= data.length) return renderNoMoreCards();

    return data
      .map((item, i) => {
        /*Here, i is the coutner in our object. Index is the counter that 
        says which card we want to display. What we will do is that
        the index matches the key in our object, then we attach
        the animated view to this card. If the key comes before our current
        index, we simply return null (because at this point, these cards
        are off screen and we do not need to render them). If the cards
        have not been tackled yet, we render them as regular cards 
        without the animated view.
        */
        if (i < index) return null;

        if (i === index) {
          return (
            <Animated.View
              key={item.id}
              style={{ ...getCardStyle(), ...styles.cardStyle }}
              {...panResponder.panHandlers}
            >
              {callback(item)}
            </Animated.View>
          );
        }
        //Below, we will use Animated.View because the callback we will
        //call returns an animated view. We can return a view, but once
        //the callback returns the animated view, the component will
        //re-render, which might cause the image to flash or something.
        return (
          <Animated.View
            key={item.id}
            style={{ ...styles.cardStyle, top: 10 * (i - index) }}
          >
            {callback(item)}
          </Animated.View>
        );
      })
      .reverse();
  };

  const getCardStyle = () => {
    const rotate = position.x.interpolate({
      inputRange: [-SCREEN_WIDTH * 1.5, 0, SCREEN_WIDTH * 1.5],
      outputRange: ["-120deg", "0deg", "120deg"],
    });
    return {
      ...position.getLayout(),
      transform: [{ rotate: rotate }],
    };
  };

  const forceSwipe = (direction) => {
    const x = direction === "right" ? SCREEN_WIDTH : -SCREEN_WIDTH;
    Animated.timing(position, {
      toValue: { x: x, y: 0 },
      duration: SWIPE_OUT_DURATION,
      useNativeDriver: false,
    }).start(() => onSwipeComplete(direction));
  };

  const onSwipeComplete = (direction) => {
    const item = data[index];

    direction === "right" ? onSwipeRight(item) : onSwipeLeft(item);

    //Now, we should reset the position. If we don't, the second
    //card would take the position of the previous one.
    position.setValue({ x: 0, y: 0 });
    setIndex((index) => index + 1);
    LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
  };

  return <View>{renderCards()}</View>;
};

Deck.defaultProps = {
  onSwipeRight: () => {},
  onSwipeLeft: () => {},
};

const styles = StyleSheet.create({
  cardStyle: {
    position: "absolute",
    width: SCREEN_WIDTH,
  },
});

export default Deck;
