import Head from "next/head";

export default function Dashboard() {
    return (
        <>
            <Head>
                <title>Dashboard</title>
                <meta name="description" content="Stoic Education Platform" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>   

            <div className="flex">
                <div>
                    <h1>pROFILE</h1>
                </div>
            </div>
        </>
    )
}