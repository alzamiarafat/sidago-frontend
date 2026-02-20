import Link from "next/link";

export function MegaMenuServices({ columns }) {
  return (
    <ul className="sub-menu">
      {columns.map((col) => (
        <li key={col.id} className="menu-item menu-item-has-children col-md-4">
          <p>
            <Link href={col.href}>
              <span>{col.label}</span>
            </Link>
          </p>
          {col.children && col.children.length > 0 && (
            <ul className="sub-menu">
              {col.children.map((child, idx) => (
                <li key={idx} className="menu-item">
                  <p>
                    <Link href={child.href}>
                      {child.isMore && (
                        <i className="fa fa-plus-square-o selectedI"></i>
                      )}
                      <span>{child.label}</span>
                    </Link>
                  </p>
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ul>
  );
}

export function SubMenu({ items }) {
  return (
    <ul className="sub-menu">
      {items.map((item, idx) => (
        <li
          key={idx}
          className={`menu-item ${item.children ? "menu-item-has-children" : ""}`}
        >
          <p>
            <Link href={item.href}>
              <span>{item.label}</span>
            </Link>
          </p>
          {item.children && item.children.length > 0 && (
            <SubMenu items={item.children} />
          )}
        </li>
      ))}
    </ul>
  );
}

export function MegaMenuStrategy({ columns }) {
  return (
    <ul className="sub-menu">
      {columns.map((col) => (
        <li key={col.id} className="menu-item menu-item-has-children col-md-12">
          <p>
            <Link href={col.href}>
              <span>{col.label}</span>
            </Link>
          </p>
          {col.children && col.children.length > 0 && (
            <ul className="sub-menu">
              {col.children.map((child, idx) => (
                <li key={idx} className="menu-item">
                  <p>
                    <Link href={child.href}>
                      <span>{child.label}</span>
                    </Link>
                  </p>
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ul>
  );
}
