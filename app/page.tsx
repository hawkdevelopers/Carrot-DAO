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
import { Header } from "@/components/header";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <Header />
    </section>
  );
}
