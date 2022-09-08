import {Editor} from '@tiptap/react'

interface IMenubarProp {
  editor: Editor
}

export default function Menubar({editor}: IMenubarProp) {
  const getFocus = () => editor.chain().focus()
  const isActive = (type: string, options?: any) => {
    return editor.isActive(type, options ?? {}) ? 'is-active' : ''
  }

  const menus = [
    [
      {icon: 'bold', onClick: () => getFocus().toggleBold().run(), isActive: isActive('bold')},
      {icon: 'italic', onClick: () => getFocus().toggleItalic().run(), isActive: isActive('italic')},
      {icon: 'strikethrough', onClick: () => getFocus().toggleStrike().run(), isActive: isActive('strike')},
      {icon: 'code-line', onClick: () => getFocus().toggleCode().run(), isActive: isActive('code')},
    ],
    [
      {icon: 'h-1', onClick: () => getFocus().toggleHeading({level: 1}).run(), isActive: isActive('heading', {level: 1})},
      {icon: 'h-2', onClick: () => getFocus().toggleHeading({level: 2}).run(), isActive: isActive('heading', {level: 2})},
      {icon: 'list-unordered', onClick: () => getFocus().toggleBulletList().run(), isActive: isActive('bulletList')},
      {icon: 'list-ordered', onClick: () => getFocus().toggleOrderedList().run(), isActive: isActive('orderedList')},
      {icon: 'code-box-line', onClick: () => getFocus().toggleCodeBlock().run(), isActive: isActive('codeBlock')},
    ],
    [
      {icon: 'double-quotes-l', onClick: () => getFocus().toggleBlockquote().run(), isActive: isActive('blockquote')},
      {icon: 'separator', onClick: () => getFocus().setHorizontalRule().run() }

    ]
  ]
    
  return <div className="menu">
    {menus.map(group => {
      return <div className="group-item">
        {group.map(item => {
          return  <button className="menu-item" onClick={item.onClick}>
        <i className={`ri-${item.icon} ${item.isActive}`}></i>
      </button>

        })}
      </div>
          })}
  </div>
}
