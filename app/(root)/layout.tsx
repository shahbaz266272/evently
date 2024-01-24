import Footer from "@/components/shared/Footer"
import Header from "@/components/shared/Header"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Evently",
  description: "Evently is a platform for event managment",
  icons: {
    icon: "/assets/images/logo.svg",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  )
}
