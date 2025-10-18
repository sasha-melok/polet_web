import './main.css'
import Image from 'next/image'
import Link from 'next/link'

export default function Home(){

  return (
    <div className='p_main'>
    <div className="txt_block">
      <h1>ПО “ПОЛЕТ”</h1>
      <p>Филиал Государственного Космического <br /> Научно-Произвоственного Центра имени М.В.Хруничева</p>
    </div>
    <div className="img_block">
      <Image src={'/sputnic2.png'} alt='Изображение спутника' fill />
    </div>

    <div className="img_block">
      <Image src={'/sputnic1.png'} alt='Изображение спутника' fill />
    </div>
    <div className="txt_block">
      <p>ПО «Полёт» - это настоящая легенда Омской промышленности. За свою долгую, почти вековую историю, «Полёт» не раз и не два помогал России осваивать воздушные и космические просторы нашей удивительной планеты.</p>
      <p>Самолёты, ракеты, спутники - на «Полёте» были освоены важнейшие технологии.</p>
      <Link href={'/about'} className='button'>о предприятии</Link>
    </div>
    

    <div className="txt_block">
      <p>Сегодня «Полёт» - часть крупного предприятия, ГКНПЦ им. Хруничева. Становление «Полёта» филиалом такого центра вывело объединение на новые, недосягаемые ранее технологические высоты и сделало без того выдающееся предприятие невероятно значимым для всего мира.</p>
    </div>
    <div className="img_block">
      <Image src={'/planet.png'} alt='Изображение планеты' fill />
    </div>
    </div>
  )
}