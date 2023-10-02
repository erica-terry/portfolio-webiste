type Tag = {
    text: string,
    link: string | false
}

type ResumeItem = {
    position: string,
    employer: string,
    list: string[],
    startDate: Date,
    endDate: Date,
    city: string,
    state: string,
    tags: Tag[],
    image: string | false
}