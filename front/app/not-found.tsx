import Link from "next/link"

export default function NotFound(){

  return (
    <div className="p_404">
      <div className="num">
        <span>404</span>
      </div>
      <div className="txt">
        <p>не нашли такую страницу на просторах космоса...</p>
        <Link href={'/'}>на главную</Link>
      </div>
    </div>
  )
}