import { Seo } from "@/ui/component/seo";
import { Button } from "@/ui/design-system/button/button";
import { Typography } from "@/ui/design-system/typography/typography";
import { FiSmile, FiArrowRight, FiStar } from "react-icons/fi";

export default function Home() {
    const typographyVariants = [
        "display",
        "h1",
        "h2",
        "h3",
        "h4",
        "h5",
        "lead",
        "body-lg",
        "body-base",
        "body-sm",
        "caption1",
        "caption2",
        "caption3",
        "caption4",
    ];

    const buttonVariants = ["accent", "secondary", "outline", "disabled"];
    const buttonSizes = ["small", "medium", "large"];

    return (
        <div className="p-8 bg-gray-50 min-h-screen">
            <Seo title="UI Components Test" description="Test page for UI components" />

            {/* Typography Section */}
            <section className="mb-12 p-6 bg-white border border-gray-200 rounded-lg shadow-sm">
                <Typography variant="h2" component="h2" theme="primary" className="mb-6">
                    Typography
                </Typography>
                {typographyVariants.map((variant) => (
                    <div key={variant} className="mb-4">
                        <Typography variant={variant} component="div" theme="black">
                            {variant}: Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </Typography>
                    </div>
                ))}
            </section>

            {/* Buttons Section */}
            <section className="mb-12 p-6 bg-white border border-gray-200 rounded-lg shadow-sm">
                <Typography variant="h2" component="h2" theme="primary" className="mb-6">
                    Buttons
                </Typography>
                <div className="space-y-6">
                    {buttonVariants.map((variant) => (
                        <div key={variant} className="space-y-4">
                            <Typography variant="h4" component="h4" theme="black">
                               {variant}
                            </Typography>
                            <div className="flex flex-wrap gap-4">
                                {buttonSizes.map((size) => (
                                    <Button
                                        key={`${variant}-${size}`}
                                        variant={variant as any}
                                        size={size as any}
                                        disabled={variant === "disabled"}
                                    >
                                        {size} Button
                                    </Button>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Icon Buttons Section */}
            <section className="mb-12 p-6 bg-white border border-gray-200 rounded-lg shadow-sm">
                <Typography variant="h2" component="h2" theme="primary" className="mb-6">
                    Icon Buttons
                </Typography>
                <div className="flex flex-wrap gap-4">
                    <Button variant="icon" icon={{ icon: FiSmile }} iconTheme="accent" size="small">
                        Small Icon
                    </Button>
                    <Button variant="icon" icon={{ icon: FiArrowRight }} iconTheme="secondary" size="medium">
                        Medium Icon
                    </Button>
                    <Button variant="icon" icon={{ icon: FiStar }} iconTheme="gray" size="large">
                        Large Icon
                    </Button>
                </div>
            </section>

            {/* Loading Buttons Section */}
            <section className="mb-12 p-6 bg-white border border-gray-200 rounded-lg shadow-sm">
                <Typography variant="h2" component="h2" theme="primary" className="mb-6">
                    Loading Buttons
                </Typography>
                <div className="flex flex-wrap gap-4">
                    <Button variant="accent" size="medium" isLoading>
                        Loading Accent
                    </Button>
                    <Button variant="secondary" size="medium" isLoading>
                        Loading Secondary
                    </Button>
                    <Button variant="outline" size="medium" isLoading>
                        Loading Outline
                    </Button>
                </div>
            </section>
        </div>
    );
}