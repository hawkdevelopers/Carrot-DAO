"use client";
import { motion } from "framer-motion";
import { subtitle, title } from "./primitives";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Button,
} from "@nextui-org/react";
import React from "react";
import { Bot, Landmark, Percent, Rocket } from "lucide-react";

interface CardInfoProps {
  title: string;
  icon: React.ReactNode;
  description: string;
}

const Community = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,

      transition: {
        delay: 1.2,
      },
    },
  };

  const cardInfo: CardInfoProps[] = [
    {
      title: "Governance",
      icon: <Landmark className="fill-primary stroke-secondary" />,
      description:
        "Holders actively engage in a DAO system by using their tokens for voting on proposals or decisions within the project. These votes take place directly on the blockchain, allowing holders to influence the project's future direction transparently and democratically.",
    },
    {
      title: "Auto Maker",
      icon: <Bot className="fill-primary stroke-secondary" />,
      description:
        "At Carrot DAO's Auto Maker, users can create a liquidity pair using cDAO. By supplying liquidity to this cDAO pair, users receive Cake LP tokens. Holding these Cake LP tokens enables users to earn rewards in cDAO within the Carrot DAO ecosystem, serving as an incentive for providing liquidity to the cDAO pair.",
    },
    {
      title: "Fair Launch",
      icon: <Rocket className="fill-primary stroke-secondary" />,
      description:
        "In Carrot DAO's fair token launch system, the security seal is applied to projects following an equitable token distribution model. This implies that users can only acquire tokens from these projects after the official launch. This seal instills confidence in investors by ensuring there's no pre-sale or early access to tokens, fostering a more equitable and fair environment for all participants after the project's launch.",
    },
    {
      title: "High APY",
      icon: <Percent className="fill-primary stroke-secondary" />,
      description:
        "Carrot DAO offers a high APY (Annual Percentage Yield) to holders of the Cake LP pair providing liquidity to the protocol. This elevated APY serves as a reward for liquidity providers, acknowledging the risk and commitment of their funds. By holding the Cake LP pair within the platform, users can receive substantial returns on their investments due to the elevated APY rate provided by Carrot DAO, encouraging participation and engagement within the platform.",
    },
  ];

  return (
    <motion.div
      id="dao"
      variants={container}
      initial="hidden"
      animate="show"
      className="grid  w-full gap-8"
    >
      <div className="flex flex-col ">
        <h1
          className={title({
            size: "sm",
            class:
              "leading-10 font-bold bg-gradient-to-r from-orange-500 via-red-600 to-orange-400 inline-block text-transparent bg-clip-text",
          })}
        >
          What does Carrot DAO offer?&nbsp;
        </h1>
        <p className={subtitle({ class: " max-w-lg  inline-block" })}>
          Shortly, we will expand the plataform´s functionality so that
          absolutely everyone who wants to get a stable income can use our
          team´s services
        </p>
      </div>
      <div className="grid lg:grid-cols-2 gap-4">
        {cardInfo.map((card, index) => (
          <React.Fragment key={index}>
            <Card>
              <CardBody>
                <section className="inline-flex items-center gap-4">
                  {card.icon}
                  <h2
                    className={subtitle({
                      class:
                        "font-bold leading-10 w-full bg-gradient-to-r from-orange-500 via-red-600 to-orange-400 inline-block text-transparent bg-clip-text",
                    })}
                  >
                    {card.title}
                  </h2>
                </section>
                <p className="text-sm">{card.description}</p>
              </CardBody>
            </Card>
          </React.Fragment>
        ))}
      </div>
    </motion.div>
  );
};

export default Community;
