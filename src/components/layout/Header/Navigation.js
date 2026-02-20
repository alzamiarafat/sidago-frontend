import Link from "next/link";
// import { mainMenu } from "../../../data/";
import { MegaMenuServices, MegaMenuStrategy, SubMenu } from "./MegaMenu";
import SearchBox from "./SearchBox";

export default function Navigation() {
  const renderSubmenu = (item) => {
    if (item.isMega && item.id === "services") {
      return <MegaMenuServices columns={item.megaColumns} />;
    }
    if (item.isMega && item.id === "strategy") {
      return <MegaMenuStrategy columns={item.megaColumns} />;
    }
    if (item.children) {
      return <SubMenu items={item.children} />;
    }
    return null;
  };

  const getMenuItemClasses = (item) => {
    let classes = "menu-item";
    if (item.isCurrent) {
      classes +=
        " menu-item-home current-menu-item page_item current_page_item";
    }
    if (item.children || item.megaColumns) {
      classes += " menu-item-has-children";
    }
    if (item.isMega) {
      classes += " mega-2 megamenu";
    }
    return classes;
  };

  return (
    <div className="top-menu right">
      <SearchBox />
      <div id="mnu-eft" className="effect-1">
        <nav className="top-nav">
          <ul id="menu-main-menu">
            {/* {mainMenu.map((item) => (
              <li key={item.id} className={getMenuItemClasses(item)}>
                <p>
                  <Link href={item.href}>
                    <span>{item.label}</span>
                  </Link>
                </p>
                {renderSubmenu(item)}
              </li>
            ))} */}
          </ul>
        </nav>
      </div>
    </div>
  );
}
