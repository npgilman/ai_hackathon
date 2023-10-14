import SideBar from './SideBar';
import PageToRender from './PageToRender';
import ChatWindow from './ChatWindow';

// page content. container for content below navbar

function PageContent() {
    return (
        <div className='d-flex inline-flex bd-highlight flex-fill vh-100'>
            <SideBar />
            <PageToRender />
            <ChatWindow />
        </div>
    );
}

export default PageContent;