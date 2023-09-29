import Image from "next/image";
import Logo from "../app/assets/logo.webp";
import Authjs from "../app/assets/authjs.webp";
import Prisma from "../app/assets/prisma.svg";
import Link from "next/link";
import { AiFillGithub } from "react-icons/ai";
import { BiLogoTwitter } from "react-icons/bi";
import { BsFillTriangleFill } from "react-icons/bs";
import { TbCup } from "react-icons/tb";
import signIn from "@/signIn/signIn";

export default function Home() {
  return (
    <>
      <nav className="flex justify-between items-center mb-10">
        <div className="flex justify-between items-center gap-2">
          <Image src={Logo} width={30} height={30} alt="Logo" />
          <h1 className="font-medium text-lg">Precedent</h1>
        </div>

        <Link
          href="/signIn"
          className="bg-black text-white px-3 py-1 rounded-full"
        >
          Sign In
        </Link>
      </nav>
      <div className="mt-10 py-5">
        <div className="">
          <button className="flex items-center mt-2 mb-3 text-sm bg-sky-200 text-sky-500 mx-auto p-2 rounded-3xl">
            <BiLogoTwitter className="text-2xl" />
            Intruducing Precedent
          </button>
          <h1 className="text-8xl font-bold  text-center">
            Building <br /> blocks for your <br />
            Next project
          </h1>
          <p className="mt-8 max-w-sm mx-auto">
            An opinionated collection of components, hooks, and utilities for
            your Next.js project.
          </p>
          <div className="flex justify-center items-center gap-3 my-8 ">
            <Link
              href="/"
              className="bg-black flex justify-center items-center gap-2 text-sm text-white px-4 py-2 rounded-3xl"
            >
              <BsFillTriangleFill />
              Deploy to Vercel
            </Link>
            <Link
              href="/"
              className="flex justify-center items-center bg-white text-sm text-black gap-1 border-slate-400 border px-4 py-2 rounded-3xl"
            >
              <AiFillGithub className="text-2xl" /> Star on Github 3.8K
            </Link>
          </div>
        </div>
        <div className="flex gap-3">
          <div className="w-3/5 py-5 flex flex-col justify-center items-center border drop-shadow-2xl rounded-xl">
            <div className="flex justify-center items-center gap-3 my-10">
              <button className="border ">Modal</button>
              <button>Popover</button>
              <button>Tooltip</button>
            </div>
            <h3 className="text-3xl">Beautiful, reusable components</h3>
            <p className="mt-3 leading-8">
              Pre-built beautiful, a11y-first components, powered <br /> by
              <a
                href="/"
                className="underline underline-offset-1 font-semibold"
              >
                Tailwind CSS
              </a>
              ,{" "}
              <a
                href="/"
                className="underline underline-offset-1 font-semibold"
              >
                Radix UI
              </a>
              , and{" "}
              <a
                href="/"
                className="underline underline-offset-1 font-semibold"
              >
                Framer Motion
              </a>
            </p>
          </div>
          <div className="w-2/5 p-5 flex flex-col justify-center items-center border drop-shadow-2xl rounded-xl">
            <div className="mt-8 mb-8 border border-green-500 border-8 text-4xl p-8 bg-green-200 text-green-500 rounded-full">
              100
            </div>
            <h3 className="text-3xl mb-3">Performance first</h3>
            <p className="mb-3 leading-8">
              Built on{" "}
              <a
                href="/"
                className="underline underline-offset-1 font-semibold"
              >
                Next.js
              </a>{" "}
              primitives like <span className="bg-slate-200">@next/font</span>{" "}
              and <span className="bg-slate-200">`next/image`</span> for stellar
              performance.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-3 mt-8 gap-5 ">
          <div className="flex flex-col p-3 border justify-center items-center">
            <Link
              href="/"
              className="flex justify-center bg-blue-600 text-white px-5 py-3 mb-5 items-center gap-3 rounded-xl"
            >
              <BsFillTriangleFill className="" />
              Deploy
            </Link>
            <div className="flex flex-col text-center justify-center items-center mt-8">
              <h3 className="text-2xl ">One-click Deploy</h3>
              <p className="leading-7 mt-3">
                Jumpstart your next project by deploying Precedent to Vercel in
                one click.
              </p>
            </div>
          </div>
          <div className="flex flex-col p-3 border justify-center items-center">
            <div className="flex gap-10 mb-8">
              <Image src={Authjs} width={60} height={60} alt="Logo" />
              <Image src={Prisma} width={60} height={60} alt="Logo" />
            </div>
            <div className="flex flex-col text-center justify-center items-center mt-8">
              <h3 className="text-2xl">Built-in Auth + Database</h3>
              <p className="leading-7 mt-3">
                Precedent comes with authentication and database via Auth.js +
                Prisma
              </p>
            </div>
          </div>
          <div className="flex flex-col p-3 border justify-center items-center">
            <div className="grid grid-cols-2 grid-flow-row gap-10 font-semibold mt-5">
              <span>useIntersectionObserver</span>
              <span>nFormatter</span>
              <span>useLocalStorage</span>
              <span>capitalize</span>
              <span>useScroll</span>
              <span>truncate</span>
            </div>
            <div className="flex flex-col text-center justify-center items-center mt-8">
              <h3 className="text-2xl">Hooks, utilities, and more</h3>
              <p className="leading-8 mt-3">
                Precedent offers a collection of hooks, utilities, and
                @vercel/og
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col mt-36 justify-center items-center">
          <p className="text-slate-600 m-2">
            A project by <strong>Steven Tey</strong>
          </p>
          <button className="flex justify-center text-sm bg-white border px-5 py-3 items-center gap-1 rounded-xl">
            <TbCup className="text-2xl" />
            Buy me a coffee
          </button>
        </div>
      </div>
    </>
  );
}
