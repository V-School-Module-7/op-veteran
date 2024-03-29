import React, { useState, useContext, useEffect} from 'react'
import { CanvasContext } from '../../../../context/CanvasProvider'
import { BoothContext } from '../../../../context/BoothProvider'
// import { VendorContext } from '../../../../context/VendorProvider'
import {
  Stage,
  Layer,
  Group,
  // Image,
  // Rect,
  // Path,
  // Text,
  Circle,
} from 'react-konva'
// import useImage from 'use-image'
import styled from 'styled-components'
import BlankMapPathLayer from './BlankMapPathLayer'
import Row from './Row'
import treeData from './treeData'
// import { MdBluetoothSearching } from 'react-icons/md'

const SuperStage = styled(Stage)`
  width: ${(props) => props.containerWidth};
  height: ${(props) => props.containerWidth};
  margin: 0 auto;
  position: relative;
  margin-left: 43%;
  transform: translateX(-50%);
  @media (max-width: 768px) {
    margin-left: 0;
    transform: translateX(0);
  }
`
const SuperLayer = styled(Layer)``

// const StageWrapper = styled.div`
//   width: 100%;
//   height: 100%;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   overflow: hidden;
// `

// const SectionSelector = (props) => {   const {     setCurrentSection,     x,
//    y,     width,     height,     sectionId   } = props   const [opacity,
// setOpacity] = useState(0)     const handleClick = (sectionId) => {
// setCurrentSection(sectionId)   }   return (<Rect     x={x}     y={y}
// width={width}     height={height}     fill={`#${Math.floor(Math.random() *
// 10000000).toString(16)}`}     opacity={opacity}     onTouchStart={() =>
// setOpacity(0.4)}     onMouseDown={() => setOpacity(0.4)}     onTouchEnd={()
// => {     setOpacity(0)     handleClick(sectionId)   }}     onMouseUp={() => {
//     setOpacity(0)     handleClick(sectionId)   }}/>) }

const Map = (props) => {
  const { scale, setCurrentBooth, enterMapMode } = useContext(CanvasContext)
  const {
    booths,
    // diagramData,
    rowData,
    // updateBooth,
    // rowsOfBooths,
    // pullMapDataFromFirestore,
    getBooths,
  } = useContext(BoothContext)
  const treeCircles = treeData.map((tree, index) => (
    <Circle
      key={index}
      x={tree.x}
      y={tree.y}
      radius={tree.size / 2}
      fill='rgba(35, 150, 10, .7)'
    />
  ))
  const [mapMode, setMapMode] = useState(false)
  // const [mapImage] = useImage("https://liveshameless.com/map.jpg");
  const [rowGroups, setRowGroups] = useState([])
  // const colors = {
  //   green: '#799C8A',
  //   red: '#EA7C7C',
  //   yellow: '#FBBC05',
  //   blue: '#4E92F9',
  // }

 

  // const { setShowInfo, containerWidth, setModalOptions, showTrees } = props
  const { containerWidth, showTrees } = props
  const buildRows = () => {
    const arrayOfRows = [
      'A',
      'B',
      'C',
      'D',
      'E',
      'F',
      'G',
      'H',
      'I',
      'J',
      'K',
      'L',
      'M',
      'N',
      'O',
      'P',
      'Q',
      'R',
    ].map((rowId) => (
      <Row
        key={rowId}
        setCurrentBooth={setCurrentBooth}
        rowId={rowId}
        rowDatum={rowData[rowId]}
        sectionId={0}
        mapMode={mapMode}
        setMapMode={setMapMode}
        booths={booths} 
        getBooths={getBooths}
      />
    ))
    setRowGroups(arrayOfRows)
  }

  useEffect(() => {
    buildRows()
    enterMapMode()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [...booths]) //COMMENT:  React Hook useEffect has missing dependencies: 'buildRows' and 'enterMapMode'. Either include them or remove the dependency array  react-hooks/exhaustive-deps

  //testing useEffect dependency with ...booths above -- QUESTION: is it OK to spread it like this or NO?
  
//adding booths as dependency line 126 above seems to help with map updates when booth status changes
//may need to check how this is affecting Firebase/Firestore usage though -- if at all.

  return (
    <SuperStage
      containerWidth={containerWidth}
      width={1024}
      height={1083}
      scale={scale}
    >
      <BlankMapPathLayer />
      {showTrees ? (
        <Layer globalCompositeOperation='lighten'>
          <Group width={1024} height={1083} x={40} y={215}>
            {treeCircles}
          </Group>
        </Layer>
      ) : null}
      <SuperLayer x={0} y={0}>
        {rowGroups}
      </SuperLayer>
      {/* <Layer>
        <Group x={50} y={900} onClick={() => setShowInfo((prev => !prev))}>
          <Rect
            fill="palegoldenrod"
            width={150}
            height={75}
            shadowColor='black'
            shadowBlur={10}
            shadowOffset={{
            x: 10,
            y: 10
          }}
            shadowOpacity={0.5}/>
          <Text
            text="info"
            width={150}
            height={75}
            align="center"
            verticalAlign="middle"

            fontSize={48}/>
        </Group>
      </Layer> */}
    </SuperStage>
  )
}

export default Map

//<Image image={mapImage} width={1024} height={1083}  />
