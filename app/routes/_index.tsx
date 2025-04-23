import type { MetaFunction } from "@remix-run/node"
import { Link } from "@remix-run/react";

import PostCard from "~/components/my/postCard"

import { SidebarInset, SidebarProvider } from "~/components/ui/sidebar"
import { AppSidebar } from "~/components/main/app-sidebar"
import { SiteHeader } from "~/components/main/site-header"
import { Button } from "~/components/ui/button"

export const meta: MetaFunction = () => {
    return [
        { title: "New Remix App" },
        { name: "description", content: "Welcome to Remix!" },
    ]
}

const cardData = {
    image: "/favicon.ico",
    badge: "img",
    title: "post",
    description: "Deploy your new project in one-click.",
    author: {
        avatar: "/favicon.ico",
        name: "robot",
    },
}

export default function Index() {
    return (
        <SidebarProvider>
            <AppSidebar variant="inset" />
            <SidebarInset>
                <SiteHeader />
                <div className="m-3 w-full flex flex-col items-center gap-4 bg-black-500">
                    <div className="flex w-full flex-row items-center gap-2.5 p-3">
                        <div className="text-2xl font-sans text-blue-200">hello world</div>

                        <Button asChild>
                            <Link to="/people" >people</Link>
                        </Button>
                        <Button asChild>
                            <Link to="/dropdown">to dropdown</Link>
                        </Button>
                        <Button asChild>
                            <Link to="/dropdown">to dropdown</Link>
                        </Button>

                    </div>

                    <div className="flex flex-row flex-wrap gap-2.5 w-full p-10 justify-between">
                        <>
                            {[...Array(1000)].map((_, i) => (
                                <PostCard
                                    key={i}
                                    size="small"
                                    cardData={{
                                        ...cardData,
                                        title: `${cardData.title} #${i + 1}`,
                                    }}
                                />
                            ))}
                        </>

                    </div>
                </div>
            </SidebarInset>
        </SidebarProvider>
    )
}
