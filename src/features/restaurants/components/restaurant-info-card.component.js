import React from "react";
import { Text } from "react-native";
import { Card } from "react-native-paper";
import styled from "styled-components";

const RestaurantCard = styled(Card)`
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

const RestaurantCardCover = styled(Card.Cover)`
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

const Title = styled(Text)`
  font-family: ${(props) => props.theme.fonts.body};
  padding: ${(props) => props.theme.space[3]};
  color: ${(props) => props.theme.colors.ui.primary};
`;

export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "Dominos",
    icon,
    photos = [
      "https://media-cdn.tripadvisor.com/media/photo-s/0d/4f/f9/ba/front-of-entrance-to.jpg",
    ],
    address = "123 street Juliana Drive, California",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily,
  } = restaurant;
  return (
    <RestaurantCard elevation={5}>
      <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
      <Title>{name}</Title>
    </RestaurantCard>
  );
};
