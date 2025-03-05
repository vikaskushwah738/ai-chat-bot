import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "./ui/card";
import { Check, X } from "lucide-react";
import { Button } from "./ui/button";
const PriceSection = () => {
    return (
        <section id="pricing" className="w-full py-12 md:py-24 lg:py-32 px-16">
            <div className="container">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">
                    Choose Your Plan
                </h2>
                <div className="grid gap-6 lg:grid-cols-3 lg:gap-12">
                    <Card className="hover:shadow-2xl">
                        <CardHeader>
                            <CardTitle>Free</CardTitle>
                            <CardDescription>For personal use</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p className="text-4xl font-bold">$0</p>
                            <p className="text-sm text-gray-500 dark:text-gray-400">
                                per month
                            </p>
                            <ul className="mt-4 space-y-2">
                                <li className="flex items-center">
                                    <Check className="mr-2 h-4 w-4 text-green-500" />
                                    100 free Chat
                                </li>
                                <li className="flex items-center">
                                    <X className="mr-2 h-4 w-4 text-red-500" />
                                    Daily auto re-crawl of data
                                </li>
                                <li className="flex items-center">
                                    <X className="mr-2 h-4 w-4 text-red-500" />
                                    API Integration (Shopify + Custom)
                                </li>
                                <li className="flex items-center">
                                    <X className="mr-2 h-4 w-4 text-red-500" />
                                    Bot scheduler
                                </li>

                                <li className="flex items-center">
                                    <X className="mr-2 h-4 w-4 text-red-500" />
                                    3 Chatbots
                                </li>
                                <li className="flex items-center">
                                    <X className="mr-2 h-4 w-4 text-red-500" />
                                    Overages $0.02/message
                                </li>
                            </ul>
                        </CardContent>
                        <CardFooter>
                            <Button className="w-full hover:bg-white hover:text-gray-950 hover:border-2 border-gray-950">Get Started</Button>
                        </CardFooter>
                    </Card>
                    <Card className="hover:shadow-2xl">
                        <CardHeader>
                            <CardTitle>Pro</CardTitle>
                            <CardDescription>For power users</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p className="text-4xl font-bold">$20</p>
                            <p className="text-sm text-gray-500 dark:text-gray-400">
                                per month
                            </p>
                            <ul className="mt-4 space-y-2">
                                <li className="flex items-center">
                                    <Check className="mr-2 h-4 w-4 text-green-500" />
                                    1000 Chat
                                </li>
                                <li className="flex items-center">
                                    <Check className="mr-2 h-4 w-4 text-green-500" />
                                    Daily auto re-crawl of data
                                </li>
                                <li className="flex items-center">
                                    <Check className="mr-2 h-4 w-4 text-green-500" />
                                    API Integration (Shopify + Custom)
                                </li>
                                <li className="flex items-center">
                                    <Check className="mr-2 h-4 w-4 text-green-500" />
                                    Bot scheduler
                                </li>
                                <li className="flex items-center">
                                    <Check className="mr-2 h-4 w-4 text-green-500" />
                                    3 Chatbots
                                </li>
                                <li className="flex items-center">
                                    <Check className="mr-2 h-4 w-4 text-green-500" />
                                    Overages $0.02/message
                                </li>
                            </ul>
                        </CardContent>
                        <CardFooter>
                            <Button className="w-full hover:bg-white hover:text-gray-950 hover:border-2 border-gray-950">Upgrade to Pro</Button>
                        </CardFooter>
                    </Card>
                    <Card className="hover:shadow-2xl">
                        <CardHeader>
                            <CardTitle>Ultimate</CardTitle>
                            <CardDescription>For serious note-takers</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p className="text-4xl font-bold">$50</p>
                            <p className="text-sm text-gray-500 dark:text-gray-400">
                                per month
                            </p>
                            <ul className="mt-4 space-y-2">
                                <li className="flex items-center">
                                    <Check className="mr-2 h-4 w-4 text-green-500" />
                                    Unlimited chat
                                </li>
                                <li className="flex items-center">
                                    <Check className="mr-2 h-4 w-4 text-green-500" />
                                    12 Hourly auto re-crawl of data
                                </li>
                                <li className="flex items-center">
                                    <Check className="mr-2 h-4 w-4 text-green-500" />
                                    API Integration (Shopify + Custom)
                                </li>
                                <li className="flex items-center">
                                    <Check className="mr-2 h-4 w-4 text-green-500" />
                                    Assisted setup
                                </li>
                                <li className="flex items-center">
                                    <Check className="mr-2 h-4 w-4 text-green-500" />
                                    5 Chatbots
                                </li>
                                <li className="flex items-center">
                                    <Check className="mr-2 h-4 w-4 text-green-500" />
                                    Overages $0.020/message
                                </li>

                            </ul>
                        </CardContent>
                        <CardFooter>
                            <Button className="w-full hover:bg-white hover:text-gray-950 hover:border-2 border-gray-950">Upgrade to Ultimate</Button>
                        </CardFooter>
                    </Card>
                </div>
            </div>
        </section>
    )
}

export default PriceSection