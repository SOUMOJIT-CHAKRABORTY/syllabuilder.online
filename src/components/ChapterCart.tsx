"use client";
import { cn } from "@/lib/utils";
import { Chapter } from "@prisma/client";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { get } from "http";
import React from "react";

type Props = {
  chapter: Chapter;
  chapterIndex: number;
};

export type chapterCardHandler = {
  triggerLoad(): void;
};

const ChapterCard = React.forwardRef<chapterCardHandler, Props>(
  ({ chapter, chapterIndex }, ref) => {
    const [success, setSuccess] = React.useState<boolean | null>(null);
    const { mutate: getChaperInfo, isLoading } = useMutation({
      mutationFn: async () => {
        const response = await axios.post("/api/chapter/getInfo", {
          chapterId: chapter.id,
        });
        return response.data;
      },
    });
    React.useImperativeHandle(ref, () => ({
      triggerLoad() {
        console.log("triggered load");
      },
    }));
    React.useImperativeHandle(ref, () => ({
      async triggerLoad() {
        getChaperInfo(undefined, {
          onSuccess: () => {
            console.log("Success");
          },
        });
      },
    }));
    return (
      <div
        key={chapter.id}
        className={cn("px-4 py-2 mt-2 rounded flex justify-between", {
          "bg-secondary": success === null,
          "bg-red-500": success === false,
          "bg-green-500": success === true,
        })}
      >
        <h5>
          Chapter {chapterIndex + 1} : {chapter.name}
        </h5>
      </div>
    );
  }
);

ChapterCard.displayName = "ChapterCard";

export default ChapterCard;
