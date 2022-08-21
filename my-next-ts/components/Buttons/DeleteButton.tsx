/**
 * Defintion of Download button component
 */

interface DeleteButtonProps{
    filename: string
}

const onClickDeleteButton = (filename: string) => {
    console.log("delete " + filename)
}

export const DeleteButton = (props: DeleteButtonProps) =>{
    const {filename=""} = props
    return (
        <button
        className="px-4 py-2 rounded-md bg-red-700 text-sm text-white hover:bg-red-900"
        onClick={() => onClickDeleteButton(filename)}>
            Delete
        </button>
    )
}