import { GalleryVerticalEnd } from "lucide-react"

import { LoginForm } from "~/components/main/login-form"
import { MyTable } from "~/components/main/data-table"

const datas = [
    {
        "id": 1,
        "name": "some one",
        "bio": "I&m a bio",
        "date": "2023-10-01",
    },]

export default function peoplePage() {
    return (
        <div className="flex flex-row justify-around p-4">
            <div className="flex min-h-svh flex-col items-center justify-center gap-6 bg-muted p-6">
                <div className="flex w-full max-w-sm flex-col gap-6">
                    <a href="/" className="flex items-center gap-2 self-center font-medium">
                        <div className="flex h-6 w-6 items-center justify-center rounded-md bg-primary text-primary-foreground">
                            <GalleryVerticalEnd className="size-4" />
                        </div>
                        Acme Inc.
                    </a>
                    <LoginForm />

                </div>
            </div>
            <div className="py-6">
                <MyTable datas={datas} />
            </div>
        </div>
    )
}


