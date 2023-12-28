import React from "react"
import icon from "@/assets/icon.svg"
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Link } from "react-router-dom";

function SelectDemo() {
    return (
        <Select>
            <SelectTrigger className="w-[180px] select dark:bg-white-snow">
                <SelectValue placeholder="Select version" />
            </SelectTrigger>
            <SelectContent className="bg-white-snow dark:bg-dark-custom dark:text-white-snow">
                <SelectGroup>
                    <SelectItem value="apple" className="hover:cursor-pointer">Current</SelectItem>
                    <SelectItem value="banana" className="hover:cursor-pointer">v1.0.0</SelectItem>
                </SelectGroup>
            </SelectContent>
        </Select>
    )
}

function Header() {
    return (
        <div className="w-screen flex justify-center overflow-x-hidden sticky top-0 z-50 drop-shadow-md">
            <header className="bg-white-ivory w-11/12 h-full dark:bg-violet-aeu xl:w-8/12 ">
                <section className="flex justify-between items-center">
                    <Link to={"/"}>
                        <div className="flex justify-start items-center">
                            <img src={icon} alt="icon-profile" className="w-16" />
                            <h1 className="font-bold text-3xl mx-3 dark:text-white-snow">JUN</h1>
                        </div>
                    </Link>
                    <div className="flex justify-end items-center">
                        <a href="#" className="mx-5 dark:text-white-snow">Blog</a>
                        <div className="hidden mx-3 md:block">
                            <SelectDemo />
                        </div>
                    </div>
                </section>
            </header>
        </div>
    )
}

export default Header;