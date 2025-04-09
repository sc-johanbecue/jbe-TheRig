import Image from "next/image"
import Link from "next/link"

export default function MenuComponent() {
  const menuItems = [
    { name: "Home", url: "/" },
    { name: "Who we are", url: "/who-we-are" },
    { name: "What we love", url: "/what-we-love" },
    { name: "Your space", url: "/your-space" },
    { name: "Contact us", url: "/contact" },
  ]

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "15px 30px",
        borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
      }}
    >
      <nav>
        <ul
          style={{
            display: "flex",
            listStyle: "none",
            margin: 0,
            padding: 0,
            gap: "25px",
          }}
        >
          {menuItems.map((item, index) => (
            <li key={index}>
              <Link
                href={item.url}
                style={{
                  color: "white",
                  textDecoration: "none",
                  fontSize: "14px",
                  fontWeight: index === 0 ? "bold" : "normal",
                  opacity: index === 0 ? 1 : 0.8,
                  borderBottom: index === 0 ? "2px solid white" : "none",
                  paddingBottom: "5px",
                }}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div>
        <Image src="/sodexo-logo-white.svg" alt="Sodexo Logo" width={100} height={30} priority />
      </div>
    </div>
  )
}
