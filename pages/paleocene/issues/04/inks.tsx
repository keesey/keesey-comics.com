
import type { NextPage } from "next"
import dynamic from "next/dynamic"
import { type FC, Fragment, Suspense, useState } from "react"
import { DragDropContext, Draggable, Droppable, OnDragEndResponder } from "react-beautiful-dnd"
import ArtBoard from "~/components/ArtBoard"
import CTA from "~/components/CTA"
import CTANav from "~/components/CTANav"
import Container from "~/components/Container"
import Head from "~/components/metadata/Head"
import { Board } from "~/models/Board"
import ThemeContext from "~/themes/ThemeContext"
const Lightbox = dynamic(() => import("~/components/Lightbox"), { ssr: false })
const Page: NextPage = () => {
    return (
        <>
            <Head favIconType="paleocene" socialImagePath="/paleocene/04" />
            <ThemeContext.Provider value="bw">
                <main style={{ minHeight: "100vh" }}>
                    <OrderSelector />
                </main>
            </ThemeContext.Provider>
        </>
    )
}
export default Page
const OrderSelector: FC = () => {
    const [boards, setBoards] = useState(BOARDS)
    const [selectedBoard, setSelectedBoard] = useState<Board | null>(null)
    const handleDragEnd: OnDragEndResponder = (result, provided) => {
        console.debug(result, provided)
    }
    return (
        <Container>
            <CTANav>
                <CTA onClick={() => setBoards(BOARDS)}>Reset</CTA>
                <CTA onClick={() => setBoards(shuffle(BOARDS))}>Randomize!</CTA>
            </CTANav>
            <section>
                {boards.map((board, index) => (
                    <Fragment key={board.code}>
                        {index > 0 ? "," : ""}
                        {board.code}
                    </Fragment>
                ))}
            </section>
            <DragDropContext onDragEnd={handleDragEnd}>
                <Droppable droppableId="droppable" direction="horizontal">
                    {(provided, _snapshot) => (
                        <div ref={provided.innerRef} {...provided.droppableProps}>
                            {boards.map((board, index) => (
                                <Draggable key={board.code} draggableId={board.code} index={index}>
                                    {(provided, _snapshot) => (
                                        <div
                                            ref={provided.innerRef}
                                            {...provided.draggableProps}
                                            {...provided.dragHandleProps}
                                        >
                                            <ArtBoard
                                                board={board}
                                                imageSource={`/images/issues/paleocene/04/inks/${board.code}-ink.png`}
                                            />
                                        </div>
                                    )}
                                </Draggable>
                            ))}
                            {provided.placeholder}
                        </div>
                    )}
                </Droppable>
            </DragDropContext>
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
        </Container>
    )
}
const shuffle = function shuffle(array: readonly any[]) {
    const result = [...array]
    let currentIndex = result.length,
        randomIndex
    while (currentIndex > 0) {
        randomIndex = Math.floor(Math.random() * currentIndex)
        currentIndex--
        ;[result[currentIndex], result[randomIndex]] = [result[randomIndex], result[currentIndex]]
    }
    return result
}
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
