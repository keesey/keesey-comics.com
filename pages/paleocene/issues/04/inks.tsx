import type { NextPage } from "next"
import dynamic from "next/dynamic"
import { Suspense, useState } from "react"
import ArtBoard from "~/components/ArtBoard"
import CTA from "~/components/CTA"
import ComicText from "~/components/ComicText"
import Head from "~/components/metadata/Head"
import { Board } from "~/models/Board"
import ThemeContext from "~/themes/ThemeContext"
const Lightbox = dynamic(() => import("~/components/Lightbox"), { ssr: false })
const Page: NextPage = () => {
    const [selectedBoard, setSelectedBoard] = useState<Board | null>(null)
    return (
        <>
            <Head favIconType="paleocene" socialImagePath="/paleocene/04" />
            <ThemeContext.Provider value="bw">
                <main style={{ padding: "2em", minHeight: "100vh" }}>
                    <header
                        style={{
                            textAlign: "center",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        <h1>
                            <em>Paleocene #4</em> Inks
                        </h1>
                        <p
                            style={{
                                width: "min(40em, calc(100vw - 4em))",
                                textAlign: "justify",
                                minWidth: "8em",
                                fontSize: "larger",
                            }}
                        >
                            A preview of one of the rewards for the{" "}
                            <a href="/kickstarter" style={{ textDecoration: "underline" }}>
                                <em>Paleocene #4</em> Kickstarter campaign
                            </a>
                            : original inked art boards. These are 11<abbr title="inch">&quot;</abbr> &times; 17
                            <abbr title="inch">&quot;</abbr> sheets of Bristol board with the original inks for{" "}
                            <a href=".." style={{ textDecoration: "underline" }}>
                                <em>Paleocene #4</em>
                            </a>
                            , complete with smudges and Wite-Out.
                        </p>
                        <p
                            style={{
                                width: "min(40em, calc(100vw - 4em))",
                                textAlign: "justify",
                                minWidth: "8em",
                                fontSize: "larger",
                            }}
                        >
                            Click on each one to see a larger version.
                        </p>
                    </header>
                    <hr />
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "2em", justifyContent: "center" }}>
                        {BOARDS.map(board => (
                            <button
                                onClick={() => setSelectedBoard(board)}
                                style={{ background: "none", border: "none", cursor: "pointer" }}
                            >
                                <ArtBoard
                                    board={board}
                                    imageSource={`/images/issues/paleocene/04/inks/${board.code}-ink.png`}
                                    key={board.code}
                                />
                            </button>
                        ))}
                    </div>
                    <hr />
                    <footer
                        style={{
                            textAlign: "center",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "center",
                            padding: "1em",
                        }}
                    >
                        <CTA href="/kickstarter">
                            <ComicText>Check out the campaign!</ComicText>
                        </CTA>
                    </footer>
                </main>
                {selectedBoard && (
                    <Suspense>
                        <Lightbox
                            altText={selectedBoard.name}
                            caption={
                                <>
                                    <h3>{selectedBoard.name}</h3>
                                    {selectedBoard.comment && <p>{selectedBoard.comment}</p>}
                                </>
                            }
                            image={{
                                source: `/images/issues/paleocene/04/inks/${selectedBoard.code}-ink.png`,
                                height: 554,
                                width: selectedBoard.count === 2 ? 711 : 360,
                            }}
                            onClose={() => setSelectedBoard(null)}
                        />
                    </Suspense>
                )}
            </ThemeContext.Provider>
        </>
    )
}
export default Page
const BOARDS: readonly Board[] = [
    {
        code: "front_cover",
        name: "Front Cover",
    },
    {
        code: "01",
        name: "Page 1",
    },
    {
        code: "02-03",
        comment:
            "These were originally drawn as a two-page spread, but the order of the panels proved confusing. They were split into two discrete pages, with one panel being dropped. This counts as two boards, and is only available to backers whose rewards include two or more boards.",
        count: 2,
        name: "Pages 2 & 3",
    },
    ...new Array(22 - 3).fill(null).map(
        (_, index) =>
            ({
                code: index + 4 < 10 ? `0${index + 4}` : (index + 4).toString(),
                name: `Page ${index + 4}`,
            } as Board),
    ),
    {
        code: "24",
        comment: "This pairs with the back cover, showing a cutaway underground view.",
        name: "Page 24",
    },
    {
        code: "inside_back_cover",
        name: "Inside Back Cover",
    },
    {
        code: "back_cover",
        comment: "Page 24 shows the cutaway underground view.",
        name: "Back Cover",
    },
]
