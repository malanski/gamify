// import './Button.scss';

export function Button( { text, ...props }) {
    return (
        <button { ...props }>
            { text }
        </button>
    )
}