import React from 'react'
import Card from './Card'
import sadhna from '../Assects/sadhna.jpg'
import vandana from '../Assects/vandana.jpg'
import durgesh from '../Assects/durgesh.jpg'
import poonam from '../Assects/poonam.jpg'
import sumandi from '../Assects/sumndi.jpg'
import pradeep from '../Assects/pradeep.jpg'

export default function Developer() {
  return (
    <>
    <h1 className='text-center mb-4 bg-secondary text-light p-2' style={{fontFamily:'cursive'}}>Meet Our Team</h1>
    <div className='cardComp mb-3'>
    <Card title="poonam Pal" email="palpoonam5614@gmail.com" img={poonam} desc='web Developer'/>
    <Card title="Durgesh Kumar" email="durgesh897@gmail.com" img={durgesh} desc='web Developer'/>
    <Card title="Suman Pal" email="suman5612@gmail.con" img={sumandi} desc='web Developer'/>
    <Card title="Sadhna Dubey" email="sadhna546@gmail.com" img={sadhna} desc='web Developer'/>
    <Card title="Pradeep" email="pradeep675@gmail.com" img={pradeep} desc='web Developer'/>
    <Card title="Vandana Maurya" email="vandana432@gmail.com" img={vandana} desc='web Developer'/>
    </div>
    </>
  )
}
