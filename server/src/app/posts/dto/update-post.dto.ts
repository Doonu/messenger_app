export class UpdatePostCommentsDto {
    readonly postId: number
    readonly isDisabledComments: boolean
}

export class UpdatePostLikeDto{
    readonly postId: number
}