import Image from "next/image"
import { Mic } from "lucide-react"

export default function ProfileComponent() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "40px 20px 60px 20px",
        textAlign: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          marginBottom: "30px",
          gap: "15px",
        }}
      >
        <div
          style={{
            borderRadius: "50%",
            overflow: "hidden",
            border: "3px solid white",
          }}
        >
          <Image
            src="/placeholder.svg?height=100&width=100"
            alt="Profile"
            width={100}
            height={100}
            style={{ borderRadius: "50%" }}
          />
        </div>
        <div style={{ textAlign: "left" }}>
          <p
            style={{
              margin: "0 0 5px 0",
              fontSize: "18px",
              fontWeight: "normal",
            }}
          >
            Hello
          </p>
          <h2
            style={{
              margin: 0,
              fontSize: "28px",
              fontWeight: "bold",
            }}
          >
            Rayan
            <br />
            Carpenter !
          </h2>
        </div>
      </div>

      <div
        style={{
          position: "relative",
          width: "100%",
          maxWidth: "500px",
        }}
      >
        <input
          type="text"
          placeholder="search..."
          style={{
            width: "100%",
            padding: "12px 20px",
            borderRadius: "25px",
            border: "none",
            fontSize: "16px",
            paddingRight: "50px",
          }}
        />
        <button
          style={{
            position: "absolute",
            right: "5px",
            top: "5px",
            background: "#3a2a6d",
            border: "none",
            borderRadius: "50%",
            width: "35px",
            height: "35px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
          }}
        >
          <Mic size={18} color="white" />
        </button>
      </div>
    </div>
  )
}
