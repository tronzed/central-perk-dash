export default function Loader({ show }) {


    if (!show) {
        return null;
    }

    return (
        <>
            <div className="loader_cover">
                <div class="spinner-border" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
            </div>
        </>
    );

}