
import { useState, useEffect } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import axios from "axios";
import Header from "../../components/Header/Header";
// import React from 'react'

function HomePage() {
  const params = useParams();
  const [searchParams] = useSearchParams();
  const apiURL = `${import.meta.env.VITE_BACKEND_URL}/recipes`;

  console.log(searchParams);

  // if no params, default recipes
  // if params come from form submit, use them on a backend

  return (
  
    <>
     <Header />
     <main>
        
     </main>
    </>
  );
}

export default HomePage;
