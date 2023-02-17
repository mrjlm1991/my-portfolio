import React, { useState, useEffect } from "react"
import Skill from "./Skill"
import { devSkills } from "../../../constants/skills"
import { Box } from "@mui/material"

const Skills = () => {
  const [js, setJs] = useState(0)
  const [html, setHtml] = useState(0)
  const [css, setCss] = useState(0)
  const [node, setNode] = useState(0)
  const [react, setReact] = useState(0)
  const [git, setGit] = useState(0)
  const [wp, setWp] = useState(0)
  const [ui, setUi] = useState(0)
  const [php, setPhp] = useState(0)

  const {
    htmlSkill,
    cssSkill,
    jsSkill,
    reactSkill,
    nodeSkill,
    gitSkill,
    wpSkill,
    uiSkill,
    phpSkill,
  } = devSkills

  useEffect(() => {
    const timer = setInterval(() => {
      setJs(old => {
        const diff = Math.random() * 10
        return Math.min(old + diff, 82)
      })
      setHtml(old => {
        const diff = Math.random() * 10
        return Math.min(old + diff, 95)
      })
      setCss(old => {
        const diff = Math.random() * 10
        return Math.min(old + diff, 75)
      })
      setNode(old => {
        const diff = Math.random() * 10
        return Math.min(old + diff, 50)
      })
      setReact(old => {
        const diff = Math.random() * 10
        return Math.min(old + diff, 80)
      })
      setGit(old => {
        const diff = Math.random() * 10
        return Math.min(old + diff, 60)
      })
      setWp(old => {
        const diff = Math.random() * 10
        return Math.min(old + diff, 70)
      })
      setUi(old => {
        const diff = Math.random() * 10
        return Math.min(old + diff, 50)
      })
      setPhp(old => {
        const diff = Math.random() * 10
        return Math.min(old + diff, 50)
      })
    }, 100)
    return () => {
      clearInterval(timer)
    }
  }, [])

  return (
    <>
      <Box sx={{ mt: 5 }}>
        <Skill
          name={htmlSkill.name}
          icon={htmlSkill.icon}
          color={htmlSkill.color}
          value={html}
        />
        <Skill
          name={cssSkill.name}
          icon={cssSkill.icon}
          color={cssSkill.color}
          value={css}
        />
        <Skill
          name={jsSkill.name}
          icon={jsSkill.icon}
          color={jsSkill.color}
          value={js}
        />
        <Skill
          name={reactSkill.name}
          icon={reactSkill.icon}
          color={reactSkill.color}
          value={react}
        />
        <Skill
          name={nodeSkill.name}
          icon={nodeSkill.icon}
          color={nodeSkill.color}
          value={node}
        />
        <Skill
          name={gitSkill.name}
          icon={gitSkill.icon}
          color={gitSkill.color}
          value={git}
        />
        <Skill
          name={wpSkill.name}
          icon={wpSkill.icon}
          color={wpSkill.color}
          value={wp}
        />
        <Skill
          name={uiSkill.name}
          icon={uiSkill.icon}
          color={uiSkill.color}
          value={ui}
        />
        <Skill
          name={phpSkill.name}
          icon={phpSkill.icon}
          color={phpSkill.color}
          value={php}
        />
      </Box>
    </>
  )
}

export default Skills
