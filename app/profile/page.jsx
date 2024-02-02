"use client";
import { useRouter } from "next/navigation";


const MyProfile = () => {
  const router = useRouter()

  return (
    <section className='w-full'>
    <h1 className='head_text text-left'>
      <span className='blue_gradient'>My   Profile</span>
    </h1>
    <p className='desc text-left'>It is your profile , Feel free to book a flight or cancel them</p>
    <button className="black_btn" onClick={() => router.push("/")}> Back to home </button>
  </section>
  );
};

export default MyProfile;
