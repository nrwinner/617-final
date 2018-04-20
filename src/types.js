// @flow
export type ByteType = {
    id: string;
    name: string;
    description: string;
    creator: UserType;
    materials: { youtubeVideo: string };
    sections: Map<string, SectionType>;    
}

export type UserType = {
    id: string;
    name: string;
}

export type VideoType = {
    url: string;
    start: string;
    stop?: string;
}

export type SectionType = {
    id: string;
    name: string;
    description: string;
    videoIn: string;
    videoOut: string;
    questions: Map<string, QuestionType>;
}

export type SectionItemType = {
    id: string,
    name: string;
    complete?: boolean;
}

export type QuestionType = {
    id: string;
    text: string;
    answerId: number;
    options: Map<string, QuestionOptionType>;
}

export type QuestionOptionType = {
    id: number;
    text: string;
}