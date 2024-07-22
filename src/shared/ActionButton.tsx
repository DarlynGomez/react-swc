import React from "react"
import AnchorLink from "react-anchor-link-smooth-scroll"
import { SelectedPage } from "./types";

type Props = {
    children: React.ReactNode;
    setSelectedPage: (value: SelectedPage) => void;
}

const ActionButton = ({ children, setSelectedPage }: Props) => {
  return (
    <AnchorLink
        style={{
            color: "white",           
            width: "120px",
            padding: "10px",
            marginLeft: "10px",
            border: "solid white 5px",
            display: "block",
            borderRadius: "20px",
            textAlign: "center",
            fontSize: "18px",
            lineHeight: "28px",
            transitionDuration: "300ms",
        }}    
        className="hover:scale-110 duration-500"
        onClick={() => setSelectedPage(SelectedPage.Donate)}
        href={`#${SelectedPage.Donate}`}
    >
        {children}
    </AnchorLink>
  )
}

export default ActionButton