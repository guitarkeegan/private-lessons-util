"use client";
import Link from "next/link";
import { SyntheticEvent, useState } from "react";

export default function Lesson() {
  const currentDate = new Date();

  const [goals, setGoals] = useState("Goals:");

  const handleChange = (e: SyntheticEvent) => {
    const target = e.target as HTMLInputElement;
    setGoals(target.value);
    };

  return (
    <>
      <Link className="text-xl" href="/">home</Link>
      <section style={{height: "600px"}} className="flex flex-col items-center justify-center text-center">
      <div className="text-4xl">
        <button className="mx-2 px-2 py-2 bg-second rounded-lg border">Create</button>
        <button className="mx-2 px-2 py-2 bg-second rounded-lg border">View</button>
      </div>
      <div>
        <form className="mt-8">
      <input type="text" placeholder="Student Name" style={{height: "40px"}} />
          <br/>
          <div className="mt-8">
          <button className="my-1 px-1 py-1 bg-second rounded-lg border">Get Last Lesson</button>
          <br/>
          <button className="my-1 px-1 py-1 bg-second rounded-lg border">Clear Last Lesson</button>
          </div>
          </form>
        <div>
          <h2 className="text-4xl mt-8">Review:</h2>
        </div>
        <form className="mt-8">
          
          <h2 className="text-4xl mt-8">Date: {currentDate.toLocaleDateString()}</h2>
          <textarea
            style={{ backgroundColor: "grey" }}
            value={goals}
            name="lesson-details"
            cols={90}
            rows={10}
            onChange={handleChange}
          ></textarea>
        </form>
      </div>
      </section>
      </>
  );
}
