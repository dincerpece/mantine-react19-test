'use client'
import { Menu } from '@mantine/core'
import React from 'react'

export default function Toggle({ trager, content }: { trager: React.ReactNode; content: React.ReactNode }) {
  return (
    <Menu
      shadow="md"
      width={200}
      transitionProps={{ transition: 'pop-top-right' }}
      // position="top-end"
      withinPortal
    >
      <Menu.Target>{trager}</Menu.Target>
      <Menu.Dropdown className={'dark:bg-black3 bg-white1 shadow-dpBoxShadow3 border-none z-[10000]'}>{content}</Menu.Dropdown>
    </Menu>
  )
}
