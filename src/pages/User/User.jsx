import React from "react";
import { Route, Routes } from "react-router-dom";

import UserHeader from "./UserHeader/UserHeader";
import UserPhotoPost from "./UserPhotoPost/UserPhotoPost";
import UserStats from "./UserStats/UserStats";

import Feed from "../../components/Feed/Feed";
import { UserContext } from "../../UserContext";
import NotFound from "../../components/NotFound/NotFound";

const User = () => {
  const { data } = React.useContext(UserContext);

  return (
    <section className="container">
      <UserHeader />
      <Routes>
        <Route path="/" element={<Feed user={data.id} />} />
        <Route path="postar" element={<UserPhotoPost />} />
        <Route path="estatisticas" element={<UserStats />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </section>
  );
};

export default User;
