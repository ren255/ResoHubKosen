import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";
import { Badge } from "~/components/ui/badge";
import { Card, CardContent } from "~/components/ui/card";

type CardData = {
    image: string;
    badge: string;
    title: string;
    description: string;
    author: {
        avatar: string;
        name: string;
    };
};

type PostCardProps = {
    size: "large" | "small" | "list";
    cardData: CardData;
};

export default function PostCard(props: PostCardProps): JSX.Element {
    const { size, cardData } = props;

    if (size === "small") {
        return (
            <Card className="w-[250px] overflow-hidden border-shadcn-ui-app-border p-0 gap-0">
                <div className="relative h-[150px] bg-cover bg-center">
                    <img
                        src={cardData.image}
                        alt={cardData.title}
                        className="w-full h-full object-cover"
                    />
                    <Badge
                        className="absolute top-2 right-2 bg-shadcn-ui-app-secondary text-shadcn-ui-app-secondary-foreground bg-gray-400"
                        variant="secondary"
                    >
                        {cardData.badge}
                    </Badge>
                </div>

                <CardContent className="flex flex-col gap-2 p-1">
                    <h2 className="text-2xl font-semibold tracking-tight leading-none text-shadcn-ui-app-card-foreground">
                        {cardData.title}
                    </h2>

                    <p className="text-sm text-shadcn-ui-app-muted-foreground">
                        {cardData.description}
                    </p>

                    <div className="flex items-center gap-2 mt-1">
                        <Avatar className="h-[25px] w-[25px]">
                            <AvatarImage src={cardData.author.avatar} alt="Author avatar" />
                            <AvatarFallback className="bg-blue-500 text-white text-xs">
                                RB
                            </AvatarFallback>
                        </Avatar>

                        <span className="text-sm font-medium">{cardData.author.name}</span>
                    </div>
                </CardContent>
            </Card>
        );
    }

    // small以外は未実装メッセージ
    return (
        <div className="border rounded-xl p-4 text-center text-gray-400">
            {size === "large" ? "Large card is not implemented yet." : "List card is not implemented yet."}
        </div>
    );
}
