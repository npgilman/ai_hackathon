import NavBar from './NavBar';
import PageContent from './PageContent';

// main page to be rendered.

function MainPage() {
    return (
        <div class='d-flex flex-column bd-highlight flex-fill vh-100'>
            <NavBar />
            <PageContent />
        </div>
    );
}

export default MainPage;