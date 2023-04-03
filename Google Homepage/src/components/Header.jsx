import AppsLauncherIcon from "./AppsLauncherIcon";
import MenuItem from "./MenuItem";
import Avatar from "./Avatar";

const Header = () => {
    return <div style = {{display: "flex", justifyContent: "flex-end", padding: "8px"}}>

        <div style = {{display: "flex", gap: "4px"}}>
            <MenuItem tittle = {"Gmail"} />
            {/*  props.tittle = "Gmail" */}
            <MenuItem tittle = {"Images"} />
            <AppsLauncherIcon/>
            <Avatar/>
        </div>
            
    </div>
}

export default Header;