'use client';
import React from "react";
import ProfileCard from "@/components/ProfileCard";

const ProfileContainer = () => {
  return (
    <div>
      <ProfileCard
        name="Maria F. Liwe"
        title="Software Engineer"
        handle="founteina"
        status="Online"
        contactText="Contact Me"
        avatarUrl="/images/miw.png"
        showUserInfo={true}
        enableTilt={true}
        enableMobileTilt={false}
        onContactClick={() => console.log("Contact clicked")}
        behindGradient={undefined}
        innerGradient={false}
        miniAvatarUrl={undefined}
      />
    </div>
  );
};

export default ProfileContainer;
