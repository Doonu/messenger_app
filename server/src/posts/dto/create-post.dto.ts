export class CreatePostDto {
    readonly userId: number
    readonly content: string[]
    readonly isDisabledComments: boolean
}