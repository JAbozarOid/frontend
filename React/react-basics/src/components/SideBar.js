function SideBar() {

    const asideStyle = {
        background: "azure",
        width: "calc(30% - 10px)",
        marginLeft: "10px",
    }
    return (
        <aside className="sidebar-component" style={asideStyle}>
            <h2>Sidebar content here</h2>
        </aside>
    )
}

export default SideBar;