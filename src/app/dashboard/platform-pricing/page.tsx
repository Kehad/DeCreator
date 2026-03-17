import { PricingCard, PricingCardProps } from "./pricingCard";

export default function PlatformPricing() {
  const platforms: PricingCardProps[] = [
    {
      platform: "Netflix",
      middleLabel: "Sales agent fee",
      middleValue: "$150",
      middleLink: "Contact sales agent",
      rightLabel: "Licensing fee",
      rightValue: "$40,000",
      rightLink: "About licensing",
      tooltip: "Stand a chance to win a festival from Netflix on the 22nd of October."
    },
    {
      platform: "Amazon prime video",
      middleLabel: "Professional charges",
      middleValue: "$150",
      middleLink: "See more",
      rightLabel: "Royalty per hour",
      rightValue: "$0.5",
      rightLink: "About royalties"
    },
    {
      platform: "Apple Tv",
      middleLabel: "Producer fee",
      middleValue: "$1,500",
      middleLink: "See more",
      rightLabel: "Platform cut",
      rightValue: "20%",
      rightLink: "more"
    },
    {
      platform: "Disney+",
      middleLabel: "Sales agent fee",
      middleValue: "10%",
      middleLink: "See more",
      rightLabel: "Royalty per hour",
      rightValue: "20%",
      rightLink: "more"
    }
  ];

  return (
    <div className="font-sans">
      <div className="">
        <h1 className="text-gray-300 text-xl font-semibold mb-8">Platform pricing</h1>
        <div className="space-y-6">
          {platforms.map((item, index) => (
            <PricingCard key={index} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
}