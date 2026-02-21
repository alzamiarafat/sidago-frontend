export default function SingleMenu({ menu }) {
  return (
    <li
      id="menu-item-2927"
      className={`${menu.isCurrent ? "menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-11 current_page_item" : "menu-item menu-item-type-post_type menu-item-object-page"}`}
    >
      <p>
        <a href={menu.href}>
          <span>{menu.label}</span>
        </a>
      </p>
    </li>
  );
}
