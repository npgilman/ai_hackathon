import SideBar from './SideBar';
import PageToRender from './PageToRender';
import ChatWindow from './ChatWindow';

// page content. container for content below navbar

function PageContent() {
    return (
        <div class='d-flex inline-flex bd-highlight flex-fill'>
            <SideBar />
            <PageToRender />
            <ChatWindow />
        </div>
    );
}

export default PageContent;