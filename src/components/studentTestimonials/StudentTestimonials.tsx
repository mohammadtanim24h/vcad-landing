"use client";

import { use } from "react";
import StudentTestimonialCard from "./StudentTestimonialCard";

// User interface
interface User {
    name: string;
    image: string;
}

// Fetch users
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
            image: user.picture.large,
        })) || [];

    return (
        <div>
            <div className="maximum-width">
                <h2 className="text-3xl md:text-5xl lg:text-6xl inline-block font-[900] leading-[100%]">
                    Student <br />
                    <span className="after:content-[''] after:block lg:after:h-[20px] after:h-[10px] after:bg-primary lg:after:mt-[-26px] after:mt-[-10px]">
                        Testimonials
                    </span>
                </h2>
            </div>

            {/* Student Testimonial Cards */}
            <div className="flex flex-col md:flex-row justify-center md:gap-48 overflow-hidden">
                {users.map(({ name, image }, index) => (
                    <StudentTestimonialCard
                        key={index}
                        name={name}
                        image={image}
                    />
                ))}
            </div>
        </div>
    );
}
