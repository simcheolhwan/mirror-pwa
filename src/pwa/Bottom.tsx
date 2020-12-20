import { FC } from "react"
import { LinkProps } from "react-router-dom"
import LinkButton from "../components/LinkButton"
import FixedBottom from "./FixedBottom"

const Bottom: FC<{ link?: LinkProps }> = ({ link, children }) => (
  <FixedBottom>
    {link && <LinkButton {...link} color="secondary" outline block />}
    {children}
  </FixedBottom>
)

export default Bottom
