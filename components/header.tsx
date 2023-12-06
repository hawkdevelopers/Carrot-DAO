"use client";
import { Button, ButtonGroup } from "@nextui-org/button";
import { subtitle, title } from "./primitives";
import { ExternalLinkIcon, ScrollTextIcon } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

export const Header = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,

      transition: {
        delay: 0.8,
      },
    },
  };

  return (
    <motion.div
      id="home"
      variants={container}
      initial="hidden"
      animate="show"
      className="grid  lg:grid-cols-2 gap-4"
    >
      <div className="inline-flex flex-col items-start    space-y-4 order-2 lg:order-1 ">
        <span className="border-2 text-xs font-semibold w-max rounded-full px-4 py-2 bg-secondary/50 text-primary border-primary">
          Maximize your assets
        </span>

        <h1 className={title({ class: "leading-10" })}>
          Revolutionary DAO system&nbsp;
        </h1>

        <h2 className={subtitle({ class: "mt-4 " })}>
          Beautiful, fast and modern DAO System Experience.
        </h2>
        <ButtonGroup className="flex gap-4 w-full lg:w-max">
          <Button radius="md" color="primary" className="w-full">
            <span className="font-semibold text-white">Launch dApp</span>
          </Button>
          <Button radius="md" color="secondary" className="w-full">
            <span className="font-semibold text-black">Whitepaper</span>
          </Button>
        </ButtonGroup>
      </div>
      <div className="lg:order-2 h-[200px] order-1 rounded-md overflow-hidden">
        <Image
          width="100"
          height="100"
          sizes="600"
          className="w-full bg-cover"
          src="https://ipfs.io/ipfs/QmNmf38gXHSuQXZQv9wod4PMp4keEAXvT7mcYtdDkgevak"
          alt="Carrot World"
        />
      </div>
    </motion.div>
  );
};
