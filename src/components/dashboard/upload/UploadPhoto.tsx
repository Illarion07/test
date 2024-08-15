import React from "react";
import add from "../../../../public/dashboard/svg/add.svg";
import Image from "next/image";
import { Upload } from "@/hooks/Upload";


interface Props {
    sectionId: string
    content: string;
    page: string;
}

export const UploadPhoto:React.FC<Props> = ({content, sectionId, page}) => {
    const filePicker = React.useRef<HTMLInputElement>(null);
    const { upload } = Upload({ filePicker, content, sectionId, page, opiration: "add" });

    return (
        <article className="w-[240px] h-[240px]">
        <input
            className="hidden"
            onChange={upload.handleChange}
            ref={filePicker}
            type="file"
            name="file"
            id="file"
            accept="image/*,.png,.jpg,.web"
        />
        <div className="flex items-center justify-center w-full h-full">
            <Image
            className="w-[100px] h-auto object-cover cursor-pointer"
            src={add}
            alt="pick"
            onClick={upload.handlePick}
            />
        </div>
        </article>
    );
};
