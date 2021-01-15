import React from 'react';
import { ArtCollections } from '../ArtCollections/ArtCollections';
import { Header } from "../Header/Header";
import { ModalWindow } from "../ModalWindow/ModalWindow";
import { Footer } from "../Footer/Footer";

export const Home = () => (
  <>
    <Header />
    <ArtCollections />
    <ModalWindow />
    <Footer />
  </>
);
