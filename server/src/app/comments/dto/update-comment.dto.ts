export class ToggleLikeCommentDto {
    readonly commentId: number
}

export class UpdateCommentDto{
    readonly content: string
    readonly commentId: number
}
