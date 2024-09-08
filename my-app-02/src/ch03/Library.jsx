import React from "react";
import Book from "./Book";

export default function Library(props){
  return (
    <div>
      <Book name ="리액트 입문" num0fPage="300"/>
      <Book name ="자바 입문" num0fPage="200"/>
      <Book name ="MySQL 입문" num0fPage="100"/>
    </div>
  )
}