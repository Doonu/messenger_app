export class CreatePostDto {
    readonly content: string[]
    readonly isDisabledComments: boolean
    readonly view: string;
}