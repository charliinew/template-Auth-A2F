"use client"

import { useSessionData } from "@/hooks/use-session-data";

const SettingsPage = () => {
    const session = useSessionData();
    return (
        <div>
            {JSON.stringify(session)}
            {/* <form action={async () => {
                "use server";

                await signOut();
            }}>
                <button type="submit">
                    Sign out
                </button>
            </form> */}
        </div>
    )
}

export default SettingsPage;