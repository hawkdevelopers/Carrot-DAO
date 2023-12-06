import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import Image from "next/image";
import { Button, ButtonGroup } from "@nextui-org/button";
import {
  ArrowBigLeftDashIcon,
  BookAIcon,
  ExternalLinkIcon,
  ScrollTextIcon,
} from "lucide-react";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      {/* <div className="grid  lg:grid-cols-2 gap-4">
        
        <div className="inline-flex flex-col items-start    space-y-4 order-2 lg:order-1 ">
          <span className="border-2 text-xs font-semibold w-max rounded-full px-4 py-2 bg-orange-200/50 text-orange-500 border-orange-500">
            Jump start your assets
          </span>

          <h1 className={title({ class: "leading-10" })}>
            Revolutionary DAO system&nbsp;
          </h1>

          <h2 className={subtitle({ class: "mt-4 " })}>
            Beautiful, fast and modern DAO System Experience.
          </h2>
          <div className="flex gap-4">
            <Button
              radius="full"
              className="bg-orange-500 text-white shadow-lg"
            >
              dApp
              <ExternalLinkIcon size={15} />
            </Button>
            <Button
              radius="full"
              className="border-2 bg-transparent text-foreground"
            >
              Whitepaper
              <ScrollTextIcon size={15} />
            </Button>
          </div>
        </div>
        <div className="bg-lime-500 lg:order-2 h-[200px] order-1 rounded-md overflow-hidden">
          <Image
            width="100"
            height="100"
            sizes="600"
            className="w-full bg-cover"
            src="https://ipfs.io/ipfs/QmNmf38gXHSuQXZQv9wod4PMp4keEAXvT7mcYtdDkgevak"
            alt="Carrot World"
          />
        </div>
      </div> */}
    </section>
  );
}
