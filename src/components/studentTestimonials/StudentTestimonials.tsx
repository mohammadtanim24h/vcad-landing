"use client";

import { use } from "react";

interface User {
    name: string;
    image: string;
}

const fetchUsers = fetch("https://randomuser.me/api/?results=4").then((res) => {
    if (!res.ok) {
        throw new Error("Failed to fetch users");
    }
    return res.json();
});

export default function StudentTestimonials() {
    const { results } = use(fetchUsers);
    const users: User[] =
        results?.map((user: any) => ({
            name: user.name.first + " " + user.name.last,
            image: user.picture.medium,
        })) || [];

    console.log(users);
    return (
        <div className="container">
            <h2 className="text-3xl md:text-5xl lg:text-6xl inline-block font-[900] leading-[100%]">
                Student{" "}
                <span className="after:content-[''] after:block lg:after:h-[20px] after:h-[10px] after:bg-primary lg:after:mt-[-26px] after:mt-[-10px]">
                    Testimonials
                </span>
            </h2>
        </div>
    );
}
