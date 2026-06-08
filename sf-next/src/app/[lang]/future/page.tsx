import type { Metadata } from "next";
import FutureContent from "./FutureContent";

export const metadata: Metadata = {
  title: "AX — AI Transformation",
  description:
    "AX goes beyond technology adoption — it is the process of redesigning an organization's decision-making, workflows, and operating model around AI.",
};

export default function FuturePage() {
  return <FutureContent />;
}
