import React from "react"
import {
    AccordionContent,
    AccordionItem,
    AccordionTrigger
} from "@/components/ui/accordion"

function AccordionItems({ nameArtis, itemTriger, listTracks, setIsPlay, setTrackID }) {
    return (
        <AccordionItem value={"item-" + itemTriger}>
            <AccordionTrigger>{nameArtis}</AccordionTrigger>
            <AccordionContent>
                {listTracks.map(track => <p key={track.title} className="hover:bg-white-ivory py-1 ps-1 w-full flex flex-start items-center h-fit dark:hover:bg-dark-custom-hover">
                    <img src={track.img_src} alt="album_profile" width={50} />
                    <button className="mx-3 text-left hover:underline text-decoration-1" onClick={() => {
                        setTrackID(track.trackID);
                        setIsPlay(() => true);
                    }}>{track.title}</button>
                </p>)}
            </AccordionContent>
        </AccordionItem>
    )
}

export default AccordionItems;