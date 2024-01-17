import React, { useState, useEffect } from 'react'
import IconProps from '../../domain/props/IconProps'

const fetchSvg = async (name: string): Promise<string | null> => {
  try {
    const response = await fetch(`${name}.svg`)
    if (response.ok) {
      return await response.text()
    }
    throw new Error(`SVG not found for ${name}`)
  } catch (error: any) {
    console.error(`Error fetching SVG for ${name}: ${error.message}`)
    return null
  }
}

const createSvgElement = (svgContent: string | null): string | null => {
  if (!svgContent) {
    return null
  }

  const div = document.createElement('div')
  div.innerHTML = svgContent
  const svgElement = div.querySelector('svg')
  console.log(svgElement)
  return svgElement ? svgElement.outerHTML : null
}

const Icon: React.FC<IconProps> = ({
  name = '',
  iconSize = '14px',
  iconColor = '#A1A5B7',
  showName = false,
  nameSize = '12px',
  marginRight = 0,
}) => {
  const [svgElement, setSvgElement] = useState<React.ReactNode | null>(null)

  useEffect(() => {
    const loadSvg = async () => {
      const svgContent = await fetchSvg(name)
      const element = createSvgElement(svgContent)
      setSvgElement(() => element)
    }

    loadSvg()
  }, [name])
  console.log(svgElement)
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        marginRight,
      }}
    >
      {svgElement && (
        <div
          dangerouslySetInnerHTML={{ __html: svgElement || '' }}
          style={{ width: iconSize, height: iconSize, fill: iconColor }}
        />
      )}
      {showName && (
        <span
          style={{
            margin: '10px 0 0',
            fontSize: nameSize,
            textAlign: 'center',
          }}
        >
          {name}
        </span>
      )}
    </div>
  )
}

export default Icon
