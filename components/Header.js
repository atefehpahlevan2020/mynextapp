import headerStyles from '../styles/Header.module.css'

export default function Header() {
  return (
    <div>
        <style jsx>
            {`
                .news{
                    color : #2ecc71;
                }
            `}
        </style>
        <h1 className={`${headerStyles.title}`}>
            <span>Hello</span>{' '}
            <span className={`news`}>News</span>
        </h1>
        <p className={headerStyles.description}>
            Keep us with the latest news and eventsfrom the world of web technology.
        </p>
    </div>
  )
}
